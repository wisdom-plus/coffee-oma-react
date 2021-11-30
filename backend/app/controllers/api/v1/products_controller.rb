module Api
  module V1
    class ProductsController < ApplicationController
      def index
        products = Product.all.limit(9).offset(9 * params[:page].to_i)
        if products.empty?
          render status: :not_found
        else
          render json: { product: {
            pages: params[:page].to_i,
            nextpage: next_page?(params[:page].to_i),
            data: products
          } }, status: :ok
        end
      end

      def show
        product = Product.find_by(id: params[:id])
        if product
          render json: {
            product: product.api_json
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

        def next_page?(page)
          !((page + 1) * 9 > Product.count || (page + 1) > 10)
        end
    end
  end
end
