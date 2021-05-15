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

    def create
      @product = Product.new(product_params)
      if @product.save
        render json: { status: 'OK' }, status: :created
      else
        render json: { status: 'Failure' }, status: :internal_server_error
      end
    end

    private

      def product_params
        params.require(:product).permit(:name, :price, :url, :shopname, :caption,:image)
      end
  end
end
