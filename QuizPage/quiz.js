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
  {
    question: "How do you ensure attention to detail in your work?",
    answers: {
      a: "Create checklists and double-check your work",
      b: "Use automated tools or software to check for errors",
      c: "Take breaks and return to the work with fresh eyes",
    },
    traits: {
      a: "Detail-oriented",
      b: "Efficient",
      c: "Patient",
    },
  },
  {
    question: "How do you handle a customer complaint?",
    answers: {
      a: "Listen actively to their concerns and offer a solution",
      b: "Apologize for the inconvenience and explain the situation",
      c: "Escalate the issue to a supervisor or manager if necessary",
    },
    traits: {
      a: "Empathetic",
      b: "Communicative",
      c: "Problem-solving",
    },
  },
  {
    question: "How do you stay organized when managing multiple projects or tasks?",
    answers: {
      a: "Use a project management tool or app to track progress",
      b: "Set clear deadlines and prioritize tasks based on importance",
      c: "Delegate tasks to team members or colleagues",
    },
    traits: {
      a: "Organized",
      b: "Multitasking",
      c: "Goal-oriented",
    },
  },
  {
    question: "How do you conduct research for a project or assignment?",
    answers: {
      a: "Use reputable sources and cross-check information",
      b: "Interview experts or professionals in the field",
      c: "Create a detailed plan or outline before beginning research",
    },
    traits: {
      a: "Research-oriented",
      b: "Detail-oriented",
      c: "Problem-solving",
    },
  },
  {
    question: "How do you ensure effective communication with team members or colleagues?",
    answers: {
      a: "Regularly check in and provide updates on progress",
      b: "Use clear and concise language when communicating",
      c: "Encourage open and honest communication and feedback",
    },
    traits: {
      a: "Communicative",
      b: "Friendly",
      c: "Adaptable",
    },
  }
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
  "Detail-oriented": 0,
  "Research-oriented": 0,
  Empathetic: 0,
  Communicative: 0,
  Friendly: 0,
  "Problem-solving": 0,
  "Goal-oriented": 0,
  Patient: 0,
};

document.addEventListener("DOMContentLoaded", function () {
  const quizContainer = document.getElementById("quiz-form");
  const submitButton = document.querySelector(".quiz-submit");

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
    const traitsOutput = uniqueTraits.map(
      (trait) => `<div class="trait"><h4>${trait}</h4></div>`
    );

    location.href = "../home.html" + queryString;
  }

  buildQuiz();
  submitButton.addEventListener("click", function (event) {
    showResults();
  });
});
