class Product < ApplicationRecord

  mount_uploader :image,ImageUploader

  has_many :likes, dependen: :destroy
end
