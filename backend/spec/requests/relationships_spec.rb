require 'rails_helper'

RSpec.describe 'Relationships', type: :request do
  let(:user) { create(:user) }
  let(:user1) { create(:user, email: 'test1@example.com', name: 'test1') }
  let(:follow) { create(:relationship, user: user, follow: user1) }

  describe 'GET /create' do
    context 'ログインしている' do
      sign_in(:user)
      it 'レスポンス成功' do
        post api_relationships_path, params: { relationships: { follow_id: user1.id } }
        expect(response).to have_http_status(:created)
      end

      it 'レスポンス失敗' do
        post api_relationships_path, params: { relationships: { follow_id: (user1.id + 2) } }
        expect(response).to have_http_status(:internal_server_error)
      end
    end

    it 'ログインしていない' do
      post api_relationships_path, params: { relationships: { follow_id: user1.id } }
      expect(response).to have_http_status(:unauthorized)
    end
  end

  describe 'GET /destroy' do
    context 'ログインしている' do
      sign_in(:user)
      it 'レスポンス成功' do
        delete api_relationship_path(follow.follow_id)
        expect(response).to have_http_status(:ok)
      end

      it 'レスポンス失敗' do
        delete api_relationship_path(follow.follow_id + 4)
        expect(response).to have_http_status(:internal_server_error)
      end
    end

    it 'ログインしていない' do
      follow
      delete api_relationship_path(user1.id)
      expect(response).to have_http_status(:unauthorized)
    end
  end

  describe 'Get /exists' do
    context 'ログインしている時' do
      sign_in(:user)
      it 'レスポンス成功(フォローが存在するとき)' do
        get exists_api_relationships_path, params: { follow_id: follow.follow_id }
        expect(response).to have_http_status(:ok)
      end

      it 'レスポンス成功(フォローがない)' do
        get exists_api_relationships_path, params: { follow_id: user1.id }
        expect(response).to have_http_status(:no_content)
      end

      it 'レスポンス失敗' do
        get exists_api_relationships_path, params: { follow_id: (user1.id + 3) }
        expect(response).to have_http_status(:internal_server_error)
      end
    end

    context 'ログインしていない時' do
      it 'レスポンス成功' do
        get exists_api_relationships_path, params: { follow_id: follow.follow_id }
        expect(response).to have_http_status(:no_content)
      end

      it 'レスポンス成功(フォローがない)' do
        get exists_api_relationships_path, params: { follow_id: user1.id }
        expect(response).to have_http_status(:no_content)
      end

      it 'レスポンス失敗' do
        get exists_api_relationships_path, params: { follow_id: (user1.id + 3) }
        expect(response).to have_http_status(:internal_server_error)
      end
    end
  end
end
