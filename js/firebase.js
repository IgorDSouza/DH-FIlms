
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";

import {getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyA5DQtnkaaLbq7xpG-DDQX9R8PXwcr-7kA",
    authDomain: "dh-films.firebaseapp.com",
    databaseURL: "https://dh-films-default-rtdb.firebaseio.com",
    projectId: "dh-films",
    storageBucket: "dh-films.appspot.com",
    messagingSenderId: "503271722747",
    appId: "1:503271722747:web:cce25aedfd68a54b95aa5e",
    measurementId: "G-GMV3ZCZ5FS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);


  
  btnsubmit.addEventListener('click', (e) => {

    var username = document.getElementById('name').value;
    
    set(ref(database, 'users/'+ username), {
        username: username
    }).then(() => {
    // Data saved successfully!
    alert('data submitted');
})
    .catch((error) => {
        // The write failed...
        alert(error);
    });
            
});