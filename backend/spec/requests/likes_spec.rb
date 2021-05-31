require 'rails_helper'

RSpec.describe 'Likes', type: :request do
  let(:user) { create(:user)}
  let(:user1) {create(:user,email: 'test1@example.com',name: 'test1')}
  let(:product) {create(:product)}
  let(:product1) {create(:product,name: 'コーヒー器具の名前2')}
  let(:like) {create(:like,user: user, product: product)}

  describe 'GET /index' do
    it 'レスポンス成功' do
      product
      product1
      get api_likes_path
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'POST /create' do
    sign_in(:user)
    it 'レスポンス成功' do
      product
      post api_likes_path,params: {like: {product_id: product.id}}
      expect(response).to have_http_status(:created)
    end
  end

  describe 'DELETE /destroy' do
    sign_in(:user)
    it 'レスポンス成功' do
      delete api_like_path(like.product_id)
      expect(response).to have_http_status(:created)
    end
  end

  describe 'Get /exists' do
    context 'when signed' do
      sign_in(:user)
      it 'レスポンス成功(ログイン時)' do
        get exists_api_likes_path, params: {product_id: like.product_id}
        expect(response).to have_http_status(:ok)
      end
    end
    context 'when not sign in' do
      it 'レスポンス成功' do
        get exists_api_likes_path, params: {product_id: product.id}
        expect(response).to have_http_status(:no_content)
      end
    end
  end
end
