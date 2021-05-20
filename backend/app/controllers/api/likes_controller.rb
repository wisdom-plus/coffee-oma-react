module Api
  class LikesController < ApplicationController
    def create
      like = current_api_user.likes.new(like_params)
      if like.save
        render status: :created
      else
        render status: :internal_server_error
      end
    end

    def destroy
      like = current_api_user.likes.find_by(product_id: params[:id])
      if like.destroy
        product = like.product
        render json: { id: product.id }, status: :created
      else
        render status: :internal_server_error
      end
    end

    def exists
      like = current_api_user.likes.find_by(product_id: params[:product_id])
      product = Product.find(params[:product_id])
      if like
        render json: { count: product.likes.count }, status: :ok
      else
        render json: { count: product.likes.count }, status: :no_content
      end
    end

    private

      def like_params
        params.require(:like).permit(:product_id)
      end
  end
end
