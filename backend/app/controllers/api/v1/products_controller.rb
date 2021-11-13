module Api
  module V1
    class ProductsController < ApplicationController
      def index
        products = Product.all
        if products.empty?
          render status: :not_found
        else
          render json: {
            products: products
          }, status: :ok
        end
      end

      def show
        product = Product.find_by(id: params[:id])
        if product
          render json: {
            product: product
          }, status: :ok
        else
          render status: :not_found
        end
      end

      def create
        @product = Product.new(product_params)
        if @product.save
          render json: { status: 'OK' }, status: :created
        else
          render json: { status: 'Failure' }, status: :not_found
        end
      end

      private

        def product_params
          params.require(:product).permit(:name, :price, :url, :shopname, :caption, :image)
        end
    end
  end
end
