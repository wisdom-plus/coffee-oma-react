class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  INDEX_NUM = 9
end
