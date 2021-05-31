require 'rails_helper'

RSpec.describe 'Relationships', type: :request do
  let(:user) { create(:user)}
  let(:user1) {create(:user,email: 'test1@example.com',name: 'test1')}
  let(:follow) { create(:relationship,user: user,follow:user1)}

  describe 'signed_in' do
    sign_in(:user)
    describe 'GET /create' do
      it 'レスポンス成功' do
        post api_relationships_path,params: {relationships: {follow_id: user1.id}}
        expect(response).to have_http_status(:created)
      end
    end

    describe 'GET /destroy' do
      it 'レスポンス成功' do
        follow
        delete api_relationship_path(user1.id)
        expect(response).to have_http_status(:ok)
      end
    end

    describe 'Get /exists' do
      it 'レスポンス成功(フォローが存在するとき)' do
        get exists_api_relationships_path,params: {follow_id: follow.follow_id}
        expect(response).to have_http_status(:ok)
      end

      it 'レスポンス成功(フォローがない)' do
        get exists_api_relationships_path,params: {follow_id: user1.id}
        expect(response).to have_http_status(:no_content)
      end
    end
  end
end
