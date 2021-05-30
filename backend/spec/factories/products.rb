FactoryBot.define do
  factory :product do
    name {'コーヒー器具の名前'}
    url {'http://www.example.com'}
    shopname {'コーヒーショップの名前'}
    price {1000}
    caption {'コーヒー器具の説明'}
  end
end
