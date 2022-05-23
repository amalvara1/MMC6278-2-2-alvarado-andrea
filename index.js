
 function greet(userName) {
    var userName = prompt("What is your name?");
    alert("Hello " + userName + "!");
    var userAge = prompt("How old are you?");
    alert(parseInt(userAge,String));
    window.confirm("Have you had a birthday this year?");


    var today = new Date();
    if (confirm()== true) {
        alert((new Date().getFullYear()) - userAge);
        return;
    } else {
        alert((new Date().getFullYear() - userAge) + 1);
        return;
    }
   
}