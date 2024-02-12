import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const handleSignup = async (studentID, username, email, password) => {
  let status = {
    success: false,
    notValid: false,
    err: null,
  };
  try {
    const docRef = doc(db, "users", studentID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", studentID), {
        name: username,
        id: studentID,
        email: email,
        dateOfReg: new Date(),
      });
      status.success = true;
      console.log("Student Enrolled succesfully !!");
    } else {
      status.notValid = true;
      console.log("No such document!");
    }
  } catch (e) {
    status.err = e.message;
    console.log(e.message);
  }
  return status;
};
