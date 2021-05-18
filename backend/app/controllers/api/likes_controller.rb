module Api
  class LikesController < ApplicationController
    def create
      like = Like.new(params[:product_id])
      if like.save
        render json: { status: 'OK' }, status: :created
      else
        render json: { status: 'Failure' }, status: :internal_server_error
      end
    end

    def destroy
      like = Like.find_by(id:params[:product_id])
      if like.destroy
        render json: { status: 'OK' }, status: :created
      else
        render json: { status: 'Failure' }, status: :internal_server_error
      end
    end
  end
end
