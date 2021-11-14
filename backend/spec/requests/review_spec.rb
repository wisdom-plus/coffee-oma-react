require 'rails_helper'

RSpec.describe "Reviews", type: :request do
  describe "GET /create" do
    it "returns http success" do
      get "/review/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destory" do
    it "returns http success" do
      get "/review/destory"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /index" do
    it "returns http success" do
      get "/review/index"
      expect(response).to have_http_status(:success)
    end
  end

end
