### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')

class CardGame


  attr_accessor :cards

  def initialize(cards)
    @cards = []
  end

  def checkforAce(card)
    if card.value == 1
      return true
    else
      return false
    end
  end

  def highest_card(card1, card2)
    if card1.value > card2.value
      return card1.suit + " of " + card1.value
    else
      card2.suit + " of " + card2.value
    end
  end


  def self.cards_total(cards)
    total = []
    for card in cards
      total += card.value
    end
    return "You have a total of" + total
  end


end
