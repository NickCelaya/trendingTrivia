angular.module("triviaApp").service("triviaServ", function($http) {

    this.getQuestions = function(pageNum, difficulty) {
        if (difficulty) {

            return $http({
                method: 'GET',
                url: 'https://practiceapi.devmountain.com/api/trivia/questions/difficulty/:' + difficulty,
            }).then(function(response) {
                return response
            })
        } else {
            return $http({
                method: 'GET',
                url: 'https://practiceapi.devmountain.com/api/trivia/questions/',
            }).then(function(response) {
                return response
            })
        }



    }
    this.checkAnswer = function(answer, correctanswer) {
        if (answer === correctanswer) {
            return true;
        } else {
            return false;
        }
    }

});
