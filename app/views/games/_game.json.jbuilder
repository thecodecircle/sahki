json.extract! game, :id, :name, :description, :min_players, :max_players, :hearts, :shares, :status, :suggested_name, :suggested_phone, :created_at, :updated_at
json.url game_url(game, format: :json)
