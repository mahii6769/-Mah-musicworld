/* =====================================================
   MUSIC WORLD
   Complete playlist database
   Automatic next-song playback
===================================================== */


/* =====================================================
   YOUTUBE PLAYER
===================================================== */

let player = null;
let currentPlaylist = [];
let currentSongIndex = 0;
let isPlaying = false;


/* Load YouTube IFrame API */

const youtubeScript = document.createElement("script");

youtubeScript.src =
    "https://www.youtube.com/iframe_api";

document.head.appendChild(youtubeScript);


/* YouTube calls this function */

window.onYouTubeIframeAPIReady = function () {

    player = new YT.Player("youtubePlayer", {

        height: "120",
        width: "100%",

        /*
          Your supplied Perfect video.
        */
        videoId: "2Vv-BfVoq4g",

        playerVars: {
            playsinline: 1,
            rel: 0
        },

        events: {

            onReady: function () {
                console.log("YouTube player ready");
            },

            onStateChange: function (event) {

                if (
                    event.data ===
                    YT.PlayerState.PLAYING
                ) {
                    isPlaying = true;
                    updatePlayButton();
                }

                if (
                    event.data ===
                    YT.PlayerState.PAUSED
                ) {
                    isPlaying = false;
                    updatePlayButton();
                }

                /*
                  THIS IS THE IMPORTANT PART.

                  When one song finishes,
                  automatically load the next one.
                */

                if (
                    event.data ===
                    YT.PlayerState.ENDED
                ) {
                    nextSong();
                }

            }
        }
    });
};


/* =====================================================
   ARTISTS
===================================================== */

const artists = [

    "Taylor Swift",
    "Ed Sheeran",
    "Ariana Grande",
    "Billie Eilish",
    "Bruno Mars",
    "Dua Lipa",
    "Sabrina Carpenter",
    "Olivia Rodrigo",
    "Justin Bieber",
    "Selena Gomez",
    "The Weeknd",
    "Lady Gaga",
    "Katy Perry",
    "Rihanna",
    "Adele",
    "Beyoncé",
    "Miley Cyrus",
    "Harry Styles",
    "Shawn Mendes",
    "Charlie Puth",
    "Justin Timberlake",
    "Maroon 5",
    "Coldplay",
    "OneRepublic",
    "Imagine Dragons",
    "Sia",
    "Lewis Capaldi",
    "Sam Smith",
    "Halsey",
    "One Direction",
    "Shakira",
    "Jennifer Lopez",
    "Avicii",
    "Pharrell Williams",

    "BTS",
    "BLACKPINK",
    "TWICE",
    "Stray Kids",
    "SEVENTEEN",
    "NewJeans",
    "IVE",
    "aespa",
    "LE SSERAFIM",
    "ENHYPEN",
    "TXT",
    "EXO",
    "NCT",
    "Red Velvet",
    "ITZY",
    "(G)I-DLE",
    "BABYMONSTER",
    "ILLIT"

];


/* =====================================================
   MOODS
===================================================== */

const moods = [

    "🌸 Soft & Romantic",
    "💔 Sad & Emotional",
    "🌙 Calm & Dreamy",
    "🦋 Comforting & Healing",
    "💜 Deep & Meaningful",
    "✨ Feel-good & Happy",
    "🔥 Energetic & Powerful",
    "💃 Fun & Catchy",
    "🖤 Dark & Mysterious",
    "☁️ Chill & Relaxing",
    "🥹 Nostalgic & Emotional",
    "🌌 Dreamy & Magical",
    "🎀 Cute & Sweet",
    "🫶 Warm & Heartfelt",
    "🎧 A mix of everything"

];


/* =====================================================
   SONG HELPER
===================================================== */

function song(title, artist, id = "") {
    return {
        title: title,
        artist: artist,
        id: id
    };
}


/* =====================================================
   COMPLETE PLAYLISTS
===================================================== */

