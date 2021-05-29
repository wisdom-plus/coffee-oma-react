module Api
  module Auth
    class SessionsController < DeviseTokenAuth::SessionsController
      private

        def resource_params
          params.require(:session).permit(:email, :password)
        end
    end
  end
end
