'use strict'

let userName=prompt('What is your Name?')
console.log('Welcome  '+ userName)
alert('Welcome:  ' + userName)

let score=0;



function Q1 ()
{
  let edu=prompt('Am I an Enginer?')

edu=edu.toLowerCase()
if (edu == 'yes' || edu == 'y' )
 { 
   alert('Yes, Im Electrical Engineer')
  score++;} 
else if (edu == 'no' || edu == 'n') 
{  
    alert(' I am Electrical Engineer');
}
else{ 
      alert('Please Answer by Yes/NO or Y/N');
    }

}
Q1();

 function Q2 ()
 {
  let uni=prompt('Did I graduate from The University of Jordan?')

  uni=uni.toLowerCase()
 if (uni == 'yes' || uni == 'y' )
  {
 alert('Yes, I graduated from The University of Jordan')
 score++;} 
 else if (uni == 'no' || uni== 'n') 
 { 
 alert('Actually, I Graduated from The University of Jordan')} 
 else { 
 alert('Please Answer by Yes/NO or Y/N')}
 
 }
Q2();

function Q3 ()
{
  
 let myColor=prompt('Is Dark Blue my favorite color?')
 myColor=myColor.toLowerCase()
 if ( myColor == 'yes' || myColor == 'y' )
 {
alert('Yes, Dark Blue my is favorite color')
score++;} 
else if ( myColor== 'no' ||  myColor== 'n') 
{ 
alert('Actually, Dark Blue my is favorite color') } 
else { 
alert('Please Answer by Yes/NO or Y/N')}


}
Q3();

function Q4 ()
{
  let homeCountry=prompt('Am I a Jordanian?')
homeCountry=homeCountry.toLowerCase()
 if ( homeCountry == 'yes' || homeCountry == 'y' )
 {
alert('Yes, I am a Jordanian')
score++;} 
else if ( homeCountry== 'no' ||  homeCountry== 'n') 
{ 
alert('Actually, I am a Jordanian') } 
else { 
alert('Please Answer by Yes/NO or Y/N')}

}

Q4();

function Q5 ()

{
  
 let myGerman=prompt('Can I speak German' )
 myGerman=myGerman.toLowerCase()
 if ( myGerman == 'yes' || myGerman == 'y' )
 {
alert(' Actually Not yet ^_^')} 
else if ( myGerman== 'no' ||  myGerman== 'n') 
{  
alert('you are right but soon I will')
score++;} 
else { 
alert('Please Answer by Yes/NO or Y/N')}
}

Q5();
function Q6 ()
{
  for (let i=0; i<4; i++)
  {
  let yearsOfExp= prompt ('How many years of experience do I have ?')
  if (yearsOfExp== 7)
  {
   alert(`Correct, I have 7 years of experience `)
   score++;
   break;}
  
  else if (yearsOfExp > 7)
  {
  alert(`It is too high`)}
  else if (yearsOfExp < 7)
  {
  alert(`It is too low`)}
  
  if (i===3)// to make sure that we have excute this loop 4 times then alret this message
  {
  alert(`I have 7 years of experience`)}
  
  }
  
}

Q6();




function Q7 ()
{

  
let snacks=['candy', 'chocolate', 'bescuit']
let flag=false;
for(let i=1;i<=6;i++)
{
  let myFavSnack= prompt('what is my favorite snack') 
   for(let j=0;j<=snacks.length;j++)
   {if (myFavSnack == snacks[j]) 
  {
    alert(`Yes you are right`)
    flag=true;
    score++;
  break;
   }}

   if (flag==true)
   {break;}
   }
   


alert(`Actually my Favorite Snacks are ${snacks}`)


}

Q7();

alert(`Thank you  ${userName} for your visit your final score is ${score} out of 7`)