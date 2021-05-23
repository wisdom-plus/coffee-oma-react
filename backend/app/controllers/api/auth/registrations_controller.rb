module Api
  module Auth
    class RegistrationsController < DeviseTokenAuth::RegistrationsController
      before_action :configure_permitted_parameters
      def show
        user = User.find_by(id: params[:id])
        if user
          render json: {status: 'success',data: resource_data(resource_json: user.token_validation_response)}
        else
          render status: 401
        end
      end

      protected

        def configure_permitted_parameters
          devise_parameter_sanitizer.permit(:sign_up, keys: %i[name])
        end

      private

        def sign_up_params
          params.require(:registration).permit(:email, :name, :password, :password_confirmation)
        end

        def account_update_params
          params.require(:session).permit(:password, :email)
        end
    end
  end
end
