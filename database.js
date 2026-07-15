// Add your hopelessly romantic photos here
const romanticPhotos = [
    "photo1.jpg"
];

// Add your pure joy, smiling, and happy photos here
const happyPhotos = [
    "photo2.jpg"
];

// Add the goofy, chaotic, and funny bloopers here
const funnyPhotos = [
    "photo3.jpg"
];

// Add your FULL YouTube embed codes and custom text for Shorts here
const ourVideos = [
    {
        embed: `<iframe width="491" height="655" src="https://www.youtube.com/embed/bEm6mAJkoTg" title="A surprise for me. ❤️ #love#viral" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        caption: "A little surprise I got from someone special! 🙈❤️",
        myComment: "Hope you like it sweetheart. ❤️"
    },
    {
        embed: `<iframe width="368" height="655" src="https://www.youtube.com/embed/YaPQB_vrqhQ" title="Tujhme Rab dikhta hai Song Cover" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        caption: "Singing my heart out! 🎤✨",
        myComment: "You have the most beautiful voice in the world. ❤️"
    },
    {
        embed: `<iframe width="368" height="655" src="https://www.youtube.com/embed/tl-l3_9xukk" title="GHEWAR  Of Ambala  halwai bazaar  mini vlog #food #ghewar #ambala #vlog #ghewarrecipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        caption: "Exploring Ambala for the best Ghewar! 🤤",
        myComment: "We need to go back here for our next date!"
    },
    {
        embed: `<iframe width="371" height="655" src="https://www.youtube.com/embed/jYlJoo71Zdc" title="First year college event" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        caption: "First year college event memories! 🎉",
        myComment: "I wish to celebrate these days with you! 🥰"
    }
];

// Add your FULL YouTube embed codes for Music / Mixtapes here
const ourMixtape = [
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/vuVn1r0DpeE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/N8dexd1PqEw?si=e6kfDpnqE22g5TKg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/E8rpY2FwKkY?si=JkstsaLqjKyfKe4z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/cStOvI74hQo?si=f1p1dR6UDkkEd74d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/1jO2wSpAoxA?si=Tr-pfqF60Wjcxr8q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/WKbwopSXLWU?si=Ic70bgstxCK7nyEp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/rNXmANj72ps?si=T4MKHsf90aeF6SGq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/p5EeJ9bHAOI?si=7yfaflQWGIiPjmhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
];

// --- NEW: SCRATCH CARD PRIZES (LDR & STRICT PARENT FRIENDLY) ---
const scratchPrizes = [
    { title: "🍔 Secret Food Delivery", desc: "Valid for one food delivery to your place whenever possible!" },
    { title: "🎬 Teleparty Movie Night", desc: "You pick the movie and we will watch it." },
    { title: "💤 Dedicated Sleep Call", desc: "We stay on call all night so I can fall asleep next to you." },
    { title: "🎧 Co-Listening Session", desc: "We queue up our mixtape on Spotify/Youtube and listen together in sync." },
    { title: "🎮 Virtual Game Night", desc: "Valid for one hour of playing your favorite multiplayer game together." }
];

// --- NEW: OPEN WHEN LETTERS (EXPANDED EMOTIONS) ---
const openWhenLetters = {
    sad: "Hey sweetheart, I am so sorry you are feeling down today. Just remember that I am always here for you, in your corner, cheering you on. Take a deep breath. I love you.",
    missing_me: "I am missing you so much too! Close your eyes and imagine me giving you the biggest, warmest hug right now. We will see each other soon! ❤️",
    angry: "Take a deep breath. Whatever is bothering you right now is temporary, but my love for you is permanent. You can always talk about it with me about it whenever you are ready. 😤",
    happy: "Seeing you happy is my favorite thing in the entire world! Keep smiling, because your smile literally lights up my life. ✨",
    stressed: "Take a deep breath, close your eyes, and count to ten. You are so strong, and this moment will pass. I am incredibly proud of how hard you work. You've got this, cupcake.",
    cant_sleep: "Tossing and turning? I wish I could be there to play with your hair until you fall asleep. Put on our mixtape, close your eyes, and imagine me right beside you. 🌙",
    insecure: "Look at yourself through my eyes for a second. You are the most beautiful, talented, and amazing girl in the world. Never forget how much I admire you. I can not live without you. 🫂"
};