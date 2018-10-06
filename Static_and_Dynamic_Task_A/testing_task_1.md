### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby


require_relative('card.rb')

class CardGame  

  # missing initialize function
  # need a way to initialize an instance of a CardGame with an array of card objects


  def checkforAce(card)
    if card.value = 1  # need double equals
      return true  
    else
      return false
    end
  end

# should be "def" not "dif"
  dif highest_card(card1 card2) # missing comma after card1
  if card1.value > card2.value  # indent line for clarity
    return card.name  # name is not a method for card!
                      # should be "card1" NOT "card"
  else
    card2  # just returns card2 object. might want to return .suit and/or .value
  end
end
end # don't need this last end

def self.cards_total(cards)
  total  # must actually initialize a count at zero
  for card in cards
    card.value += total  # switch the order
    return "You have a total of" + total  # need string interpolation
     #should be outside of for loop
  end
end

# missing "end" for class definition

```
