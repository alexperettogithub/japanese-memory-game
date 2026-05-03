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

const kanaToRomajiMap = {
    きゃ: 'kya', きゅ: 'kyu', きょ: 'kyo', ぎゃ: 'gya', ぎゅ: 'gyu', ぎょ: 'gyo',
    しゃ: 'sha', しゅ: 'shu', しょ: 'sho', じゃ: 'ja', じゅ: 'ju', じょ: 'jo',
    ちゃ: 'cha', ちゅ: 'chu', ちょ: 'cho', ぢゃ: 'ja', ぢゅ: 'ju', ぢょ: 'jo',
    にゃ: 'nya', にゅ: 'nyu', にょ: 'nyo', ひゃ: 'hya', ひゅ: 'hyu', ひょ: 'hyo',
    びゃ: 'bya', びゅ: 'byu', びょ: 'byo', ぴゃ: 'pya', ぴゅ: 'pyu', ぴょ: 'pyo',
    みゃ: 'mya', みゅ: 'myu', みょ: 'myo', りゃ: 'rya', りゅ: 'ryu', りょ: 'ryo',
    あ: 'a', い: 'i', う: 'u', え: 'e', お: 'o', か: 'ka', き: 'ki', く: 'ku', け: 'ke', こ: 'ko',
    が: 'ga', ぎ: 'gi', ぐ: 'gu', げ: 'ge', ご: 'go', さ: 'sa', し: 'shi', す: 'su', せ: 'se', そ: 'so',
    ざ: 'za', じ: 'ji', ず: 'zu', ぜ: 'ze', ぞ: 'zo', た: 'ta', ち: 'chi', つ: 'tsu', て: 'te', と: 'to',
    だ: 'da', ぢ: 'ji', づ: 'zu', で: 'de', ど: 'do', な: 'na', に: 'ni', ぬ: 'nu', ね: 'ne', の: 'no',
    は: 'ha', ひ: 'hi', ふ: 'fu', へ: 'he', ほ: 'ho', ば: 'ba', び: 'bi', ぶ: 'bu', べ: 'be', ぼ: 'bo',
    ぱ: 'pa', ぴ: 'pi', ぷ: 'pu', ぺ: 'pe', ぽ: 'po', ま: 'ma', み: 'mi', む: 'mu', め: 'me', も: 'mo',
    や: 'ya', ゆ: 'yu', よ: 'yo', ら: 'ra', り: 'ri', る: 'ru', れ: 're', ろ: 'ro', わ: 'wa', を: 'wo', ん: 'n'
};

let currentMode = 'hiragana';
let currentGrade = 1;
let currentSearch = '';
let appMode = 'explore';
let playKind = 'pronunciation';
let playDeck = [];
let score = 0;
let answeredCards = new Set();
let bonusSolved = false;
let savedStats = loadSavedStats();
let elapsedSeconds = 0;
let timerStartedAt = null;
let timerInterval = null;
const anonymousFallbackUsage = { explore_card_used: 0, play_attempt: 0 };
const anonymousFallbackLimits = { explore_card_used: 15, play_attempt: 5 };
const kanjiGradeCounts = { 1: 80, 2: 160, 3: 200, 4: 202, 5: 193, 6: 191 };
const advancedKanjiCache = new Map();

function loadSavedStats() {
    const fallback = { bestScore: 0, totalScore: 0, completedRounds: 0 };

    try {
        const saved = window.localStorage.getItem('jmg-score-stats');
        return saved ? { ...fallback, ...JSON.parse(saved) } : fallback;
    } catch (error) {
        return fallback;
    }
}

function saveStats() {
    try {
        window.localStorage.setItem('jmg-score-stats', JSON.stringify(savedStats));
    } catch (error) {
        // Score persistence is best-effort until account-based storage exists.
    }
}

function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

function updateTimerDisplay() {
    const timeValue = document.querySelector('#time-value');
    if (timeValue) timeValue.textContent = formatTime(elapsedSeconds);
}

