module Api
  module V1
    module Auth
      class SessionsController < DeviseTokenAuth::SessionsController

        def guest_login

        end

        private

          def resource_params
            params.require(:session).permit(:email, :password)
          end
      end
    end
  end
end
