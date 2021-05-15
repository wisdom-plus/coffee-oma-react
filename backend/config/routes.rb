Rails.application.routes.draw do
  namespace :api do
    resources :products
    mount_devise_token_auth_for 'User', at: 'auth', controllers: {
      registrations: 'api/auth/registrations',
      token_validations: 'api/auth/token_validations',
      passwords: 'api/auth/passwords'

    }
  end
  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?
end
