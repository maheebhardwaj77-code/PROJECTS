#Guess The Number:-
import random

target = random.randint(1,100)

while True:
    userNumber = (input("Guess the target or Quit(Q) :"))
    if (userNumber == "Q"):
        break
    
    userNumber = int(userNumber)
    if(userNumber == target):
        print("success : correct guess!")
        break
    elif(userNumber < target):
        print("Your number was small. Take a bigger guess...")
    else:
        print("Your number is too big. Take some small guess...")

print("----------GAME OVER----------")