function stopPlayTimer() {
    if (!timerInterval) return;
    window.clearInterval(timerInterval);
    timerInterval = null;
}

function startPlayTimer() {
    stopPlayTimer();
    timerStartedAt = Date.now();
    timerInterval = window.setInterval(() => {
        elapsedSeconds = Math.floor((Date.now() - timerStartedAt) / 1000);
        updateTimerDisplay();
    }, 1000);
}

function resetPlayTimer() {
    stopPlayTimer();
    elapsedSeconds = 0;
    timerStartedAt = null;
    updateTimerDisplay();
    if (appMode === 'play' && playDeck.length > 0) startPlayTimer();
}

async function requestUsage(kind) {
    anonymousFallbackUsage[kind] += 1;

    try {
        const response = await fetch('/api/usage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ kind })
        });

        if (!response.ok) {
            if (anonymousFallbackUsage[kind] > anonymousFallbackLimits[kind]) {
                showAccessWall('auth');
                return false;
            }
            return true;
        }
        const result = await response.json();
        if (result.authRequired) {
            showAccessWall('auth');
            return false;
        }
        return result.allowed !== false;
    } catch (error) {
        if (anonymousFallbackUsage[kind] > anonymousFallbackLimits[kind]) {
            showAccessWall('auth');
            return false;
        }
        return true;
    }
}

async function requestAdvancedAccess(feature, payload) {
    try {
        const response = await fetch('/api/access', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ feature, ...payload })
        });

        if (!response.ok) {
            showAccessWall('auth');
            return false;
        }
        const result = await response.json();
        if (result.authRequired) {
            showAccessWall('auth');
            return false;
        }
        if (result.paymentRequired) {
            showAccessWall('plus');
            return false;
        }
        return result.allowed !== false;
    } catch (error) {
        showAccessWall('auth');
        return false;
    }
}

async function loadKanjiGrade(grade) {
    if (grade <= 2 || advancedKanjiCache.has(grade)) return true;

    const response = await fetch(`/api/kanji?grade=${encodeURIComponent(String(grade))}`);
    if (response.status === 401) {
        showAccessWall('auth');
        return false;
    }
    if (response.status === 402) {
        showAccessWall('plus');
        return false;
    }
    if (!response.ok) return false;

    const result = await response.json();
    if (!Array.isArray(result.data)) return false;
    advancedKanjiCache.set(grade, result.data);
    return true;
}

function showAccessWall(kind) {
    const wall = document.querySelector('#access-wall');
    const label = document.querySelector('#access-wall-label');
    const title = document.querySelector('#access-wall-title');
    const copy = document.querySelector('#access-wall-copy');
    const authActions = document.querySelector('#auth-actions');
    const plusActions = document.querySelector('#plus-actions');
    const checkoutFeedback = document.querySelector('#checkout-feedback');
    if (!wall || !label || !title || !copy || !authActions || !plusActions) return;

    if (checkoutFeedback) checkoutFeedback.textContent = '';

    if (kind === 'plus') {
        label.textContent = 'Japanese Memory Game Plus';
        title.textContent = 'Unlock advanced learning';
        copy.textContent = 'Grade 3 and future advanced content are included with Plus.';
        authActions.hidden = true;
        plusActions.hidden = false;
    } else {
        label.textContent = 'Keep learning';
        title.textContent = 'Sign in to continue';
        copy.textContent = 'Sign in if you already have an account, or create a free account to keep playing with no limits in Explore Mode.';
        authActions.hidden = false;
        plusActions.hidden = true;
    }

    wall.hidden = false;
}

function hideAccessWall() {
    const wall = document.querySelector('#access-wall');
    if (wall) wall.hidden = true;
}

