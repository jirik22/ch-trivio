var points = localStorage.getItem("points");
var pointsNeg = localStorage.getItem("pointsNeg");
var language = localStorage.getItem("language");

function loadPoints(){
 
    document.getElementById("right_points_bar").innerHTML = points;
    document.getElementById("wrong_points_bar").innerHTML = pointsNeg;
    

    //load language
    
    if (pointsNeg <4){
        if(language == "en"){
            document.getElementById("congrats").innerHTML = "Well done! &#128170";
        }

        if(language == "cz"){
            document.getElementById("congrats").innerHTML = "Dobrá práce &#128170";
        }
    }

    if (pointsNeg >= 4){
        if(language == "en"){
            document.getElementById("congrats").innerHTML = "Good work, but you can do it even better.";
            document.getElementById("pracice_again").innerHTML = "CONTINUE PRACTICING UNKNOWN FLASHCARDS";
        }

        if(language == "cz"){
            document.getElementById("congrats").innerHTML = "Dobrá práce, ale dokážeš to lépe";
            document.getElementById("pracice_again").innerHTML = "PROCVIČUJ DÁLE NEZNÁMÉ KARTIČKY";
        }

        document.getElementById("pracice_again").style.display = 'block';
    }


}


function practiceOver(){
    var badResponses = JSON.parse(localStorage.getItem('badResponses'))
    localStorage.setItem('scelectedCompound', JSON.stringify(badResponses));

    window.location.href = "exam.html";
}