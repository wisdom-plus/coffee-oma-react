class Product < ApplicationRecord
  mount_uploader :image, ImageUploader

  validates :name, :caption, :price, presence: true
  validates :price, numericality: { greater_than: 0 }

  has_many :likes, dependent: :destroy
  has_many :reviews, dependent: :destroy

  scope :ranking, ->(count) { all.order('likes_count desc').limit(count) }
end
