const prompt = require('prompt')
const chalk = require('chalk')
const deckGen = require('./js/deck.js')

//inject base deck
let playDeck = deckGen.Deck.cards
let hand1 = []
let hand2 = []

//object to 
const setUp = {
    properties: {
        user1: {
            description: 'Player 1 Name',
            required: true,
        },
        user2: {
            description: 'Player 2 Name',
            required: true,
        }
    }
}

function splitDeck(deck) { 
    
    let arrLength = 26

//    pulling out random cards til both decks/hands are full
    let i = 0
    while (i < arrLength) {
        let removedCards = deck.splice(Math.floor(Math.random() * deck.length), 1 )
        hand1.push(removedCards)
        i++
    }
    let j = 0
    while (j < arrLength) {
        let removedCards = deck.splice(Math.floor(Math.random() * deck.length), 1 )
        hand2.push(removedCards)
        j++
    }
    
    return hand1
    return hand2
}

splitDeck(playDeck)






prompt.start()

prompt.get(setUp, function (err, result) {
    //creating players 
    class Player { 
        constructor(name, hand) { 
            this.name = name
            this.hand = hand
        }
        discard() { 
            let card = this.hand.splice(0,1)
            return card
        }
        addCards(oCard) { 
            let phand = this.hand
            phand.push(oCard)
//            console.log('Your Hand: ' + this.hand.length)
        }
        
    }
    
    //applying users to players
    let p1 = new Player(result.user1, hand1)
    let p2 = new Player(result.user2, hand2)
    
    
    
//    function playWar(p1Cards, p2Cards) {
//        if (p1Cards.length === 26 && p2Cards.length === 26){ 
//            console.log('Starting Game')
//        } else { 
//            console.log('Game not Working')
//        }
//    }
    
    let stack = []
    let p1Stack = []
    let p2Stack = []
    let round = 1

            

    
        while ( p1.hand.length !== 0 && p2.hand.length !== 0){
            
            console.log("---------------- Round " + round + " ----------------")
            
            let p1hand = p1.hand
            let p2hand = p2.hand 
            
            let p1Card = p1.discard()
            let p2Card = p2.discard()
            
            

            
            console.log(p1.name + " drew: " + p1Card[0][0].title)
            console.log(p2.name + " drew: " + p2Card[0][0].title)
            
            if ( p1Card[0][0].score > p2Card[0][0].score ){
                
                console.log(chalk.underline.blue(p1.name + " wins this round"))
                p1hand.push(p2Card[0])

                
                console.log(p1.name + "s hand: " + p1.hand.length + " cards")
                console.log(p2.name + "s hand: " + p2.hand.length + " cards")
                
            }
            
            else if ( p1Card[0][0].score < p2Card[0][0].score ){
                
                console.log(chalk.underline.white(p2.name + " wins this round"))
                p2hand.push(p1Card[0])

                console.log(p1.name + "'s hand: " + p1.hand.length + " cards")
                console.log(p2.name + "'s hand: " + p2.hand.length + " cards")
            }
            else {
                console.log(chalk.bold.red("----------------WAR!----------------"))
            }
            round++	
        }

    
    
    
})
