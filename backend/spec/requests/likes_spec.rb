require 'rails_helper'

RSpec.describe 'Likes', type: :request do
  let(:user) { create(:user) }
  let(:user1) { create(:user, email: 'test1@example.com', name: 'test1') }
  let(:product) { create(:product) }
  let(:product1) { create(:product, name: 'コーヒー器具の名前2') }
  let(:like) { create(:like, user: user, product: product) }

  describe 'GET /index' do
    it 'レスポンス成功' do
      product
      product1
      get api_likes_path
      expect(response).to have_http_status(:ok)
    end

    it 'ボディにproductsがあるか' do
      product1
      like
      get api_likes_path
      expect(json['likes']).to eq(expect_json(Product.ranking(9)))
    end

    it 'レスポンス失敗' do
      get api_likes_path
      expect(response).to have_http_status(:internal_server_error)
    end
  end

  describe 'POST /create' do
    context 'ログインしているとき' do
      sign_in(:user)
      it 'レスポンス成功' do
        post api_likes_path, params: { like: { product_id: product.id } }
        expect(response).to have_http_status(:created)
      end

      it 'レスポンス失敗' do
        post api_likes_path, params: { like: { product_id: (product1.id + 2) } }
        expect(response).to have_http_status(:internal_server_error)
      end
    end

    it 'ログインしていない' do
      post api_likes_path, params: { like: { product_id: product.id } }
      expect(response).to have_http_status(:unauthorized)
    end
  end

  describe 'DELETE /destroy' do
    context 'ログインしているとき' do
      sign_in(:user)
      it 'レスポンス成功' do
        delete api_like_path(like.product_id)
        expect(response).to have_http_status(:created)
      end

      it 'レスポンス失敗' do
        delete api_like_path(like.product_id + 2)
        expect(response).to have_http_status(:internal_server_error)
      end
    end

    it 'ログインしいないとき' do
      delete api_like_path(like.product_id)
      expect(response).to have_http_status(:unauthorized)
    end
  end

  describe 'Get /exists' do
    context 'ログインしている時' do
      sign_in(:user)
      it 'レスポンス成功(ログイン時)' do
        get exists_api_likes_path, params: { product_id: like.product_id }
        expect(response).to have_http_status(:ok)
      end

      it 'レスポンス失敗' do
        get exists_api_likes_path, params: { product_id: (like.product_id + 2) }
        expect(response).to have_http_status(:internal_server_error)
      end
    end

    context 'ログインしていない時' do
      it 'レスポンス成功' do
        get exists_api_likes_path, params: { product_id: product.id }
        expect(response).to have_http_status(:ok)
      end

      it 'レスポンス失敗' do
        get exists_api_likes_path, params: { product_id: (like.product_id + 2) }
        expect(response).to have_http_status(:internal_server_error)
      end
    end
  end
end
