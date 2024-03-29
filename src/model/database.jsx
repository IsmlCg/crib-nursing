import { firestore } from "../assets/js/firebase.js";

import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";
async function getData(collectionName) {
  try {
    // Get documents from Firestore collection
    const q = query(
      collection(firestore, collectionName),
      where("status", "==", 0)
    );

    // const querySnapshot = await getDocs(collection(firestore, collectionName));
    const querySnapshot = await getDocs(q);
    // Process each document and return the data
    const data = await querySnapshot.docs.map(async (doc, index) => {
      // Truncate description to a maximum of 110 characters
      return { id: doc.id, ...doc.data() };
    });

    // Wait for all asynchronous operations to complete
    return Promise.all(data);
  } catch (error) {
    console.error("Error getting documents:", error);
    return null;
  }
}
async function handleDeleteId(id, collectionName) {
  try {
    // Get a reference to the Firestore collection
    const data = { status: 1 };
    data["delete"] = new Date();
    const jobsCollection = collection(firestore, collectionName);

    // Get a reference to the document by ID
    const docRef = doc(jobsCollection, id);

    // Update the document with the new data
    await updateDoc(docRef, data);

    // Log a success message or handle the success scenario
    console.log(`Document with ID ${id} updated successfully.`);
  } catch (error) {
    // Log any errors to the console or handle the error scenario
    console.error("Error updating document:", error);
  }
}

async function setData(data, collectionName) {
  try {
    data["status"] = 0;
    data["create"] = new Date();
    data["update"] = "";
    // Get a reference to the Firestore collection
    const jobsCollection = collection(firestore, collectionName);
    // Add job data to the Firestore collection
    await addDoc(jobsCollection, data);

    // Navigate back to the home page on successful submission
    // this.$router.push("/");
  } catch (error) {
    // Log any errors to the console
    console.error("Error submitting job data:", error);
  }
}

async function handleUpdate(data, collectionName, docId) {
  try {
    // Get a reference to the Firestore collection
    data["update"] = new Date();
    const jobsCollection = collection(firestore, collectionName);

    // Get a reference to the document by ID
    const docRef = doc(jobsCollection, docId);

    // Update the document with the new data
    await updateDoc(docRef, data);

    // Log a success message or handle the success scenario
    console.log(`Document with ID ${docId} updated successfully.`);
  } catch (error) {
    // Log any errors to the console or handle the error scenario
    console.error("Error updating document:", error);
  }
}
export { getData, setData, handleDeleteId, handleUpdate };
