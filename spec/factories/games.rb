FactoryBot.define do
  factory :game do
    name { "MyString" }
    description { "MyText" }
    min_players { 1 }
    max_players { 1 }
    hearts { 1 }
    shares { 1 }
    status { 1 }
    suggested_name { "MyString" }
    suggested_phone { "MyString" }
  end
end
