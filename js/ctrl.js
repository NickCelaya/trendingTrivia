angular.module('triviaApp').controller("triviaCtrl", function($scope, triviaServ) {
    $scope.questions = [];
    $scope.getQuestions = function(pageNum, difficulty) {
        console.log(difficulty);
        triviaServ.getQuestions(pageNum, difficulty).then(function(response) {
            console.log(response);
            $scope.removeQuestions()
            for (var i = 0; i < response.data.length; i++) {

                $scope.questions.push(response.data[i])


            }
        });
    }()

    $scope.removeQuestions = function() {
        $scope.questions = [];
    }
    $scope.checkAnswer = function(question, answer, correctanswer) {
        console.log("Answer: " + answer + ", Correct Answer: " + correctanswer);
        question.answer = triviaServ.checkAnswer(answer, correctanswer)

    }
    $scope.toggleSearch = function() {
        if ($scope.searchBarHide) {
            $scope.searchBarHide = false
        } else {
            $scope.searchBarHide = true
        }
    }

});
