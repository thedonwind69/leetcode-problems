import random

def heads_or_tails (call, coin, wager, money):
    if wager <= money:
        if coin == call:
            money += wager
            return ("You won, you have {} dollars!").format(money)
        else:
            money -= wager
            return ("You lost, you have {} dollars left.").format(money)
    else:
        return "You dont have that much money!"
   
testCoin = ["Heads", "Tails"]
coinFlip = random.choice(testCoin)
game1 = heads_or_tails("Heads", coinFlip, 101, 100)
print(game1)


        