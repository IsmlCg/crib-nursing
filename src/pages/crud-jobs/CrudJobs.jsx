// crudJob.js
import React, { useState, useEffect } from "react";
import AppInput from "../../components/AppInput";
import AppModal from "../../components/AppModal";
import { Button } from "react-bootstrap";
import AppTextArea from "../../components/AppTextArea";
import AppSelect from "../../components/AppSelect";
// firebase import
import { firestore } from "../../assets/js/firebase.js";
import { collection, addDoc } from "firebase/firestore";

const CrudJobs = () => {
  // modal
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(true);
  };
  // set data job
  const collectionName = "jobs";
  const [formData, setFormData] = useState({});
  const updateValue = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };
  /**
   * Submits job data to the Firestore collection.
   * On success, navigates back to the home page.
   * On error, logs the error to the console.
   */
  const handleCreateJob = async () => {
    // Implement logic for creating a new job
    // Update the state with the new job
    try {
      // Get a reference to the Firestore collection
      const jobsCollection = collection(firestore, collectionName);
      // Add job data to the Firestore collection
      await addDoc(jobsCollection, formData);

      // Navigate back to the home page on successful submission
      // this.$router.push("/");
    } catch (error) {
      // Log any errors to the console
      console.error("Error submitting job data:", error);
    }
  };

  const handleUpdateJob = (jobId) => {
    // Implement logic for updating a specific job
    // Update the state with the modified job
  };

  const handleDeleteJob = (jobId) => {
    // Implement logic for deleting a specific job
    // Update the state by removing the deleted job
  };
  const saveJob = (id = undefined) => {
    // Logic to save job with the provided id
    if (id == undefined) {
      // Handle the case when id is not provided (default value)
      console.log("Saving a new job...");
    } else {
      // Handle the case when id is provided
      console.log(`Saving job with id: ${id}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission
    console.log("Form data submitted:", formData);
    handleCreateJob();
    // You may want to send the data to a server or perform other actions here
    hideModalHandler(); // Close the modal after submission
  };

  // jobTitle: '',
  const initDivField = {
    fieldLabel: "job title",
    fieldValue: "",
    id: "titleid",
    InputGroupId: "jobtitleid",
    name: "jobtitle_job",
    type: "text",
    placeholder: "Job title..",
  };
  // jobDescription: '',
  const initFieldJobTitle = {
    fieldLabel: "job title",
    fieldValue: "",
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
      { label: "Critical Care Nurse", value: 1 },
      { label: "Home Health Nurse", value: 2 },
      { label: "Public Health Nurse", value: 3 },
      // Add more options as needed
    ],
    selectLabel: "Qualification",
    selectVal: 3,
  };
  // jobDescription
  const jobDescription = {
    fromGroupId: "jobDescriptionId",
    name: "jobdescription_job",
    placeholder: "Job description",
    textLabel: "Job description",
    textVal: "",
    id: "descriptionId",
  };
  const id = 0;
  return (
    <div>
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
      <Button className="btn btn-primary m-1" onClick={showModalHandler}>
        Show modal
      </Button>
    </div>
  );
};

export default CrudJobs;
