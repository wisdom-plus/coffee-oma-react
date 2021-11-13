module Api
  module V1
    class LikesController < ApplicationController
      before_action :authenticate_api_v1_user!, only: %i[create destroy]

      def index
        likes = Product.ranking(9)
        if likes.empty?
          render status: :not_found
        else
          render json: { likes: likes }, status: :ok
        end
      end

      def create
        like = current_api_v1_user.likes.new(like_params)
        if like.save
          render status: :created
        else
          render status: :not_found
        end
      end

      def destroy
        like = current_api_v1_user.likes.find_by(product_id: params[:id])
        if like&.destroy
          render status: :created
        else
          render status: :not_found
        end
      end

      def exists
        product = Product.find_by(id: params[:product_id])
        if product
          liked = api_v1_user_signed_in? && product.likes.exists?(user_id: current_api_v1_user.id)
          render json: { liked: liked, count: product.likes.count }, status: :ok
        else
          render status: :not_found
        end
      end

      private

        def like_params
          params.require(:like).permit(:product_id)
        end
    end
  end
end
