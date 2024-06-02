var rand1="0";
var rand2="0";
var count1="0";
var count2="0";
function imageGenerator1(){
    var randomnumber=Math.floor(Math.random()*6)+1;
    var randomImage="dice"+randomnumber+".png";
    var image=document.querySelectorAll("img")[0];
     image.setAttribute("src",randomImage);
    rand1=randomnumber;
    document.querySelectorAll("p")[0].innerHTML="Score: "+count1;
}

function imageGenerator2(){
    var randomnumber=Math.floor(Math.random()*6)+1;
    var randomImage="dice"+randomnumber+".png";
    var image=document.querySelectorAll("img")[1];
     image.setAttribute("src",randomImage);
     rand2=randomnumber;

    if(rand1>rand2){
        count1++;
    }
    else if (rand2>rand1) {
        count2++;
    }

    document.querySelectorAll("p")[0].innerHTML="Score: "+count1;
    document.querySelectorAll("p")[2].innerHTML="Score: "+count2;

}
document.getElementById("mybtn1").addEventListener("click", imageGenerator1);
document.getElementById("mybtn2").addEventListener("click", imageGenerator2);