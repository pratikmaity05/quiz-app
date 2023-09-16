const questions=[
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'PHP',
        'c': 'CSS',
        'd': 'JavaScript',
        'correct': 'a'
    },
    {
        'que': 'What is the main purpose of a markup language?',
        'a': 'To style web pages',
        'b': 'To handle server-side scripting',
        'c': 'To define the structure of web content',
        'd': 'To create interactive user interfaces',
        'correct': 'c'
    },
    {
        'que': 'Which markup language is used to create the structure of web content?',
        'a': 'PHP',
        'b': 'HTML',
        'c': 'JavaScript',
        'd': 'CSS',
        'correct': 'b'
    },
    {
        'que': 'Which markup language is primarily responsible for defining the presentation of web content?',
        'a': 'CSS',
        'b': 'HTML',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'What does HTML stand for?',
        'a': 'Hyper Text Markup Language',
        'b': 'Hypertext Transfer Protocol',
        'c': 'Home Tool Markup Language',
        'd': 'Hyperlink and Text Markup Language',
        'correct': 'a'
    },
    {
        'que': 'Which of the following is NOT a markup language?',
        'a': 'XML',
        'b': 'HTML',
        'c': 'CSS',
        'd': 'Python',
        'correct': 'd'
    },
    {
        'que': 'What is the purpose of CSS in web development?',
        'a': 'To define the structure of web content',
        'b': 'To handle server-side scripting',
        'c': 'To style web pages',
        'd': 'To create interactive user interfaces',
        'correct': 'c'
    },
    {
        'que': 'Which programming language is commonly used for web development?',
        'a': 'Java',
        'b': 'C++',
        'c': 'Python',
        'd': 'JavaScript',
        'correct': 'd'
    },
    {
        'que': 'What does PHP stand for?',
        'a': 'Personal Home Page',
        'b': 'Hypertext Preprocessor',
        'c': 'PHP: Hypertext Processor',
        'd': 'Powerful Hypertext Parser',
        'correct': 'b'
    },
    {
        'que': 'Which of the following is a client-side scripting language?',
        'a': 'Java',
        'b': 'Python',
        'c': 'PHP',
        'd': 'JavaScript',
        'correct': 'd'
    },
]
let index = 0;
let total = questions.length;
let right=0,wrong = 0;
const qbox = document.getElementById('qbox');
const options=document.querySelectorAll('.option');
const loadQuestions = () =>{
     if(index==total){
        endQuiz();
     }else{
        reset();
     }
     const data=questions[index];
     console.log(data);
     qbox.innerHTML=`${index+1}) ${data.que}`;
     options[0].nextElementSibling.innerHTML=data.a;
     options[1].nextElementSibling.innerHTML=data.b;
     options[2].nextElementSibling.innerHTML=data.c;
     options[3].nextElementSibling.innerHTML=data.d;
}

const submitQuiz = () => {
    const data=questions[index];
    const ans = getAnswer();
    if(ans==data.correct) {
        right++;
    }else{
        wrong++; 
    }
    index++;
    loadQuestions();
    return;
}

const getAnswer = () => {
    let answer ;
    options.forEach(
        (input) => {
            if(input.checked){
                //console.log("yes");
                //console.log(input.value);
                answer= input.value;
               
            }
        }
    )
    return answer;
}
const reset =() => {
    options.forEach(
        (input)=>{
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById('box').innerHTML=`<h3> Thank you! For playig the quiz</h3>
    your score is ${right} out of ${total} points
    
    `
}
loadQuestions();