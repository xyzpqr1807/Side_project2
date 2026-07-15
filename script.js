// --- ANNIVERSARY TIMER ENGINE ---
const startDate = new Date("July 18, 2024 10:55:00").getTime();
setInterval(function() {
    const now = new Date().getTime();
    const distance = now - startDate;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("live-timer").innerHTML = days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s";
}, 1000);

// --- TAB SWITCHER ---
function switchTab(tabId, element) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    element.classList.add('active');
    
    if(tabId !== 'games') backToGames();
    window.scrollTo(0, 0);
}

// --- SEASON SWITCHER ---
function changeSeason(context) {
    const selectedSeason = document.getElementById(`season-selector-${context}`).value;
    const season1 = document.getElementById(`season-1-episodes-${context}`);
    const season2 = document.getElementById(`season-2-episodes-${context}`);
    if (selectedSeason === 'season1') {
        season1.style.display = 'flex'; season2.style.display = 'none';
    } else {
        season1.style.display = 'none'; season2.style.display = 'flex';
    }
}

// --- MEDIA MODAL ENGINE ---
function openImageModal(src) {
    document.getElementById('mediaModal').style.display = "block";
    let img = document.getElementById('fullImage');
    img.src = src; img.style.display = "block";
    document.getElementById('fullVideo').style.display = "none";
}
function openVideoModal(src) {
    document.getElementById('mediaModal').style.display = "block";
    let vid = document.getElementById('fullVideo');
    vid.src = src; vid.style.display = "block"; vid.play();
    document.getElementById('fullImage').style.display = "none";
}
function closeModal() {
    document.getElementById('mediaModal').style.display = "none";
    let vid = document.getElementById('fullVideo');
    vid.pause(); vid.currentTime = 0; 
}

// --- AUTO-PLAYING PREVIEWS ENGINE ---
document.querySelectorAll('.episode-row').forEach(row => {
    row.addEventListener('mouseenter', function() {
        const video = this.querySelector('.preview-video');
        if(video) video.play();
    });
    row.addEventListener('mouseleave', function() {
        const video = this.querySelector('.preview-video');
        if(video) { video.pause(); video.currentTime = 0; }
    });
});

// --- GAMES MENU ENGINE ---
function openGame(gameId) {
    document.getElementById('games-menu').style.display = 'none';
    document.querySelectorAll('.game-container').forEach(el => el.style.display = 'none');
    document.getElementById(gameId).style.display = 'block';
    
    if(gameId === 'game-scratch') initScratchCard();
    if(gameId === 'game-trivia') startTrivia();
    if(gameId === 'game-memory') startMemoryGame();
    if(gameId === 'game-open-when') {
        document.getElementById('emotions-menu').style.display = 'grid';
        document.getElementById('letter-view').style.display = 'none';
    }
}
function backToGames() {
    document.getElementById('games-menu').style.display = 'flex';
    document.querySelectorAll('.game-container').forEach(el => el.style.display = 'none');
}

// --- TRIVIA ENGINE ---
const triviaQuestions = [
    { q: "Where was our first date?", options: ["The Coffee Shop", "That Pizza Place", "Movie Theater"], answer: 1 },
    { q: "Who said 'I love you' first?", options: ["I did", "You did", "We said it together"], answer: 1 }, 
    { q: "What is my favorite nickname for you?", options: ["Babe", "Cupcake", "Honey"], answer: 1 },
    { q: "Which movie did we watch on our first virtual date?", options: ["Kung Fu Panda", "Coco", "Up"], answer: 0 },
    { q: "Who is more likely to fall asleep first on our late-night calls?", options: ["Me", "You", "We fall asleep at the exact same time"], answer: 1 },
    { q: "What is my favorite thing about your voice?", options: ["How calming it is", "Your cute laugh", "When you get sleepy"], answer: 0 },
    { q: "If we could close the distance tomorrow, what's the FIRST thing we are doing?", options: ["Getting food immediately", "Just hugging for hours", "Going to the movies"], answer: 1 },
    { q: "If we had to survive a zombie apocalypse, who would die first?", options: ["I would", "You would", "We both will survive"], answer: 1 },
    { q: "What is my absolute favorite emoji to send you when I'm trying to be cute?", options: ["🙈", "🥰", "🥺"], answer: 2 },
    { q: "If our relationship was a Netflix series, what would the critics say?", options: ["Too much drama", "The most wholesome show ever", "Not worth wtaching"], answer: 1 }
];
let currentQ = 0;
let score = 0;

