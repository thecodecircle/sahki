# puts 'Creating admin user...'
# Administrator.create_with(password: 'admin')
#   .find_or_create_by!(name: 'admin')

Game.create(status: "approved", name: "אדממה", description: "לרקוד ולשיר לפי השיר", how_to: "עומדים במעל ושרים את השיר", min_players: 5, max_players: 20)
Game.create(status: "approved", name: "תופסת", description: "לרקוד ולשיר לפי השיר", how_to: "עומדים במעל ושרים את השיר", min_players: 5, max_players: 20)
Game.create(status: "approved", name: "וואה", description: "לרקוד ולשיר לפי השיר", how_to: "עומדים במעל ושרים את השיר", min_players: 5, max_players: 20)
Game.create(status: "approved", name: "מוקי צור בשדות הקטל", description: "לרקוד ולשיר לפי השיר", how_to: "עומדים במעל ושרים את השיר", min_players: 5, max_players: 20)
Game.create(status: "approved", name: "אינטר גלקטיק סמוראי", description: "לרקוד ולשיר לפי השיר", how_to: "עומדים במעל ושרים את השיר", min_players: 5, max_players: 20)
