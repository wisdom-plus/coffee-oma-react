FactoryBot.define do
  factory :like do
    assosiation { :user }
    assosiation { :product }
  end
end
