// Hiragana characters and their Romaji equivalents
const hiraganaData = [
    // Basic vowels
    { hiragana: 'あ', romaji: 'a' },
    { hiragana: 'い', romaji: 'i' },
    { hiragana: 'う', romaji: 'u' },
    { hiragana: 'え', romaji: 'e' },
    { hiragana: 'お', romaji: 'o' },
    
    // K series
    { hiragana: 'か', romaji: 'ka' },
    { hiragana: 'き', romaji: 'ki' },
    { hiragana: 'く', romaji: 'ku' },
    { hiragana: 'け', romaji: 'ke' },
    { hiragana: 'こ', romaji: 'ko' },
    
    // K series with yōon
    { hiragana: 'きゃ', romaji: 'kya' },
    { hiragana: 'きゅ', romaji: 'kyu' },
    { hiragana: 'きょ', romaji: 'kyo' },
    
    // G series (voiced)
    { hiragana: 'が', romaji: 'ga' },
    { hiragana: 'ぎ', romaji: 'gi' },
    { hiragana: 'ぐ', romaji: 'gu' },
    { hiragana: 'げ', romaji: 'ge' },
    { hiragana: 'ご', romaji: 'go' },
    
    // G series with yōon
    { hiragana: 'ぎゃ', romaji: 'gya' },
    { hiragana: 'ぎゅ', romaji: 'gyu' },
    { hiragana: 'ぎょ', romaji: 'gyo' },
    
    // S series
    { hiragana: 'さ', romaji: 'sa' },
    { hiragana: 'し', romaji: 'shi' },
    { hiragana: 'す', romaji: 'su' },
    { hiragana: 'せ', romaji: 'se' },
    { hiragana: 'そ', romaji: 'so' },
    
    // S series with yōon
    { hiragana: 'しゃ', romaji: 'sha' },
    { hiragana: 'しゅ', romaji: 'shu' },
    { hiragana: 'しょ', romaji: 'sho' },
    
    // Z series (voiced)
    { hiragana: 'ざ', romaji: 'za' },
    { hiragana: 'じ', romaji: 'ji' },
    { hiragana: 'ず', romaji: 'zu' },
    { hiragana: 'ぜ', romaji: 'ze' },
    { hiragana: 'ぞ', romaji: 'zo' },
    
    // Z series with yōon
    { hiragana: 'じゃ', romaji: 'ja' },
    { hiragana: 'じゅ', romaji: 'ju' },
    { hiragana: 'じょ', romaji: 'jo' },
    
    // T series
    { hiragana: 'た', romaji: 'ta' },
    { hiragana: 'ち', romaji: 'chi' },
    { hiragana: 'つ', romaji: 'tsu' },
    { hiragana: 'て', romaji: 'te' },
    { hiragana: 'と', romaji: 'to' },
    
    // T series with yōon
    { hiragana: 'ちゃ', romaji: 'cha' },
    { hiragana: 'ちゅ', romaji: 'chu' },
    { hiragana: 'ちょ', romaji: 'cho' },
    
    // D series (voiced)
    { hiragana: 'だ', romaji: 'da' },
    { hiragana: 'ぢ', romaji: 'ji' },
    { hiragana: 'づ', romaji: 'zu' },
    { hiragana: 'で', romaji: 'de' },
    { hiragana: 'ど', romaji: 'do' },
    
    // D series with yōon
    { hiragana: 'ぢゃ', romaji: 'ja' },
    { hiragana: 'ぢゅ', romaji: 'ju' },
    { hiragana: 'ぢょ', romaji: 'jo' },
    
    // N series
    { hiragana: 'な', romaji: 'na' },
    { hiragana: 'に', romaji: 'ni' },
    { hiragana: 'ぬ', romaji: 'nu' },
    { hiragana: 'ね', romaji: 'ne' },
    { hiragana: 'の', romaji: 'no' },
    
    // N series with yōon
    { hiragana: 'にゃ', romaji: 'nya' },
    { hiragana: 'にゅ', romaji: 'nyu' },
    { hiragana: 'にょ', romaji: 'nyo' },
    
    // H series
    { hiragana: 'は', romaji: 'ha' },
    { hiragana: 'ひ', romaji: 'hi' },
    { hiragana: 'ふ', romaji: 'fu' },
    { hiragana: 'へ', romaji: 'he' },
    { hiragana: 'ほ', romaji: 'ho' },
    
    // H series with yōon
    { hiragana: 'ひゃ', romaji: 'hya' },
    { hiragana: 'ひゅ', romaji: 'hyu' },
    { hiragana: 'ひょ', romaji: 'hyo' },
    
    // B series (voiced)
    { hiragana: 'ば', romaji: 'ba' },
    { hiragana: 'び', romaji: 'bi' },
    { hiragana: 'ぶ', romaji: 'bu' },
    { hiragana: 'べ', romaji: 'be' },
    { hiragana: 'ぼ', romaji: 'bo' },
    
    // B series with yōon
    { hiragana: 'びゃ', romaji: 'bya' },
    { hiragana: 'びゅ', romaji: 'byu' },
    { hiragana: 'びょ', romaji: 'byo' },
    
    // P series (semi-voiced)
    { hiragana: 'ぱ', romaji: 'pa' },
    { hiragana: 'ぴ', romaji: 'pi' },
    { hiragana: 'ぷ', romaji: 'pu' },
    { hiragana: 'ぺ', romaji: 'pe' },
    { hiragana: 'ぽ', romaji: 'po' },
    
    // P series with yōon
    { hiragana: 'ぴゃ', romaji: 'pya' },
    { hiragana: 'ぴゅ', romaji: 'pyu' },
    { hiragana: 'ぴょ', romaji: 'pyo' },
    
    // M series
    { hiragana: 'ま', romaji: 'ma' },
    { hiragana: 'み', romaji: 'mi' },
    { hiragana: 'む', romaji: 'mu' },
    { hiragana: 'め', romaji: 'me' },
    { hiragana: 'も', romaji: 'mo' },
    
    // M series with yōon
    { hiragana: 'みゃ', romaji: 'mya' },
    { hiragana: 'みゅ', romaji: 'myu' },
    { hiragana: 'みょ', romaji: 'myo' },
    
    // Y series
    { hiragana: 'や', romaji: 'ya' },
    { hiragana: 'ゆ', romaji: 'yu' },
    { hiragana: 'よ', romaji: 'yo' },
    
    // R series
    { hiragana: 'ら', romaji: 'ra' },
    { hiragana: 'り', romaji: 'ri' },
    { hiragana: 'る', romaji: 'ru' },
    { hiragana: 'れ', romaji: 're' },
    { hiragana: 'ろ', romaji: 'ro' },
    
    // R series with yōon
    { hiragana: 'りゃ', romaji: 'rya' },
    { hiragana: 'りゅ', romaji: 'ryu' },
    { hiragana: 'りょ', romaji: 'ryo' },
    
    // W series
    { hiragana: 'わ', romaji: 'wa' },
    { hiragana: 'を', romaji: 'wo' },
    
    // N
    { hiragana: 'ん', romaji: 'n' }
];

