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

  def self.tag_filter(filter_array)
    self.tagged_with(filter_array)
  end

  def self.rank_games(games)
    scores = Hash.new
    games.each do |game|
      scores[game.name.to_sym] = game.hearts + (game.shares * 2)
    end
    # scores.select{|key, hash| hash == scores.values.max }
    sorted_scores = scores.sort_by {|k, v| -v}
    game_list = []
    sorted_scores.each_with_index do |(key, value), index|
      puts "****************** key: #{key}, value: #{value} **********************"
      game_list[index] = Game.find_by(name: key)
    end
    game_list.first(20)
  end

end
