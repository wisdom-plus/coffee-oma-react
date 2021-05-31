require 'rails_helper'

RSpec.describe 'Products', type: :request do
  let(:product) { create(:product) }
  let(:product_params) { attributes_for(:product) }

  describe 'GET /products' do
    it 'レスポンス成功' do
      get api_products_path
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'Get /product' do
    it 'レスポンス成功' do
      get api_product_path(product.id)
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'Post /product' do
    it 'レスポンス成功' do
      post api_products_path, params: { product: product_params }
      expect(response).to have_http_status(:created)
    end

    it 'データが保存される' do
      expect do
        post api_products_path, params: { product: product_params }
      end.to change(Product, :count).by 1
    end
  end
end
