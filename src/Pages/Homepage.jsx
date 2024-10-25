import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import VIewAllJobs from "./../components/VIewAllJobs";

const Homepage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <VIewAllJobs />
    </>
  );
};

export default Homepage;
