function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function shuffle(array) { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 





//loading list of selected molecules
const scelected_compound = JSON.parse(localStorage.getItem('scelectedCompound'));

//loading folder of images

const folder = localStorage.getItem('folder')

//loading dictionary
var dictCompound = JSON.parse(localStorage.getItem('dictCompound'));

//create eng to eng dictionary if there is no scelected language

if (dictCompound == false){
  var new_dict = {}
  for (comp of scelected_compound){
    new_dict[comp] = comp;

  }
  dictCompound = new_dict;
}



//shuffeling list of selected molecules
var shuffled_compounds = shuffle(scelected_compound);


var i = 0;
var points = 0;
var pointsNeg = 0;
var clicked
var stop

var badResponses = []


//loading responses and examining images to divs
function loadResponses() {
    
    //earse next button
    document.getElementById("next").style.display = 'none'
    //checking we did not see all compounds
    if (i>=shuffled_compounds.length){
      localStorage.setItem('points', points);
      localStorage.setItem('pointsNeg', pointsNeg);
      localStorage.setItem('badResponses', JSON.stringify(badResponses));

      window.location.href = "final_exam.html";

    }

    //defining name of asking compound and path to its image
    
    var compoundName= dictCompound[shuffled_compounds[i]];

    //define path to its image
    var compoundImage = folder + shuffled_compounds[i] + ".png";

    //defining right and bad responses
   
    var right_res = compoundName;
    var false1_res = compoundName;
    var false2_res = compoundName;
    var false3_res = compoundName;
  

    //randomly creating false responses
    while (false1_res == right_res)
    {false1_res = dictCompound[shuffled_compounds[getRandomInt(shuffled_compounds.length)]]}

    while (false2_res == right_res || false2_res == false1_res)
    {false2_res = dictCompound[shuffled_compounds[getRandomInt(shuffled_compounds.length)]]}

    while (false3_res == right_res || false3_res == false1_res || false3_res == false2_res)
    {false3_res = dictCompound[shuffled_compounds[getRandomInt(shuffled_compounds.length)]]}
    
    //adding responses to random divs
    var res = ["1_res", "2_res", "3_res", "4_res"]
    res = shuffle(res);

    document.getElementById(res[0]).innerHTML = right_res;
    document.getElementById(res[1]).innerHTML = false1_res;
    document.getElementById(res[2]).innerHTML = false2_res;
    document.getElementById(res[3]).innerHTML = false3_res;
    document.getElementById("examing_picture").src = compoundImage;

    globalThis.right_res = shuffled_compounds[i]
    globalThis.right_answer = res[0];
    globalThis.i = i+1;

    console.log(badResponses)
    

}


// reloading responses after clicking next
function next() {
  var div_response = document.getElementById(right_answer + "_div");
  div_response.style.backgroundColor = "#FFFFFF";
  document.getElementById(clicked).style.boxShadow = "0px 0px 0px 5px rgba(0, 0, 0, 1)";

  clicked = "";
  stop = true;
  console.log("cjo")
  loadResponses()

}


function color() {
  
  if (stop){
    stop = false;

    //changing color after clicking to whatewer response
    var div_response = document.getElementById(right_answer + "_div");
    div_response.style.backgroundColor = "#00FF00";
    document.getElementById(clicked).style.boxShadow = "0px 0px 0px 5px rgba(253, 211, 0, 1)";


    //adding points
    document.getElementById("right_points_bar").innerHTML = points;
    document.getElementById("wrong_points_bar").innerHTML = pointsNeg;

    document.getElementById("next").style.display = 'block'
    
    

  }


  }
  


  //functions for adding points after clicking on right response
  function res1() {
    if (stop){
      clicked = "1_res_div"
      if (right_answer == "1_res"){
        points = points+1;
      }
      
      else{
        pointsNeg = pointsNeg+1;
        badResponses.push(right_res);

      }
    }

  }

  function res2() {
    if (stop){
      clicked = "2_res_div"
      if (right_answer == "2_res"){
        points = points+1;
      }
      
      else{
        pointsNeg = pointsNeg+1;
        badResponses.push(right_res);
      }
    }
  }

  function res3() {
    if (stop){
      clicked = "3_res_div"
      if (right_answer == "3_res"){
        points = points+1;
      }
      
      else{
        pointsNeg = pointsNeg+1;
        badResponses.push(right_res);
      }
    }
  }

  function res4() {
    if (stop){
      clicked = "4_res_div"
      if (right_answer == "4_res"){
        points = points+1;
      }
      
      else{
        pointsNeg = pointsNeg+1;
        badResponses.push(right_res);
      }
    }
  }
