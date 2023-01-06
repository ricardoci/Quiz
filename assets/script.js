// event selectors
var playbutton = $('#play-button');
var quizbox = $('.quizBox');
var box = $('.box')
var box2 = $('.box2')
var exitButton = $('#exitButton')
var nextQuestion = $('#nextQuestion')
let question = $('.question');




var questions = [{
    
    
    
    numb: 1,
    question: "what is html?",
    answer: "yes",
    options: [ "1", "no","no","yes"]
},



{   numb: 2,
    question: "what is css?",
    answer: "yes",
    options: [ "2", "no","no","2"]


    

},
{   numb: 3,
    question: "what is git?",
    answer: "yes",
    options: [ "3", "no","no","3"]

},
   
{   numb: 4,
        question: "what is version control?",
        answer: "yes",
        options: [ "4", "no","no","4"]
    
    
    
},  
{   numb: 5,
        question: "what is code?",
        answer: "yes",
        options: [ "5", "no","no","5"]
    
}, 
{   numb: 6,
    question: "what is code?",
    answer: "yes",
    options: [ "5", "no","no","5"]

}, 
{   numb: 7,
    question: "what is code?",
    answer: "yes",
    options: [ "5", "no","no","5"]

}, 
{   numb: 8,
    question: "what is code?",
    answer: "yes",
    options: [ "5", "no","no","5"]

}, 
{   numb: 9,
    question: "what is code?",
    answer: "yes",
    options: [ "5", "no","no","5"]

}, 
{   numb: 10,
    question: "wha?",
    answer: "yes",
    options: [ "5", "no","no","5"]

 
    
    
  
       

}];





 

  


// jquery adding questions 

 question = $('.question');
question.children('span').text(questions[0].question);

// jquery adding the number question you are on
var questionsNum = $('.questionsNum');
questionsNum.children('h1').children('p').text(questions[0].numb);

// jquery answers
var answers = $('.answers');
answers.children('option').children('h1').text(questions[0].options[0]);

var answers = $('.answers');
answers.children('option').children('h2').text(questions[0].options[1]);


var answers = $('.answers');
answers.children('option').children('h3').text(questions[0].options[2]);


var answers = $('.answers');
answers.children('option').children('h4').text(questions[0].options[3]);


//event listeners
// play button
playbutton.on('click', function(){

    if(playbutton){

   
box.css('display', "none")

quizbox.css('display', "block ")


    }  
});


// exitButton
exitButton.on('click', function(){

    if(exitButton){

   
box.css('display', "block")

quizbox.css('display', "none ")


    }  
});
// stops quiz at question 10.hides quiz and presents you with your score
nextQuestion.on('click', function(){

    if( index === 10  ){

        
        box2.css('display', "block")
        quizbox.css('display', "none ")
    } 
});

// next button
let index = 1;



nextQuestion.on('click', function(){

    

    if(nextQuestion){
       
       
        
        question.children('span').text(questions[index].question);

        var questionsNum = $('.questionsNum');
        questionsNum.children('h1').children('p').text(questions[index].numb);
        
        // jquery answers
        var answers = $('.answers');
        answers.children('option').children('h1').text(questions[index].options[0]);
        
        var answers = $('.answers');
        answers.children('option').children('h2').text(questions[index].options[1]);
        
        
        var answers = $('.answers');
        answers.children('option').children('h3').text(questions[index].options[2]);
        
        
        var answers = $('.answers');
        answers.children('option').children('h4').text(questions[index].options[3]);

       

       
     console.log(questions[index].numb )
     console.log(index)

    }  
    // adds 1 to the index, if question.length === index is false, next button will not add
    if( questions[index].numb < 11){
        index++;
        
        console.log('dkdk')
    }
   
   

  
   

   
    
   
    
});