async function startCheckout(interval) {
    const checkoutFeedback = document.querySelector('#checkout-feedback');
    const buttons = document.querySelectorAll('#checkout-monthly, #checkout-yearly');

    if (checkoutFeedback) checkoutFeedback.textContent = '';
    buttons.forEach(button => { button.disabled = true; });

    try {
        const response = await fetch('/api/stripe/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ interval })
        });

        if (response.status === 401) {
            showAccessWall('auth');
            return;
        }

        const result = await response.json().catch(() => ({}));
        if (!response.ok || !result.url) {
            if (checkoutFeedback) {
                checkoutFeedback.textContent = result.error || 'Checkout is unavailable right now. Please try again in a moment.';
            }
            return;
        }

        window.location.href = result.url;
    } catch (error) {
        if (checkoutFeedback) {
            checkoutFeedback.textContent = 'Checkout is unavailable right now. Please try again in a moment.';
        }
    } finally {
        buttons.forEach(button => { button.disabled = false; });
    }
}

async function startPortal() {
    const accountStatus = document.querySelector('#account-status');
    try {
        const response = await fetch('/api/stripe/portal', { method: 'POST' });
        if (response.status === 401) {
            showAccessWall('auth');
            return;
        }

        const result = await response.json().catch(() => ({}));
        if (!response.ok || !result.url) {
            if (accountStatus) accountStatus.textContent = 'Unable to open Plus settings';
            return;
        }

        window.location.href = result.url;
    } catch (error) {
        if (accountStatus) accountStatus.textContent = 'Unable to open Plus settings';
    }
}

async function signOut() {
    await fetch('/auth/sign-out', { method: 'POST' }).catch(() => null);
    window.location.href = '/';
}

async function updateAccountPanel() {
    const status = document.querySelector('#account-status');
    const detail = document.querySelector('#account-detail');
    const signIn = document.querySelector('#account-signin');
    const signUp = document.querySelector('#account-signup');
    const portal = document.querySelector('#account-portal');
    const signOutButton = document.querySelector('#account-signout');
    if (!status || !detail || !signIn || !signUp || !portal || !signOutButton) return;

    try {
        const response = await fetch('/api/account');
        const account = await response.json();

        if (!account.authenticated) {
            status.textContent = 'Not signed in';
            detail.textContent = 'Sign in or create a free account to keep learning without anonymous limits.';
            signIn.hidden = false;
            signUp.hidden = false;
            portal.hidden = true;
            signOutButton.hidden = true;
            return;
        }

        status.textContent = account.plus ? 'Plus active' : 'Signed in';
        detail.textContent = account.plus
            ? `${account.email || 'Your account'} has Japanese Memory Game Plus.`
            : `${account.email || 'Your account'} can use free content without anonymous limits.`;
        signIn.hidden = true;
        signUp.hidden = true;
        portal.hidden = !account.plus;
        signOutButton.hidden = false;
    } catch (error) {
        status.textContent = 'Account unavailable';
        detail.textContent = 'Refresh the page or try again in a moment.';
    }
}

function setSiteMenuOpen(open) {
    const state = document.querySelector('#site-menu-state');
    const panel = document.querySelector('#site-menu-panel');
    const feedback = document.querySelector('#social-feedback');
    if (!state || !panel) return;

    state.checked = open;
    if (!open && feedback) feedback.textContent = '';
}

function showSocialComingSoon(event) {
    event.preventDefault();
    event.stopPropagation();
    const feedback = document.querySelector('#social-feedback');
    const name = event.currentTarget.dataset.social || 'Social';
    if (feedback) feedback.textContent = `${name} coming soon.`;
}

function updateCurrentYear() {
    const currentYear = document.querySelector('#current-year');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
}

function getKanjiData() {
    const publicKanji = Array.isArray(window.kanjiData) ? window.kanjiData : [];
    return [...publicKanji, ...advancedKanjiCache.values()].flat();
}

function formatReading(value) {
    return value || '-';
}

function toHiragana(value) {
    return value.replace(/[ァ-ン]/g, char => String.fromCharCode(char.charCodeAt(0) - 0x60));
}

