const pythonQuestions = [
    {
      question: "What is the correct file extension for Python files?",
      option1: ".pt",
      option2: ".python",
      option3: ".py",
      option4: ".pyt",
      correctAnswer: ".py"
    },
    {
      question: "Which keyword is used to begin a conditional statement in Python?",
      option1: "if",
      option2: "when",
      option3: "do",
      option4: "switch",
      correctAnswer: "if"
    },
    {
      question: "How do you start a comment in Python?",
      option1: "//",
      option2: "#",
      option3: "/*",
      option4: "<!--",
      correctAnswer: "#"
    },
    {
      question: "What will be the output of len([1, 2, 3, 4])?",
      option1: "3",
      option2: "4",
      option3: "5",
      option4: "Error",
      correctAnswer: "4"
    },
    {
      question: "What does `append()` do in Python?",
      option1: "Adds a new element to the end of the list",
      option2: "Removes the last element from the list",
      option3: "Clears the list",
      option4: "Sorts the list",
      correctAnswer: "Adds a new element to the end of the list"
    },
    {
      question: "Which method can be used to convert a string to lowercase?",
      option1: "toLowerCase()",
      option2: "lower()",
      option3: "tolower()",
      option4: "strlower()",
      correctAnswer: "lower()"
    },
    {
      question: "How do you create a dictionary in Python?",
      option1: "{key: value}",
      option2: "[key, value]",
      option3: "(key: value)",
      option4: "<key: value>",
      correctAnswer: "{key: value}"
    },
    {
      question: "Which of the following is a Python tuple?",
      option1: "[1, 2, 3]",
      option2: "(1, 2, 3)",
      option3: "{1, 2, 3}",
      option4: "<1, 2, 3>",
      correctAnswer: "(1, 2, 3)"
    },
    {
      question: "What is the output of 10 // 3 in Python?",
      option1: "3.333",
      option2: "3",
      option3: "4",
      option4: "Error",
      correctAnswer: "3"
    },
    {
      question: "Which of the following is a valid Python letiable name?",
      option1: "1_letiable",
      option2: "letiable_1",
      option3: "letiable-1",
      option4: "letiable.1",
      correctAnswer: "letiable_1"
    },
    {
      question: "Which module in Python is used for mathematical operations?",
      option1: "math",
      option2: "cmath",
      option3: "random",
      option4: "statistics",
      correctAnswer: "math"
    },
    {
      question: "How can you generate random numbers in Python?",
      option1: "Using the math module",
      option2: "Using the random module",
      option3: "Using the numpy module",
      option4: "Using the os module",
      correctAnswer: "Using the random module"
    },
    {
      question: "Which Python statement is used to handle exceptions?",
      option1: "try/except",
      option2: "catch/except",
      option3: "try/catch",
      option4: "throw/catch",
      correctAnswer: "try/except"
    },
    {
      question: "Which of the following is not a Python keyword?",
      option1: "return",
      option2: "pass",
      option3: "loop",
      option4: "yield",
      correctAnswer: "loop"
    },
    {
      question: "What does the `is` keyword do in Python?",
      option1: "Checks for equality",
      option2: "Checks for identity",
      option3: "Checks for membership",
      option4: "Assigns a value",
      correctAnswer: "Checks for identity"
    }
  ];
 const webDevQuestions = [
    {
      question: "What does HTML stand for?",
      option1: "HyperText Markdown Language",
      option2: "HyperText Markup Language",
      option3: "HyperTool Markup Language",
      option4: "HyperLink Markup Language",
      correctAnswer: "HyperText Markup Language"
    },
    {
      question: "Which HTML tag is used for the largest heading?",
      option1: "<h1>",
      option2: "<h6>",
      option3: "<heading>",
      option4: "<head>",
      correctAnswer: "<h1>"
    },
    {
      question: "What property is used in CSS to change the background color?",
      option1: "color",
      option2: "background-color",
      option3: "bgcolor",
      option4: "background",
      correctAnswer: "background-color"
    },
    {
      question: "What does the `let` keyword do in JavaScript?",
      option1: "Declares a block-scoped letiable",
      option2: "Declares a function-scoped letiable",
      option3: "Declares a constant letiable",
      option4: "Declares a class",
      correctAnswer: "Declares a function-scoped letiable"
    },
    {
      question: "Which method is used to fetch data in React?",
      option1: "useFetch",
      option2: "useEffect",
      option3: "getData",
      option4: "fetchData",
      correctAnswer: "useEffect"
    },
    {
      question: "What is JSX in React?",
      option1: "JavaScript XML",
      option2: "JavaScript Extension",
      option3: "Java Syntax Extension",
      option4: "JavaScript XHTML",
      correctAnswer: "JavaScript XML"
    },
    {
      question: "What is the primary purpose of Next.js?",
      option1: "Server-side rendering",
      option2: "Styling components",
      option3: "Managing state",
      option4: "Handling APIs",
      correctAnswer: "Server-side rendering"
    },
    {
      question: "Which tag is used to include JavaScript in HTML?",
      option1: "<script>",
      option2: "<js>",
      option3: "<javascript>",
      option4: "<code>",
      correctAnswer: "<script>"
    },
    {
      question: "Which CSS property is used to set the text color?",
      option1: "font-color",
      option2: "color",
      option3: "text-color",
      option4: "foreground-color",
      correctAnswer: "color"
    },
    {
      question: "What is the default JavaScript event for submitting a form?",
      option1: "onSubmit",
      option2: "submitEvent",
      option3: "submit",
      option4: "onClick",
      correctAnswer: "onSubmit"
    },
    {
      question: "How can you create a new React component?",
      option1: "Using a class or function",
      option2: "Using a React template",
      option3: "Using an object",
      option4: "Using an array",
      correctAnswer: "Using a class or function"
    },
    {
      question: "How do you apply global styles in Next.js?",
      option1: "By importing CSS in _app.js",
      option2: "Using inline styles",
      option3: "By importing styles in _document.js",
      option4: "Using CSS modules",
      correctAnswer: "By importing CSS in _app.js"
    },
    {
      question: "What does `flex-direction` property do in CSS Flexbox?",
      option1: "Sets the alignment",
      option2: "Defines the direction of the main axis",
      option3: "Defines the spacing between items",
      option4: "Defines the wrapping behavior",
      correctAnswer: "Defines the direction of the main axis"
    },
    {
      question: "Which method is used to update state in React functional components?",
      option1: "setState",
      option2: "updateState",
      option3: "setNewState",
      option4: "useState",
      correctAnswer: "useState"
    },
    {
      question: "What is the correct way to link a CSS file to an HTML document?",
      option1: "<link rel='stylesheet' href='style.css'>",
      option2: "<css link='style.css'>",
      option3: "<style href='style.css'>",
      option4: "<script src='style.css'>",
      correctAnswer: "<link rel='stylesheet' href='style.css'>"
    }
  ];
 const module1Exam = [
    {
      question: "What does CSS stand for?",
      option1: "Cascading Style Sheets",
      option2: "Computer Style Sheets",
      option3: "Creative Style Sheets",
      option4: "Custom Style Sheets",
      correctAnswer: "Cascading Style Sheets"
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      option1: "<link>",
      option2: "<a>",
      option3: "<url>",
      option4: "<href>",
      correctAnswer: "<a>"
    },
    {
      question: "How do you add a comment in HTML?",
      option1: "// This is a comment",
      option2: "<!-- This is a comment -->",
      option3: "/* This is a comment */",
      option4: "' This is a comment",
      correctAnswer: "<!-- This is a comment -->"
    },
    {
      question: "Which CSS property is used to change the font of an element?",
      option1: "font-family",
      option2: "font-style",
      option3: "font-type",
      option4: "font-weight",
      correctAnswer: "font-family"
    },
    {
      question: "What does the `<ul>` tag represent in HTML?",
      option1: "Unordered list",
      option2: "Ordered list",
      option3: "Underline",
      option4: "Universal link",
      correctAnswer: "Unordered list"
    },
    {
      question: "What is the default position value in CSS?",
      option1: "relative",
      option2: "absolute",
      option3: "fixed",
      option4: "static",
      correctAnswer: "static"
    },
    {
      question: "How do you make text bold in HTML?",
      option1: "<strong>",
      option2: "<bold>",
      option3: "<b>",
      option4: "<em>",
      correctAnswer: "<b>"
    },
    {
      question: "Which property is used to set the margin in CSS?",
      option1: "padding",
      option2: "border",
      option3: "margin",
      option4: "spacing",
      correctAnswer: "margin"
    },
    {
      question: "What is the function of the `<title>` tag in HTML?",
      option1: "Defines the title of the webpage",
      option2: "Defines the main heading of the webpage",
      option3: "Creates a navigation bar",
      option4: "Specifies a tooltip for an element",
      correctAnswer: "Defines the title of the webpage"
    },
    {
      question: "Which CSS property is used to control the visibility of an element?",
      option1: "hidden",
      option2: "display",
      option3: "visibility",
    }]



