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
      job: "Sales Representative",
      traits: ["Ambitious", "Adaptable", "Efficient"],
    },
    {
      job: "Graphic Designer",
      traits: ["Creative", "Innovative", "Curious"],
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
  