function startTrivia() {
    currentQ = 0; score = 0;
    document.getElementById('trivia-result').style.display = 'none';
    document.getElementById('trivia-content').style.display = 'block';
    loadQuestion();
}
function loadQuestion() {
    if (currentQ >= triviaQuestions.length) return showTriviaResult();
    const qData = triviaQuestions[currentQ];
    document.getElementById('trivia-question').innerText = qData.q;
    let choicesHTML = "";
    qData.options.forEach((opt, idx) => {
        choicesHTML += `<button class="trivia-btn" onclick="checkTrivia(${idx})">${opt}</button>`;
    });
    document.getElementById('trivia-choices').innerHTML = choicesHTML;
}
function checkTrivia(selectedIdx) {
    if (selectedIdx === triviaQuestions[currentQ].answer) score++;
    currentQ++;
    loadQuestion();
}
function showTriviaResult() {
    document.getElementById('trivia-content').style.display = 'none';
    document.getElementById('trivia-result').style.display = 'block';
    document.getElementById('trivia-score').innerText = `You scored ${score}/${triviaQuestions.length}!`;
    document.getElementById('trivia-message').innerText = score === triviaQuestions.length ? "Perfect! You remember everything! ❤️" : "Hmm, we might need a refresher date! 😉";
}

// --- VIRTUAL HANGOUT ROULETTE ENGINE ---
const dateIdeas = [
    "Netflix Party 🍿", 
    "Order Each Other Food 🍔", 
    "Fall Asleep on Video Call 💤",  
    "Deep Question Time 💬",
    "Pinterest Dream House Building (Share screens & pin!) 🏡",
    "Take ridiculous quizzes together 📝",
    "Silent staring contest on camera (First to laugh loses) 😶",
    "Write a crazy story one text at a time ✍️",
    "Listen to a brand new album and rate each song in chat 🎶",
    "Silent Study/Work Date (Cameras on, mic off) 🤫",
    "Play Skribbl.io / Virtual Mini-Games 🎨",
    "Plan our dream future vacation together ✈️",
    "Send 5 photos & tell the stories behind them 👶",
    "Read a book or story to each other over call 📖",
    "Text-only Date 📱",
    "Sync up and watch Reels together 🤣",
    "Virtual House Hunting (Looking at crazy expensive mansions online) 🏰",
];

function spinRoulette() {
    const box = document.getElementById('roulette-result');
    let spins = 0;
    const interval = setInterval(() => {
        box.innerText = dateIdeas[Math.floor(Math.random() * dateIdeas.length)];
        spins++;
        if (spins > 20) {
            clearInterval(interval);
            box.style.color = "#e50914";
            setTimeout(() => box.style.color = "#46d369", 300);
        }
    }, 100);
}

// --- SCRATCH CARD ENGINE (DYNAMIC LDR UPGRADE) ---
function initScratchCard() {
    let oldCanvas = document.getElementById('scratchCanvas');
    if(!oldCanvas) return;

    // 1. Clone the canvas FIRST to clear old event listeners
    let newCanvas = oldCanvas.cloneNode(true);
    oldCanvas.replaceWith(newCanvas);

    // 2. NOW get the context of the active canvas in the DOM
    const ctx = newCanvas.getContext('2d');
    let isDrawing = false;

    // Pick a random prize from database.js
    const randomPrize = scratchPrizes[Math.floor(Math.random() * scratchPrizes.length)];
    
    // Inject the prize and WhatsApp Claim button
    const claimMessage = encodeURIComponent(`Hey! I just scratched a card in our vault and won: ${randomPrize.title}! 🥳`);
    document.getElementById('scratch-prize-content').innerHTML = `
        <h3>${randomPrize.title}</h3>
        <p>${randomPrize.desc}</p>
        <a href="https://wa.me/?text=${claimMessage}" target="_blank" style="text-decoration: none;">
            <button class="btn-play" style="margin-top:10px; font-size: 0.9rem;">Claim via Snapchat 💬</button>
        </a>
    `;

    // 3. Draw the gray cover on the new canvas
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#666';
    ctx.fillRect(0, 0, newCanvas.width, newCanvas.height);
    ctx.font = '20px Helvetica';
    ctx.fillStyle = '#ddd';
    ctx.fillText('Scratch Here', 90, 80);
    ctx.globalCompositeOperation = 'destination-out';

    // 4. Scratch logic pointing to the new canvas
    function scratch(e) {
        if (!isDrawing) return;
        e.preventDefault();
        const rect = newCanvas.getBoundingClientRect();
        
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fill();
    }

    // 5. Attach listeners to the new canvas
    newCanvas.addEventListener('mousedown', () => isDrawing = true);
    newCanvas.addEventListener('mouseup', () => isDrawing = false);
    newCanvas.addEventListener('mouseleave', () => isDrawing = false); 
    newCanvas.addEventListener('mousemove', scratch);
    newCanvas.addEventListener('touchstart', (e) => { isDrawing = true; scratch(e); }, {passive: false});
    newCanvas.addEventListener('touchend', () => isDrawing = false);
    newCanvas.addEventListener('touchmove', scratch, {passive: false});
}

