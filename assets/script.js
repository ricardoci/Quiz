// event selectors
var playbutton = $('#play-button');
var quizbox = $('.quizBox');
var box = $('.box')
var exitButton = $('#exitButton')
var nextQuestion = $('#nextQuestion')





var questions = [{
    
    
    
    numb: 1,
    question: "what is html?",
    answer: "yes",
    options: [ "1", "no","no","1"]
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


    

}];



 

  


// jquery adding questions 

var question = $('.question');
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

// next button
var index = 1;



nextQuestion.on('click', function(){

    

    if(nextQuestion){
       
       
        var question = $('.question');
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

        

    }  
    // adds 1 to the index
    if(question.length === index){
        index++;
        console.log(index)
    }
   
    
});