function normalizeSearch(value) {
    return value
        .toLowerCase()
        .normalize('NFKC')
        .replaceAll('ā', 'a')
        .replaceAll('ī', 'i')
        .replaceAll('ū', 'u')
        .replaceAll('ē', 'e')
        .replaceAll('ō', 'o')
        .trim();
}

function normalizeAnswer(value) {
    return normalizeSearch(toHiragana(String(value || ''))).replaceAll('-', '').replaceAll(' ', '');
}

function isHiraganaInput(value) {
    return /^[ぁ-ゖー\s-]+$/.test(String(value || '').trim());
}

function simplifyLongVowels(value) {
    return value
        .replaceAll('ou', 'o')
        .replaceAll('uu', 'u')
        .replaceAll('aa', 'a')
        .replaceAll('ii', 'i')
        .replaceAll('ee', 'e');
}

function romanizeKana(value) {
    const hiragana = toHiragana(value.replaceAll('ー', ''));
    let output = '';

    for (let i = 0; i < hiragana.length; i++) {
        const current = hiragana[i];

        if (current === '-' || current === '、' || current === ',' || current === ' ') {
            output += current;
            continue;
        }

        if (current === 'っ') {
            const nextPair = hiragana.slice(i + 1, i + 3);
            const nextSingle = hiragana[i + 1];
            const nextRomaji = kanaToRomajiMap[nextPair] || kanaToRomajiMap[nextSingle] || '';
            output += nextRomaji.charAt(0);
            continue;
        }

        const pair = hiragana.slice(i, i + 2);
        if (kanaToRomajiMap[pair]) {
            output += kanaToRomajiMap[pair];
            i += 1;
            continue;
        }

        output += kanaToRomajiMap[current] || current;
    }

    return output;
}

function addToken(tokens, value) {
    if (!value) return;
    const normalized = normalizeSearch(String(value));
    if (!normalized) return;
    tokens.push(normalized, simplifyLongVowels(normalized));
}

function addReadingTokens(tokens, value) {
    addToken(tokens, value);
    String(value || '').split(/[、,\s]+/).forEach(reading => {
        const romaji = romanizeKana(reading);
        addToken(tokens, romaji);
        addToken(tokens, simplifyLongVowels(romaji));
    });
}

function getBrowseData() {
    if (currentMode === 'hiragana') {
        return hiraganaData.map(item => ({ type: 'hiragana', character: item.hiragana, romaji: item.romaji }));
    }

    if (currentMode === 'katakana') {
        return katakanaData.map(item => ({ type: 'katakana', character: item.katakana, romaji: item.romaji }));
    }

    return getKanjiData().filter(k => k.grade === currentGrade).map(item => ({ ...item, type: 'kanji' }));
}

function getSearchData() {
    const hiraganaCards = hiraganaData.map(item => ({ type: 'hiragana', character: item.hiragana, romaji: item.romaji }));
    const katakanaCards = katakanaData.map(item => ({ type: 'katakana', character: item.katakana, romaji: item.romaji }));
    const kanjiCards = getKanjiData().map(item => ({ ...item, type: 'kanji' }));

    return [...hiraganaCards, ...katakanaCards, ...kanjiCards];
}

function getSearchTokens(data) {
    const tokens = [];

    if (data.type === 'kanji') {
        addToken(tokens, data.kanji);
        addToken(tokens, data.meaning);
        addToken(tokens, `grade ${data.grade}`);
        addReadingTokens(tokens, data.onyomi);
        addReadingTokens(tokens, data.kunyomi);
    } else {
        addToken(tokens, data.character);
        addToken(tokens, data.romaji);
        addToken(tokens, romanizeKana(data.character));
    }

    return [...new Set(tokens)];
}

function matchesSearch(data, query) {
    const normalizedQuery = normalizeSearch(query);
    if (!normalizedQuery) return true;

    return getSearchTokens(data).some(token => token.includes(normalizedQuery));
}

function getCardId(data) {
    if (data.type === 'kanji') return `kanji-${data.grade}-${data.kanji}`;
    return `${data.type}-${data.character}`;
}

