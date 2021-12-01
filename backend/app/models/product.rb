class Product < ApplicationRecord
  mount_uploader :image, ImageUploader

  validates :name, :caption, :price, presence: true
  validates :price, numericality: { greater_than: 0 }

  has_many :likes, dependent: :destroy
  has_many :reviews, dependent: :destroy

  scope :ranking, ->(count) { all.order('likes_count desc').limit(count) }
  scope :limit_index, -> { limit(INDEX_NUM) }
  scope :page_offset, -> (page_num) {offset(INDEX_NUM * page_num)}

  def self.index_pagenation(page)
    limit_index.page_offset(page)
  end

  def rate_average_sum
    return unless reviews.average(:rate)

    (reviews.average(:rate) * 2).floor / 2.to_f
  end

  def rate_average
    (rate_sum.to_f / reviews_count).floor(1)
  end

  def api_json
    {
      id: id,
      name: name,
      url: url,
      shopname: shopname,
      price: price,
      caption: caption,
      image: { url: image.url },
      reviews_count: reviews_count,
      rate_average: rate_average
    }
  end
end
