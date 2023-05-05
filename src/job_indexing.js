// Define a list of jobs and their corresponding traits
const jobTraits = [
  {
    job: "Software Developer",
    traits: ["Analytical", "Creative", "Self-motivated"],
    description: ["Designs and develops software applications for various platforms"],
  },
  {
    job: "Project Manager",
    traits: ["Collaborative", "Organized", "Efficient"],
    description: ["Plans and oversees the successful completion of projects within an organization"],
  },
  {
    job: "Marketing Specialist",
    traits: ["Creative", "Innovative", "Curious"],
    description: ["Develops and implements marketing campaigns to promote products or services"],
  },
  {
    job: "Marketing Coordinator",
    traits: ["Creative", "Communicative"],
    description: ["Assists with the coordination and implementation of marketing plans and campaigns"],
  },
  {
    job: "Sales Representative",
    traits: ["Ambitious", "Adaptable", "Efficient"],
    description: ["Sells products or services to potential customers and generates new business leads"],
  },
  {
    job: "Graphic Designer",
    traits: ["Creative", "Innovative", "Curious"],
    description: [" Creates visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, or captivate consumers"],
  },
  {
    job: "Data Analyst",
    traits: ["Analytical", "Detail-oriented", "Problem-solving"],
    description: ["Collects, analyzes, and interprets large sets of data in order to identify trends and make recommendations for businesses"],
  },
  {
    job: "UX Designer",
    traits: ["Creative", "Empathetic", "Collaborative"],
    description: ["Creates intuitive and engaging digital user experiences for websites and applications"],
  },
  {
    job: "Web Developer",
    traits: ["Analytical", "Creative", "Detail-oriented"],
    description: ["Designs and builds websites using programming languages, such as HTML, CSS, and JavaScript"],
  },
  {
    job: "Copywriter",
    traits: ["Creative", "Adaptable", "Detail-oriented"],
    description: ["Writes clear and persuasive copy for various mediums, including advertisements, websites, and marketing materials"],
  },
  {
    job: "Human Resources Manager",
    traits: ["Communicative", "Organized", "Empathetic"],
    description: ["Oversees the hiring, training, and development of employees within an organization"],
  },
  {
    job: "Financial Analyst",
    traits: ["Analytical", "Detail-oriented", "Problem-solving"],
    description: ["Analyzes financial data to inform business decisions and strategies"],
  },
  {
    job: "Content Writer",
    traits: ["Creative", "Communicative", "Research-oriented"],
    description: ["Writes and edits various forms of content, such as blog posts, articles, and social media updates"],
  },
  {
    job: "Technical Writer",
    traits: ["Detail-oriented", "Communicative", "Organized"],
    description: ["Writes technical documents and manuals, such as user guides and instruction manuals, for various products or services"],
  },
  {
    job: "Animator",
    traits: ["Creative", "Innovative", "Collaborative"],
    description: [" Creates visual effects and animations for various forms of media, such as films, television shows, and video games"],
  },
  {
    job: "Interior Designer",
    traits: ["Creative", "Innovative", "Problem-solving"],
    description: ["Designs and plans interior spaces for both residential and commercial settings"],
  },
  {
    job: "Fine Artist",
    traits: ["Creative", "Independent", "Self-disciplined"],
    description: ["Creates original artwork using various mediums, such as paint, charcoal, and sculpture"],
  },
  {
    job: "Video Editor",
    traits: ["Creative", "Detail-oriented", "Organized"],
    description: ["Edits video footage and sound recordings to create polished and professional-looking videos"],
  },
  {
    job: "Art Director",
    traits: ["Creative", "Leadership", "Communicative"],
    description: ["Manages and oversees the creative direction of various art projects, such as advertising campaigns, films, or magazines."],
  },
  {
    job: "Biomedical Engineer",
    traits: ["Analytical", "Detail-oriented", "Innovative"],
    description: ["Designs and develops medical equipment, devices, and software, as well as works to improve and maintain health systems and medical procedures."],
  },
  {
    job: "Environmental Scientist",
    traits: ["Research-oriented", "Analytical", "Detail-oriented"],
    description: ["Researches and studies the impact of human activities on the environment, and develops strategies to protect and conserve natural resources."],
  },
  {
    job: "Astronomer",
    traits: ["Curious", "Analytical", "Problem-solving"],
    description: ["Studies the universe and celestial bodies to gain a deeper understanding of their composition, behavior, and evolution."],
  },
  {
    job: "Chemist",
    traits: ["Analytical", "Detail-oriented", "Research-oriented"],
    description: ["Researches and analyzes the chemical properties and reactions of substances and materials, and develops new chemical compounds and formulations."],
  },
  {
    job: "Neuroscientist",
    traits: ["Analytical", "Detail-oriented", "Research-oriented"],
    description: ["Studies the structure and function of the nervous system, including the brain and spinal cord, to better understand cognitive processes and neurological disorders."],
  },
  {
    job: "Physicist",
    traits: ["Curious", "Analytical", "Problem-solving"],
    description: ["Studies the nature and behavior of matter and energy, and develops theories and models to explain and predict the behavior of physical phenomena."],
  },
  {
    job: "Data Scientist",
    traits: ["Analytical", "Detail-oriented", "Problem-solving"],
    description: ["Extracts insights and knowledge from data by using advanced statistical and computational techniques to solve complex problems and inform decision-making."],
  },
  {
    job: "Statistician",
    traits: ["Analytical", "Detail-oriented", "Problem-solving"],
    description: ["Designs studies, collects and analyzes data, and develops statistical models to draw conclusions and make predictions in a wide range of fields."],
  },
  {
    job: "Biostatistician",
    traits: ["Analytical", "Detail-oriented", "Problem-solving"],
    description: ["Applies statistical techniques to biological and medical research, including the design of experiments, analysis of data, and interpretation of results."],
  },
  {
    job: "Medical Scientist",
    traits: ["Analytical", "Detail-oriented", "Research-oriented"],
    description: ["Conducts research on diseases, drugs, and medical procedures to improve human health, and develops and tests new treatments and therapies."],
  },
  {
    job: "Meteorologist",
    traits: ["Analytical", "Detail-oriented", "Problem-solving"],
    description: ["Studies the atmosphere and weather patterns to forecast future weather conditions and provide information to help people make decisions and stay safe."],
  },
  {
    job: "Geologist",
    traits: ["Analytical", "Detail-oriented", "Research-oriented"],
    description: ["Studies the physical structure and history of the Earth, including rocks, minerals, and geological processes, to better understand the planet and its resources."],
  },
  {
    job: "Botanist",
    traits: ["Curious", "Analytical", "Detail-oriented"],
    description: ["Studies plants and their ecosystems, including their growth, behavior, and interactions with other organisms and the environment."],
  },
  {
    job: "Customer Service Representative",
    traits: ["Patient", "Communicative", "Problem-solving"],
    description: "Assists customers with inquiries, complaints, and other issues to ensure customer satisfaction."
  },
  {
    job: "Call Center Representative",
    traits: ["Patient", "Communicative", "Multitasking"],
    description: "Answers incoming calls from customers and helps them with their queries or issues while following call center scripts."
  },
  {
    job: "Technical Support Specialist",
    traits: ["Analytical", "Problem-solving", "Patient"],
    description: "Provides technical assistance and support to customers who are experiencing technical, hardware, or software-related issues."
  },
  {
    job: "Sales Representative",
    traits: ["Persuasive", "Goal-oriented", "Communicative"],
    description: "Responsible for generating leads and sales of a product or service by reaching out to potential customers."
  },
  {
    job: "Account Manager",
    traits: ["Organized", "Communicative", "Patient"],
    description: "Manages and maintains relationships with existing customers by resolving their issues and upselling relevant products or services."
  },
  {
    job: "Customer Success Manager",
    traits: ["Empathetic", "Problem-solving", "Goal-oriented"],
    description: "Works with customers to ensure their satisfaction with a product or service and helps them to achieve their desired outcomes."
  },
  {
    job: "Front Desk Receptionist",
    traits: ["Friendly", "Organized", "Multitasking"],
    description: "Greets visitors and directs them to the appropriate personnel, handles phone calls, and performs clerical tasks."
  },
  {
    job: "Client Services Coordinator",
    traits: ["Organized", "Communicative", "Problem-solving"],
    description: "Coordinates and manages client accounts, provides assistance, resolves problems, and answers inquiries."
  },
  {
    job: "Help Desk Support",
    traits: ["Analytical", "Patient", "Communicative"],
    description: "Provides technical support to end-users by answering questions or resolving technical problems."
  },
  {
    job: "Chat Support Representative",
    traits: ["Patient", "Communicative", "Multitasking"],
    description: "Provides online assistance to customers by responding to chat messages, answering their queries, and resolving issues."
  },
  {
    job: "Social Worker",
    traits: ["Empathetic", "Patient", "Altruistic"],
    description: "Assists individuals and communities in coping with social, emotional, and financial challenges, and connects them to necessary resources and support."
  },
  {
    job: "Nonprofit Fundraiser",
    traits: ["Friendly", "Communicative", "Altruistic"],
    description: "Plans and executes fundraising campaigns to support nonprofit organizations that work to address social and environmental issues."
  },
  {
    job: "Volunteer Coordinator",
    traits: ["Organized", "Detail-oriented", "Altruistic"],
    description: "Recruits, trains, and manages volunteers for various nonprofit organizations or community programs that aim to improve people's lives."
  }
];

