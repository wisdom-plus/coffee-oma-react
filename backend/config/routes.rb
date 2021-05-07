Rails.application.routes.draw do

  namespace :api do
    resources :products
    mount_devise_token_auth_for 'User', at: 'auth', controller: { registrations: 'api/auth/registrations' }
  end

  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?
end