let signUpInputName = document.getElementById("signup-name")
let signUpInputEmail = document.getElementById("signup-email")
let signUpInputPassword = document.getElementById("signup-password")
let signUpBtn = document.getElementById("signup-btn")
let loginInputEmail = document.getElementById("login-email")
let loginInputPassword = document.getElementById("login-password")
let quiz1DetailBtn = document.getElementById("accordion1-btn")
let quiz2DetailBtn = document.getElementById("accordion2-btn");
let userNameDisplay = document.getElementById("wlecome");
let userName;

let userData = []
function signUp(){
let signUpInputNameValue = signUpInputName.value;
let signUpInputEmailValue = signUpInputEmail.value;
let signUpInputPasswordValue = signUpInputPassword.value;
function EnterData(){
    this.name=signUpInputNameValue;
    this.email=signUpInputEmailValue,
    this.password=signUpInputPasswordValue
}

let flag = false
for(let data in userData){
    if (userData[data].name === signUpInputNameValue){
        swal.fire({
            title: 'Error!',
            text: 'Email already exist Login instead',
            icon: 'error',
            confirmButtonText: 'OK'
          }) 
        
    flag = true
    }break 
    }

if (!flag) {
    userData.unshift(new EnterData())  
        swal.fire({
            title: 'Success!',
            text: 'You have successfully signed up',
            icon: 'success',
            confirmButtonText: 'OK'
          })
}
}
function login() {
    let loginInputEmailValue = loginInputEmail.value;
    let loginInputPasswordValue = loginInputPassword.value;
    let flag = false
    for(let data in userData){
        if(userData[data].email === loginInputEmailValue && userData[data].password === loginInputPasswordValue){
           userName = userData[data].name
           console.log(userData[data].name);
           
           
           
              flag = true
              document.location.href = "./welcome/welcome.html"
            }
    }
    if (!flag) {
        swal.fire({
            title: 'Error!',
            text: 'Invalid Email or Password',
            icon: 'error',
            confirmButtonText: 'OK'
          })
    }
}






