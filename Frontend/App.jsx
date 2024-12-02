import React, { useState } from 'react';
import axios from 'axios';
import JobList from './components/JobList';

function App() {
  const [jobs, setJobs] = useState([]);  // Jobs को स्टोर करेंगे
  const [keyword, setKeyword] = useState("developer");

  const fetchJobs = async () => {  // Backend से डेटा fetch करेंगे
    try {
      const response = await axios.get(`/api/scrape?keyword=${keyword}`);
      setJobs(response.data);  // API से मिले डेटा को स्टोर करेंगे
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  return (
    <div className="container">
      <h1>Job Scraper</h1>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter job keyword"
      />
      <button onClick={fetchJobs}>Fetch Jobs</button>
      <JobList jobs={jobs} />  {/* Jobs को Display करेंगे */}
    </div>
  );
}

export default App;