function getAcceptedAnswers(data) {
    if (data.type === 'kanji' && playKind === 'meaning') {
        return String(data.meaning || '')
            .split(/[,;\/]|\bor\b/)
            .map(answer => normalizeAnswer(answer))
            .filter(Boolean);
    }

    if (data.type === 'kanji') {
        return `${data.onyomi || ''}、${data.kunyomi || ''}`
            .split(/[、,\s]+/)
            .map(answer => normalizeAnswer(answer))
            .filter(Boolean);
    }

    return [normalizeAnswer(data.romaji)];
}

function closeActiveAnswerCards(exceptCard = null) {
    document.querySelectorAll('.card.answering, .card.wrong').forEach(card => {
        if (card === exceptCard || card.classList.contains('solved')) return;
        const input = card.querySelector('.answer-panel input');
        const feedback = card.querySelector('.answer-feedback');
        if (input) input.value = '';
        setCancelHint(feedback);
        card.classList.remove('answering', 'wrong');
    });
}

function hasActiveAnswerCard(exceptCard = null) {
    return [...document.querySelectorAll('.card.answering, .card.wrong')]
        .some(card => card !== exceptCard && !card.classList.contains('solved'));
}

function getCancelHintMarkup() {
    return '<span class="desktop-cancel">Press Esc to cancel.</span><span class="mobile-cancel">Tap outside to cancel.</span>';
}

function setCancelHint(element) {
    if (!element) return;
    element.replaceChildren();
    const desktopHint = document.createElement('span');
    desktopHint.className = 'desktop-cancel';
    desktopHint.textContent = 'Press Esc to cancel.';
    const mobileHint = document.createElement('span');
    mobileHint.className = 'mobile-cancel';
    mobileHint.textContent = 'Tap outside to cancel.';
    element.append(desktopHint, mobileHint);
}

function appendTextElement(parent, tagName, text, className = '') {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    element.textContent = text;
    parent.appendChild(element);
    return element;
}

function cancelAnswerCard(card) {
    const input = card.querySelector('.answer-panel input');
    const feedback = card.querySelector('.answer-feedback');
    if (input) input.value = '';
    setCancelHint(feedback);
    card.classList.remove('answering', 'wrong');
}

function isCorrectAnswer(data, value) {
    if (data.type === 'kanji' && playKind === 'pronunciation' && !isHiraganaInput(value)) return false;

    const answer = normalizeAnswer(value);
    if (!answer) return false;
    return getAcceptedAnswers(data).includes(answer);
}

function getAnswerPlaceholder(data) {
    if (data.type === 'kanji' && playKind === 'meaning') return 'Type the English meaning';
    return data.type === 'kanji' ? 'Type hiragana only' : 'Type romaji';
}

function getAnswerHelp(data) {
    if (data.type === 'kanji' && playKind === 'meaning') return 'What does this kanji mean?';
    if (data.type === 'kanji') return 'Pronunciation: hiragana only.';
    return playKind === 'meaning' ? 'Kana have no meaning here: use romaji.' : 'Pronunciation: romaji.';
}

function getRevealText(data) {
    if (data.type === 'kanji' && playKind === 'meaning') return data.meaning;
    if (data.type === 'kanji') return `${formatReading(data.onyomi)} / ${formatReading(data.kunyomi)}`;
    return data.romaji;
}

