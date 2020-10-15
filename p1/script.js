// component that displays each round in play history
Vue.component('history-round', {
    template: '#history-round',
    props: ['round', 'result'],
});

var app = new Vue({
    el: '#app',
    data: {
        selected: 0,
        feedbackStyleClass: '',
        result: '',
        results: [],
        emptyResult: true,
        round: 0,
        computer: 0,
        computerChoice: '',
        playerScore: 0,
        computerScore: 0,
    },
    methods: {
        play: function (event) {
            let player = this.selected;
            // computer chooses a random hand btw 1, 2, 3
            // 1 = rock
            // 2 = paper
            // 3 = scissors 
            this.computer = getRandomInt(3);
            this.computerChoice = getChoiceTxt(this.computer);

            // player did not make a choice
            if (player == 0) {
                return;
            }
            // start the game 
            else {
                // player and computer choose the same
                if (player == this.computer) {
                    this.result = "It's a tie!";
                    this.feedbackStyleClass = 'tie';
                }
                // player uses rock
                else if (player == 1) {
                    switch (this.computer) {
                        // computer uses paper
                        case 2:
                            this.result = "Computer won";
                            this.feedbackStyleClass = 'lose';
                            this.computerScore += 1;
                            break;
                        // computer uses scissors
                        case 3:
                            this.result = "Player won";
                            this.feedbackStyleClass = 'win';
                            this.playerScore += 1;
                            break;
                    }
                }
                // player uses paper
                else if (player == 2) {
                    switch (this.computer) {
                        // computer uses rock
                        case 1:
                            this.result = "Player won";
                            this.feedbackStyleClass = 'win';
                            this.playerScore += 1;
                            break;
                        // computer uses scissors
                        case 3:
                            this.result = "Computer won";
                            this.feedbackStyleClass = 'lose';
                            this.computerScore += 1;
                            break;
                    }
                }
                // player uses scissors
                else if (player == 3) {
                    switch (this.computer) {
                        // computer uses rock
                        case 1:
                            this.result = "Computer won";
                            this.feedbackStyleClass = 'lose';
                            this.computerScore += 1;
                            break;
                        // computer uses paper
                        case 2:
                            this.result = "Player won";
                            this.feedbackStyleClass = 'win';
                            this.playerScore += 1;
                            break;
                    }
                }
                this.round += 1;
                this.results.push({
                    "round": this.round,
                    "result": this.result
                });
                this.emptyResult = false;
            }
        },

        // reset the game
        reset: function (event) {
            this.results = [];
            this.round = 0;
            this.playerScore = 0;
            this.computerScore = 0;
            this.emptyResult = true;
        }
    }
});

// Function that returns integer 1 to max
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}

// Function that converts number to choice
function getChoiceTxt(choice) {
    switch (choice) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
        default: return "";
    }
}