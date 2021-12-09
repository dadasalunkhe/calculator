function clearScreen(){
document.getElementById("Result").value ="";

}
function skn(value) {
  let res = document.getElementById("Result");
  if(res.value == "undefined"){
    res.value= "";

  }
  res.value += value;
}
