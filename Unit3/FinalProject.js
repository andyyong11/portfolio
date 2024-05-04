// Define a Node class for the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Define a LinkedList class
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a new node to the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Method to retrieve data from a node at a specific index
    get(index) {
        let count = 0;
        let current = this.head;
        while (current) {
            if (count === index) {
                return current.data;
            }
            count++;
            current = current.next;
        }
        return null;
    }
}

// Create a linked list to manage the flashcards
const flashcardList = new LinkedList();

// Add flashcards to the linked list
const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
    { question: "Who wrote 'To Kill a Mockingbird'?", answer: "Harper Lee" },
    { question: "What is the chemical symbol for water?", answer: "H2O" },
    { question: "In what year did the Titanic sink?", answer: "1912" },
    { question: "What is the tallest mountain in the world?", answer: "Mount Everest" },
    { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
    { question: "What is the capital of Japan?", answer: "Tokyo" }
];

flashcards.forEach(card => {
    flashcardList.append(card);
});

let currentCard = flashcardList.head;

const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const showButton = document.getElementById('show-button');
const nextButton = document.getElementById('next-button');

function displayCard() {
    questionElement.textContent = currentCard.data.question;
    answerElement.textContent = currentCard.data.answer;
}

function showCard() {
    if (answerElement.style.display === 'none') {
        answerElement.style.display = 'block';
        flipButton.textContent = 'Hide Answer';
    } else {
        answerElement.style.display = 'none';
        flipButton.textContent = 'Show Answer';
    }
}

function nextCard() {
    if (currentCard.next) {
        currentCard = currentCard.next;
        displayCard();
        answerElement.style.display = 'none'; // Ensure answer is hidden for the next question
        flipButton.textContent = 'Show Answer'; // Reset button text
    }
}

showButton.addEventListener('click', showCard);
nextButton.addEventListener('click', nextCard);

displayCard(); // Display the first flashcard when the page loads
