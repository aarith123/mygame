player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " :";
document.getElementById("player2_name").innerHTML = player2_name + " :";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn :  " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn :  " + player2_name;
function send()
{
var get_word = document.getElementById("word").value;
word = get_word.toLowerCase();
char1  = word.charAt(1);
length2 = Math.floor(word.length/2);
char2 = word.charAt(length2);
length1 = word.length - 1;
char3 =  word.charAt(length1);
remove1 = word.replace(char1,"_");
remove2 = remove1.replace(char2,"_");
remove3 = remove2.replace(char3,"_");
question_word = "<h4 id = 'word_display'> Q. "+remove3+" </h4>";
text_input = "<br> <br> Answer <input type = 'text' id = 'input_check'>";
check_button = "<br> <br> <button class = 'btn btn-info' onclick = 'check()'> check </button>";
row = question_word + text_input + check_button;
console.log(row);
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}
question_turn="player1";
answer_turn="player2";
function check()
{
get_answer = document.getElementById("input_check").value,
answer = get_answer.toLowerCase();
if(word==answer)
{
if(answer_turn=="player1")
{
player1_score = player1_score + 1; 
console.log("player1"+player1_score);
document.getElementById("player1_score").innerHTML = player1_score;
}
else
{
player2_score = player2_score + 1;
console.log("player2"+player2_score);
document.getElementById("player2_score").innerHTML = player2_score;

}
} 
if(question_turn=="player1")
{
question_turn = "player2";
document.getElementById("player_question").innerHTML = "Question Turn :  " + player2_name;
}
else
{
question_turn = "player1";
document.getElementById("player_question").innerHTML = "Question Turn :  " + player1_name;
}
if(answer_turn=="player1")
{
answer_turn = "player2";
document.getElementById("player_answer").innerHTML = "Answer Turn :  " + player2_name;
}
else
{
answer_turn = "player1";
document.getElementById("player_answer").innerHTML = "Answer Turn :  " + player1_name;
}
document.getElementById("output").innerHTML = "";


}