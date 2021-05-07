Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', controller: { registrations: 'auth/registrations' }
  namespace :api do
    resources :products
  end
end
