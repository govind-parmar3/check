import React from 'react';

function JobList({ jobs }) {
  if (jobs.length === 0) {
    return <p>No jobs found.</p>;
  }

  if (jobs[0].error) {
    return <p>{jobs[0].error}</p>;
  }

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Job Title</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job, index) => (
          <tr key={index}>
            <td>{job.company_name}</td>
            <td>{job.job_title}</td>
            <td>{job.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default JobList;
