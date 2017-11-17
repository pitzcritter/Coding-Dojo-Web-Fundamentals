'use strict';
function flip(coins) {
    var won;
    var winnings = 0;

    for (var i = 0; i < coins; i++) {
        if (Math.floor(100 * Math.random()) + 1 == 100)
            won = true;
        else
            won = false;
        if (won) {
            winnings = 50 + Math.floor(50 * Math.random()) + 1;
            return i + winnings;
        }
    }
    return 0;
}
console.log(flip(100));
console.log('---------- game 2')
function playGames(coins, min, max) {
    var winnings = 0;
    var tosses = 0;
    //var won;
    do {
        if (Math.floor(100 * Math.random()) + 1 == 100) {
            winnings = 50 + Math.floor(50 * Math.random()) + 1;
            coins += winnings;
            if (coins >= max) {
                console.log('tosses: ' + tosses);
                return coins;
            }
        }
        coins--;
        tosses++;
    } while (coins > min) 
    console.log('tosses: ' + tosses);
    return coins;
}
console.log("winnings: " + playGames(100, 40, 200));