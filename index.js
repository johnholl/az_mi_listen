import {firestore} from "./firebase.js";
import { spawn } from 'child_process';
import { loc } from './config.js'



firestore.collection("messages").doc(loc)
.onSnapshot((doc) => {
console.log("Current data: ", doc.data());
firestore.collection(loc).doc(String(doc.data().number)).get().then((audioData) =>{
    const url = audioData.data().url;
    const play = spawn('ffplay', ['-autoexit', url]);
    play.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
    
    play.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });
    
    play.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });

});
});