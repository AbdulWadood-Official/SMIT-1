// Guess the Number:

let userConsent = confirm("Welcome to 'Guess A Number' Game. Click on OK to play.")

if(userConsent){
    
    // random number generated every time
    let computerNumber = 10
    let counter = 0
    while(counter< 10){
        let userGuessed = prompt("Please enter a number.")
        if(userGuessed == computerNumber){
            alert("Hurrah! You Won")
            break
        }
        else{
            alert("Sorry! Wrong number")
        }
        counter +=1
    }
    if(counter ==10){
        alert("Sorry! only 3 guesses allowed")
    }
    let restartOrNot = confirm("Do you want  to play again?")
    if(restartOrNot){
        location.reload();
    }
    else{
        alert("Okay, May be some other time.")
    }
}
else{
    alert("ok! Maybe some other time.")
}

