

 var elements = document.getElementsByClassName("serv");

 for (i = 0; i < elements.length; i++) {
     console.log(elements[i].innerHTML);
 }



 var clickState = 0;
 var cats = document.querySelector('.cat');

 cats.addEventListener('click', function(){

   if (clickState == 0)
     {
     this.textContent = "We're the CAT People";
     document.getElementById("pic").style.backgroundImage = "url(https://www.spacecoastpetservices.com/wp-content/uploads/2020/01/cat-wearing-bandana-1080x675.jpg)";

     clickState = 1;
      }
   else
     {
     this.textContent = " We're the Dog People" ;
     document.getElementById("pic").style.backgroundImage = "url(https://i.ibb.co/f1mfKLc/hero.jpg )" ;

     clickState = 0;
     }

 });





  function submitButtonStyle(_this) {
   _this.style.backgroundColor = "red";
 }


 document.getElementById("pic").style.backgroundImage = "url(https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80)";





 function myFunction() {
   document.getElementById("changeBtn").innerHTML = "Thanks";
   document.getElementById("changeBtn").style.backgroundColor = "red";
 }



 // Get the modal
 var modal = document.getElementById('id01');

 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }
