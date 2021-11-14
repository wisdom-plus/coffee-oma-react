Rails.application.routes.draw do
  devise_for :user

  devise_scope :user do
    get 'api/v1/auth/registrations/:id' => 'api/v1/auth/registrations#show'
  end
  namespace :api do
    namespace :v1 do
      resources :products, only: %i[index create show] do
        resources :reviews, only: %i[create destroy] do
          collection do
            get 'exists'
          end
        end
      end
      resources :likes, only: %i[create destroy index] do
        collection do
          get 'exists'
        end
      end
      resources :relationships, only: %i[create destroy] do
        collection do
          get 'exists'
        end
      end
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations',
        token_validations: 'api/v1/auth/token_validations',
        passwords: 'api/v1/auth/passwords',
        sessions: 'api/v1/auth/sessions'
      }
    end
  end
  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?
end
