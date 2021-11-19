require 'rails_helper'

RSpec.describe 'Reviews', type: :request do
  let(:user) { create(:user) }
  let(:user1) { create(:user, email: 'test1@example.com', name: 'test1') }
  let(:product) { create(:product) }
  let(:review) { create(:review, product: product, user: user) }
  let(:review1) { create(:review, product: product, user: user1) }

  describe 'POST /create' do
    context 'ログインしているとき' do
      sign_in(:user)
      it 'レスポンス成功' do
        post api_v1_product_reviews_path(product.id), params: { review: { title: review.title, content: review.content, rate: review.rate } }
        expect(response).to have_http_status(:created)
      end

      it 'データが作成される' do
        expect do
          post api_v1_product_reviews_path(product.id), params: { review: { title: 'コーヒー器具のレビューのタイトル', content: 'レビューの内容', rate: 5 } }
        end.to change(Review, :count).by 1
      end

      it 'レスポンス失敗(タイトルなし)' do
        post api_v1_product_reviews_path(product.id), params: { review: { title: '', content: review.content, rate: review.rate } }
        expect(response).to have_http_status(:not_found)
      end

      it 'レスポンス失敗(内容なし)' do
        post api_v1_product_reviews_path(product.id), params: { review: { title: review.title, content: '', rate: review.rate } }
        expect(response).to have_http_status(:not_found)
      end

      it 'レスポンス失敗(レートなし)' do
        post api_v1_product_reviews_path(product.id), params: { review: { title: review.title, content: review.content, rate: '' } }
        expect(response).to have_http_status(:not_found)
      end

      it 'レスポンス失敗(0以下)' do
        post api_v1_product_reviews_path(product.id), params: { review: { title: review.title, content: review.content, rate: 0 } }
        expect(response).to have_http_status(:not_found)
      end

      it 'レスポンス失敗(6以上)' do
        post api_v1_product_reviews_path(product.id), params: { review: { title: review.title, content: review.content, rate: 6 } }
        expect(response).to have_http_status(:not_found)
      end

      it 'レスポンス失敗(存在しないプロダクト)' do
        post api_v1_product_reviews_path(product.id + 1), params: { review: { title: review.title, content: review.content, rate: review.rate } }
        expect(response).to have_http_status(:not_found)
      end
    end

    it 'ログインしていない' do
      post api_v1_product_reviews_path(product.id), params: { review: { title: review.title, content: review.content, rate: review.rate } }
      expect(response).to have_http_status(:unauthorized)
    end
  end

  describe 'DELETE /destory' do
    context 'ログインしている ' do
      sign_in(:user)
      it 'レスポンス成功' do
        delete api_v1_product_review_path(product.id, review.id)
        expect(response).to have_http_status(:ok)
      end

      it 'データが削除される' do
        review
        expect do
          delete api_v1_product_review_path(product.id, review.id)
        end.to change(Review, :count).by(-1)
      end

      it 'レスポンス失敗(プロダクトがない)' do
        delete api_v1_product_review_path((product.id + 1), review.id)
        expect(response).to have_http_status(:not_found)
      end

      it 'レスポンス失敗(レビューがない)' do
        delete api_v1_product_review_path(product.id, (review.id + 1))
        expect(response).to have_http_status(:not_found)
      end
    end

    it 'ログインしていない' do
      delete api_v1_product_review_path(product.id, review.id)
      expect(response).to have_http_status(:unauthorized)
    end
  end

  describe 'GET /exists' do
    context 'ログインしている時' do
      sign_in(:user)
      it 'レスポンス成功' do
        review
        review1
        get exists_api_v1_product_reviews_path(product.id)
        expect(response).to have_http_status(:ok)
      end

      it 'レスポンスボディ' do
        review
        review1
        get exists_api_v1_product_reviews_path(product.id)
        expect(json['reviews']).to eq(expect_json(Review.api_json(product.id)))
      end

      it 'レスポンス失敗(レビューがない)' do
        get exists_api_v1_product_reviews_path(product.id)
        expect(response).to have_http_status(:not_found)
      end
    end

    context 'ログインしていない時' do
      it 'レスポンス成功' do
        review
        review1
        get exists_api_v1_product_reviews_path(product.id)
        expect(response).to have_http_status(:ok)
      end

      it 'レスポンス失敗(レビューがない)' do
        get exists_api_v1_product_reviews_path(product.id)
        expect(response).to have_http_status(:not_found)
      end
    end
  end
end
