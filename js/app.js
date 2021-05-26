'use strict'

let userName=prompt('What is your Name?')
console.log('Welcome  '+ userName)
alert('Welcome:  ' + userName)

let score=0;
let edu=prompt('Am I an Enginer?')

edu=edu.toLowerCase()
if (edu == 'yes' || edu == 'y' )
 { console.log('Yes, Im Electrical Engineer')
   alert('Yes, Im Electrical Engineer')
  score++;} 
else if (edu == 'no' || edu == 'n') 
{   console.log(' I am Electrical Engineer')
    alert(' I am Electrical Engineer')
}
else{ console.log('Please Answer by Yes/NO or Y/N')
      alert('Please Answer by Yes/NO or Y/N')}


 let uni=prompt('Did I graduate from The University of Jordan?')

 uni=uni.toLowerCase()
if (uni == 'yes' || uni == 'y' )
 {console.log('Yes, I Graduated from The University of Jordan')
alert('Yes, I graduated from The University of Jordan')
score++;} 
else if (uni == 'no' || uni== 'n') 
{ console.log('Actually, I Graduated from The University of Jordan')  
alert('Actually, I Graduated from The University of Jordan')} 
else { console.log('Please Answer by Yes/NO or Y/N')
alert('Please Answer by Yes/NO or Y/N')}


 let myColor=prompt('Is Dark Blue my favorite color?')
 myColor=myColor.toLowerCase()
 if ( myColor == 'yes' || myColor == 'y' )
 {console.log('Yes, Dark Blue is my favorite color')
alert('Yes, Dark Blue my is favorite color')
score++;} 
else if ( myColor== 'no' ||  myColor== 'n') 
{ console.log('Actually, Dark Blue is my favorite color') 
alert('Actually, Dark Blue my is favorite color') } 
else { console.log('Please Answer by Yes/NO or Y/N')
alert('Please Answer by Yes/NO or Y/N')}


let homeCountry=prompt('Am I a Jordanian?')
homeCountry=homeCountry.toLowerCase()
 if ( homeCountry == 'yes' || homeCountry == 'y' )
 {console.log('Yes, I am a Jordanian')
alert('Yes, I am a Jordanian')
score++;} 
else if ( homeCountry== 'no' ||  homeCountry== 'n') 
{ console.log('Actually, I am a Jordanian') 
alert('Actually, I am a Jordanian') } 
else { console.log('Please Answer by Yes/NO or Y/N')
alert('Please Answer by Yes/NO or Y/N')}

 let myGerman=prompt('Can I speak German' )
 myGerman=myGerman.toLowerCase()
 if ( myGerman == 'yes' || myGerman == 'y' )
 {console.log(' Actually Not yet ^_^')
alert(' Actually Not yet ^_^')} 
else if ( myGerman== 'no' ||  myGerman== 'n') 
{ console.log('you are right but soon I will')  
alert('you are right but soon I will')
score++;} 
else { console.log('Please Answer by Yes/NO or Y/N')
alert('Please Answer by Yes/NO or Y/N')}


for (let i=0; i<4; i++)
{
let yearsOfExp= prompt ('How many years of experience do I have ?')
if (yearsOfExp== 7)
{console.log(`Correct, I have 7 years of experience `)
 alert(`Correct, I have 7 years of experience `)
 score++;
 break;}

else if (yearsOfExp > 7)
{console.log(` It is too high`)
alert(`It is too high`)}
else if (yearsOfExp < 7)
{console.log(` It is too low`)
alert(`It is too low`)}

if (i===3)// to make sure that we have excute this loop 4 times then alret this message
{console.log(`I have 7 years of experience`)
alert(`I have 7 years of experience`)}

}




let snacks=['candy', 'chocolate', 'bescuit']
let flag=false;
for(let i=1;i<=6;i++)
{
  let myFavSnack= prompt('what is my favorite snack') 
   for(let j=0;j<=snacks.length;j++)
   {if (myFavSnack == snacks[j]) 
  { console.log(`Yes you are right`)
    alert(`Yes you are right`)
    flag=true;
    score++;
  break;
   }}

   if (flag==true)
   {break;}
   }
   

console.log(`Actually my Favorite Snacks are`)
alert(`Actually my Favorite Snacks are ${snacks}`)


alert(`Thank you  ${userName} for your visit your final score is ${score} out of 7`)