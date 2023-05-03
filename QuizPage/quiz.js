const myQuestions = [
  {
    question: "What kind of working environment do you prefer?",
    answers: {
      a: "Fast-paced, competitive, and challenging",
      b: "Collaborative, supportive, and team-oriented",
      c: "Independent, flexible, and autonomous",
    },
    traits: {
      a: "Ambitious",
      b: "Team player",
      c: "Self-motivated",
    },
  },
  {
    question: "What is your approach to problem-solving?",
    answers: {
      a: "Systematic and analytical",
      b: "Intuitive and creative",
      c: "Pragmatic and results-oriented",
    },
    traits: {
      a: "Analytical",
      b: "Creative",
      c: "Practical",
    },
  },
  {
    question: "How do you deal with unexpected challenges at work?",
    answers: {
      a: "Stay calm and think logically to find a solution",
      b: "Seek guidance and support from colleagues or mentors",
      c: "Take initiative and come up with new approaches",
    },
    traits: {
      a: "Resilient",
      b: "Collaborative",
      c: "Innovative",
    },
  },
  {
    question: "What motivates you to work hard?",
    answers: {
      a: "Achieving personal goals and advancing in my career",
      b: "Making a positive impact on others and society",
      c: "Learning new things and taking on new challenges",
    },
    traits: {
      a: "Ambitious",
      b: "Altruistic",
      c: "Curious",
    },
  },
  {
    question: "How do you handle conflicting priorities or tight deadlines?",
    answers: {
      a: "Prioritize tasks based on urgency and importance",
      b: "Negotiate deadlines and communicate with stakeholders",
      c: "Focus on the most critical tasks and delegate responsibilities",
    },
    traits: {
      a: "Organized",
      b: "Adaptable",
      c: "Efficient",
    },
  },
];

// Create an object to store the total count for each trait
const traitCounts = {
  Ambitious: 0,
  "Team player": 0,
  "Self-motivated": 0,
  Analytical: 0,
  Creative: 0,
  Practical: 0,
  Resilient: 0,
  Collaborative: 0,
  Innovative: 0,
  Altruistic: 0,
  Curious: 0,
  Organized: 0,
  Adaptable: 0,
  Efficient: 0,
};

document.addEventListener("DOMContentLoaded", function () {
  const quizContainer = document.getElementById("quiz-form");
  const resultsContainer = document.querySelector(".result-items");
  const submitButton = document.querySelector(".quiz-submit");
  const backhomeButton = document.querySelector(".back-to-home");

  function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for (const letter in currentQuestion.answers) {
        answers.push(`
          <div class="quiz-option">
            <input
              type="radio"
              id="question${questionNumber}${letter}"
              name="question${questionNumber}"
              value="${letter}"
              required
            />
            <label for="question${questionNumber}${letter}">${currentQuestion.answers[letter]}</label>
          </div>
        `);
      }

      output.push(`
        <div class="question-container">
          <h2 class="quiz-question">${currentQuestion.question}</h2>
          <div class="quiz-options">${answers.join("")}</div>
          </br>
        </div>
      `);
    });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".quiz-options");
    // Loop through each question and update the selectedTraits array
    const selectedTraits = [];
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      selectedTraits.push(currentQuestion.traits[userAnswer]);
    });

    // Remove duplicates from selectedTraits array
    const uniqueTraits = [...new Set(selectedTraits)];
    var queryString = `?traits=${JSON.stringify(uniqueTraits)}`;
    console.log(queryString);
    // Display selected traits in results container
    const traitsOutput = uniqueTraits.map(
      (trait) => `<div class="trait"><h4>${trait}</h4></div>`
    );
    resultsContainer.innerHTML = traitsOutput.join("");
    location.href = "../home.html" + queryString;
  }

  buildQuiz();
  submitButton.addEventListener("click", function (event) {
    showResults();
  });
});
