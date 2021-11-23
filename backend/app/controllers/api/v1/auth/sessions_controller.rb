module Api
  module V1
    module Auth
      class SessionsController < DeviseTokenAuth::SessionsController

        def guest_login
          user = User.guest
          create_and_assign_token
          sign_in(user)
          render_create_session
        end

        private

          def resource_params
            params.require(:session).permit(:email, :password)
          end
      end
    end
  end
end
