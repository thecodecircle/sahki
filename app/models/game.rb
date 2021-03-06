class Game < ApplicationRecord
  has_rich_text :how_to
  enum status: [ :pending, :approved ]
  acts_as_taggable_on :lengths, :amounts, :styles, :methods

  include PgSearch::Model
  pg_search_scope :search, against: {name: 'A', description: 'B'}, associated_against: {
    rich_text_how_to: [:body]
  }

  validates :name,          presence: true
  validates :description,   presence: true
  validates :how_to,        presence: true
  validates :min_players,   numericality: { only_integer: true, greater_than: 0 }
  validates :max_players,   numericality: { only_integer: true, greater_than: 0 }
  validates :status,        inclusion: { in: statuses.keys }

	after_create do |game|
		puts "****************************************"
		puts "init"
		game.hearts ||= 0
		game.shares ||= 0
		game.save
	end

  def self.tag_filter(filter_array)
    self.tagged_with(filter_array)
  end

  def self.rank_games(tags)
    if tags.nil?
			puts "****************************************"
			puts "tags nil"
      games = Game.all
    else
      games = Game.tagged_with(tags)
    end
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

  def self.all_lengths
    ActsAsTaggableOn::Tag.for_context(:lengths)
  end

  def self.all_amounts
    ActsAsTaggableOn::Tag.for_context(:amounts)
  end

  def self.all_styles
    ActsAsTaggableOn::Tag.for_context(:styles)
  end

  def self.all_methods
    ActsAsTaggableOn::Tag.for_context(:methods)
  end

end