const playlists = [

    {
        name: "🌸 Soft & Romantic",
        songs: [

            song("Perfect", "Ed Sheeran", "2Vv-BfVoq4g"),
            song("Thinking Out Loud", "Ed Sheeran", "lp-EO5I60ZA"),
            song("A Thousand Years", "Christina Perri", "rtOvBOTyX00"),
            song("All of Me", "John Legend", "450p7goxZqg"),
            song("Let Her Go", "Passenger", "RBumgq5yVrA"),
            song("We Don't Talk Anymore", "Charlie Puth & Selena Gomez", "3AtDnEC4zak"),
            song("Love Me Like You Do", "Ellie Goulding", "AJtDXIazrMo"),
            song("Just the Way You Are", "Bruno Mars", "LjhCEhWiKXk"),
            song("Photograph", "Ed Sheeran", "nSDgHBxUbVQ"),
            song("Say You Won't Let Go", "James Arthur", "0yW7w8F2TVA")

        ]
    },


    {
        name: "💔 Sad & Emotional",
        songs: [

            song("Someone You Loved", "Lewis Capaldi", "zABLecsR5UE"),
            song("Lovely", "Billie Eilish & Khalid", "V1Pl8CzNzCw"),
            song("Let Her Go", "Passenger", "RBumgq5yVrA"),
            song("See You Again", "Wiz Khalifa ft. Charlie Puth", "RgKAFK5djSk"),
            song("When I Was Your Man", "Bruno Mars", "ekzHIouo8Q4"),
            song("The Night We Met", "Lord Huron", "KtlgYxa6BMU"),
            song("Another Love", "Tom Odell", "MwpMEbgC7DA"),
            song("Arcade", "Duncan Laurence", "51u5fnyrGj4"),
            song("Rolling in the Deep", "Adele", "rYEDA3JcQqw"),
            song("A Thousand Years", "Christina Perri", "rtOvBOTyX00")

        ]
    },


    {
        name: "🌙 Calm & Dreamy",
        songs: [

            song("Shape of You", "Ed Sheeran", "JGwWNGJdvx8"),
            song("Perfect", "Ed Sheeran", "2Vv-BfVoq4g"),
            song("Faded", "Alan Walker", "60ItHLz5WEA"),
            song("Counting Stars", "OneRepublic", "hT_nvWreIhg"),
            song("Let Her Go", "Passenger", "RBumgq5yVrA"),
            song("Love Me Like You Do", "Ellie Goulding", "AJtDXIazrMo"),
            song("Lovely", "Billie Eilish & Khalid", "V1Pl8CzNzCw"),
            song("Ocean Eyes", "Billie Eilish", "viimfQi_pUw"),
            song("Photograph", "Ed Sheeran", "nSDgHBxUbVQ"),
            song("We Don't Talk Anymore", "Charlie Puth & Selena Gomez", "3AtDnEC4zak")

        ]
    },


    {
        name: "🦋 Comforting & Healing",
        songs: []
    },


    {
        name: "💜 Deep & Meaningful",
        songs: [

            song("See You Again", "Wiz Khalifa ft. Charlie Puth", "RgKAFK5djSk"),
            song("What Was I Made For?", "Billie Eilish", "sJkz5l7rP3Y"),
            song("The Climb", "Miley Cyrus", "NG2zyeVRcbs"),
            song("Fix You", "Coldplay", "k4V3Mo61fJM"),
            song("Someone You Loved", "Lewis Capaldi", "zABLecsR5UE"),
            song("A Thousand Years", "Christina Perri", "rtOvBOTyX00"),
            song("Perfect", "Ed Sheeran", "2Vv-BfVoq4g"),
            song("Photograph", "Ed Sheeran", "nSDgHBxUbVQ"),
            song("When I Was Your Man", "Bruno Mars", "ekzHIouo8Q4"),
            song("Life Goes On", "BTS", "-5q5mZbe3V8")

        ]
    },


    {
        name: "✨ Feel-good & Happy",
        songs: [

            song("Uptown Funk", "Mark Ronson ft. Bruno Mars", "OPf0YbXqDm0"),
            song("Shape of You", "Ed Sheeran", "JGwWNGJdvx8"),
            song("Sugar", "Maroon 5", "09R8_2nJtjg"),
            song("Roar", "Katy Perry", "CevxZvSJLk8"),
            song("Waka Waka", "Shakira", "pRpeEdMmmQ0"),
            song("Counting Stars", "OneRepublic", "hT_nvWreIhg"),
            song("Shake It Off", "Taylor Swift", "nfWlot6h_JM"),
            song("Sorry", "Justin Bieber", "fRh_vgS2dFE"),
            song("Girls Like You", "Maroon 5", "aJOTlE1K90k"),
            song("New Rules", "Dua Lipa", "k2qgadSvNyU")

        ]
    },


    {
        name: "🔥 Energetic & Powerful",
        songs: [

            song("Gangnam Style", "PSY", "9bZkp7q19f0"),
            song("Uptown Funk", "Mark Ronson ft. Bruno Mars", "OPf0YbXqDm0"),
            song("Waka Waka", "Shakira", "pRpeEdMmmQ0"),
            song("Roar", "Katy Perry", "CevxZvSJLk8"),
            song("Believer", "Imagine Dragons", "7wtfhZwyrcc"),
            song("Lean On", "Major Lazer & DJ Snake", "YqeW9_5kURI"),
            song("Faded", "Alan Walker", "60ItHLz5WEA"),
            song("Sorry", "Justin Bieber", "fRh_vgS2dFE"),
            song("Shake It Off", "Taylor Swift", "nfWlot6h_JM"),
            song("Dynamite", "BTS", "gdZLi9oWNZg")

        ]
    },


    {
        name: "💃 Fun & Catchy",
        songs: []
    },


    {
        name: "🖤 Dark & Mysterious",
        songs: []
    },


    {
        name: "☁️ Chill & Relaxing",
        songs: []
    },


    {
        name: "🥹 Nostalgic & Emotional",
        songs: []
    },


    {
        name: "🌌 Dreamy & Magical",
        songs: []
    },


    {
        name: "🎀 Cute & Sweet",
        songs: []
    },


    {
        name: "🫶 Warm & Heartfelt",
        songs: []
    },


    {
        name: "🎧 A mix of everything",
        songs: []
    },


    {
        name: "🍳 Cooking",
        songs: [

            song("Espresso", "Sabrina Carpenter", "eVli-tstM5E"),
            song("Shape of You", "Ed Sheeran", "JGwWNGJdvx8"),
            song("Uptown Funk", "Mark Ronson ft. Bruno Mars", "OPf0YbXqDm0"),
            song("Levitating", "Dua Lipa", "TUVcZfQe-Kw"),
            song("Dynamite", "BTS", "gdZLi9oWNZg"),
            song("Dance Monkey", "Tones and I", "q0hyYWKXF0Q"),
            song("Sugar", "Maroon 5", "09R8_2nJtjg"),
            song("Don't Start Now", "Dua Lipa", "oygrmJFKYZY"),
            song("Shake It Off", "Taylor Swift", "nfWlot6h_JM"),
            song("Happy", "Pharrell Williams", "ZbZSe6N_BXs")

        ]
    },


    {
        name: "😴 Sleeping",
        songs: [

            song("Perfect", "Ed Sheeran", "2Vv-BfVoq4g"),
            song("A Thousand Years", "Christina Perri", "rtOvBOTyX00"),
            song("Lovely", "Billie Eilish & Khalid", "V1Pl8CzNzCw"),
            song("Someone You Loved", "Lewis Capaldi", "zABLecsR5UE"),
            song("Photograph", "Ed Sheeran", "nSDgHBxUbVQ"),
            song("Ocean Eyes", "Billie Eilish", "viimfQi_pUw"),
            song("Let Her Go", "Passenger", "RBumgq5yVrA"),
            song("All of Me", "John Legend", "450p7goxZqg"),
            song("Love Me Like You Do", "Ellie Goulding", "AJtDXIazrMo"),
            song("When I Was Your Man", "Bruno Mars", "ekzHIouo8Q4")

        ]
    },


    {
        name: "🧹 Cleaning",
        songs: [

            song("Uptown Funk", "Mark Ronson ft. Bruno Mars", "OPf0YbXqDm0"),
            song("Shake It Off", "Taylor Swift", "nfWlot6h_JM"),
            song("Dynamite", "BTS", "gdZLi9oWNZg"),
            song("Levitating", "Dua Lipa", "TUVcZfQe-Kw"),
            song("Don't Start Now", "Dua Lipa", "oygrmJFKYZY"),
            song("Party Rock Anthem", "LMFAO", "KQ6zr6kCPj8"),
            song("Cheap Thrills", "Sia", "nYh-n7EOtMA"),
            song("Roar", "Katy Perry", "CevxZvSJLk8"),
            song("On The Floor", "Jennifer Lopez", "t4H_Zoh7G5A"),
            song("I Gotta Feeling", "The Black Eyed Peas", "uSD4vsh1Gjs")

        ]
    },


    {
        name: "📚 Studying",
        songs: [

            song("Perfect", "Ed Sheeran", "2Vv-BfVoq4g"),
            song("Lovely", "Billie Eilish & Khalid", "V1Pl8CzNzCw"),
            song("A Thousand Years", "Christina Perri", "rtOvBOTyX00"),
            song("Ocean Eyes", "Billie Eilish", "viimfQi_pUw"),
            song("Photograph", "Ed Sheeran", "nSDgHBxUbVQ"),
            song("Let Her Go", "Passenger", "RBumgq5yVrA"),
            song("All of Me", "John Legend", "450p7goxZqg"),
            song("Someone You Loved", "Lewis Capaldi", "zABLecsR5UE"),
            song("Fix You", "Coldplay", "k4V3Mo61fJM"),
            song("The Scientist", "Coldplay", "RB-RcX5DS5A")

        ]
    },


    {
        name: "😐 Bored",
        songs: [

            song("Dynamite", "BTS", "gdZLi9oWNZg"),
            song("Gangnam Style", "PSY", "9bZkp7q19f0"),
            song("Despacito", "Luis Fonsi & Daddy Yankee", "kJQP7kiw5Fk"),
            song("Uptown Funk", "Mark Ronson ft. Bruno Mars", "OPf0YbXqDm0"),
            song("Shape of You", "Ed Sheeran", "JGwWNGJdvx8"),
            song("Butter", "BTS", "WMweEpGlu_U"),
            song("What Makes You Beautiful", "One Direction", "QJO3ROT-A4E"),
            song("Baby", "Justin Bieber", "kffacxfA7G4"),
            song("Call Me Maybe", "Carly Rae Jepsen", "fWNaR-rxAic"),
            song("Waka Waka", "Shakira", "pRpeEdMmmQ0")

        ]
    },


    {
        name: "🚌 Travelling / Bus Ride",
        songs: [

            song("Counting Stars", "OneRepublic", "hT_nvWreIhg"),
            song("Shape of You", "Ed Sheeran", "JGwWNGJdvx8"),
            song("The Nights", "Avicii", "UtF6Jej8yb4"),
            song("A Sky Full of Stars", "Coldplay", "VPRjCeoBqrI"),
            song("Viva La Vida", "Coldplay", "dvgZkm1xWPE"),
            song("On Top of the World", "Imagine Dragons", "w5tWYmIOWGk"),
            song("Paradise", "Coldplay", "1G4isv_Fylg"),
            song("Memories", "Maroon 5", "SlPhMPnQ58k"),
            song("Adventure of a Lifetime", "Coldplay", "QtXby3twMmI"),
            song("Shut Up and Dance", "WALK THE MOON", "6JCLY0Rlx6Q")

        ]
    },


    {
        name: "🥳 Party / Getting Ready",
        songs: [

            song("Uptown Funk", "Mark Ronson ft. Bruno Mars", "OPf0YbXqDm0"),
            song("Dynamite", "BTS", "gdZLi9oWNZg"),
            song("Levitating", "Dua Lipa", "TUVcZfQe-Kw"),
            song("Dance Monkey", "Tones and I", "q0hyYWKXF0Q"),
            song("Hips Don't Lie", "Shakira", "DUT5rEU6pqM"),
            song("On The Floor", "Jennifer Lopez", "t4H_Zoh7G5A"),
            song("Party Rock Anthem", "LMFAO", "KQ6zr6kCPj8"),
            song("I Gotta Feeling", "The Black Eyed Peas", "uSD4vsh1Gjs"),
            song("Shake It Off", "Taylor Swift", "nfWlot6h_JM"),
            song("Roar", "Katy Perry", "CevxZvSJLk8")

        ]
    },


    {
        name: "😭 Crying / Emotional",
        songs: [

            song("Someone You Loved", "Lewis Capaldi", "zABLecsR5UE"),
            song("Lovely", "Billie Eilish & Khalid", "V1Pl8CzNzCw"),
            song("Another Love", "Tom Odell", "MwpMEbgC7DA"),
            song("When I Was Your Man", "Bruno Mars", "ekzHIouo8Q4"),
            song("Let Her Go", "Passenger", "RBumgq5yVrA"),
            song("A Thousand Years", "Christina Perri", "rtOvBOTyX00"),
            song("Arcade", "Duncan Laurence", "51u5fnyrGj4"),
            song("Traitor", "Olivia Rodrigo", "CRrf3h9vhp8"),
            song("Happier", "Olivia Rodrigo", ""),
            song("See You Again", "Wiz Khalifa ft. Charlie Puth", "RgKAFK5djSk")

        ]
    },


    {
        name: "🌙 Late Night",
        songs: [

            song("Lovely", "Billie Eilish & Khalid", "V1Pl8CzNzCw"),
            song("Perfect", "Ed Sheeran", "2Vv-BfVoq4g"),
            song("Ocean Eyes", "Billie Eilish", "viimfQi_pUw"),
            song("A Thousand Years", "Christina Perri", "rtOvBOTyX00"),
            song("All of Me", "John Legend", "450p7goxZqg"),
            song("Someone You Loved", "Lewis Capaldi", "zABLecsR5UE"),
            song("The Night We Met", "Lord Huron", "KtlgYxa6BMU"),
            song("Let Her Go", "Passenger", "RBumgq5yVrA"),
            song("Fix You", "Coldplay", "k4V3Mo61fJM"),
            song("Photograph", "Ed Sheeran", "nSDgHBxUbVQ")

        ]
    }

];


