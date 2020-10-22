import Vue from 'vue';
import ResultFeedback from './components/ResultFeedback.vue';

var app = new Vue({
    el: '#app',
    components: {
        'result-feedback': ResultFeedback,
    },
    data: {
        gameStart: false,
        playerName: '',
        words: [
            ['apple', 'Sometimes red, sometimes delicious'],
            ['washington', 'Rushmore’s left edge'],
            ['pumpkin', 'Halloween’s favorite fruit'],
            ['football', 'Play with your hands or feet, depending on your location']
        ],
        wordSetChoice: '',
        wordAnswer: '',
        wordHint: '',
        guess: '',
        correct: null,
        showResult: false,
        previousWord: '',
        showFeedback: false,
    },
    methods: {
        play() {
            this.gameStart = true;
            while (this.previousWord == this.wordAnswer) {
                this.wordSetChoice = Math.floor(Math.random() * Math.floor(4));
                this.wordAnswer = this.words[this.wordSetChoice][0];
                this.wordHint = this.words[this.wordSetChoice][1];
            }
            this.guess = '';
            this.correct = null;
            this.resultStyleClass = 'hide';
            this.showResult = false;
            this.previousWord = this.wordAnswer;
            this.showFeedback = false;
        },
        submitGuess() {
            if (this.guess == this.wordAnswer) {
                this.correct = true;
                this.resultStyleClass = 'correct';
                this.showResult = true;
                this.showFeedback = true;
            }
            else {
                this.correct = false;
                this.resultStyleClass = 'incorrect';
                this.showResult = true;
                this.showFeedback = true;
            }
        }

    },
    computed: {
        welcomeMsg() {
            return 'Game on, ' + this.playerName + '!';
        },
        scrambleWord() {
            return this.wordAnswer.shuffle();
        }
    }
});

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