// Katakana characters and their Romaji equivalents
const katakanaData = [
    // Basic vowels
    { katakana: 'ア', romaji: 'a' },
    { katakana: 'イ', romaji: 'i' },
    { katakana: 'ウ', romaji: 'u' },
    { katakana: 'エ', romaji: 'e' },
    { katakana: 'オ', romaji: 'o' },
    
    // K series
    { katakana: 'カ', romaji: 'ka' },
    { katakana: 'キ', romaji: 'ki' },
    { katakana: 'ク', romaji: 'ku' },
    { katakana: 'ケ', romaji: 'ke' },
    { katakana: 'コ', romaji: 'ko' },
    
    // K series with yōon
    { katakana: 'キャ', romaji: 'kya' },
    { katakana: 'キュ', romaji: 'kyu' },
    { katakana: 'キョ', romaji: 'kyo' },
    
    // G series (voiced)
    { katakana: 'ガ', romaji: 'ga' },
    { katakana: 'ギ', romaji: 'gi' },
    { katakana: 'グ', romaji: 'gu' },
    { katakana: 'ゲ', romaji: 'ge' },
    { katakana: 'ゴ', romaji: 'go' },
    
    // G series with yōon
    { katakana: 'ギャ', romaji: 'gya' },
    { katakana: 'ギュ', romaji: 'gyu' },
    { katakana: 'ギョ', romaji: 'gyo' },
    
    // S series
    { katakana: 'サ', romaji: 'sa' },
    { katakana: 'シ', romaji: 'shi' },
    { katakana: 'ス', romaji: 'su' },
    { katakana: 'セ', romaji: 'se' },
    { katakana: 'ソ', romaji: 'so' },
    
    // S series with yōon
    { katakana: 'シャ', romaji: 'sha' },
    { katakana: 'シュ', romaji: 'shu' },
    { katakana: 'ショ', romaji: 'sho' },
    
    // Z series (voiced)
    { katakana: 'ザ', romaji: 'za' },
    { katakana: 'ジ', romaji: 'ji' },
    { katakana: 'ズ', romaji: 'zu' },
    { katakana: 'ゼ', romaji: 'ze' },
    { katakana: 'ゾ', romaji: 'zo' },
    
    // Z series with yōon
    { katakana: 'ジャ', romaji: 'ja' },
    { katakana: 'ジュ', romaji: 'ju' },
    { katakana: 'ジョ', romaji: 'jo' },
    
    // T series
    { katakana: 'タ', romaji: 'ta' },
    { katakana: 'チ', romaji: 'chi' },
    { katakana: 'ツ', romaji: 'tsu' },
    { katakana: 'テ', romaji: 'te' },
    { katakana: 'ト', romaji: 'to' },
    
    // T series with yōon
    { katakana: 'チャ', romaji: 'cha' },
    { katakana: 'チュ', romaji: 'chu' },
    { katakana: 'チョ', romaji: 'cho' },
    
    // D series (voiced)
    { katakana: 'ダ', romaji: 'da' },
    { katakana: 'ヂ', romaji: 'ji' },
    { katakana: 'ヅ', romaji: 'zu' },
    { katakana: 'デ', romaji: 'de' },
    { katakana: 'ド', romaji: 'do' },
    
    // D series with yōon
    { katakana: 'ヂャ', romaji: 'ja' },
    { katakana: 'ヂュ', romaji: 'ju' },
    { katakana: 'ヂョ', romaji: 'jo' },
    
    // N series
    { katakana: 'ナ', romaji: 'na' },
    { katakana: 'ニ', romaji: 'ni' },
    { katakana: 'ヌ', romaji: 'nu' },
    { katakana: 'ネ', romaji: 'ne' },
    { katakana: 'ノ', romaji: 'no' },
    
    // N series with yōon
    { katakana: 'ニャ', romaji: 'nya' },
    { katakana: 'ニュ', romaji: 'nyu' },
    { katakana: 'ニョ', romaji: 'nyo' },
    
    // H series
    { katakana: 'ハ', romaji: 'ha' },
    { katakana: 'ヒ', romaji: 'hi' },
    { katakana: 'フ', romaji: 'fu' },
    { katakana: 'ヘ', romaji: 'he' },
    { katakana: 'ホ', romaji: 'ho' },
    
    // H series with yōon
    { katakana: 'ヒャ', romaji: 'hya' },
    { katakana: 'ヒュ', romaji: 'hyu' },
    { katakana: 'ヒョ', romaji: 'hyo' },
    
    // B series (voiced)
    { katakana: 'バ', romaji: 'ba' },
    { katakana: 'ビ', romaji: 'bi' },
    { katakana: 'ブ', romaji: 'bu' },
    { katakana: 'ベ', romaji: 'be' },
    { katakana: 'ボ', romaji: 'bo' },
    
    // B series with yōon
    { katakana: 'ビャ', romaji: 'bya' },
    { katakana: 'ビュ', romaji: 'byu' },
    { katakana: 'ビョ', romaji: 'byo' },
    
    // P series (semi-voiced)
    { katakana: 'パ', romaji: 'pa' },
    { katakana: 'ピ', romaji: 'pi' },
    { katakana: 'プ', romaji: 'pu' },
    { katakana: 'ペ', romaji: 'pe' },
    { katakana: 'ポ', romaji: 'po' },
    
    // P series with yōon
    { katakana: 'ピャ', romaji: 'pya' },
    { katakana: 'ピュ', romaji: 'pyu' },
    { katakana: 'ピョ', romaji: 'pyo' },
    
    // M series
    { katakana: 'マ', romaji: 'ma' },
    { katakana: 'ミ', romaji: 'mi' },
    { katakana: 'ム', romaji: 'mu' },
    { katakana: 'メ', romaji: 'me' },
    { katakana: 'モ', romaji: 'mo' },
    
    // M series with yōon
    { katakana: 'ミャ', romaji: 'mya' },
    { katakana: 'ミュ', romaji: 'myu' },
    { katakana: 'ミョ', romaji: 'myo' },
    
    // Y series
    { katakana: 'ヤ', romaji: 'ya' },
    { katakana: 'ユ', romaji: 'yu' },
    { katakana: 'ヨ', romaji: 'yo' },
    
    // R series
    { katakana: 'ラ', romaji: 'ra' },
    { katakana: 'リ', romaji: 'ri' },
    { katakana: 'ル', romaji: 'ru' },
    { katakana: 'レ', romaji: 're' },
    { katakana: 'ロ', romaji: 'ro' },
    
    // R series with yōon
    { katakana: 'リャ', romaji: 'rya' },
    { katakana: 'リュ', romaji: 'ryu' },
    { katakana: 'リョ', romaji: 'ryo' },
    
    // W series
    { katakana: 'ワ', romaji: 'wa' },
    { katakana: 'ヲ', romaji: 'wo' },
    
    // N
    { katakana: 'ン', romaji: 'n' }
];