/* =====================================================
   SELECTION
===================================================== */

let selectedArtists = [];
let selectedMoods = [];


function createChoices() {

    const artistGrid =
        document.getElementById("artistGrid");

    artists.forEach(function (artist) {

        const button =
            document.createElement("button");

        button.className = "choice";
        button.textContent = artist;

        button.onclick = function () {

            if (
                button.classList.contains("selected")
            ) {

                button.classList.remove("selected");

                selectedArtists =
                    selectedArtists.filter(
                        a => a !== artist
                    );

                return;
            }

            if (selectedArtists.length >= 10) {

                alert(
                    "You can choose up to 10 artists."
                );

                return;
            }

            button.classList.add("selected");
            selectedArtists.push(artist);
        };

        artistGrid.appendChild(button);
    });


    const moodGrid =
        document.getElementById("moodGrid");

    moods.forEach(function (mood) {

        const button =
            document.createElement("button");

        button.className = "choice";
        button.textContent = mood;

        button.onclick = function () {

            if (
                button.classList.contains("selected")
            ) {

                button.classList.remove("selected");

                selectedMoods =
                    selectedMoods.filter(
                        m => m !== mood
                    );

                return;
            }

            if (selectedMoods.length >= 5) {

                alert(
                    "You can choose up to 5 moods."
                );

                return;
            }

            button.classList.add("selected");
            selectedMoods.push(mood);
        };

        moodGrid.appendChild(button);
    });
}


