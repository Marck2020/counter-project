let increaseNumber = document.getElementById('increment');
let decreaseNumber = document.getElementById('decrement');
let increaseNumber10 = document.getElementById('increment10');
let increaseNumber20 = document.getElementById('increment20');
let increaseNumber30 = document.getElementById('increment30');
let increaseNumber40 = document.getElementById('increment40');
let increaseNumber50 = document.getElementById('increment50');
let decreaseNumber10 = document.getElementById('decrement10');
let decreaseNumber20 = document.getElementById('decrement20');
let decreaseNumber30 = document.getElementById('decrement30');
let decreaseNumber40 = document.getElementById('decrement40');
let decreaseNumber50 = document.getElementById('decrement50');
let resetCounter = document.getElementById('reset');
let numValue = document.getElementById('number-search').value;
let num = parseInt(numValue);

let add = document.getElementById('add');
let subtract = document.getElementById('subtract');

let int = document.getElementById('counter');
let counter = 0;



// BUTTONS TO INCREASE THE COUNTER

increaseNumber.addEventListener('click', function(){
    counter += 1;
    int.innerHTML = counter;
})

increaseNumber10.addEventListener('click', function(){
        counter += 10;
        int.innerHTML = counter;
    })

increaseNumber20.addEventListener('click', function(){
        counter += 20;
        int.innerHTML = counter;
    })

increaseNumber30.addEventListener('click', function(){
        counter += 30;
        int.innerHTML = counter;
    })

increaseNumber40.addEventListener('click', function(){
        counter += 40;
        int.innerHTML=counter;
    })

increaseNumber50.addEventListener('click', function(){
        counter += 50;
        int.innerHTML = counter;
    })

// BUTTONS TO RESET THE COUNTER

resetCounter.addEventListener('click', function(){
        counter = 0;
        int.innerHTML = counter;
    })

    
// BUTTONS TO DECREASE THE COUNTER

decreaseNumber.addEventListener('click', function(){
    counter -= 1;
    int.innerHTML = counter;
    })

decreaseNumber10.addEventListener('click', function(){
    counter -= 10;
    int.innerHTML = counter;
})

decreaseNumber20.addEventListener('click', function(){
    counter -= 20;
    int.innerHTML = counter;
})

decreaseNumber30.addEventListener('click', function(){
    counter -= 30;
    int.innerHTML = counter;
})

decreaseNumber30.addEventListener('click', function(){
    counter -= 30;
    int.innerHTML = counter;
})

decreaseNumber40.addEventListener('click', function(){
    counter -= 40;
    int.innerHTML = counter;
})

decreaseNumber50.addEventListener('click', function(){
    counter -= 50;
    int.innerHTML = counter;
})


// ADD AND SUBTRACT BUTTONS
add.addEventListener('click', function(){
    numValue = document.getElementById('number-search').value;
    num = parseInt(numValue);
    counter +=num;
    int.innerHTML = counter;
})

subtract.addEventListener('click', function(){
    numValue = document.getElementById('number-search').value;
    num = parseInt(numValue);
    counter -=num;
    int.innerHTML = counter;
})
