require 'rails_helper'

RSpec.describe 'Auth::Registrations', type: :request do
  let(:guest) {create(:user,name: 'ゲストユーザー',email: 'guest@example.com',profile: 'ゲストユーザーのプロフィールです')}
  describe 'GET /guest_login' do
    it 'レスポンス成功' do
      get '/api/v1/auth/guest_login'
      expect(response).to have_http_status(:ok)
    end

    it 'ユーザが作成される(まだゲストが作成されていない)' do
      expect do
        get '/api/v1/auth/guest_login'
      end.to change(User, :count).by 1
    end

    it 'レスポンス成功(ゲスト作成済み)' do
      guest
      get '/api/v1/auth/guest_login'
      expect(response).to have_http_status(:found)
    end


    it 'ユーザが作成されない(ゲストが作成されている)' do
      guest
      expect do
        get '/api/v1/auth/guest_login'
      end.to change(User, :count).by 0
    end
  end
end
