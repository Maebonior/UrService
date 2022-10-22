import React, { useEffect } from "react";
import { database } from "../firebase";
import { uid } from "uid";
import { DataSnapshot, onValue, ref } from "firebase/database";

const Plumbers = () => {
  //read
  useEffect(() => {
    onValue(ref(database), (snapshot) => {});
  }, []);

  return <div>Plumbers</div>;
};

export default Plumbers;
