// Firebase setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA5w-HTh1kbuOywI1M4bviLWskbro3egNw",
    authDomain: "ja-chat-c0d8b.firebaseapp.com",
    databaseURL: "https://ja-chat-c0d8b-default-rtdb.firebaseio.com",
    projectId: "ja-chat-c0d8b",
    storageBucket: "ja-chat-c0d8b.appspot.com",
    messagingSenderId: "79690163887",
    appId: "1:79690163887:web:04960546a911e0286b565a",
    measurementId: "G-0JT6YDEXW9"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// DOM Elements
const heading = document.getElementById('heading');
const emotionsContainer = document.getElementById('emotions-container');
const emotionImages = document.querySelectorAll('.emotion-img');
const inputArea = document.getElementById('input-area');
const thoughtBox = document.getElementById('thought-box');
const sendBtn = document.getElementById('send-btn');
const showResultsBtn = document.getElementById('show-results-btn');
const resultsContainer = document.getElementById('results-container');
const jaiThoughtsContainer = document.getElementById('jai-thoughts');
const emojiDisplay = document.getElementById('emoji-display');

let selectedEmotion = '';

emotionImages.forEach(img => {
    img.addEventListener('click', () => {
        selectedEmotion = img.getAttribute('data-emotion');
        heading.textContent = `Why are you feeling ${selectedEmotion}?`;
        emotionsContainer.style.display = 'none';
        inputArea.style.display = 'block';
        showResultsBtn.style.display = 'none';
        emojiDisplay.innerHTML = `<img src="../images/${selectedEmotion}.png" alt="${selectedEmotion}"/>`;
    });
});

sendBtn.addEventListener('click', async () => {
    const thought = thoughtBox.value.trim().replace(/\n/g, '<br>');
    if (thought) {
        try {
            await addDoc(collection(db, "thoughts"), {
                username: "Jai",
                emotion: selectedEmotion,
                thought: thought,
                timestamp: new Date()
            });
            alert('Your thoughts have been saved!');
            thoughtBox.value = '';
            inputArea.style.display = 'none';
            emotionsContainer.style.display = 'flex';
            heading.textContent = 'How do you feel?';
            showResultsBtn.style.display = 'block';
            emojiDisplay.innerHTML = '';
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    } else {
        alert("Please type your thoughts.");
    }
});

showResultsBtn.addEventListener('click', async () => {
    heading.textContent = "Thoughts";
    try {
        const querySnapshot = await getDocs(collection(db, "thoughts"));
        const jaiThoughts = [];
        querySnapshot.forEach(doc => {
            const data = doc.data();
            if (data.username === "Aru") {
                jaiThoughts.push(data);
            }
        });
        jaiThoughts.sort((a, b) => b.timestamp - a.timestamp);
        jaiThoughtsContainer.innerHTML = '';
        if (jaiThoughts.length > 0) {
            jaiThoughts.forEach(thought => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');
                resultItem.innerHTML = `
                    <div class="emotion-icon">
                        <img src="../images/${thought.emotion}.png" alt="${thought.emotion}" />
                    </div>
                    <div class="thought-text">${thought.thought.replace(/\n/g, '<br>')}</div>`;
                jaiThoughtsContainer.appendChild(resultItem);
            });
        }
        emotionsContainer.style.display = 'none';
        showResultsBtn.style.display = 'none';
        resultsContainer.style.display = 'block';
    } catch (error) {
        console.error("Error fetching documents: ", error);
    }
});

document.getElementById('back-btn').addEventListener('click', () => {
    resultsContainer.style.display = 'none';
    emotionsContainer.style.display = 'flex';
    showResultsBtn.style.display = 'block';
    heading.textContent = 'How do you feel?';
});
