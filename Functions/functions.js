import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const handleSignup = async (studentID, username, email, password) => {
  let status = {
    success: false,
    notValid: false,
    notValidEmail: false,
    err: null,
  };
  try {
    const docRef = doc(db, "users", studentID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const existingEmail = docSnap.data().email;
      console.log(docSnap.data().email);
      if(existingEmail === email){
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await setDoc(doc(db, "users", studentID), {
          name: username,
          id: studentID,
          email: email,
          dateOfReg: new Date(),
        });
        status.success = true;
        console.log("Student Enrolled succesfully !!");
      }else{
        status.notValidEmail = true;
      }
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

export const generateToken = async (studentID) => {
  let status = {
    success: false,
    token: null,
    err: null,
  };
  try {
    const tokenNumber = Math.floor(100000 + Math.random() * 900000);
    console.log(tokenNumber);
    
    const docRef = doc(db, "tokens", tokenNumber.toString());
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      generateToken(studentID)
      console.log("Document already exists");
    } else {
      await setDoc(docRef, {
        id: studentID,
        timestamp: serverTimestamp(),
        isCollected: false
      });
      status.success = true;
      status.token = tokenNumber;
    }
  } catch (e) {
    console.log(e);
    status.err = e.message;
  }
  return status;
};
