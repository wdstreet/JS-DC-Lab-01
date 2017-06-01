const suits = ['hearts', 'clubs', 'spades', 'diamonds']

const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 12, queen: 13 }


//creating cards 

class Card { 
    constructor(r, s, c) { 
        this.rank = r 
        this.suit = s 
        this.title = (this.suit + ' of ' + this.rank)
        this.score = c
    }

}

class Deck { 
    constructor() { 
        this.cards = []
    }
    
    createDeck(s, r, c) { 
        if(this.cards.length === 0) { 
            for (let i = 0; i < suits.length; i++){
                for (let j = 0; j < ranks.length; j++){
                  this.cards.push(new Card(s[i], r[j], c[ranks[j]]))
                }
            }
        } else { 
            console.log('Deck Full')
        }
    }
    
    deal() { 
        let card = this.cards.splice(Math.floor(Math.random() * this.cards.length), 1 )
        return card
    }
}

let deck = new Deck
deck.createDeck(suits, ranks, rankScores)



module.exports.Deck = deck

