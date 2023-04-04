import React from "react";
import { uploadFile, storage } from "../firebase/config";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function TestFirebase() {
  const handleChange = (e) => {
    e = "u003d29ba52c4-a80d-481b-88d1-7235a1691ca5.jpg";
    uploadFile(e);
  };
  React.useEffect(() => {
    const storageRef = ref(
      storage,
      "u003d29ba52c4-a80d-481b-88d1-7235a1691ca5.jpg"
    );
    console.log(storageRef);
    getDownloadURL(storageRef).then((url) => {
      console.log(url);
    });
  }, []);

  return (
    <>
      <input type="file" onChange={handleChange} />
    </>
  );
}
