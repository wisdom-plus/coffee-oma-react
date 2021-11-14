module Api
  module V1
    class ReviewController < ApplicationController
      before_action :authenticate_api_v1_user!, only: %i[create destroy]

      def create
        review = current_api_v1_user.reviews.new(reivew_params)
        if review.save
          render status: :created
        else
          render status: :not_found
        end
      end

      def destory
        review = Review.find_by(id: params[:id])
        if review.destroy
          render status: :ok
        else
          render status: :not_found
        end
      end

      def exists
        reviews = Review.get_reviews(params[:id])
        if review
          render json: {reviews: reviews},status: :ok
        else
          render status: :not_found
        end
      end

      private
        def review_params
          params.require(:review).permit(:title,:content,:rate)
        end
    end
  end
end
