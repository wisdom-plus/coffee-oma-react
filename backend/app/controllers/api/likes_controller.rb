module Api
  class LikesController < ApplicationController
    def create
      like = current_api_user.likes.new(like_params)
      if like.save
        render json: { status: 'OK' }, status: :created
      else
        render json: { status: 'Failure' }, status: :internal_server_error
      end
    end

    def destroy
      like = current_api_user.likes.find_by(id:params[:id])
      if like.destroy
        render json: { status: 'OK' }, status: :created
      else
        render json: { status: 'Failure' }, status: :internal_server_error
      end
    end

    def exists
      like = current_api_user.likes.find_by(product_id: params[:product_id])
      if like
        render json: like.id, status: :ok
      else
        render status: :no_content
      end
    end

    private

    def like_params
      params.require(:like).permit(:product_id)
    end
  end
end
