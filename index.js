
 function greet(userName) {
    var userName = prompt("What is your name?");
    alert("Hello " + userName + "!");
    var userAge = prompt("How old are you?");
    alert(parseInt(userAge,String));
    window.confirm("Have you had a birthday this year?");

    
    //if (confirm == true) {
      // alert(new Date().getFullYear() - userAge);
    //} else {
     //  alert(newdate().getFullYear()- (userAge + 1));
    //}   

    var getyear = new Date();
    if (confirm()== true) {
        alert(new Date().getFullYear() - userAge);
    } else (confirm()); {
        alert(new Date().getFullYear() - userAge + 1 );
    }
}