/* =====================================================
   SCREEN NAVIGATION
===================================================== */

function showScreen(id) {

    document
        .querySelectorAll(".screen")
        .forEach(function (screen) {
            screen.classList.remove("active");
        });

    document
        .getElementById(id)
        .classList.add("active");

    window.scrollTo(0, 0);
}


/* =====================================================
   DISPLAY PLAYLISTS
===================================================== */

function displayPlaylists() {

    const container =
        document.getElementById(
            "playlistContainer"
        );

    container.innerHTML = "";


    playlists.forEach(
        function (playlist, playlistIndex) {

            const card =
                document.createElement("div");

            card.className = "playlist";


            const head =
                document.createElement("div");

            head.className = "playlist-head";


            const titleArea =
                document.createElement("div");

            titleArea.innerHTML = `
                <h3>${playlist.name}</h3>
                <span>${playlist.songs.length} songs</span>
            `;


            const playAll =
                document.createElement("button");

            playAll.className = "play-all";
            playAll.textContent = "▶ Play All";

            playAll.onclick = function () {
                playAllSongs(playlistIndex);
            };


            head.appendChild(titleArea);
            head.appendChild(playAll);

            card.appendChild(head);


            playlist.songs.forEach(
                function (songData, songIndex) {

                    const row =
                        document.createElement("div");

                    row.className = "song";


                    row.innerHTML = `
                        <div class="number">
                            ${songIndex + 1}
                        </div>

                        <div class="song-details">
                            <strong>
                                ${songData.title}
                            </strong>

                            <span>
                                ${songData.artist}
                            </span>
                        </div>

                        <div class="song-play">
                            ▶
                        </div>
                    `;


                    row.onclick = function () {

                        playSong(
                            playlistIndex,
                            songIndex
                        );

                    };


                    card.appendChild(row);
                }
            );


            container.appendChild(card);
        }
    );
}


