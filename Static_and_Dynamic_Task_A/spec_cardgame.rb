require("minitest/autorun")
require("minitest/rg")
require_relative("./testing_task_2")
require_relative("./card")


class TestCardGame < Minitest::Test

  def setup()
    @card1 = Card.new('hearts', 1) # check syntax
    @card2 = Card.new('spades', 10)
    cards = [@card1, @card2]
    @game1 = CardGame.new(cards)
  end

  def test_checkforAce()
    assert_equal(true, @game1.checkforAce(@card1))
  end

  def test_highest_card()
    assert_equal()
  end


end
