import React, { useEffect, useState } from "react";
import JobCard from "../../components/cards/JobCard";
import { getAllJobs } from "../../services/job/jobAction";
import { deleteJob } from "../../services/job/jobAction";

export default function Job() {
  const [jobs, setJobs] = useState([]);
  console.log(import.meta.env.VITE_BASE_URL);
  useEffect(() => {
    async function fetchAllJobs() {
      let jobData = await getAllJobs();

      setJobs(jobData);
    }
    fetchAllJobs();
  }, []);
  console.log("jobs", jobs);

  // handle delete job
  const handleDeleteJob = async (id) => {
    console.log("handle delete called");
    const response = await deleteJob(id);
    console.log("delete response", response);
    // return response;
  };
  return (
    <section className="max-w-screen-2xl mx-auto grid grid-cols-4 gap-5">
      {jobs.map((job, index) => (
        <JobCard
          key={index}
          thumbnail={job.thumbnail}
          title={job.title}
          description={job.description}
          job_type={job.job_type}
          onClick={() => handleDeleteJob(job.id)}
        />
      ))}
    </section>
  );
}
