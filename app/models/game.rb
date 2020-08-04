class Game < ApplicationRecord
  has_rich_text :how_to
  enum status: [ :pending, :approved ]
  acts_as_taggable_on :lengths, :amounts, :styles, :methods

  validates :name,          presence: true
  validates :description,   presence: true
  validates :how_to,        presence: true
  validates :min_players,   numericality: { only_integer: true, greater_than: 0 }
  validates :max_players,   numericality: { only_integer: true, greater_than: 0 }
  validates :status,        inclusion: { in: statuses.keys }
end
