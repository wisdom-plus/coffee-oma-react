module Api
  class ProductsController < ApplicationController
    def index
      products = Product.all
      render json: {
        products: products
      }, status: :ok
    end

    def show
      product = Product.find(params[:id])
      render json: {
        product: product
      }, status: :ok
    end
  end
end
