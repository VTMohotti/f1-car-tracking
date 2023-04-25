import bodyParser from "body-parser";
import express from "express";
import { initializeApp } from "firebase/app";
import {setDoc,getFirestore,doc} from "firebase/firestore/lite"
import dotenv from "dotenv"


// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "1racing-8e051.firebaseapp.com",
  projectId: "f1racing-8e051",
  storageBucket: "f1racing-8e051.appspot.com",
  messagingSenderId: "273279587569",
  appId: "1:273279587569:web:8f651ca979b2f9a4b14550",
  measurementId: "G-832M0MG1FF"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const collectionName = "f1RacingLocation" // table name

//initialize env
const env =dotenv.config();

//Dependencies
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.get('/', (req,res) => {

    res.send("Success");
})
app.post('/recordData', async(req, res) => {
    const f1CarNo =  req.query.f1CarNo;
    const longitude = req.query.longitude;
    const latitude = req.query.latitude;
    const speed = req.query.speed;

    const data = {
        "f1CarNo" : f1CarNo,
        "longitude" : longitude,
        "latitude" : latitude,
        "speed" : speed
    }

    await setDoc(doc(firestore,collectionName,f1CarNo),data)
    res.send("Success !")

});

//Deploying the listener
const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log(`Express server listening on port
${port}`)
);
