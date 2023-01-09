const Questions = [{
    id: 0,
    q: "What is html?",
    a: [{ text: "How TO Make Language", isCorrect: false },
        { text: "Hero Text More Length", isCorrect: false },
        { text: "Hyper Text Markup Languange", isCorrect: true },
        { text: "Hyper Text Mockup Language", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What is css?",
    a: [{ text: "Cascadeing Style Sheets", isCorrect: true, isSelected: false },
        { text: "Current Styling Source", isCorrect: false },
        { text: "Correct Styling Sheets", isCorrect: false },
        { text: "Cascadeing Strong Style", isCorrect: false }
    ]

},
{
    id: 2,
    q: "What is javascript?",
    a: [{ text: "A value that can either be True or False", isCorrect: false },
        { text: "Cool", isCorrect: false },
        { text: "Object-oriented computer programing language", isCorrect: true },
        { text: "Store multiple values in a single variable", isCorrect: false }
    ]

},
{
    id: 3,
    q: "What is an object?",
    a: [{ text: "Current Styling Source", isCorrect: false },
        { text: "Object-oriented computer programing language", isCorrect: false },
        { text: "A collection of propeties.", isCorrect: true },
        { text: "A value that can either be True or False", isCorrect: false }
    ]

},
{
    id: 4,
    q: "What is array?",
    a: [{ text: "Represents the rendered text content of a node and its descendants.", isCorrect: false },
        { text: "A column of boxes", isCorrect: false },
        { text: "A value that can either be True or False", isCorrect: false },
        { text: "Store multiple values in a single variable", isCorrect: true }
    ]

},
{
    id: 5,
    q: "What is boolean?",
    a: [{ text: "A value that can either be True or False", isCorrect: true },
        { text: "Represents the rendered text content of a node and its descendants.", isCorrect: false },
        { text: "Store multiple values in a single variable", isCorrect: false },
        { text: "A standard convention for accessing and manipulating elements within HTML and XML documents", isCorrect: false }
    ]

},
{
    id: 6,
    q: "What is local storage?",
    a: [{ text: "Actions that can be performed on objects", isCorrect: false },
        { text: "A data storage type of web storage.", isCorrect: true },
        { text: "A name of of storage location.", isCorrect: false },
        { text: "Correct Styling Sheets", isCorrect: false }
    ]

},
{
    id: 7,
    q: "What is innertext?",
    a: [{ text: "High level Pragramming language", isCorrect: false },
        { text: "The text content of the element.", isCorrect: false },
        { text: "The rendered text content of a node and its descendants.", isCorrect: true },
        { text: "Object-oriented computer programing language", isCorrect: false }
    ]

},{
    id: 8,
    q: "What is a function?",
    a: [{ text: "A standard convention for accessing and manipulating elements within HTML and XML documents", isCorrect: false },
        { text: "A procedure in JavaScript that waits for an event to occur.", isCorrect: false },
        { text: "A name of of storage location.", isCorrect: false },
        { text: "None of the above", isCorrect: true }
    ]

},
{
    id: 9,
    q: "what is a method?",
    a: [{ text: "actions that can be performed on objects", isCorrect: true },
        { text: "Store multiple values in a single variable", isCorrect: false },
        { text: "A standard convention for accessing and manipulating elements within HTML and XML documents", isCorrect: false },
        { text: "Actions that can be performed on objects", isCorrect: false }
    ]

},
{
    id: 10,
    q: "what bootstrap?",
    a: [{ text: "The text content of the element", isCorrect: false },
        { text: "A boot brand.", isCorrect: false },
        { text: "food", isCorrect: false },
        { text: "A framework", isCorrect: true }
    ]

}


]



var start = true;
  
// Iterate
function iterate(id) {
  
    // Getting the result display section
    var result = document.getElementsByClassName("question");
    result[0].innerText = "";
  
    // Getting the question
    const question = document.getElementById("result");
  
  
    // Setting the question text
    question.innerText = Questions[id].q;
  
    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
  
  
    // Providing option text 
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
  
    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
  
    var selected = "";
  
    // Show selection for op1
    op1.addEventListener("click", () => {
        
        selected = op1.value;
    })
  
    // Show selection for op2
    op2.addEventListener("click", () => {
        
        selected = op2.value;
    })
  
    // Show selection for op3
    op3.addEventListener("click", () => {
        
        selected = op3.value;
    })
  
    // Show selection for op4
    op4.addEventListener("click", () => {
       
        selected = op4.value;
    })
  
    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("exitButton");
  
    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.backgroundColor = "green";
        } else {
            result[0].innerHTML = "False";
            result[0].style.backgroundColor = "red";
        }
    })
}
  
if (start) {
    iterate("0");
}
  
// Next button and method
const next = document.getElementsByClassName('nextQuestion')[0];
var id = 1;
var questionsNum = $('.questionsNum');

  
next.addEventListener("click", () => {
    
    start = false;
    if (id < 10) {
        
            id++
            questionsNum.children('h1').children('p').text(id);
    
        iterate(id);
        console.log(id);
    }
  
})

function createProgressbar(id, duration, callback) {
    // We select the div that we want to turn into a progressbar
    var timeBar = document.getElementById(id);
    timeBar.className = 'timeBar';
  
    // We create the div that changes width to show progress
    var timeBarinner = document.createElement('div');
    timeBarinner.className = 'inner';
  
    // Now we set the animation parameters
    timeBarinner.style.animationDuration = duration;
  
    // Eventually couple a callback
    if (typeof(callback) === 'function') {
        timeBarinner.addEventListener('animationend', callback);
    }
  
    // Append the progressbar to the main progressbardiv
    timeBar.appendChild(timeBarinner);
  
    // When everything is set up we start the animation
    timeBarinner.style.animationPlayState = 'running';
  }
  


  
function starttime(){
  addEventListener('load', function() {

   
   
   
    

    createProgressbar('timeBar', '30s', function() {
        if(timeBar){


       
            gameOver.text('Game Over!!!!');
            
            
            
        }
      
    });
    
  });


}
starttime()


function a(){
     box.css( 'display',  'none') ;

    quizBox.css( 'display',  'block') ;

}


function b(){

    
    box.css( 'display',  'none') ;
    box2.css( 'display',  'block') ;

    quizBox.css( 'display',  'none') ;
   
    
}

function playAgain(){
    box.css( 'display',  'block') ;
    box2.css( 'display',  'none') ;

    quizBox.css( 'display',  'none') ;

}

var gameOver = $('.gameOver')
var box = $('#box')
var box2 = $('#box2')
var quizBox = $('#quizBox')
var play = $('#play-button')
var play = $('.playAgain')