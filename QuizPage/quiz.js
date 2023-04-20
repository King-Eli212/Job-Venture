
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

document.addEventListener("DOMContentLoaded", function () {
  const quizContainer = document.getElementById("quiz-form");
  const resultsContainer = document.getElementById("result-container");
  const submitButton = document.querySelector('.quiz-submit');

  function buildQuiz() {
    const output = [];
  
    // Loop through each question
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // Create an array to store each answer choice
      const answers = [];
  
      // Loop through each answer choice for the current question
      for (const letter in currentQuestion.answers) {
        // Add HTML for the answer choice to the array
        answers.push(`
          <div class="answer-container">
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
  
      // Add HTML for the question and its answer choices to the output array
      output.push(`
        <div class="question-container">
          <h2 class="question">${currentQuestion.question}</h2>
          <div class="answers">${answers.join("")}</div>
          </br>
          <button class="quiz-submit" type="submit">Submit</button>
        </div>
      `);
    });
  
    // Combine all the HTML for the questions into a single string and add it to the page
    quizContainer.innerHTML = output.join("");
    submitButton.addEventListener("click", showResults);
  }
  


function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".answers");

  let personalityTraits = {};

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer) {
      if (personalityTraits.hasOwnProperty(currentQuestion.traits)) {
        personalityTraits[currentQuestion.traits][userAnswer]++;
      } else {
        personalityTraits[currentQuestion.traits] = { a: 0, b: 0, c: 0 };
        personalityTraits[currentQuestion.traits][userAnswer]++;
      }
    }
    
  });

  const traitsOutput = [];

  for (trait in personalityTraits) {
    const total = Object.values(personalityTraits[trait]).reduce(
      (a, b) => a + b
    );
    const aPercentage = ((personalityTraits[trait]["a"] / total) * 100).toFixed(
      2
    );
    const bPercentage = ((personalityTraits[trait]["b"] / total) * 100).toFixed(
      2
    );
    const cPercentage = ((personalityTraits[trait]["c"] / total) * 100).toFixed(
      2
    );

    traitsOutput.push(
      `<div class="trait">
             <h4>${trait}</h4>
             <div class="percentage-bar">
                 <div class="a" style="width: ${aPercentage}%"></div>
                 <div class="b" style="width: ${bPercentage}%"></div>
                 <div class="c" style="width: ${cPercentage}%"></div>
             </div>
             <div class="percentage">${aPercentage}% A | ${bPercentage}% B | ${cPercentage}% C</div>
         </div>`
    );
  }

  quizContainer.innerHTML = traitsOutput.join("");
}

buildQuiz();

});