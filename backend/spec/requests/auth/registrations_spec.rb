require 'rails_helper'

RSpec.describe 'Auth::Registrations', type: :request do
  let(:user) { create(:user) }
  let(:user1) { create(:user, email: 'test1@example.com', name: 'test1') }

  describe 'GET /show' do
    it 'レスポンス成功' do
      get "/api/auth/registrations/#{user.id}"
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'PUT /update' do
    sign_in(:user)
    it 'レスポンス成功(パスワードなし)' do
      put api_user_registration_path, params: { registration: { name: 'test20' } }
      expect(response).to have_http_status(:ok)
    end

    it 'レスポンス成功(パスワード)' do
      put api_user_registration_path, params: { registration: { name: 'test20', current_password: 'password', password: '12345678', password_confirmation: '12345678' } }
      expect(response).to have_http_status(:ok)
    end
  end
end
