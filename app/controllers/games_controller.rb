class GamesController < ApplicationController
  before_action :set_game, only: [:show, :edit, :update, :destroy, :heart_it, :share_it, :approve_game]

  # GET /games
  # GET /games.json
  def index
    @games = Game.all
  end

  # GET /games/1
  # GET /games/1.json
  def show
    respond_to :json, :html
  end

  # GET /games/new
  def new
    @game = Game.new
  end

  # GET /games/1/edit
  def edit
  end

  # POST /games
  # POST /games.json
  def create
    @game = Game.new(game_params)

    respond_to do |format|
      if @game.save
        format.html { redirect_to @game, notice: 'Game was successfully created.' }
        format.json { render :show, status: :created, location: @game }
      else
        format.html { render :new }
        format.json { render json: @game.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /games/1
  # PATCH/PUT /games/1.json
  def update
    respond_to do |format|
      if @game.update(game_params)
        format.html { redirect_to @game, notice: 'Game was successfully updated.' }
        format.json { render :show, status: :ok, location: @game }
      else
        format.html { render :edit }
        format.json { render json: @game.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /games/1
  # DELETE /games/1.json
  def destroy
    @game.destroy
    respond_to do |format|
      format.html { redirect_to games_url, notice: 'Game was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def heart_it
    @game.update(hearts: @game.hearts + 1)
    puts "******************* Add hearts to #{@game.hearts} *********************"
    redirect_to games_path
  end

  def share_it
    @game.update(shares: @game.shares + 1)
    puts "******************* Add shares to #{@game.shares} *********************"
    redirect_to games_path
  end

  def approve_game
    @game.approved!
    puts "******************* Approved #{@game.name} *********************"
    redirect_to games_path
  end

  def filter_tag
    puts "******************* params[:tags] => #{params[:tags]} *********************"
    tag_array = params[:tags]
    @games = Game.tag_filter(tag_array)
    puts "******************* Filtering... *********************"
    # redirect_to page_path('form')

    respond_to do |format|
      format.html { redirect_to page_path('form'), notice: 'Filter.' }
      format.json { render json: @games }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_game
      @game = Game.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def game_params
      params.require(:game).permit(:name, :description, :how_to, :min_players, :max_players, :hearts, :shares, :status, :suggested_name, :suggested_phone, :tag_list)
    end
end
