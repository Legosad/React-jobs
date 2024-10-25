import { toast } from "react-toastify";

const addjob = async (newJob) => {
  try {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(newJob),
    });
    toast.success("Job Added Succesfully");
  } catch (error) {
    toast.error("Some Error Occured");
  }
  return;
};
const deleteJob = async (jobId) => {
  try {
    const res = await fetch(`/api/jobs/${jobId}`, {
      method: "DELETE",
    });
    toast.success("Job Deleted Succesfully");
  } catch (error) {
    toast.error("Some Error Occured");
  }
  return;
};
const updateJob = async (updatedJob) => {
  try {
    const res = await fetch(`/api/jobs/${updatedJob.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(updatedJob),
    });
    toast.success("Job Updated Succesfully");
  } catch (error) {
    toast.error("Some Error Occured");
  }
  return;
};
export { addjob, deleteJob, updateJob };