/* =====================================================
   PLAY SONG
===================================================== */

function playSong(
    playlistIndex,
    songIndex
) {

    currentPlaylist =
        playlists[playlistIndex].songs;

    currentSongIndex =
        songIndex;

    loadCurrentSong();
}


/* =====================================================
   PLAY ALL
===================================================== */

function playAllSongs(
    playlistIndex
) {

    currentPlaylist =
        playlists[playlistIndex].songs;

    currentSongIndex = 0;

    loadCurrentSong();
}


/* =====================================================
   LOAD SONG
===================================================== */

function loadCurrentSong() {

    if (!currentPlaylist.length) {
        return;
    }


    const current =
        currentPlaylist[currentSongIndex];


    document.getElementById(
        "nowPlayingTitle"
    ).textContent =
        current.title;


    document.getElementById(
        "nowPlayingArtist"
    ).textContent =
        current.artist;


    /*
       If there is a verified YouTube ID,
       load it into the YouTube player.
    */

    if (
        player &&
        current.id
    ) {

        player.loadVideoById(
            current.id
        );

        isPlaying = true;

        updatePlayButton();

    } else {

        /*
           No fake ID is used.

           This means we never accidentally
           play the wrong song.
        */

        alert(
            "This song still needs its YouTube video ID."
        );

    }
}


