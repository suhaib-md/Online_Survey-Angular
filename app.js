var app = angular.module("survey", []);

app.controller("SurveyController", function ($scope) {
  $scope.participantName = "";
  $scope.participantEmail = "";
  $scope.surveyResults = [];

  $scope.surveyQuestions = [
    {
      text: "Question 1: What is your favorite color?",
      options: ["Red", "Green", "Blue", "Other"],
      selectedOption: ""
    },
    {
      text: "Question 2: How often do you exercise?",
      options: ["Every day", "A few times a week", "Rarely", "Never"],
      selectedOption: ""
    },
    {
      text: "Question 3: Which programming language do you prefer?",
      options: ["JavaScript", "Python", "Java", "C++", "Other"],
      selectedOption: ""
    }
  ];

  $scope.SubmitSurvey = function () {
    if (!$scope.participantName || !$scope.participantEmail) {
      alert("Please enter your name and email.");
      return;
    }

    var result = {
      participantName: $scope.participantName,
      participantEmail: $scope.participantEmail,
      surveyAnswers: angular.copy($scope.surveyQuestions)
    };

    $scope.surveyResults.push(result);

    // Clear the form fields
    $scope.participantName = "";
    $scope.participantEmail = "";
    for (var i = 0; i < $scope.surveyQuestions.length; i++) {
      $scope.surveyQuestions[i].selectedOption = "";
    }
  };
});