let quizDetailScreen = document.getElementById("exam-detail-screen")
let quizDetailHeading = document.getElementById("exam-detail-main-heading")
let quizNameScreen = document.getElementById("exam-screen")
let quizName = document.getElementById("exam-screen-detal")

window.onload = quizDetailScreen.style.display = "none"
function join(){
    quizNameScreen.style.display = "none"
    quizDetailScreen.style.display = "block"
    
    
        if (event.target.id === "Python"  || event.target.id === "Web And Mobile" || event.target.id === "Module-1 Exam" ){
            
    quizDetailHeading.innerText = event.target.id
    console.log(event.target.id);
    console.log(quizDetailHeading);
    
        document.getElementById("quiz-name").innerText = quizDetailHeading.innerText
            
    if (event.target.id === "Python") {
        document.getElementById("accordion1-btn").innerText = "Python"    }else if(event.target.id === "Web And Mobile" ){
            document.getElementById("accordion1-btn").innerText = "Web Development"
        }else if(event.target.id === "Module-1 Exam"){
            document.getElementById("accordion1-btn").innerText = "Module-1 Exam"
        }
    
            
        }
       
}

function continueQuiz(){
document.location.href = "./Exams/quiz.html"
localStorage.setItem("quizName", quizDetailHeading.innerText)
}