function createCard(data) {
    const card = document.createElement('div');
    card.className = `card ${data.type || currentMode}`;
    card.dataset.cardId = getCardId(data);
    
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    
    const cardPrompt = document.createElement('span');
    cardPrompt.className = 'card-prompt';

    if (data.type === 'kanji') {
        cardPrompt.textContent = data.kanji;
        appendTextElement(cardBack, 'span', `Grade ${data.grade}`, 'card-label');
        appendTextElement(cardBack, 'strong', data.meaning);
        appendTextElement(cardBack, 'span', `Onyomi: ${formatReading(data.onyomi)}`);
        appendTextElement(cardBack, 'span', `Kunyomi: ${formatReading(data.kunyomi)}`);
    } else {
        cardPrompt.textContent = data.character;
        appendTextElement(cardBack, 'span', data.type, 'card-label');
        appendTextElement(cardBack, 'strong', data.romaji);
    }

    cardFront.appendChild(cardPrompt);
    
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    
    if (appMode === 'play') {
        addPlayControls(card, cardFront, data);
    } else {
        card.addEventListener('click', async () => {
            if (!await requestUsage('explore_card_used')) return;
            card.classList.toggle('flipped');
        });
    }
    
    return card;
}

function addPlayControls(card, cardFront, data) {
    const answerPanel = document.createElement('form');
    answerPanel.className = 'answer-panel';

    const label = document.createElement('label');
    label.textContent = getAnswerHelp(data);
    const answerRow = document.createElement('div');
    answerRow.className = 'answer-row';
    const input = document.createElement('input');
    input.type = 'text';
    input.autocomplete = 'off';
    input.placeholder = getAnswerPlaceholder(data);
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Check';
    answerRow.append(input, submitButton);
    const feedback = document.createElement('p');
    feedback.className = 'answer-feedback';
    setCancelHint(feedback);
    answerPanel.append(label, answerRow, feedback);
    cardFront.appendChild(answerPanel);

    card.addEventListener('click', event => {
        if (answeredCards.has(getCardId(data))) return;
        if (event.target.closest('.answer-panel')) return;

        if (hasActiveAnswerCard(card)) {
            closeActiveAnswerCards(card);
            return;
        }

        closeActiveAnswerCards(card);
        card.classList.add('answering');
        input.focus();
    });

    input.addEventListener('keydown', event => {
        if (event.key !== 'Escape') return;
        event.preventDefault();
        cancelAnswerCard(card);
    });

    answerPanel.addEventListener('submit', event => {
        event.preventDefault();

        requestUsage('play_attempt').then(allowed => {
            if (!allowed) return;

            if (isCorrectAnswer(data, input.value)) {
                const cardId = getCardId(data);
                answeredCards.add(cardId);
                score += 1;
                savedStats.totalScore += 1;
                savedStats.bestScore = Math.max(savedStats.bestScore, score);
                saveStats();
                card.classList.remove('answering', 'wrong');
                card.classList.add('flipped', 'solved');
                input.disabled = true;
                answerPanel.querySelector('button').disabled = true;
                feedback.textContent = `Correct: ${getRevealText(data)}`;
                updateScorePanel();
                checkRoundCompletion();
                return;
            }

            card.classList.add('wrong');
            feedback.textContent = 'Try again.';
            input.select();
            window.setTimeout(() => card.classList.remove('wrong'), 420);
        });
    });
}

function updateResultsSummary(count, isSearching) {
    const summary = document.querySelector('#results-summary');
    if (!summary) return;

    if (isSearching) {
        summary.textContent = count === 1 ? '1 matching card' : `${count} matching cards`;
        return;
    }

    if (currentMode === 'kanji') {
        summary.textContent = `Browsing Grade ${currentGrade}: ${count} cards`;
    } else {
        summary.textContent = `Browsing ${currentMode}: ${count} cards`;
    }
}

function renderCards(data, isSearching) {
    const cardsGrid = document.querySelector('.cards-grid');
    cardsGrid.innerHTML = '';

    updateResultsSummary(data.length, isSearching);

    if (data.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.textContent = 'No cards found. Try Japanese, romaji, or an English meaning.';
        cardsGrid.appendChild(emptyState);
        return;
    }

    data.forEach(item => {
        const card = createCard(item);
        cardsGrid.appendChild(card);
    });
}

