include ActionView::Helpers::DateHelper

class Review < ApplicationRecord
  belongs_to :product
  belongs_to :user
  scope :get_reviews, ->(id) { where('product_id = ?', id) }

  def self.api_json(id)
    reviews = Review.get_reviews(id)
    reviews.map {|review| review.as_json}
  end



  def as_json
    {
      id: self.id,
      title: self.title,
      content: self.content,
      rate: self.rate,
      time_ago: time_ago_in_words(self.created_at)
    }
  end
end
