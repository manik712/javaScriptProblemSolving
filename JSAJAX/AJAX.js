// AJAX
function loadData(){
  const xhr =new XMLHttpRequest();

  xhr.onload = function(){
    const data =document.getElementById('demo');
    data.innerHTML = this.responseText;
  }
  xhr.open('GET',"./ajax.txt")
  xhr.send();
}



