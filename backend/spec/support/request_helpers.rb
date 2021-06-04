module Requests
  module JsonHelpers
    def json
      JSON.parse(response.body)
    end

    def expect_json(expect_object)
      json = expect_object.to_json
      JSON.parse(json)
    end
  end
end
