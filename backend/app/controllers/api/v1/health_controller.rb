module Api
  module V1
    class HealthController < ApplicationController
      def index
        render status: :ok
      end
    end
  end
end

