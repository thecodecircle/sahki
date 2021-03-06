require 'sidekiq/web'
Sidekiq::Web.set :session_secret, Rails.application.secrets[:secret_key_base]

class AdminConstraint
  def matches?(request)
    return false unless request.session[:current_admin_id].present?
    admin = Administrator.find_by(id: request.session[:current_admin_id])
    admin.present?
  end
end

Rails.application.routes.draw do

  resources :games
  namespace :admin do
    get 'login', to: 'sessions#new', as: :login
    post 'login', to: 'sessions#create'
    delete 'logout', to: 'sessions#destroy', as: :logout
    resource :account, only: [:edit, :update]

    root to: 'dashboard#index'
  end

  # write your routes here

  mount Sidekiq::Web => '/sidekiq', constraints: AdminConstraint.new
  #mount ActionCable.server => '/cable'
  root to: 'home#index'

  get 'heart_it', to: "games#heart_it"
  get 'share_it', to: "games#share_it"
  get 'approve_game', to: "games#approve_game"
  get 'filter_tag', to: "games#filter_tag"
end
