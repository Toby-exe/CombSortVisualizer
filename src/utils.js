let timer = false;

function stopWatch() {
    if (timer && !sortDone) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        let formattedMM = minute.toString().padStart(2, '0');
        let formattedSS = second.toString().padStart(2, '0');
        let formattedMS = count.toString().padStart(2, '0');

        
        document.getElementById("mm").innerHTML = formattedMM
        
        document.getElementById("ss").innerHTML = formattedSS
        
        document.getElementById("ms").innerHTML = formattedMS
        
        setTimeout(stopWatch, 10);
    }
}

async function speedSlider(){
    var slider = document.getElementById("speedRange");
    var output = document.getElementById("speedValue");

    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
        speedMultiplier = document.getElementById("speedValue").innerHTML;
        animSpeed = defaultSpeed * speedMultiplier;
        waitTime = 1000 / speedMultiplier
    }
}

function elementsSlider(){
    var slider = document.getElementById("elsRange");
    var output = document.getElementById("numElements");

    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
        numberOfElements = document.getElementById("numElements").innerHTML;
    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function reinit() {

    while(arr.length > 0) {
        arr.pop();
    }

    refreshClicked = false;
    startSwap = false;
    i = 0;
    renderDone = false;
    sortDone = false;

    swapCount = 0;
    totalSwaps = 0;
    totalCompares = 0;

    document.getElementById('gap-counter').innerHTML = '00'
    document.getElementById('swap-counter').innerHTML = '00'
    document.getElementById('comparison-counter').innerHTML = '00'

    speedMultiplier = 1;

    minute = 00;
    second = 00;
    count = 00;
}

async function changeColours() {
    if (sortDone) {
        arr[i % arr.length].setColor = colorArr[(i) % colorArr.length];
        noLoop();
        await sleep(100)
        loop();
        i++
      }
}

function stopAnimation() {
    speedMultiplier = 0;
    animSpeed = defaultSpeed * speedMultiplier;
    waitTime = 1000 / speedMultiplier
}

function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
}