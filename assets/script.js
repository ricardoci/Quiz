const Questions = [{
    id: 0,
    q: "What is html?",
    a: [{ text: "makr u", isCorrect: false },
        { text: "Surat", isCorrect: false },
        { text: "Delhi", isCorrect: true },
        { text: "mumbai", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What is css?",
    a: [{ text: "Lampang", isCorrect: false, isSelected: false },
        { text: "phuket", isCorrect: false },
        { text: "Ayutthaya", isCorrect: false },
        { text: "Bangkok", isCorrect: true }
    ]

},
{
    id: 2,
    q: "What is javascript?",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]

},
{
    id: 3,
    q: "What is an object?",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]

},
{
    id: 4,
    q: "What is array?",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]

},
{
    id: 5,
    q: "What is boolean?",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]

},
{
    id: 6,
    q: "What is local storage?",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]

},
{
    id: 7,
    q: "What is innertext?",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]

},{
    id: 8,
    q: "What is a function?",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]

},
{
    id: 9,
    q: "what is a method?",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]

},
{
    id: 10,
    q: "what bootstrap?",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
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

   
   
   
    

    createProgressbar('timeBar', '5s', function() {
        if(timeBar){
        clicked = true;
            gameOver.text('Game Over!!!!');
            
            
            
        }
      
    });
    
  });


}


function a(){
    box.css( 'display',  'none') ;

    quizBox.css( 'display',  'block') ;

}
var gameOver = $('.gameOver')
var box = $('#box')
var quizBox = $('#quizBox')
var play = $('#play-button')