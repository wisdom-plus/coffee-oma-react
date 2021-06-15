FactoryBot.define do
  factory :user do
    email { 'test@example.com' }
    password { 'password' }
    name { 'test' }
    profile { 'ユーザーのプロフィールです。' }
  end
end
