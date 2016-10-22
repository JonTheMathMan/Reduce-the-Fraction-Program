var divisionQuestions =[];
var askedQuestions =[];
var answers =[];
var grades =[];
var notPrime =[];
buildTheMathArrays();
displayQuestion();

function buildTheMathArrays()
{
for(var i=3;i<=144;i++)
	{
		for(var u=2;u<i;u++)
			{
				if(i/u == parseInt(i/u) && i!=notPrime[notPrime.length-1])
					{
						notPrime.push(i);
					}
			}
	}
for(var r=0;r<=(notPrime.length-1);r++)
	{
		for(var q=2;q<notPrime[r];q++)
			{
				if(notPrime[r]/q == parseInt(notPrime[r]/q))
					{
						divisionQuestions.push(notPrime[r]+" over  "+q);
					}
			}
	}
}

function displayQuestion()
{
	askedQuestions.push(divisionQuestions.splice(Math.floor(Math.random()*divisionQuestions.length),1) + String.fromCharCode(10));
	document.getElementById("questionBox").value = askedQuestions[askedQuestions.length-1];
}

function submitAnswer()
{
	var answer = document.getElementById("answerBox").value;
	answers.push(answer + String.fromCharCode(10));
	document.getElementById("resultBox1").value = "Problems finished:"+String.fromCharCode(10)+answers.length+String.fromCharCode(10)+"Total Possible leftover:"+String.fromCharCode(10)+divisionQuestions.length;
	document.getElementById("resultBox2").value = askedQuestions;
	document.getElementById("resultBox3").value = answers;
}

function checkAnswer()
{
	var first = parseInt(askedQuestions[askedQuestions.length-2].slice(0));
	var second = parseInt(askedQuestions[askedQuestions.length-2].slice(8));
	if(first/second == answers[answers.length-1])
		{
			grades.push("Correct" + String.fromCharCode(10));
		}else{
			grades.push("Wrong" + String.fromCharCode(10));
		}
	document.getElementById("resultBox4").value = grades;
}

var field = document.getElementById("answerBox");

field.addEventListener("keydown", function (e){
    if (e.keyCode === 13) {
		if(document.getElementById("answerBox").value != "")
			{
        		displayQuestion();
				submitAnswer();
				checkAnswer();
				document.getElementById("answerBox").value = "";
			}
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
    }
}, false);