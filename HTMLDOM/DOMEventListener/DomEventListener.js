function myClick(){
  console.log("hello world");
}


const button =document.getElementById('button');

// button.addEventListener('click',myClick)

button.addEventListener('click',function myClick(){
  console.log("hello world");
})
