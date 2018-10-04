### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.


require_relative('card.rb')

class CardGame  

  # missing initialize function


  def checkforAce(card)
    if card.value = 1
      return true  # possibly an issue with too many returns...maybe dont need the second one!?
    else
      return false
    end
  end

# should be "def" not "dif"
  dif highest_card(card1 card2) # missing comma after card1
  if card1.value > card2.value
    return card.name
  else
    card2  # something is wrong here
  end
end
end # don't need this end

def self.cards_total(cards)
  total  # must actually initialize an empty array here!
  for card in cards
    total += card.value
    return "You have a total of" + total # need interpolation? or something else? think later
  end
end


```