let TraitsSection = document.getElementById("traits");

// Define a function that takes a list of selected traits and returns a sorted list of jobs
function sortJobsByTraits(selectedTraits) {
  // Define an object to keep track of the number of matching traits for each job
  const jobCounts = {};

  // Loop through each job and count the number of matching traits
  jobTraits.forEach((currentJob) => {
    let count = 0;
    currentJob.traits.forEach((trait) => {
      if (selectedTraits.includes(trait)) {
        count++;
      }
    });
    jobCounts[currentJob.job] = count;
  });

  // Sort the jobs based on the number of matching traits
  const sortedJobs = Object.keys(jobCounts).sort(
    (a, b) => jobCounts[b] - jobCounts[a]
  );
  return sortedJobs;
}

function appendNewJob(job) {
  let JobSection = document.getElementById("job_list");
  if (JobSection) {
    console.log(JobSection.innerHTML);
    var JobEntry = jobTraits.find(
      (s) => s.job.toLowerCase() == job.toLowerCase()
    );
    if (JobEntry) {
      var DivUse = `<div class="job-listing">
                <h3>${JobEntry.job}</h3>
                <p>
                ${JobEntry.description}
                </p>
                <ul class="tags">
                `;
      JobEntry.traits.forEach((t) => {
        DivUse += `<li class="tag-${t.toLocaleLowerCase()}">${t}</li>`;
      });
      var divEnd = `</ul>
            </div><hr/>`;
      DivUse += divEnd;
      JobSection.innerHTML += DivUse;
    }
  }
}

let params = new URL(document.location).searchParams;
let job_title = params.get("job");
let traits = params.get("traits");
if (traits === null || traits === "") {
  if (job_title !== null && job_title !== "") {
    appendNewJob(job_title);
  } else {
    jobTraits.forEach((s) => {
      console.log(s.job);
      appendNewJob(s.job);
    });
  }
} else {
  let JobGotten = [];
  let traitJs = JSON.parse(traits);
  console.log(traitJs)
  traitJs.forEach((trait) => {
    TraitsSection.innerHTML += `<ul class="tags" style="">
    <li class="tag-${trait.toLocaleLowerCase()}"style="display: inline-block; margin-bottom: 5px ">${trait}</li>
    </ul>`
  });
  jobTraits.forEach((job) => {
    traitJs.forEach((trait) => {
      var f = job.traits.find((g) => g == trait);
      if (f && !JobGotten.find((v) => v === job.job)) {
        JobGotten.push(job.job);
        appendNewJob(job.job);
      }
    });
  });
}
