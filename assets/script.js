var questions = [{
    
    
    
    numb: 1,
    question: "what is html?",
    answer: "yes",
    options: [ "yes", "no","no","no"]
},



{   numb: 2,
    question: "what is css?",
    answer: "yes",
    options: [ "no", "no","no","yes"]


    

}]
// the findIndex method allows for me to acces specific propeties from an object array.
var result = questions.findIndex(item => item.question === 2);
    


var r = ([questions[0].question, questions[1].question]);


//this question randomizes questions
function random(arr){
  
    var rp = Math.floor(Math.random() * arr.length);
    var pr = arr[rp];
  
     return pr;
  }
console.log(random(r));





