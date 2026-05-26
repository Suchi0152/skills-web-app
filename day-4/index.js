function checkResult(){

let team1 = document.getElementById("team1").value;
let vote1 = Number(document.getElementById("vote1").value);

let team2 = document.getElementById("team2").value;
let vote2 = Number(document.getElementById("vote2").value);

let result = document.getElementById("result");

if(team1==="" || team2==="" || vote1==="" || vote2==="")
{
result.innerHTML="Please fill all fields";
return;
}

if(vote1 > vote2){

result.innerHTML=
"🏆 Winner: " + team1 + "<br>" +
"❌ Loser: " + team2 + "<br>" +
"Audience Support: " + vote1 + "%";

}
else if(vote2 > vote1){

result.innerHTML=
"🏆 Winner: " + team2 + "<br>" +
"❌ Loser: " + team1 + "<br>" +
"Audience Support: " + vote2 + "%";

}
else{

result.innerHTML=
"🤝 Match Tie<br>" +
"Both received " + vote1 + "%";

}

}
