class ApplicationController < ActionController::Base
  def current_admin
    @_current_admin ||= session[:current_admin_id] && Administrator.find_by(id: session[:current_admin_id])
  end
end