// Fisher-Yates (Knuth) shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let currentMode = 'hiragana';
let currentGrade = 1;

function updateCurrentYear() {
    const currentYear = document.querySelector('#current-year');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
}

function getKanjiData() {
    return Array.isArray(window.kanjiData) ? window.kanjiData : [];
}

function formatReading(value) {
    return value || '-';
}

function createCard(data) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    
    if (currentMode === 'kanji') {
        cardFront.textContent = data.kanji;
        cardBack.innerHTML = `Meaning: ${data.meaning}<br>Onyomi: ${formatReading(data.onyomi)}<br>Kunyomi: ${formatReading(data.kunyomi)}`;
    } else {
        cardFront.textContent = data.character;
        cardBack.textContent = data.romaji;
    }
    
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
    
    return card;
}

function initGame() {
    const cardsGrid = document.querySelector('.cards-grid');
    cardsGrid.innerHTML = '';
    
    let data;
    if (currentMode === 'hiragana') {
        data = hiraganaData.map(item => ({ character: item.hiragana, romaji: item.romaji }));
    } else if (currentMode === 'katakana') {
        data = katakanaData.map(item => ({ character: item.katakana, romaji: item.romaji }));
    } else if (currentMode === 'kanji') {
        data = getKanjiData().filter(k => k.grade === currentGrade);
        if (data.length === 0) {
            console.error(`No kanji found for grade ${currentGrade}`);
            return;
        }
    }
    
    const shuffledData = shuffleArray([...data]);
    shuffledData.forEach(item => {
        const card = createCard(item);
        cardsGrid.appendChild(card);
    });
}

function updateGradeLabels() {
    const kanjiData = getKanjiData();

    document.querySelectorAll('.grade-btn').forEach(button => {
        const grade = parseInt(button.dataset.grade, 10);
        const count = kanjiData.filter(item => item.grade === grade).length;
        button.textContent = `Grade ${grade} (${count})`;
    });
}

// Initialize the game
updateCurrentYear();
updateGradeLabels();
initGame();

// Add event listeners for navigation buttons
document.querySelectorAll('.nav-btn[data-mode]').forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        document.querySelectorAll('.nav-btn[data-mode]').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Update current mode
        currentMode = button.dataset.mode;
        
        // Show/hide grade selection
        const gradeSelection = document.querySelector('.grade-selection');
        gradeSelection.style.display = currentMode === 'kanji' ? 'flex' : 'none';
        
        // Initialize game with new mode
        initGame();
    });
});

document.querySelector('#shuffle-btn').addEventListener('click', () => {
    initGame();
});

// Add event listeners for grade selection buttons
document.querySelectorAll('.grade-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        document.querySelectorAll('.grade-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Update current grade
        currentGrade = parseInt(button.dataset.grade);
        
        // Initialize game with new grade
        initGame();
    });
}); 
