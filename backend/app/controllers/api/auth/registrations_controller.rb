module Api
  module Auth
    class RegistrationsController < DeviseTokenAuth::RegistrationsController
      before_action :configure_permitted_parameters
      def show
        user = User.find_by(id: params[:id])
        if user
          render json: { status: 'success', data: resource_data(resource_json: user.token_validation_response) }
        else
          render status: :unauthorized
        end
      end

      def update
        if @resource
          if params[:registration][:password] === ''
            if @resource.send('update', account_update_no_password_params)
              yield @resource if block_given?
              render_update_success
            else
              render_update_error
            end
          else
            if @resource.send(resource_update_method, account_update_params)
              yield @resource if block_given?
              render_update_success
            else
              render_update_error
            end
          end
        else
          render_update_error_user_not_found
        end
      end

      protected

        def configure_permitted_parameters
          devise_parameter_sanitizer.permit(:sign_up, keys: %i[name])
          devise_parameter_sanitizer.permit(:account_update, keys: %i[name icon profile])
        end

      private

        def sign_up_params
          params.require(:registration).permit(:email, :name, :password, :password_confirmation)
        end

        def account_update_params
          params.require(:registration).permit(:password, :email, :profile, :icon, :name, :password_confirmation,:current_password)
        end

        def account_update_no_password_params
          params.require(:registration).permit(:email, :profile, :icon, :name)
        end
    end
  end
end
