

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
  let quizName = localStorage.getItem("quizName")
  
  
    let question = document.getElementById("question")
    let option1label = document.getElementById("option1label")
    let option2label = document.getElementById("option2label")
    let option3label = document.getElementById("option3label")
    let option4label = document.getElementById("option4label")
    let option1Value = document.getElementById("option1")
    let option2Value = document.getElementById("option2")
    let option3Value = document.getElementById("option3")
    let option4Value = document.getElementById("option4")
    // let correctOption = document.getElementById("correct-option")
    let nextBtn = document.getElementById("next-btn")
    let selectedOption = document.getElementsByName("selectedOption");
    let quizScreen = document.getElementById("quiz-screen")
    let resultScreen = document.getElementById("result-screen") 
    let totalQuestions = document.getElementById("totalQuestion")
    let correctQuestion = document.getElementById("correctQuestion")
    let announcement = document.getElementById("announcement")
    let percentage = document.getElementById("percentage")
    let questionCount= 0
    let totalScore = 0
    if(quizName === "Python"){
      function renderQuestion(){

        quizScreen.style.display = "block"
  resultScreen.style.display = "none"
          question.innerText = pythonQuestions[questionCount].question
          option1label.innerText = pythonQuestions[questionCount].option1
          option2label.innerText = pythonQuestions[questionCount].option2
          option3label.innerText = pythonQuestions[questionCount].option3
          option4label.innerText = pythonQuestions[questionCount].option4
  
          option1Value.value = pythonQuestions[questionCount].option1
          option2Value.value = pythonQuestions[questionCount].option2
          option3Value.value = pythonQuestions[questionCount].option3
          option4Value.value = pythonQuestions[questionCount].option4
  
  }
  window.onload = renderQuestion()
  function deSelect() {
      for (let i = 0; i < selectedOption.length; i++) {
        selectedOption[i].checked = false;
      }
    }
    function showResult() {
      quizScreen.style.display = 'none'
      resultScreen.style.display = 'block'
  
      let percentageCalculate = Math.round(totalScore / pythonQuestions.length * 100)
      if(percentageCalculate < 70) {
          announcement.innerText = ' You are Failed ! Better Luck Next Time'
          announcement.className = 'text-danger h2'
          percentage.classList.remove("border-success")
          percentage.classList.add("border-danger")    }
           else {
          announcement = 'Congratulations ! You are Passed'
          percentage.classList.add("border-success")
          percentage.classList.remove("border-danger")
      }
  
      totalQuestions.innerHTML = pythonQuestions.length
      correctQuestion.innerHTML = totalScore 
      percentage.innerHTML = `${percentageCalculate}%`
  
  }
  function next() {
      let radioChecked = false;
      for (let i = 0; i < selectedOption.length; i++) {
        
        if (selectedOption[i].checked) {
          radioChecked = true;
    console.log(pythonQuestions[questionCount].correctAnswer);
    console.log(selectedOption[i].value);
    
         
          if (selectedOption[i].value === pythonQuestions[questionCount].correctAnswer) {
            totalScore++;
            console.log(totalScore);
            
          }
        }
      }
    
      
      if (!radioChecked) {
        Swal.fire({
          title: "No Option Selected",
          text: "Please Select Any Option",
          icon: "error",
        });
      } else {
       
    
        if (questionCount < pythonQuestions.length - 1) {
          questionCount++;
          
          deSelect();
          renderQuestion();
        } else {
           showResult()
        }
      }
    }
  
// asdasd
    }else if (quizName === "Web And Mobile") {
      function renderQuestion(){

        quizScreen.style.display = "block"
  resultScreen.style.display = "none"
          question.innerText = webDevQuestions[questionCount].question
          option1label.innerText = webDevQuestions[questionCount].option1
          option2label.innerText = webDevQuestions[questionCount].option2
          option3label.innerText = webDevQuestions[questionCount].option3
          option4label.innerText = webDevQuestions[questionCount].option4
  
          option1Value.value = webDevQuestions[questionCount].option1
          option2Value.value = webDevQuestions[questionCount].option2
          option3Value.value = webDevQuestions[questionCount].option3
          option4Value.value = webDevQuestions[questionCount].option4
  
  }
  window.onload = renderQuestion()
  function deSelect() {
      for (let i = 0; i < selectedOption.length; i++) {
        selectedOption[i].checked = false;
      }
    }
    function showResult() {
      quizScreen.style.display = 'none'
      resultScreen.style.display = 'block'
  
      let percentageCalculate = Math.round(totalScore / webDevQuestions.length * 100)
      if(percentageCalculate < 70) {
          announcement.innerText = ' You are Failed ! Better Luck Next Time'
          announcement.className = 'text-danger h2'
          percentage.classList.remove("border-success")
          percentage.classList.add("border-danger")    }
           else {
          announcement = 'Congratulations ! You are Passed'
          percentage.classList.add("border-success")
          percentage.classList.remove("border-danger")
      }
  
      totalQuestions.innerHTML = webDevQuestions.length
      correctQuestion.innerHTML = totalScore 
      percentage.innerHTML = `${percentageCalculate}%`
  
  }
  function next() {
      let radioChecked = false;
      for (let i = 0; i < selectedOption.length; i++) {
        
        if (selectedOption[i].checked) {
          radioChecked = true;
    console.log(webDevQuestions[questionCount].correctAnswer);
    console.log(selectedOption[i].value);
    
         
          if (selectedOption[i].value === webDevQuestions[questionCount].correctAnswer) {
            totalScore++;
            console.log(totalScore);
            
          }
        }
      }
    
      
      if (!radioChecked) {
        Swal.fire({
          title: "No Option Selected",
          text: "Please Select Any Option",
          icon: "error",
        });
      } else {
       
    
        if (questionCount < webDevQuestions.length - 1) {
          questionCount++;
          
          deSelect();
          renderQuestion();
        } else {
           showResult()
        }
      }
    }
  
// asdasd
    
    }else if (quizName === "Module-1 Exam"){function renderQuestion(){

      quizScreen.style.display = "block"
resultScreen.style.display = "none"
        question.innerText = module1Exam[questionCount].question
        option1label.innerText = module1Exam[questionCount].option1
        option2label.innerText = module1Exam[questionCount].option2
        option3label.innerText = module1Exam[questionCount].option3
        option4label.innerText = module1Exam[questionCount].option4

        option1Value.value = module1Exam[questionCount].option1
        option2Value.value = module1Exam[questionCount].option2
        option3Value.value = module1Exam[questionCount].option3
        option4Value.value = module1Exam[questionCount].option4

}
window.onload = renderQuestion()
function deSelect() {
    for (let i = 0; i < selectedOption.length; i++) {
      selectedOption[i].checked = false;
    }
  }
  function showResult() {
    quizScreen.style.display = 'none'
    resultScreen.style.display = 'block'

    let percentageCalculate = Math.round(totalScore / module1Exam.length * 100)
    if(percentageCalculate < 70) {
        announcement.innerText = ' You are Failed ! Better Luck Next Time'
        announcement.className = 'text-danger h2'
        percentage.classList.remove("border-success")
        percentage.classList.add("border-danger")    }
         else {
        announcement = 'Congratulations ! You are Passed'
        percentage.classList.add("border-success")
        percentage.classList.remove("border-danger")
    }

    totalQuestions.innerHTML = module1Exam.length
    correctQuestion.innerHTML = totalScore 
    percentage.innerHTML = `${percentageCalculate}%`

}
function next() {
    let radioChecked = false;
    for (let i = 0; i < selectedOption.length; i++) {
      
      if (selectedOption[i].checked) {
        radioChecked = true;
  console.log(module1Exam[questionCount].correctAnswer);
  console.log(selectedOption[i].value);
  
       
        if (selectedOption[i].value === module1Exam[questionCount].correctAnswer) {
          totalScore++;
          console.log(totalScore);
          
        }
      }
    }
  
    
    if (!radioChecked) {
      Swal.fire({
        title: "No Option Selected",
        text: "Please Select Any Option",
        icon: "error",
      });
    } else {
     
  
      if (questionCount < module1Exam.length - 1) {
        questionCount++;
        
        deSelect();
        renderQuestion();
      } else {
         showResult()
      }
    }
  }

// asdasd
  }

