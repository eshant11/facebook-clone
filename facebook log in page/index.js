
let createAcc = document.getElementById("createAcc");
createAcc.addEventListener('click', function () {
   let firstName = document.getElementById("firstName").value;
   let lastName = document.getElementById('lastName').value;
   localStorage.setItem('fname', `${firstName} ${lastName}`);

   console.log(firstName," ", lastName);

   let username = document.getElementById("username").value;
   localStorage.setItem('username', username);

   console.log(username);

  let floatingPassword = document.getElementById("floatingPassword").value;
   localStorage.setItem('password', JSON.stringify(floatingPassword));

console.log(floatingPassword);

  let date = document.getElementById("date").value;
   let month = document.getElementById("month").value;
  let  year = document.getElementById("year").value;
   localStorage.setItem('date', `${date}: ${month}: ${year}`);

console.log('date: ', `${date}: ${month}: ${year}`);

function displayRadioValue() {
   var ele = document.getElementsByName('gender');
    
// Array dega jitne bhi radio button hai un sabhika 
// console.log(ele); 
   for(i = 0; i < ele.length; i++) {
       if(ele[i].checked){
         localStorage.setItem('Gender',ele[i].value );
      console.log(ele[i].value); 
      }
   }}
   displayRadioValue();
});

function showPassword() {
   var password = document.getElementById("floatingPassword");
   if (password.type === "password") {
     password.type = "text";
   } else {
     password.type = "password";
   }
 } 

let a= false;
 a==true?console.log("pranay"):console.log("vankar");;





// if (gender == 'male') {
   //    localStorage.setItem('Gender', gender);
      // } else {
      //    localStorage.setItem('Gender', gender2);
      // }
   // let a= 5;
   // let b= 10;
   
   // // let temp ;
   // //Using third variable 
   
   // // function swappingNumbers(){
   // //    temp = b ;
   // //    b= a;
   // //    a=temp;
   // // console.log(a,b);
   // // }
   // // swappingNumbers();
   
   // //Without using third variable
   // // b = a+b;
   // // a= b-a;
   // // b=  b-a;
   
   // // console.log(a,b);
   // //With array
   // // [a,b]=[b,a];
   // // console.log(a,b);
   
   // async function getCountryName(code) {
   //    var page =1;
   
   //    var name='';
   //     while(true)
   //     {
   //        let url = 'https://jsonmock.hackerrank.com/api/countries?page=' + page ;
   //        const response = await fetch(url);
   //     var data = await response.json();
   
   //         for (let i = 0; i < data.data.length; i++) {
   //            var alphacode = data.data[i].alpha2Code;
   
   //            if( code.localeCompare(alphacode))
   //            {
   //                name = data.data[i].name;
   //                console.log('name value '+name);
   //                break;
   
   //             }
   
   //          }
   //          if(name.localeCompare('')){
   //             break;
   //          }
   
   //          page = page + 1;
   //       }
   //       return name;
   //    }
   //  getCountryName('ty').then(data=>{
   //       console.log('country name is ::: ' + data);
   //    });