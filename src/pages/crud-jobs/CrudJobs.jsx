// crudJob.js
import React, { useState, useEffect } from "react";
import AppInput from "../../components/AppInput";
import AppModal from "../../components/AppModal";
import { Button } from "react-bootstrap";
import AppTextArea from "../../components/AppTextArea";
import AppSelect from "../../components/AppSelect";
// firebase import

import CustomDataTable from "../../components/CustomDataTable";
import {
  getData,
  setData,
  handleDeleteId,
  handleUpdate,
} from "../../model/database";
import SignIn from "../../auth/SignIn";
const CrudJobs = () => {
  // start modal
  const collectionName = "jobs";
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    jobtitle_job: "",
    qualification_job: 0,
    jobdescription_job: "",
  });

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const showModalHandler = (row) => {
    // console.log(dataRow);
    if (row.id) {
      setFormData(row);
    }

    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };
  // end model
  // set data job

  const updateValue = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  /**
   * Submits job data to the Firestore collection.
   * On success, navigates back to the home page.
   * On error, logs the error to the console.
   */
  const handleCreateJob = async () => {
    // Implement logic for creating a new job
    // Update the state with the new job
    setData(formData, collectionName);
  };

  const handleDeleteJob = (jobId) => {
    // Implement logic for deleting a specific job
    // Update the state by removing the deleted job
    handleDeleteId(jobId, collectionName);
    console.log("dele", jobId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission
    if (formData.id) {
      handleUpdate(formData, collectionName, formData.id);
    } else {
      handleCreateJob();
    }
    // setDataRow(getData(collectionName));
    setFormData({});
    // You may want to send the data to a server or perform other actions here
    hideModalHandler(); // Close the modal after submission
  };

  // jobDescription: '',
  const initFieldJobTitle = {
    fieldLabel: "job title",
    fieldValue: formData.jobtitle_job,
    id: "titleid",
    InputGroupId: "jobtitleid",
    name: "jobtitle_job",
    placeholder: "Job title..",
    type: "text",
  };
  // qualification: '',
  const qualification = {
    id: "qualificationId",
    name: "qualification_job",
    options: [
      { label: "Critical Care Nurse", value: "Critical Care Nurse" },
      { label: "Home Health Nurse", value: "Home Health Nurse" },
      { label: "Public Health Nurse", value: "Public Health Nurse" },
      // Add more options as needed
    ],
    selectLabel: "Qualification",
    selectVal: formData.qualification_job,
  };
  // jobDescription
  const jobDescription = {
    fromGroupId: "jobDescriptionId",
    name: "jobdescription_job",
    placeholder: "Job description",
    textLabel: "Job description",
    textVal: formData.jobdescription_job,
    id: "descriptionId",
  };

  const dynamicColumns = [
    {
      name: "ID",
      selector: (row) => row.id.substring(0, 5) + "...",
      sortable: true,
    },
    {
      name: "Job Title",
      selector: (row) => row.jobtitle_job,
      sortable: true,
    },
    {
      name: "Qualification",
      selector: (row) => row.qualification_job,
      sortable: true,
    },
    {
      name: "Job Description",
      selector: (row) => row.jobdescription_job.substring(0, 20) + "...",
      sortable: true,
    },

    {
      name: "Options",
      cell: (row) => (
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            onClick={() => handleDeleteJob(row.id)}
            className="btn btn-soft-danger btn-sm"
          >
            Delete
          </button>
          <button
            type="button"
            onClick={() => showModalHandler(row)}
            className="btn btn-soft-warning btn-sm"
          >
            Update
          </button>
        </div>
      ),
    },
  ];
  return (
    <div>
      {isSignedIn ? (
        <>
          <AppModal
            isHidden={showModal}
            onClose={hideModalHandler}
            handleSubmit={handleSubmit}
          >
            <AppInput
              initField={initFieldJobTitle}
              updateFieldValue={updateValue}
            />
            <AppSelect initSelect={qualification} updateSelect={updateValue} />
            <AppTextArea
              initTextArea={jobDescription}
              onTextareaChange={updateValue}
            />
          </AppModal>
          <Button
            className="btn btn-soft-primary btn-sm"
            onClick={showModalHandler}
          >
            Add new job
          </Button>
          <CustomDataTable
            columns={dynamicColumns}
            collectionName={collectionName}
            getData={getData}
          />
        </>
      ) : (
        <SignIn onSignIn={handleSignIn} />
      )}
    </div>
  );
};

export default CrudJobs;
