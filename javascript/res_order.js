window.onload = function(){
    const params = new URLSearchParams(window.location.search);
    const food = params.get("food");
    if(food){
        document.getElementById("food").value = food;
    }
    window.placeOrder = function(){
        let name = document.getElementById("name").value;
        let qty = document.getElementById("qty").value;
        if(name == "" || qty == ""){
            alert("Please fill all details");
            return;
        }
        alert("✅Thanks! Your order is placed successfully 😊 ");
    }
}