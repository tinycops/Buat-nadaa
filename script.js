const messages = [
    "Beneran?",
    "Yakinnnn??",
    "Coba pikirin lagi?",
    "Nad...",
    "PIKRIN LAGI!",
    "Kalo jawab ga, gw sedih lohh...",
    "Gw bakal sedih banget...",
    "Beneran sedih bangett nget nget...",
    "Ok gw bakal berhenti nanya...",
    "BECANDA WKWK, jawab mau ya! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}