// --- OPEN WHEN LETTERS ENGINE ---
function openLetter(emotionKey) {
    document.getElementById('emotions-menu').style.display = 'none';
    document.getElementById('letter-view').style.display = 'block';
    document.getElementById('letter-text').innerText = openWhenLetters[emotionKey];
}
function closeLetter() {
    document.getElementById('letter-view').style.display = 'none';
    document.getElementById('emotions-menu').style.display = 'grid';
}

// --- MEMORY MATCH ENGINE ---
const emojis = ['🍕', '☕', '🚗', '🍿'];
let memoryCards = [];
let flippedCards = [];
let matchedPairs = 0;

function startMemoryGame() {
    const grid = document.getElementById('memory-grid');
    grid.innerHTML = '';
    matchedPairs = 0;
    flippedCards = [];
    memoryCards = [...emojis, ...emojis].sort(() => 0.5 - Math.random());
    
    memoryCards.forEach((emoji, idx) => {
        let card = document.createElement('div');
        card.className = 'memory-card-item';
        card.dataset.emoji = emoji;
        card.dataset.index = idx;
        card.innerHTML = '❓';
        card.onclick = () => flipMemoryCard(card);
        grid.appendChild(card);
    });
}
function flipMemoryCard(card) {
    if (flippedCards.length >= 2 || card.classList.contains('flipped') || card.classList.contains('matched')) return;
    card.classList.add('flipped');
    card.innerHTML = card.dataset.emoji;
    flippedCards.push(card);
    
    if (flippedCards.length === 2) {
        setTimeout(checkMemoryMatch, 800);
    }
}
function checkMemoryMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.emoji === card2.dataset.emoji) {
        card1.classList.add('matched'); card2.classList.add('matched');
        matchedPairs++;
        if (matchedPairs === emojis.length) setTimeout(() => alert("You won! You're my perfect match. ❤️"), 300);
    } else {
        card1.classList.remove('flipped'); card1.innerHTML = '❓';
        card2.classList.remove('flipped'); card2.innerHTML = '❓';
    }
    flippedCards = [];
}

// --- DATABASE AUTO-BUILDER ENGINE ---
function buildPhotoCard(photoSrc, index) {
    let card = document.createElement('div');
    card.className = 'netflix-card';
    let imgSrc = `images/${photoSrc}`;
    card.innerHTML = `
        <img src="${imgSrc}" onclick="openImageModal('${imgSrc}')">
        <div class="card-metadata" onclick="openImageModal('${imgSrc}')">
            <div class="meta-match">100% Match</div>
            <div>Episode ${index + 1}</div>
        </div>
    `;
    return card;
}
function loadDatabaseContent() {
    if(typeof romanticPhotos !== 'undefined') {
        const romGallery = document.getElementById('romantic-gallery');
        if(romGallery) romanticPhotos.forEach((photo, i) => romGallery.appendChild(buildPhotoCard(photo, i)));
    }
    if(typeof happyPhotos !== 'undefined') {
        const hapGallery = document.getElementById('happy-gallery');
        if(hapGallery) happyPhotos.forEach((photo, i) => hapGallery.appendChild(buildPhotoCard(photo, i)));
    }
    if(typeof funnyPhotos !== 'undefined') {
        const funGallery = document.getElementById('funny-gallery');
        if(funGallery) funnyPhotos.forEach((photo, i) => funGallery.appendChild(buildPhotoCard(photo, i)));
    }
    
   // Load Vertical Shorts
    if(typeof ourVideos !== 'undefined') {
        const vidGallery = document.getElementById('video-gallery');
        if(vidGallery) {
            vidGallery.innerHTML = ''; 
            ourVideos.forEach(videoData => {
                let postContainer = document.createElement('div');
                postContainer.className = 'short-post';
                
                postContainer.innerHTML = `
                    <div class="short-video-container">
                        ${videoData.embed}
                    </div>
                    <div class="short-engagement">
                        <button class="eng-btn" onclick="this.classList.toggle('liked'); this.innerText = this.classList.contains('liked') ? '❤️ 1M' : '🤍 1M';">🤍 1M</button>
                        <button class="eng-btn">💬 45K</button>
                        <button class="eng-btn">🔗 Share</button>
                    </div>
                    <div class="short-comments">
                        <p><strong>@Tails Track and Tamasha</strong> ${videoData.caption}</p>
                        <p><span class="fan-comment">@Falgun</span> ${videoData.myComment}</p>
                    </div>
                `;
                vidGallery.appendChild(postContainer);
            });
        }
    }

    // Load Our Mixtape
    if (typeof ourMixtape !== 'undefined') {
        const mixGallery = document.getElementById('mixtape-gallery');
        if(mixGallery) {
            ourMixtape.forEach(iframeCode => {
                let postContainer = document.createElement('div');
                postContainer.className = 'mixtape-post';
                postContainer.innerHTML = iframeCode;
                mixGallery.appendChild(postContainer);
            });
        }
    }
}

window.onload = () => {
    loadDatabaseContent();
};