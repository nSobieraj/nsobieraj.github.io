#!/usr/bin/python

import random, re, os, time, sys, getopt
from pathlib import Path

print("Deleting existing files.")
for p in Path("./Roulette/Gen/").glob("*.txt"):
    p.unlink()
for p in Path("./Roulette/").glob("*.txt"):
    p.unlink()
print("Done.")
time.sleep(3)

files = 25000
rolls = 324

colors = ['G', 'L', 'B', 'R', 'B', 'R', 'B', 'R', 'B', 'L', 'B', 'L', 'B', 'R', 'B', 'R', 'B', 'R', 'B', 'L', 'B', 'L', 'B', 'R', 'B', 'R', 'B', 'R', 'B', 'R', 'B', 'R', 'B', 'L', 'B', 'L', 'B', 'R', 'B', 'R', 'B', 'R', 'B', 'L', 'B', 'L', 'B', 'R', 'B', 'R', 'B', 'R', 'B', 'L', ]

i = 1
n = 1
y = 0

print("Generating files.")
while n <= files:    
    roulette = open('Roulette/Gen/Roll_' + str(n) + '.txt', 'w+')
    while i <= rolls:
        roulette.write(re.sub(r'(R)|(L)|(G)', r'O', random.choice(colors) + "\n"))
        i += 1
    i = 1
    n += 1
roulette.close()
print("Done.")

rS = open('Roulette/Summary.txt', 'w+')

n = 1
i = 1
losses = 0
wins = 0

print("Analyzing files and generating Summary.")
while i <= files:

    roulette = open('Roulette/Gen/Roll_' + str(n) + '.txt', 'r+')

    rS.write('\n\n' + f'Roulette {i}' + '\n')
    rS.write('----------' + '\n')
    streak11 = r'(B)\s(O\s){11}(B)'
    streak12 = r'(B)\s(O\s){12}(B)'
    streak13 = r'(B)\s(O\s){13}(B)'
    streak14 = r'(B)\s(O\s){14}(B)'
    streak15 = r'(B)\s(O\s){15}(B)'
    streak16 = r'(B)\s(O\s){16}(B)'
    streak17 = r'(B)\s(O\s){17}(B)'
    streak18 = r'(B)\s(O\s){18}(B)'
    streak19 = r'(B)\s(O\s){19}(B)'
    streak20 = r'(B)\s(O\s){20}(B)'

    text = roulette.read(-1)

    rS.write('11 Bets: ' + str(len(re.findall(streak11, text))) + '\n')
    rS.write('12 Bets: ' + str(len(re.findall(streak12, text))) + '\n')
    rS.write('13 Bets: ' + str(len(re.findall(streak13, text))) + '\n')
    rS.write('14 Bets: ' + str(len(re.findall(streak14, text))) + '\n')
    rS.write('15 Bets: ' + str(len(re.findall(streak15, text))) + '\n')
    rS.write('16 Bets: ' + str(len(re.findall(streak16, text))) + '\n')
    rS.write('17 Bets: ' + str(len(re.findall(streak17, text))) + '\n')
    rS.write('18 Bets: ' + str(len(re.findall(streak18, text))) + '\n')
    rS.write('19 Bets: ' + str(len(re.findall(streak19, text))) + '\n')
    rS.write('20 Bets: ' + str(len(re.findall(streak20, text))) + '\n\n')
    
    if len(re.findall(streak12, text)) > 0 or len(re.findall(streak13, text)) > 0 or len(re.findall(streak14, text)) > 0 or len(re.findall(streak15, text)) > 0 or len(re.findall(streak16, text)) > 0 or len(re.findall(streak17, text)) > 0 or len(re.findall(streak18, text)) > 0 or len(re.findall(streak19, text)) > 0 or len(re.findall(streak20, text)) > 0:

        rS.write('YOU LOSE' + '\n')
        losses +=1

    elif len(re.findall(streak11, text)) == 0 or len(re.findall(streak11, text)) > 0 or len(re.findall(streak12, text)) == 0 or len(re.findall(streak13, text)) == 0 or len(re.findall(streak14, text)) == 0 or len(re.findall(streak15, text)) == 0 or len(re.findall(streak16, text)) == 0 or len(re.findall(streak17, text)) == 0 or len(re.findall(streak18, text)) == 0 or len(re.findall(streak19, text)) == 0 or len(re.findall(streak20, text)) == 0:

        rS.write('YOU WIN' + '\n')
        wins +=1
    
    i += 1
    n += 1
print("Done.")

print('\n\n\nYou won ' + str(wins) + ' times.')
print('And lost ' + str(losses) + ' times.')
print(str(wins) + '/'+ str(files) +' times\n\n\n')

roulette.close()
rS.close()
