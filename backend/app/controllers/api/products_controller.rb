module Api
  class ProductsController < ApplicationController
    def index
      @products = Product.all
      render json: {
        products: @products
      }, status: :ok
    end
  end
end
