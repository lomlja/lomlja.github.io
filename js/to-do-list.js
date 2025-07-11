// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js';
import { getFirestore, collection, query, orderBy, limit, getDocs } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChqxgTWlXmwnTBP3CR5tviHhlMM6rKyLc",
        authDomain: "arava-ee734.firebaseapp.com",
        projectId: "arava-ee734",
        storageBucket: "arava-ee734.firebasestorage.app",
        messagingSenderId: "552012486493",
        appId: "1:552012486493:web:145f8a9ea51de63e857ab4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to get the next task
async function getNextTask() {
    const tasksRef = collection(db, "tasks");
    const q = query(tasksRef, orderBy("date"), limit(1)); // Get the nearest task
    const snapshot = await getDocs(q);

    const upcomingTaskDiv = document.getElementById('upcomingTask');
    upcomingTaskDiv.innerHTML = ''; // Clear previous task

    if (!snapshot.empty) {
        snapshot.forEach(doc => {
            const task = doc.data();
            const taskDetails = document.createElement('p');
            taskDetails.textContent = `Task: ${task.title} - Due: ${task.date.toDate().toLocaleDateString()}`;
            upcomingTaskDiv.appendChild(taskDetails);
        });
    } else {
        upcomingTaskDiv.innerHTML = '<p>No upcoming tasks</p>';
    }
}

// Load upcoming task on page load
window.onload = getNextTask;