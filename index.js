// Code your solutions in this file
// Code your solutions in this file
function writeCards(names){
    const message = [];
    for (let i=0; i<names.length; i++){        
        message.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        
    }
    return message;
}

function countDown(numbers){
    for (let i= numbers; i >= 0; i--){
        console.log(i);
    }

}