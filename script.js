const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correctAnswer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        correctAnswer: 2
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        correctAnswer: 0
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        correctAnswer: 0
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Oxygen", "Hydrogen", "Carbon", "Helium"],
        correctAnswer: 1
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        correctAnswer: 1
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Silver"],
        correctAnswer: 2
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Rhino"],
        correctAnswer: 1
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "South Korea", "Japan", "Thailand"],
        correctAnswer: 2
    }
];

function generateQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";

    questions.forEach((question, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");

        const questionTitle = document.createElement("h3");
        questionTitle.textContent = `${index + 1}. ${question.question}`;
        questionElement.appendChild(questionTitle);

        const optionsContainer = document.createElement("div");
        optionsContainer.classList.add("options");

        question.options.forEach((option, optionIndex) => {
            const optionElement = document.createElement("div");

            const optionInput = document.createElement("input");
            optionInput.type = "radio";
            optionInput.name = `question${index}`;
            optionInput.value = optionIndex;
            optionElement.appendChild(optionInput);

            const optionLabel = document.createElement("label");
            optionLabel.textContent = option;
            optionElement.appendChild(optionLabel);

            optionsContainer.appendChild(optionElement);
        });

        questionElement.appendChild(optionsContainer);
        quizContainer.appendChild(questionElement);
    });
}

function submitQuiz() {
    let score = 0;
    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === question.correctAnswer) {
            score++;
        }
    });

    const resultContainer = document.getElementById("result");
    resultContainer.textContent = `You scored ${score} out of ${questions.length}`;
}

window.onload = function () {
    generateQuiz();
};
