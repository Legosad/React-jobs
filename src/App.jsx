import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./Pages/Homepage";
import Jobspage from "./Pages/Jobspage";
import Notfoundpage from "./Pages/Notfoundpage";
import Jobpage, { jobLoader } from "./Pages/Jobpage";
import AddJobPage from "./Pages/AddJobPage";
import { addjob, deleteJob, updateJob } from "./components/Crud";
import EditJobPage from "./Pages/EditJobPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/jobs" element={<Jobspage />} />
        <Route path="/add-job" element={<AddJobPage addjob={addjob} />} />
        <Route
          path="edit-job/:id"
          loader={jobLoader}
          element={<EditJobPage updateJob={updateJob} />}
        />
        <Route
          path="/jobs/:id"
          element={<Jobpage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="/*" element={<Notfoundpage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
