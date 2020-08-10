source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.1'
gem 'rails', '~> 6.0.3', '>= 6.0.3.2'
gem 'puma', '~> 4.1'
gem 'sass-rails', '>= 6'
gem 'webpacker', '~> 4.0'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.7'
gem 'bootsnap', '>= 1.4.2', require: false

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'meta_request'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  gem 'webdrivers'
end
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem 'sprockets-rails', '~> 3.2.1'
gem 'sprockets', '~> 3.7.2'
gem 'sassc-rails'
gem 'pg', '>= 1.1'
gem 'figaro'
gem 'simple_form', '~> 4.1'
gem 'slim-rails'
gem 'high_voltage', '~> 3.1'
# gem 'browser_warrior', '>= 0.11.0'
gem 'sidekiq', '~> 5'
gem 'bcrypt'
gem 'kaminari', '~> 1.1.1'
gem 'rails-i18n', '~> 6.0.0'
gem 'mina', '~> 1.2.2', require: false
gem 'mina-ng-puma', '>= 1.4.0', require: false
gem 'mina-multistage', require: false
gem 'mina-sidekiq', require: false
gem 'mina-logs', require: false
gem 'acts-as-taggable-on', '~> 6.0'
gem 'hirb'

group :development do
  gem 'rails_apps_testing'
end

group :development, :test do
  gem 'rspec-rails'
  gem 'factory_bot_rails'
end

group :test do
  gem 'database_cleaner'
  gem 'launchy'
end
