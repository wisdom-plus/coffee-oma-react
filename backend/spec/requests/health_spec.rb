require 'rails_helper'

RSpec.describe 'Healths', type: :request do
  describe 'GET /index' do
    it 'returns http success' do
      get api_v1_health_index_path
      expect(response).to have_http_status(:success)
    end
  end
end