function updateScorePanel() {
    const scorePanel = document.querySelector('#score-panel');
    const timeCounter = document.querySelector('#play-time-counter');
    const scoreValue = document.querySelector('#score-value');
    const progressValue = document.querySelector('#progress-value');
    const bestScoreValue = document.querySelector('#best-score-value');
    const totalScoreValue = document.querySelector('#total-score-value');
    const timeValue = document.querySelector('#time-value');

    scorePanel.hidden = appMode !== 'play';
    timeCounter.hidden = appMode !== 'play';
    scoreValue.textContent = String(score);
    progressValue.textContent = `${answeredCards.size}/${playDeck.length}`;
    bestScoreValue.textContent = String(savedStats.bestScore);
    totalScoreValue.textContent = String(savedStats.totalScore);
    timeValue.textContent = formatTime(elapsedSeconds);
    document.querySelector('#play-instructions').textContent = playKind === 'meaning'
        ? 'Meaning mode: answer kanji with English meanings. Kana still use romaji.'
        : 'Pronunciation mode: kana use romaji, kanji use hiragana.';
}

function resetPlayState() {
    score = 0;
    answeredCards = new Set();
    bonusSolved = false;
    resetPlayTimer();
    document.querySelector('#bonus-level').hidden = true;
    document.querySelector('#taito-answer').value = '';
    document.querySelector('#taito-feedback').textContent = '';
}

function checkRoundCompletion() {
    if (appMode !== 'play' || playDeck.length === 0 || answeredCards.size < playDeck.length) return;
    savedStats.completedRounds += 1;
    savedStats.bestScore = Math.max(savedStats.bestScore, score);
    saveStats();
    updateScorePanel();
    stopPlayTimer();
    document.querySelector('#bonus-level').hidden = false;
    document.querySelector('#taito-answer').focus();
}

function initGame({ shuffle = true } = {}) {
    const isSearching = currentSearch.length > 0;
    const sourceData = isSearching ? getSearchData().filter(item => matchesSearch(item, currentSearch)) : getBrowseData();
    const displayData = shuffle ? shuffleArray([...sourceData]) : [...sourceData];
    playDeck = appMode === 'play' ? displayData : [];
    resetPlayState();
    updateScorePanel();
    renderCards(displayData, isSearching);
    updateScorePanel();
}

function updateGradeLabels() {
    const kanjiData = getKanjiData();

    document.querySelectorAll('.grade-btn').forEach(button => {
        const grade = parseInt(button.dataset.grade, 10);
        const loadedCount = kanjiData.filter(item => item.grade === grade).length;
        const count = loadedCount || kanjiGradeCounts[grade] || 0;
        button.textContent = `Grade ${grade} (${count})`;
    });
}

function updateGradeVisibility() {
    const gradeSelection = document.querySelector('.grade-selection');
    gradeSelection.style.display = currentMode === 'kanji' && currentSearch.length === 0 ? 'flex' : 'none';
}

updateCurrentYear();
updateGradeLabels();
updateGradeVisibility();
updateScorePanel();
updateAccountPanel();
initGame();

window.addEventListener('scroll', () => {
    const betaBadge = document.querySelector('.beta-badge');
    const timeCounter = document.querySelector('#play-time-counter');
    const scrolled = window.scrollY > 24;
    if (betaBadge) betaBadge.classList.toggle('hidden', scrolled);
    if (timeCounter) timeCounter.classList.toggle('raised', scrolled);
}, { passive: true });

document.querySelector('#controls-toggle').addEventListener('click', () => {
    const advancedControls = document.querySelector('#advanced-controls');
    const controlsToggle = document.querySelector('#controls-toggle');
    const isOpen = advancedControls.classList.toggle('open');
    controlsToggle.setAttribute('aria-expanded', String(isOpen));
});

document.addEventListener('pointerdown', event => {
    if (appMode !== 'play') return;
    if (event.target.closest('.card')) return;
    closeActiveAnswerCards();
});

