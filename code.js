let quiz = [
{
    'que' :  'which of the following is markup languagw',

    'a' : 'HTML',
    'b' : 'XML',
     'c' : 'CSS',
     'd' : 'Java',
     'correct' : 'HTML',
},
 {
    'que' : 'Who is making the Web standards?',
    
'a' : 'mozila',
'b' : 'The world wide',
'c' : 'Microsoft',
'd' :'Google',
 'correct': 'The world wide',
},


   {
    'que':'Choose the correct HTML element for the largest heading:',
'a':'Heading',
'b':'H1',
'c':'H5',
'd':'Header',
'correct': 'H1',  
  
}
]


let index = 0;
let score =0;
 let  ques = document.getElementById("quebox")
 let  opt1 = document.getElementById("option1")
 let  opt2 = document.getElementById("option2")
 let  opt3 = document.getElementById("option3")
 let  opt4 = document.getElementById("option4")
 
   ques.innerHTML = `${index+1})` +"  "+ quiz[index].que;
   opt1.innerHTML = quiz[index].a; 
   opt2.innerHTML = quiz[index].b;
   opt3.innerHTML = quiz[index].c;
   opt4.innerHTML = quiz[index].d;     
    
   
   
  function next(){
     index++ ;
     ques.innerHTML = `${index+1})` +"  "+   quiz[index].que;
     opt1.innerHTML = quiz[index].a; 
     opt2.innerHTML = quiz[index].b;
     opt3.innerHTML = quiz[index].c;
     opt4.innerHTML = quiz[index].d; 
     
    }

  function check(name){

   if(name.innerHTML === quiz[index].correct){
     
     score+=5
     document.getElementById("score").innerHTML =`Your score is  ${score}` 
     
   }
else{
   
}
}
