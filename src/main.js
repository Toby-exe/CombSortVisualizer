let startButton;
//let pauseButton;
let resetButton;

let playClicked = false;
let pauseClicked = false;
let refreshClicked = false;

function initDocumentButtons () {
    startButton = document.getElementById('play-btn');
    //pauseButton = document.getElementById('pause-btn');
    resetButton = document.getElementById('refresh-btn');

    startButton.onclick = function () {
        if(!playClicked){
            startButton.innerHTML = "<img src=\"images/pause-128.ico\" width=\"400px\" height=\"150px\">";
            startButton.style.backgroundColor = "#ff0000";

            playClicked = true;
            pauseClicked = false;
            timer = true;
        } else {
            startButton.innerHTML = "<img src=\"images/play-128.ico\" width=\"400px\" height=\"150px\">";
            startButton.style.backgroundColor = "#8cff00e6";

            playClicked = false;
            pauseClicked = true;
            timer = false;
        }
        stopWatch();
    }

    resetButton.onclick = function () {
        refreshClicked = true;
        playClicked = false;
        pauseClicked = true;

        startButton.innerHTML = "<img src=\"images/play-128.ico\" width=\"400px\" height=\"150px\">";
        startButton.style.backgroundColor = "#8cff00e6";

        minute = 0;
        second = 0;
        count = 0;
        let formattedMM = minute.toString().padStart(2, '0');
        let formattedSS = second.toString().padStart(2, '0');
        let formattedMS = count.toString().padStart(2, '0');

        
        document.getElementById("mm").innerHTML = formattedMM
        
        document.getElementById("ss").innerHTML = formattedSS
        
        document.getElementById("ms").innerHTML = formattedMS
        timer = false;

        reinit();
        setup();
    }

}


function initDocumentCounters () {
    document.getElementById('gap-counter').innerHTML = gap.toString();
    document.getElementById('swap-counter').innerHTML = totalSwaps.toString();
    document.getElementById('comparison-counter').innerHTML = totalCompares.toString();
}

