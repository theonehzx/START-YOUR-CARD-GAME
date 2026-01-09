document.addEventListener('DOMContentLoaded', () => {
    // DATA GALERI
    const galleryImages = [
        { file: "1.jpg", title: "Aku Masuk IC!", date: "Agustus 2023", caption: "Matsama seru juga deh." },
        { file: "2.mp4", title: "Nyari tas", date: "Agustus 2023", caption: "Baru juga masuk 😭😭." },
        { file: "3.jpg", title: "CLADISTICSSS", date: "November 2023", caption: "Our very first event, and the grand start" },
        { file: "9.jpg", title: "Regul kok kerja?", date: "March 2024", caption: "Lagi jalan jalan ke mall bawa laptop wkwk." },
        { file: "10.jpg", title: "PP dulu", date: "Oktober 2023", caption: "Akhirnya diganti sama PP MUN." },
        { file: "10.mp4", title: "Dikamar...", date: "Oktober 2023", caption: "Gabut rupanya punya dampak pada mental." },
        { file: "11.jpg", title: "WATERBOOOMMM", date: "Oktober 2023", caption: "Sekali setahun dan selamanya kayanya." },
        { file: "4.jpg", title: "cladis c nya ceremony", date: "Desember 2023", caption: "OC terseru dan CC tergelap." },
        { file: "5.mp4", title: "214 I", date: "Januari 2024", caption: "Mengenal teknologi heater buat makan mie tiap hari." },
        { file: "6.jpg", title: "First date with Kamilan", date: "Febuari 2024", caption: "Sejak sesat bener bener sesat deh." },
        { file: "8.jpg", title: "IFUN!!!", date: "February 2024", caption: "Dulu ngurusin storytelling seru ga?" },
        { file: "7.jpg", title: "pargoy woi", date: "Januari 2024", caption: "AKHIRNYA STUKOLL, dingin banget deh." },


        { file: "12.jpg", title: "LEGIVICTORY!", date: "Juni 2024", caption: "GOLLLLLLLLLL. lu ngegolin tuh" },

        { file: "13.jpg", title: "Ini ngapain sih", date: "Juni 2024", caption: "Dirumah malah main beginian." },
        { file: "14.mp4", title: "Ultah tahun lalu nih", date: "Januari 2024", caption: "Kamilan ultah tau pas juni (biar lu inget)" },
        { file: "15.jpg", title: "MATSAMA! Panit Ver.", date: "Agustus 2024", caption: "Tiba tiba dia minta editin ini wkwkwk." },

        { file: "18.jpg", title: "BALI, here we come!", date: "Agustus 2024", caption: "Tiba tiba ke bali demi MOF." },
        { file: "19.jpg", title: "Jalan Jalan di Dewata", date: "Agustus 2024", caption: "Lombanya 20% 80%nya eksplor (ama gibahin komite)." },
        { file: "20.mp4", title: "Jajan Dekor", date: "Agustus 2024", caption: "Banyak juga waktu itu kita beli ya." },
        { file: "21.jpg", title: "kecakkecakekecak", date: "Agustus 2024", caption: "culture. (gw dimana ya??)" },
        { file: "22.jpg", title: "alhamdulillah menang", date: "Agustus 2024", caption: "sekarang benderanya dimana ya?" },
        { file: "23.jpg", title: "Balik ke rutinitas", date: "Agustus 2024", caption: "pake headset rehan lagi wkwk." },

        { file: "24.jpg", title: "DRAMAAA", date: "Oktober 2024", caption: "5 mata pelajaran. 1 proyek. 1000 kelucuan." },
        { file: "25.jpg", title: "SOEKARNO", date: "Oktober 2024", caption: "...bertemu dengan soekarno." },
        { file: "26.mp4", title: "Ilmu Hitam", date: "Oktober 2024", caption: "Kadang autis menular." },

        { file: "12.mp4", title: "CHARCARES WIN", date: "Desember 2024", caption: "DRAMATIS BANGET SIH. bikin jantung deg degan woi" },
        { file: "32.jpg", title: "Menang Chares", date: "Desember 2024", caption: "kapan ya gw post yang foto foto ini." },
        { file: "37.jpg", title: "PKS my love, my life", date: "Februari 2025", caption: "My fav workspace." },
        { file: "38.mp4", title: "Bukber brutal", date: "Ramadhan 2025", caption: "kalau orang liat kaya takut deh pasti." },
        { file: "39.jpg", title: "Farabi siap SL", date: "April 2025", caption: "Ini foto kiki disimpen terus lol." },
        { file: "40.jpg", title: "☄in sl25!", date: "April 2025", caption: "Untung muat, ga dimarahin." },
        { file: "41.jpg", title: "Sedia payung sebelum hujan", date: "April 2025", caption: "Nih foto keren banget." },
        { file: "42.jpg", title: "Menang di SL25", date: "April 2025", caption: "Kok malah lu yang menang sih." },
        { file: "16.jpg", title: "PLTA!", date: "April 2025", caption: "Disini berasa jadi engineer deh." },

        { file: "17.jpg", title: "Future engineers", date: "April 2025", caption: "Kalau yang ini smoga beneran jadi engineer amiin." },
        { file: "27.jpg", title: "KAMBINGG", date: "Juni 2025", caption: "idul adha dan menerobos ke gedung f." },
        { file: "44.jpg", title: "SL25 ON TOPPPP", date: "Juli 2025", caption: "TOP 1 EVENT, GA MENYIMPANG, LETS GOO." },
        { file: "45.jpg", title: "😛😜😝", date: "Juli 2025", caption: "90% apresiasi, keren banget gasih?." },
        { file: "28.jpg", title: "🔞", date: "Juli 2025", caption: "Bisa bisanya dirumah orang." },
        { file: "28.mp4", title: "Pre-Yogya:", date: "Juli 2025", caption: "Sebelum jalan ada aja yang dikerjain." },
        { file: "29.jpg", title: "GOES TO JOGJAAA", date: "Juli 2025", caption: "kereta 90 derajat." },
        { file: "30.jpg", title: "Berasa pantai sendiri", date: "Juli 2025", caption: "ada insiden nugget, gaada internet, ketinggalan bendera aduh." },
        { file: "31.jpg", title: "Pulang dan Mandi", date: "Juli 2025", caption: "Foto panas." },

        { file: "33.jpg", title: "Malah Sakit", date: "Juli 2025", caption: "Untung dirumah, perbaikan gizi." },
        { file: "34.jpg", title: "Puasa", date: "Ramadhan", caption: "Malah lapar tengah malam di mesjid." },
        { file: "35.jpg", title: "tangerang peeps", date: "Juli 2025", caption: "Ketemu inan jir kok bisa." },
        { file: "36.jpg", title: "IZINNN masuk sekolah lagi", date: "Agustus 2025", caption: "kembali ke kawah candradimuka." },
        { file: "49.jpg", title: "GEDUNG F HAI", date: "Agustus 2025", caption: "akhirnya agit hai! semoga lancar semua (totally not foreshadowing)" },

        { file: "46.jpg", title: "hi chief and chiefgirl", date: "Agustus 2025", caption: "sudah selesai masa baktinya, pensi nih." },
        { file: "47.jpg", title: "CYNDUD ULTAH?!", date: "September 2025", caption: "jadi koki wingstop (Walaupun lebih banyak makannya)." },
        { file: "48.jpg", title: "BPHSL on shoot!", date: "November 2025", caption: "sleepyheads cosplay 1 bapak 8 anak." },

        { file: "50.jpg", title: "Sosial Humaniora dan BK", date: "November 2025", caption: "life full of essays started." },
        { file: "51.jpg", title: "JERSEY BARU thank pak away", date: "November 2025", caption: "jujur jerseynya keren deh (baseball satu satunya sih)." },
        { file: "52.jpg", title: "BTI=Buat Tugas doang Inimah", date: "November 2025", caption: "BTI datang dan pergi..." },
        { file: "53.mp4", title: "Jungkir balik", date: "November 2025", caption: "Kadang hidup....." },
        { file: "54.jpg", title: "KAK ALWY NIKAH", date: "Desember 2025", caption: "di jalan jujur ngantuk banget. enak banget lagi mobilnya" },
        { file: "55.jpg", title: "peak merch", date: "Desember 2025", caption: "mahal sih, tapi... BAGUS WOI." },
        { file: "56.jpg", title: "were caring cats!", date: "Desember 2025", caption: "haha hihi tiba tiba di bandung??" },
        { file: "57.jpg", title: "SIAP BERUBAH???", date: "Desember 2025", caption: "SERU BANGET ANGKLUNGNYA SUMPAH. pak semoga kita ketemu lagi" },
        { file: "58.jpg", title: "menang cok?", date: "Desember 2025", caption: "like you said, life really is poetic sometimes." },
        { file: "59.jpg", title: "stay fit guys!", date: "Januari 2026", caption: "Pulang pulang berolahraga weh, keren." },
        { file: "60.jpg", title: "PHOTOSHOOT BPH", date: "bukan Januari 2026", caption: "Ini sih katanya semiformal...." },
        { file: "61.jpg", title: "hai bruno!", date: "Januari 2026", caption: "ANNIVERSARY IS COMING. OUR DAY IS COMING. YEAYYY" },
    ];

    const deckContainer = document.getElementById('deck-container');
    const navContainer = document.getElementById('nav-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const introOverlay = document.getElementById('intro-overlay');
    const startBtn = document.getElementById('start-btn');
    const bgMusic = document.getElementById('bg-music');
    const cardSfx = document.getElementById('card-sfx'); // Selected audio element
    const envelopeModal = document.getElementById('envelope-modal');
    const envelopeWrapper = document.getElementById('envelope-wrapper');
    const closeModalBtn = document.getElementById('close-modal-btn');

    let currentIndex = 0;
    let cards = [];

    // Helper: Play SFX
    function playCardSound() {
        if (cardSfx) {
            // Randomly vary pitch and speed (0.85x to 1.15x)
            const randomRate = 0.85 + Math.random() * 0.3;
            cardSfx.playbackRate = randomRate;
            cardSfx.currentTime = 0;
            cardSfx.play().catch(e => console.warn("SFX blocked", e));
        }
    }

    // 1. GENERATE CARDS & NAV
    function initDeck() {
        galleryImages.forEach((data, index) => {
            // Create Card
            const card = document.createElement('div');
            card.className = 'card';
            card.style.zIndex = galleryImages.length - index; // Tumpukan (0 paling atas)

            // Random sedikit rotasi biar natural
            const randomRot = Math.random() * 4 - 2;
            card.dataset.rotation = randomRot;

            // Posisi awal (sebelum intro selesai, mereka sembunyi atau tersebar)
            card.style.transform = `translateY(-100vh)`;

            const mediaSrc = data.file.startsWith('assets/') ? data.file : `assets/${data.file}`;
            card.innerHTML = `
                <div class="card-content">
                    ${mediaSrc.toLowerCase().endsWith('.mp4')
                    ? `<video src="${mediaSrc}" loop muted playsinline></video>`
                    : `<img src="${mediaSrc}">`
                }
                    <div class="card-text">
                        <p class="date">${data.date}</p>
                        <h3>${data.title}</h3>
                        <p class="caption">${data.caption}</p>
                    </div>
                </div>
            `;

            // Klik kartu untuk next
            card.addEventListener('click', () => {
                if (index === currentIndex) navigateTo(currentIndex + 1);
            });

            deckContainer.appendChild(card);
            cards.push(card);
        });
    }

    // 2. INTRO SEQUENCE
    startBtn.addEventListener('click', () => {
        // Play Audio
        bgMusic.volume = 0.4;
        bgMusic.play().catch(e => console.log("Audio block", e));

        introOverlay.classList.add('hidden');
        navContainer.classList.remove('hidden');

        // Animasi Tumpukan Kartu Jatuh Satu-satu
        cards.forEach((card, i) => {
            setTimeout(() => {
                const rot = card.dataset.rotation;
                card.style.transform = `translate(0, 0) rotate(${rot}deg)`;

                // Efek suara kartu jatuh
                playCardSound();
            }, i * 100); // Delay 100ms per kartu
        });

        updateState();
    });

    // 2.5 Arrow Navigation
    if (prevBtn) prevBtn.addEventListener('click', () => navigateTo(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => navigateTo(currentIndex + 1));

    // 3. NAVIGATION LOGIC
    function navigateTo(index) {
        if (index < 0 || index > galleryImages.length) return; // Boundary check

        // Play sound on move
        if (index !== currentIndex) playCardSound();

        currentIndex = index;
        updateState();
    }

    function updateState() {
        // Handle Ending
        if (currentIndex === galleryImages.length) {
            setTimeout(() => {
                envelopeModal.classList.remove('hidden');
            }, 500);
            return;
        }

        // Update Cards Visual
        cards.forEach((card, i) => {
            const video = card.querySelector('video');

            if (i < currentIndex) {
                // Kartu sudah lewat (Discard ke kiri)
                card.classList.add('discarded');
                card.style.boxShadow = 'none'; // Remove shadow when discarded
                if (video) video.pause();
            } else {
                // Kartu aktif atau akan datang
                card.classList.remove('discarded');

                // LIMIT SHADOW: only cards near the top get shadow to avoid pitch black stack
                if (i >= currentIndex && i < currentIndex + 5) {
                    card.style.boxShadow = `0 4px 20px rgba(0,0,0,0.3)`;
                } else {
                    card.style.boxShadow = 'none';
                }

                // Kembalikan ke posisi tumpukan natural
                const rot = card.dataset.rotation;
                card.style.transform = `translate(0, 0) rotate(${rot}deg)`;

                if (i === currentIndex) {
                    // Kartu paling atas (Aktif)
                    if (video) video.play();
                    card.style.zIndex = 100; // Bring active card to front
                } else {
                    if (video) video.pause();
                    card.style.zIndex = galleryImages.length - i;
                }
            }
        });

        // Update Arrow Visibility
        if (prevBtn) prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
        if (nextBtn) nextBtn.style.opacity = currentIndex === galleryImages.length ? '0.3' : '1';
    }

    // 4. LETTER INTERACTION
    envelopeWrapper.addEventListener('click', function () {
        // Play sound when opening
        if (!this.classList.contains('open')) {
            playCardSound();
        }
        this.classList.toggle('open');
        const hint = document.querySelector('.tap-hint');
        if (hint) hint.style.display = 'none';
    });

    // Close Letter Button
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            envelopeModal.classList.add('hidden');
            // Reset envelope state so it's closed next time
            envelopeWrapper.classList.remove('open');
            const hint = document.querySelector('.tap-hint');
            if (hint) hint.style.display = 'block';
        });
    }

    // Initialize
    initDeck();
});
