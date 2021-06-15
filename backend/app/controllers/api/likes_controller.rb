module Api
  class LikesController < ApplicationController
    before_action :authenticate_api_user!, only: %i[create destroy]

    def index
      likes = Product.ranking(9)
      if likes.empty?
        render status: :internal_server_error
      else
        render json: { likes: likes }, status: :ok
      end
    end

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
      if like&.destroy
        render status: :created
      else
        render status: :internal_server_error
      end
    end

    def exists
      product = Product.find_by(id: params[:product_id])
      if product
        liked = api_user_signed_in? && product.likes.exists?(user_id: current_api_user.id)
          render json: {liked: liked ,count: product.likes.count }, status: :ok
      else
        render status: :internal_server_error
      end
    end

    private

      def like_params
        params.require(:like).permit(:product_id)
      end
  end
end
