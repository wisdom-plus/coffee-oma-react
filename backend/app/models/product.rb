class Product < ApplicationRecord
  mount_uploader :image, ImageUploader

  validates :name, :caption, :price, presence: true
  validates :price, numericality: { greater_than: 0 }

  has_many :likes, dependent: :destroy
  has_many :reviews, dependent: :destroy

  scope :ranking, ->(count) { all.order('likes_count desc').limit(count) }

  def rate_average
    return unless reviews.average(:rate)

    (reviews.average(:rate) * 2).floor / 2.to_f
  end

  def rate_average_num
    reviews.average(:rate)&.floor(1)
  end

end
