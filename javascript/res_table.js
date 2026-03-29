function reserve(){
  let name = document.getElementById("name").value;
  if(name == ""){
    document.getElementById("msg").innerText = "Enter your name";
    return;
  }
  document.getElementById("msg").innerText = "✅ Table Reserved!";
}