/* =====================================================
   NEXT SONG
===================================================== */

function nextSong() {

    if (!currentPlaylist.length) {
        return;
    }


    currentSongIndex++;


    /*
       After the final song,
       start the playlist again.
    */

    if (
        currentSongIndex >=
        currentPlaylist.length
    ) {

        currentSongIndex = 0;
    }


    loadCurrentSong();
}


/* =====================================================
   PREVIOUS SONG
===================================================== */

function previousSong() {

    if (!currentPlaylist.length) {
        return;
    }


    currentSongIndex--;


    if (currentSongIndex < 0) {

        currentSongIndex =
            currentPlaylist.length - 1;
    }


    loadCurrentSong();
}


/* =====================================================
   PLAY / PAUSE
===================================================== */

function togglePlay() {

    if (!player) {
        return;
    }


    if (isPlaying) {

        player.pauseVideo();

    } else {

        player.playVideo();
    }
}


/* =====================================================
   PLAY BUTTON
===================================================== */

function updatePlayButton() {

    const button =
        document.getElementById(
            "playPauseBtn"
        );


    button.textContent =
        isPlaying ? "⏸" : "▶";
}


/* =====================================================
   START
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        createChoices();

        document
            .getElementById("enterButton")
            .onclick = function () {

                showScreen(
                    "artistScreen"
                );
            };


        document
            .getElementById("artistContinue")
            .onclick = function () {

                showScreen(
                    "moodScreen"
                );
            };


        document
            .getElementById("moodContinue")
            .onclick = function () {

                displayPlaylists();

                showScreen(
                    "musicScreen"
                );
            };


        document
            .getElementById("previousBtn")
            .onclick =
            previousSong;


        document
            .getElementById("playPauseBtn")
            .onclick =
            togglePlay;


        document
            .getElementById("nextBtn")
            .onclick =
            nextSong;

    }
);