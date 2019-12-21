document.querySelector('#start').addEventListener('click', e => {
    navigator.getUserMedia({
        video: true,
        audio: true
    }, stream => {
        const videoEl = document.querySelector('#video1');
        videoEl.srcObject = stream;
        videoEl.play();
    }, () => { })
})