let user=prompt("Enter your Status",'');
if (user==="Admin"){
    let password=prompt("Enter Password",'');
    if (password==="The Master"){
        alert("Welcome Master, Your are free to use your calculator")
    }else if (password==="" || password===undefined){
        alert("Invalid");
        alert(prompt("Enter Password",''))
    }else{
        alert("Wrong Password");
    }
}else if (user==="" || user===undefined){
    alert("Invalid User");
}else {
    alert("Unauthorised User");
    alert(user=prompt("Enter your Status",''))
}

let operations=function (){
let number1= document.getElementById("num1").value;
let sym= document.getElementById("symbol").value;
let number2= document.getElementById("num2").value;
if (sym==="+"){
    document.getElementById("result").value=parseInt(number1) + parseInt(number2);
}else if (sym==="-"){
    document.getElementById("result").value=parseInt(number1) - parseInt(number2);
}else if (sym==="*"){
    document.getElementById("result").value=parseInt(number1) * parseInt(number2);
}else if (sym==="/"){
    document.getElementById("result").value=parseInt(number1) / parseInt(number2);
}else {
        document.getElementById("result").value=undefined;
    }
}