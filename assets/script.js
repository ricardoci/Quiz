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


    

},
{   numb: 3,
    question: "what is git?",
    answer: "yes",
    options: [ "no", "no","no","yes"]


    

}];
// the findIndex method allows for me to acces specific propeties from an object array.
var result = questions.findIndex(item => item.question === 2);
    


var r = [questions[0].question, questions[1].question,questions[2].question];


//this question randomizes questions

console.log(r[0],r[2])


