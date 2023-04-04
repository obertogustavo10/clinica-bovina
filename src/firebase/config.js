import { initializeApp } from "firebase/app";
//conectarme al back
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDO3uN6HrGxp5W8pLc0-joHkZXCPqih15M",
  authDomain: "clinicabovina-76834.firebaseapp.com",
  projectId: "clinicabovina-76834",
  storageBucket: "clinicabovina-76834.appspot.com",
  messagingSenderId: "954700245755",
  appId: "1:954700245755:web:c6246ac6a62ae4263e1e5e",
  measurementId: "G-91CYE6LGPT",
};

const app = initializeApp(firebaseConfig);
// inicializo para traer y subir los nuevos archivos la storage
export const storage = getStorage(app);
///tenemos que crear una ref para ver donde se va a guardar el archivo, la ruta

//crear una funcion para subir los archivos a firebae

export const uploadFile = (file) => {
  //creo la referencia
  const storageRef = ref(storage, "hola");
  //funcion de firebase para subir archivo
  //uploadBytes(ubicacion/referencia, archivo a subir)
  ////////////////////////////////
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log(snapshot);
  });
  getDownloadURL(storageRef).then((url) => {
    console.log(url);
  });
};

export const downloadFile = (storageRef) => {
  getDownloadURL(storageRef).then((url) => {
    console.log(url);
  });
};
