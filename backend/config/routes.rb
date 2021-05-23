Rails.application.routes.draw do
  devise_for :user

  devise_scope :user do
    get 'api/auth/registrations/:id' => 'api/auth/registrations#show'
  end
  namespace :api do
    resources :products, only: %i[index create show]
    resources :likes, only: %i[create destroy index] do
      collection do
        get 'exists'
      end
    end
    resources :relationships, only: %i[create destroy]
    mount_devise_token_auth_for 'User', at: 'auth', controllers: {
      registrations: 'api/auth/registrations',
      token_validations: 'api/auth/token_validations',
      passwords: 'api/auth/passwords'
    }


  end
  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?
end
