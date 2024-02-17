/* Created and coded by Amrit Pritam Sangramsingh */
/* Quiz source: w3schools.com */
// Add these variables at the beginning of your app.js file
var totalTimeInSeconds = 1800; // Set the total time in seconds (e.g., 5 minutes)
var timeLeft = totalTimeInSeconds;
var countdownInterval;

function startTimer() {
    countdownInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;

    document.getElementById("countdown").innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        alert("Time's up! Quiz completed.");
        // Add any additional logic for the end of the quiz
    } else {
        timeLeft--;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    startTimer();
});


var quiz = {
    "Python": [
      {
        "id": 1,
        "question": "What is the maximum length of a Python identifier?",
        "options": [
          {"a": "32", "b": "16", "c": "128", "d": "No fixed length"}
        ],
        "answer": "No fixed length",
        "score": 0,
        "status": ""
      },
      {
        "id": 2,
        "question": "What will be the output of the following code snippet? print(2**3 + (5 + 6)**(1 + 1));",
        "options": [
          {"a": "129", "b": "8", "c": "121", "d": "None of the above"}
        ],
        "answer": "129",
        "score": 0,
        "status": ""
      },
      {
        "id": 3,
        "question": "Which of the following is not a valid variable name in Python?",
        "options": [
          {"a": "my_variable", "b": "2nd_variable", "c": "variable_3", "d": "totalAmount$"}
        ],
        "answer": "2nd_variable",
        "score": 0,
        "status": ""
      },
      {
        "id": 4,
        "question": "What is the purpose of the 'pass' statement in Python?",
        "options": [
          {"a": "To create an empty block of code", "b": "To stop the execution of a loop", "c": "To indicate an error", "d": "To print a message to the console"}
        ],
        "answer": "To create an empty block of code",
        "score": 0,
        "status": ""
      },
      {
        "id": 5,
        "question": "Which of the following is an immutable data type in Python?",
        "options": [
          {"a": "List", "b": "Tuple", "c": "Dictionary", "d": "Set"}
        ],
        "answer": "Tuple",
        "score": 0,
        "status": ""
      },
      {
        "id": 6,
        "question": "What is the purpose of the 'super()' function in Python?",
        "options": [
          {"a": "To call a method of the parent class", "b": "To create a new instance of a class", "c": "To access a global variable", "d": "To raise an exception"}
        ],
        "answer": "To call a method of the parent class",
        "score": 0,
        "status": ""
      },
      {
        "id": 7,
        "question": "How do you open a file named 'example.txt' in read mode in Python?",
        "options": [
          {"a": "file('example.txt', 'r')", "b": "open('example.txt', 'read')", "c": "open('example.txt', 'r')", "d": "read('example.txt')"}
        ],
        "answer": "open('example.txt', 'r')",
        "score": 0,
        "status": ""
      },
      {
        "id": 8,
        "question": "What is the output of the following code snippet? print('Hello' + 3)",
        "options": [
          {"a": "TypeError", "b": "Hello3", "c": "HelloHelloHello", "d": "Hello 3"}
        ],
        "answer": "TypeError",
        "score": 0,
        "status": ""
      },
      {
        "id": 9,
        "question": "What is the purpose of the 'break' statement in Python?",
        "options": [
          {"a": "To exit the current loop prematurely", "b": "To skip the current iteration of a loop", "c": "To continue to the next iteration of a loop", "d": "To stop the execution of the program"}
        ],
        "answer": "To exit the current loop prematurely",
        "score": 0,
        "status": ""
      },
      {
        "id": 10,
        "question": "How can you check the length of a list named 'myList' in Python?",
        "options": [
          {"a": "len(myList)", "b": "myList.length()", "c": "length(myList)", "d": "count(myList)"}
        ],
        "answer": "len(myList)",
        "score": 0,
        "status": ""
      },
      {
        "id": 11,
        "question": "What is the difference between '==' and 'is' in Python?",
        "options": [
          {"a": "'==' is used for value equality, 'is' is used for reference equality", "b": "'==' is used for reference equality, 'is' is used for value equality", "c": "'==' and 'is' are interchangeable", "d": "There is no difference between '==' and 'is'"}
        ],
        "answer": "'==' is used for value equality, 'is' is used for reference equality",
        "score": 0,
        "status": ""
      },
      {
        "id": 12,
        "question": "What is the purpose of the 'finally' block in a try-except-finally statement?",
        "options": [
          {"a": "To handle exceptions", "b": "To define the main logic of the code", "c": "To ensure that code in the block always runs, whether there is an exception or not", "d": "To terminate the program"}
        ],
        "answer": "To ensure that code in the block always runs, whether there is an exception or not",
        "score": 0,
        "status": ""
      },
      {
        "id": 13,
        "question": "What will be the output of the following code snippet? print(9 / 2)",
        "options": [
          {"a": "4.5", "b": "4", "c": "5.0", "d": "5"}
        ],
        "answer": "4.5",
        "score": 0,
        "status": ""
      },
      {
        "id": 14,
        "question": "Which of the following statements is used to define a function in Python?",
        "options": [
          {"a": "def function_name():", "b": "function function_name():", "c": "function_name def():", "d": "define function_name():"}
        ],
        "answer": "def function_name():",
        "score": 0,
        "status": ""
      },
      {
        "id": 15,
        "question": "What is the purpose of the 'lambda' keyword in Python?",
        "options": [
          {"a": "To define a multiline function", "b": "To create an anonymous function", "c": "To declare a global variable", "d": "To import a module"}
        ],
        "answer": "To create an anonymous function",
        "score": 0,
        "status": ""
      },
      {
        "id": 16,
        "question": "How can you convert a string '123' to an integer in Python?",
        "options": [
          {"a": "int('123')", "b": "str(123)", "c": "float('123')", "d": "parse('123')"}
        ],
        "answer": "int('123')",
        "score": 0,
        "status": ""
      },
      {
        "id": 17,
        "question": "What is the purpose of the '__init__' method in Python?",
        "options": [
          {"a": "To initialize the class variables", "b": "To define the main logic of the class", "c": "To create an instance of the class", "d": "To terminate the program"}
        ],
        "answer": "To initialize the class variables",
        "score": 0,
        "status": ""
      },
      {
        "id": 18,
        "question": "Which of the following is a valid way to comment out multiple lines of code in Python?",
        "options": [
          {"a": "# This is a comment", "b": "// This is a comment", "c": "/* This is a comment */", "d": "''' This is a comment '''"}
        ],
        "answer": "''' This is a comment '''",
        "score": 0,
        "status": ""
      },
      {
        "id": 19,
        "question": "What does the 'range()' function in Python return?",
        "options": [
          {"a": "A list of numbers", "b": "A range object", "c": "A tuple of numbers", "d": "A set of numbers"}
        ],
        "answer": "A range object",
        "score": 0,
        "status": ""
      },
      {
        "id": 20,
        "question": "Which of the following is true about Python's Global Interpreter Lock (GIL)?",
        "options": [
          {"a": "It allows multiple threads to execute in parallel", "b": "It prevents multiple threads from executing in parallel", "c": "It is only applicable to multi-core processors", "d": "It is used for memory management"}
        ],
        "answer": "It prevents multiple threads from executing in parallel",
        "score": 0,
        "status": ""
      },
      {
        "id": 21,
        "question": "What is the purpose of the 'zip()' function in Python?",
        "options": [
          {"a": "To compress files", "b": "To zip two lists together", "c": "To create a zip file", "d": "To unzip files"}
        ],
        "answer": "To zip two lists together",
        "score": 0,
        "status": ""
      },
      {
        "id": 22,
        "question": "How do you check if a key is present in a dictionary named 'my_dict' in Python?",
        "options": [
          {"a": "'key' in my_dict", "b": "my_dict.exists('key')", "c": "my_dict.hasKey('key')", "d": "exists('key') in my_dict"}
        ],
        "answer": "'key' in my_dict",
        "score": 0,
        "status": ""
      },
      {
        "id": 23,
        "question": "What is the purpose of the 'map()' function in Python?",
        "options": [
          {"a": "To apply a function to all elements of a list", "b": "To create a map object", "c": "To map keys to values in a dictionary", "d": "To search for a pattern in a string"}
        ],
        "answer": "To apply a function to all elements of a list",
        "score": 0,
        "status": ""
      },
      {
        "id": 24,
        "question": "What is the output of the following code snippet? console.log('Hello' + String(3));",
        "options": [
          {"a": "Hello3", "b": "TypeError", "c": "Hello4", "d": "Hello"}
        ],
        "answer": "Hello3",
        "score": 0,
        "status": ""
      },
      {
        "id": 25,
        "question": "Which of the following is a correct way to create an empty set in Python?",
        "options": [
          {"a": "{}", "b": "set()", "c": "set({})", "d": "emptySet()"}
        ],
        "answer": "set()",
        "score": 0,
        "status": ""
      }
    ]
  }  
