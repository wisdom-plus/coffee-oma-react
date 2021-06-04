class Product < ApplicationRecord
  mount_uploader :image, ImageUploader

  validates :name,:caption, presence: true
  validates :price,numericality: {greater_then: 0},presence: true

  has_many :likes, dependent: :destroy

  scope :ranking, ->(count) {all.order('likes_count desc').limit(count) }
end
