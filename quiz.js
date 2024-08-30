
var question = document.getElementById("question")
var  option1 = document.getElementById("option1")
var  option2 = document.getElementById("option2")
var  option3 = document.getElementById("option3")
var  option4 = document.getElementById("option4")
var result = document.getElementById("result")

var question= [{

    "question": "What does CPU stand for?",
    "option 1": "Central Processing Unit",
    "option 2": "Central Processing Unit",
    "option 3": "Computer Personal Unit",
    "option 4": "Central Program Unit",
    "answer": "1"
    }, {   
          
    "Question": "Which of the following is an operating system?",    
    "Option 1": "Microsoft Word",
    "Option 2": "Google Chrome",
    "Option 3": "Windows 10",
    "Option 4": "Adobe Photoshop",
    "answer": "3"
    }, {
    
    "Question": "What is the primary function of RAM in a computer?",
    "Option 1": "Store long-term data",
    "Option 2": "Perform calculations",
    "Option 3": "Provide temporary storage for data in use",
    "Option 4": "Connect to the internet",
    "answer": "3"
    }, {
    
    "Question": "Which programming language is known for its use in web development?",
    "Option 1": "Python",
    "Option 2": "JavaScript",
    "Option 3": "Java",
    "Option 4": "C++",
    "answer": "2"
    }, {
    
    "Question": "What does the acronym HTML stand for?",
    "Option 1": "Hypertext Markup Language",
    "Option 2": "Hyperlink Text Markup Language",
    "Option 3": "Hypertext Multiple Language",
    "Option 4": "High-Level Text Markup Language",
    "answer": "1"
    }, {
    
    "Question": "What is the purpose of an IP address?",
    "Option 1": "Identify a computer on a network",
    "Option 2": "Encrypt data",
    "Option 3": "Increase processing speed",
    "Option 4": "Manage memory",
    "answer": "1"
    }, {
    
    "Question": "What is the function of an SSD in a computer?",
    "Option 1": "Manage the network connection",
    "Option 2": "Increase the computer's RAM",
    "Option 3": "Provide high-speed storage",
    "Option 4": "Control the graphics output",
    "answer": "3"
    }, {
    
    "Question": "Which of the following is an example of an open-source operating system?",
    "Option 1": "Windows 11",
    "Option 2": "macOS",
    "Option 3": "Linux",
    "Option 4": "iOS",
    "answer": "3"
    }, {
    
    "Question": "What does URL stand for?",
    "Option 1": "Uniform Resource Locator",
    "Option 2": "Uniform Resource Link",
    "Option 3": "Universal Resource Locator",
    "Option 4": "Universal Resource Link",
    "answer": "1"
    },{
    
    "Question": "What does URL stand for?",
    "Option 1": "Uniform Resource Locator",
    "Option 2": "Uniform Resource Link",
    "Option 3": "Universal Resource Locator",
    "Option 4": "Universal Resource Link",
    "answer": "1"
    } ]

var currQuestion = 0;
var totalQuestions = question.length;

function loadQuestions(index){
    var data = question[index];
    question.textContent = (index + 1) +"."+ data.question;
    option1.textContent = data.option1;
    option2.textContent = data.option2;
    option3.textContent = data.option3;
    option4.textContent = data.option4;
}

loadQuestions(currQuestion);