var quizApp = function () {
this.score = 0;
this.qno = 1;
this.currentque = 0;
var totalque = quiz.JS.length;
this.displayQuiz = function (cque) {
this.currentque = cque;
if (this.currentque < totalque) {
$("#tque").html(totalque);
$("#previous").attr("disabled", false);
$("#next").attr("disabled", false);
$("#qid").html(quiz.JS[this.currentque].id + '.');
$("#question").html(quiz.JS[this.currentque].question);
$("#question-options").html("");
for (var key in quiz.JS[this.currentque].options[0]) {
if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
$("#question-options").append(
"<div class='form-check option-block'>" +
"<label class='form-check-label'>" +
"<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
quiz.JS[this.currentque].options[0][key] +
"</span></label>"
);
}
}
}
if (this.currentque <= 0) {
$("#previous").attr("disabled", true);
}
if (this.currentque >= totalque) {
$('#next').attr('disabled', true);
for (var i = 0; i < totalque; i++) {
this.score = this.score + quiz.JS[i].score;
}
return this.showResult(this.score);
}
}
this.showResult = function (scr) {
$("#result").addClass('result');
$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
for (var j = 0; j < totalque; j++) {
var res;
if (quiz.JS[j].score == 0) {
res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
} else {
res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
}
$("#result").append(
'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
'<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
'<div class="last-row"><b>Score:</b> &nbsp;' + res +
'</div>'
);
}
}
this.checkAnswer = function (option) {
var answer = quiz.JS[this.currentque].answer;
option = option.replace(/</g, "&lt;") //for <
option = option.replace(/>/g, "&gt;") //for >
option = option.replace(/"/g, "&quot;")
if (option == quiz.JS[this.currentque].answer) {
if (quiz.JS[this.currentque].score == "") {
quiz.JS[this.currentque].score = 1;
quiz.JS[this.currentque].status = "correct";
}
} else {
quiz.JS[this.currentque].status = "wrong";
}
}
this.changeQuestion = function (cque) {
this.currentque = this.currentque + cque;
this.displayQuiz(this.currentque);
}
}
var jsq = new quizApp();
var selectedopt;
$(document).ready(function () {
jsq.displayQuiz(0);
$('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
//var radio = $(this).find('input:radio');
$(this).prop("checked", true);
selectedopt = $(this).val();
});
});
$('#next').click(function (e) {
e.preventDefault();
if (selectedopt) {
jsq.checkAnswer(selectedopt);
}
jsq.changeQuestion(1);
});
$('#previous').click(function (e) {
e.preventDefault();
if (selectedopt) {
jsq.checkAnswer(selectedopt);
}
jsq.changeQuestion(-1);
});
