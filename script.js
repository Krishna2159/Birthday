/* ==========================
   ENVELOPE OPEN
========================== */

const envelopeScreen =
document.getElementById("envelope-screen");

const mainContent =
document.getElementById("main-content");

envelopeScreen.addEventListener("click", () => {

    envelopeScreen.style.display = "none";

    mainContent.classList.remove("hidden");

});


/* ==========================
   TYPEWRITER
========================== */

const message =
"✨ Happy 21st Birthday Kiara ❤️ Aaj ka din sirf tumhare naam ✨";

const typingText =
document.getElementById("typing-text");

let charIndex = 0;

function typeWriter(){

    if(charIndex < message.length){

        typingText.innerHTML +=
        message.charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter, 60);
    }

}

setTimeout(typeWriter, 500);


/* ==========================
   PHOTO DATA
========================== */

const photos = [

    "photo1.jpg",
    "photo2.jpeg",
    "photo3.jpeg",
    "photo4.jpg",
    "photo5.jpg",
    "photo6.jpg",
    "photo7.jpeg",
    "photo8.jpg",
    "photo9.jpg",
    "photo10.png",
    "photo11.jpg",
    "photo12.jpg",
    "photo13.jpg",
    "photo14.jpg"

];

const photoCaptions = [

    "Meri model ❤️‍🔥",

    "Meri cute doll🫠",

    "itni sanskari😍😘",

    "Meri bacchi🤗🤗",

    "Smart bhi ho😎",

    "Meri Malkin{Don} 🙏",

    "Wife material🥰🥰❤️",

    "shaadi mein Parade krte hue😝",

    "Hotty naughty baddie🥵😚",

    "Super aesthetic my queen😍🥰",

    "Innocent bacchii🤗 ",

    "hamesha ki trh sundar",

    "mera favourite pic🥰🥰",

    "Happiest Birthday Meri nanhi si pyari jaan meri Kiara ❤️"

];


/* ==========================
   SLIDESHOW
========================== */

let currentPhoto = 0;

const slide =
document.getElementById("slide");

const caption =
document.getElementById("photo-caption");

const counter =
document.getElementById("photo-counter");

let photoCounter = 0;

let letterUnlocked = false;

setInterval(() => {

    currentPhoto++;

    if(currentPhoto >= photos.length){

        currentPhoto = 0;

        if(!letterUnlocked){

            letterUnlocked = true;

            document
            .getElementById("videoBtn")
            .classList.remove("hidden");

            fireworks();

            alert("🎥 Special Video Unlocked!");
        }

    }

    slide.style.opacity = "0";

    setTimeout(() => {

        slide.src = photos[currentPhoto];

        caption.innerHTML =
        photoCaptions[currentPhoto];

        counter.innerHTML =
        `📸 ${currentPhoto + 1} / 14`;

        slide.style.opacity = "1";

    }, 1000);

    photoCounter++;

    if(photoCounter % 2 === 0){

        fireworks();

    }

}, 3000);


/* ==========================
   FLOATING HEARTS
========================== */

function createHeart(){

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.fontSize =
    (18 + Math.random() * 18) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 6000);

}

setInterval(createHeart, 500);


/* ==========================
   OPEN LETTER
========================== */

function showLetter(){

    const letter =
    document.getElementById("letter");

    letter.classList.remove("hidden");

    letter.scrollIntoView({

        behavior:"smooth"

    });

}


/* ==========================
   FIREWORKS
========================== */

function fireworks(){

    for(let i = 0; i < 40; i++){

        const firework =
        document.createElement("div");

        firework.classList.add("firework");

        const emojis = [

            "🎆",
            "🎇",
            "✨",
            "🎉",
            "💖"

        ];

        firework.innerHTML =

        emojis[
            Math.floor(
                Math.random() *
                emojis.length
            )
        ];

        firework.style.left =
        Math.random() * 100 + "vw";

        firework.style.top =
        Math.random() * 100 + "vh";

        document.body.appendChild(
            firework
        );

        setTimeout(() => {

            firework.remove();

        }, 1500);

    }

}


/* ==========================
   CAKE CUT
========================== */

function cutCake(){

    fireworks();

    const cakeSection =
    document.getElementById("cakeSection");

    const cakePhoto =
    document.getElementById("cakePhoto");

    cakeSection.classList.remove("hidden");

    setTimeout(() => {

        cakePhoto.classList.add("show-cake");

    }, 300);

}


/* ==========================
   MEMORY CHALLENGE
========================== */

let attempts = 0;

function checkMemoryAnswer(){

    const answer =
    document
    .getElementById("memoryAnswer")
    .value
    .trim()
    .toLowerCase();

    const result =
    document.getElementById("memoryResult");

    const correctAnswers = [

        "18 nov",
        "18 november",
        "18 nov 2021",
        "18 november 2021"

    ];

    if(correctAnswers.includes(answer)){

        result.innerHTML =
        "🎉 Correct! ❤️";

        showTimeline();

        return;
    }

    attempts++;

    if(attempts === 1){

        result.innerHTML =
        "❌ Nahi 😝 Dobara try karo";

    }

    else if(attempts === 2){

        result.innerHTML =
        "💡 Hint1: Term 1 admit card lene wale din 😝";

    }

   else if(attempts === 3){

        result.innerHTML =
        "💡 Hint 2: November 2021 , ab date batao";

    }

    
    else{

        result.innerHTML =
        "❤️ Answer: 18 Nov 2021";

        showTimeline();

    }

}

function showTimeline(){

    document
    .getElementById("memoryTimeline")
    .classList.remove("hidden");

}

const kiaraVideo =
document.getElementById("kiaraVideo");

if(kiaraVideo){

    kiaraVideo.addEventListener(
        "ended",
        () => {

            document
            .getElementById("letterBtn")
            .classList.remove("hidden");

            fireworks();

            alert(
                "💌 Special Letter Unlocked!"
            );

        }
    );

}

function showVideo(){

    const videoSection =
    document.getElementById(
        "videoSection"
    );

    videoSection.classList.remove(
        "hidden"
    );

    videoSection.scrollIntoView({

        behavior:"smooth"

    });

}