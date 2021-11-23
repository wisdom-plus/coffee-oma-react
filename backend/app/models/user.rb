# frozen_string_literal: true

class User < ActiveRecord::Base # rubocop:disable Rails/ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable
  include DeviseTokenAuth::Concerns::User

  mount_uploader :icon, IconUploader

  has_many :likes, dependent: :destroy
  has_many :relationships, dependent: :destroy
  has_many :reviews, dependent: :destroy
  has_many :followings, through: :relationships, source: :follow
  has_many :reverse_of_relationships, class_name: 'Relationship', foreign_key: 'follow_id', dependent: :destroy, inverse_of: 'user'
  has_many :followers, through: :reverse_of_relationships, source: :user

  validates :name, presence: true

  def token_validation_response
    as_json(except: %i[tokens updated_at provider uid allow_password_change])
  end

  def following?(other_user)
    followings.include?(other_user)
  end

  def follow(other_user)
    return if self == other_user || other_user.nil?

    relationships.find_or_create_by(follow_id: other_user.id)
  end

  def unfollow(other_user_id)
    relationship = relationships.find_by(follow_id: other_user_id)
    relationship&.destroy
  end

  def update_without_current_password(params, *options)
    params.delete(:current_password)

    if params[:password].blank? && params[:password_confirmation].blank?
      params.delete(:password)
      params.delete(:password_confirmation)
    end

    result = update(params, *options)
    clean_up_passwords
    result
  end

  def self.guest
    find_or_create_by(email: 'guest@example.com') do |user|
      user.name =  'ゲストユーザー'
      user.password = SecureRandom.urlsafe_base64
      user.confirmed_at = Time.zone.now
    end
  end
end
