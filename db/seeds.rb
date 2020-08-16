# puts 'Creating admin user...'
# Administrator.create_with(password: 'admin')
#   .find_or_create_by!(name: 'admin')

# Game.create(status: "approved", name: "אדממה", description: "לרקוד ולשיר לפי השיר", how_to: "עומדים במעל ושרים את השיר", min_players: 5, max_players: 20)
# Game.create(status: "approved", name: "תופסת", description: "לרקוד ולשיר לפי השיר", how_to: "עומדים במעל ושרים את השיר", min_players: 5, max_players: 20)
# Game.create(status: "approved", name: "וואה", description: "לרקוד ולשיר לפי השיר", how_to: "עומדים במעל ושרים את השיר", min_players: 5, max_players: 20)
# Game.create(status: "approved", name: "מוקי צור בשדות הקטל", description: "לרקוד ולשיר לפי השיר", how_to: "עומדים במעל ושרים את השיר", min_players: 5, max_players: 20)
# Game.create(status: "approved", name: "אינטר גלקטיק סמוראי", description: "לרקוד ולשיר לפי השיר", how_to: "עומדים במעל ושרים את השיר", min_players: 5, max_players: 20)

unless Rails.env.production?
  lengths = ["5 דקות", "10 דקות", "15 דקות", "20+ דקות"]
  amounts = [5, 10, 15, 20]
  styles = ["כיפי", "מעורר דיון", "אנרגטי", "עצוב"]
  methods = ["לא", "הבנתי", "מה", "זה"]
  1..20.times.each do |n|
    if Game.find_by(name: "Some game #{n+1}").nil?
      game = Game.create(
        name: "Some game #{n+1}",
        description: "A fun game to play!(#{n+1})",
        how_to: "Pass the ball to #{n+1}",
        min_players: rand(1..10),
        max_players: rand(10..100),
        hearts: rand(10..100),
        shares: rand(10..100),
        status: "approved"
      )
      game.length_list.add "#{lengths[rand(4)]}"
      game.amount_list.add "#{amounts[rand(4)]}"
      game.style_list.add "#{styles[rand(4)]}"
      game.method_list.add "#{methods[rand(4)]}"
      game.save
      puts "נוצר #{game.name}"
    end
  end
end
