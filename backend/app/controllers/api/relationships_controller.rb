module Api
  class RelationshipsController < ApplicationController
    def create
      user = User.find_by(id:params[:relationships][:follow_id])
      follow = current_api_user.follow(user)
      unless follow.nil?
        render status: :created
      else
        render status: :internal_server_error
      end
    end

    def destroy
      follow = current_api_user.unfollow(params[:id])
      unless follow.nil?
        render status: :ok
      else
        render status: :internal_server_error
      end
    end

    def exists
      user = User.find_by(id: params[:follow_id])
      if user
        follow = current_api_user.following?(user)
        if follow
          render status: :ok
        else
          render status: :no_content
        end
      else
        render status: :internal_server_error
      end
    end
  end
end
