
    //JavaScript business logic(back-end)
var answers = ["C", "A", "B", "A"],
tot = answers.length;

function getCheckedValue(radioName) {
var radios = document.getElementsByName(radioName); // Get radio group by-name
for (var y = 0; y < radios.length; y++)
    if (radios[y].checked)
        return radios[y].value;
// return the checked value

}

function getScore() {
var score = 0;

for (var i = 0; i < tot; i++)
    if (getCheckedValue("question" + i) === answers[i])
        score += 5; // increment only
return score;

}
//user interface logic(front-end)
$(document).ready(function () {
$("form").submit(function (event) {
    var answers = [];
    $("#result").text("your score is " + getScore(answers));
    $("#story").show();
    event.preventDefault();
});
});
$("#submit").click(function(){
    $("#quiz").toggle();
    $("#result").slidetoggle();
    $("#score").show();
});
// $("#score").click(function () {
//     $("#result").toggle();
//     $("#quiz").slidetoggle();
//     $("#score").toggle();
// });

