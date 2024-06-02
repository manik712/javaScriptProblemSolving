/*



*/





function rep(str,num){
  if(typeof(str)==="string"){
    const rep = str.repeat(num);
    return rep;
  }else{
    return "send string"
  }
}


console.log(rep("good",10))