document.querySelectorAll('.mode-btn').forEach(button => {
    button.addEventListener('click', () => {
        const nextMode = button.dataset.appMode;
        if (nextMode === appMode) return;

        document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        button.closest('.app-mode-switch')?.classList.toggle('play-selected', nextMode === 'play');
        button.closest('.app-mode-switch')?.classList.toggle('explore-selected', nextMode === 'explore');

        appMode = nextMode;
        if (appMode !== 'play') stopPlayTimer();
        initGame({ shuffle: false });
    });
});

document.querySelectorAll('.play-kind-btn').forEach(button => {
    button.addEventListener('click', () => {
        const nextKind = button.dataset.playKind;
        if (nextKind === playKind) return;

        document.querySelectorAll('.play-kind-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        playKind = nextKind;
        initGame({ shuffle: false });
    });
});

document.querySelectorAll('.nav-btn[data-mode]').forEach(button => {
    button.addEventListener('click', () => {
        const nextMode = button.dataset.mode;
        if (nextMode === currentMode && currentSearch.length === 0) return;

        document.querySelectorAll('.nav-btn[data-mode]').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        currentMode = nextMode;
        updateGradeVisibility();
        initGame();
    });
});

document.querySelector('#shuffle-btn').addEventListener('click', () => {
    initGame();
});

document.querySelectorAll('.grade-btn').forEach(button => {
    button.addEventListener('click', async () => {
        const nextGrade = parseInt(button.dataset.grade, 10);
        if (nextGrade === currentGrade) return;
        if (!await requestAdvancedAccess('kanji_grade', { grade: nextGrade })) return;
        if (!await loadKanjiGrade(nextGrade)) return;

        document.querySelectorAll('.grade-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        currentGrade = nextGrade;
        initGame();
    });
});

document.querySelector('#search-input').addEventListener('input', event => {
    currentSearch = normalizeSearch(event.target.value);
    updateGradeVisibility();
    initGame({ shuffle: false });
});

document.querySelector('#clear-search-btn').addEventListener('click', () => {
    document.querySelector('#search-input').value = '';
    currentSearch = '';
    updateGradeVisibility();
    initGame();
});

document.querySelector('#taito-submit').addEventListener('click', () => {
    const rawAnswer = document.querySelector('#taito-answer').value;
    const answer = normalizeAnswer(rawAnswer);
    const feedback = document.querySelector('#taito-feedback');
    const acceptedAnswers = ['たいと', 'だいと', 'おとど'];

    if (isHiraganaInput(rawAnswer) && acceptedAnswers.includes(answer)) {
        if (!bonusSolved) {
            bonusSolved = true;
            score += 10;
            savedStats.totalScore += 10;
            savedStats.bestScore = Math.max(savedStats.bestScore, score);
            saveStats();
            updateScorePanel();
        }
        feedback.textContent = 'Secret level cleared. +10 bonus points.';
        feedback.className = 'answer-feedback correct';
        return;
    }

    feedback.textContent = 'Not yet. Try たいと, だいと, or おとど.';
    feedback.className = 'answer-feedback';
});

document.querySelector('#access-wall-close')?.addEventListener('click', hideAccessWall);
document.querySelector('#access-wall')?.addEventListener('click', event => {
    if (event.target === event.currentTarget) hideAccessWall();
});
document.querySelectorAll('.social-links button[data-coming-soon="true"]').forEach(button => {
    button.addEventListener('pointerdown', showSocialComingSoon);
    button.addEventListener('click', showSocialComingSoon);
});
document.addEventListener('pointerdown', event => {
    const menu = document.querySelector('.site-menu');
    const state = document.querySelector('#site-menu-state');
    if (!state?.checked || menu?.contains(event.target)) return;
    setSiteMenuOpen(false);
});
document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setSiteMenuOpen(false);
});
document.querySelector('#checkout-monthly')?.addEventListener('click', () => startCheckout('monthly'));
document.querySelector('#checkout-yearly')?.addEventListener('click', () => startCheckout('yearly'));
document.querySelector('#account-portal')?.addEventListener('click', startPortal);
document.querySelector('#account-signout')?.addEventListener('click', signOut);
