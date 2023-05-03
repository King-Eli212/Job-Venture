// Define a list of jobs and their corresponding traits
const jobTraits = [
  {
    job: "Software Developer",
    traits: ["Analytical", "Creative", "Self-motivated"],
  },
  {
    job: "Project Manager",
    traits: ["Collaborative", "Organized", "Efficient"],
  },
  {
    job: "Marketing Specialist",
    traits: ["Creative", "Innovative", "Curious"],
  },
  {
    job: "Marketing Coordinator",
    traits: ["Creative", "Communicative"],
  },
  {
    job: "Sales Representative",
    traits: ["Ambitious", "Adaptable", "Efficient"],
  },
  {
    job: "Graphic Designer",
    traits: ["Creative", "Innovative", "Curious"],
  },
  {
    job: "Data Analyst",
    traits: ["Analytical", "Detail-oriented", "Problem solver"],
  },
  {
    job: "UX Designer",
    traits: ["Creative", "Empathetic", "Collaborative"],
  },
  {
    job: "Web Developer",
    traits: ["Analytical", "Creative", "Detail-oriented"],
  },
  {
    job: "Copywriter",
    traits: ["Creative", "Adaptable", "Detail-oriented"],
  },
  {
    job: "Human Resources Manager",
    traits: ["Communicative", "Organized", "Empathetic"],
  },
  {
    job: "Financial Analyst",
    traits: ["Analytical", "Detail-oriented", "Problem solver"],
  },
  {
    job: "Content Writer",
    traits: ["Creative", "Communicative", "Research-oriented"],
  },
  {
    job: "Technical Writer",
    traits: ["Detail-oriented", "Clear communicator", "Organized"],
  },
  {
    job: "Animator",
    traits: ["Creative", "Innovative", "Collaborative"],
  },
  {
    job: "Interior Designer",
    traits: ["Creative", "Innovative", "Problem-solving"],
  },
  {
    job: "Fine Artist",
    traits: ["Creative", "Independent", "Self-disciplined"],
  },
  {
    job: "Video Editor",
    traits: ["Creative", "Detail-oriented", "Organized"],
  },
  {
    job: "Art Director",
    traits: ["Creative", "Leadership", "Communicative"],
  },
];


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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
  jobTraits.forEach((job) => {
    let traitJs = JSON.parse(traits);
    traitJs.forEach((trait) => {
      var f = job.traits.find((g) => g == trait);
      if (f && !JobGotten.find((v) => v === job.job)) {
        JobGotten.push(job.job);
        appendNewJob(job.job);
      }
    });
  });
}
