
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";

import {getDatabase, ref, set, get, child} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
 
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
  const btnsubmit = document.getElementById('btnsubmit');

  
  btnsubmit.addEventListener('click', (e) => {
    
    var username = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var cnpj = document.getElementById('cnpj').value;
    
    set(ref(database, 'id/'+ id, 'users/'+ username,'password/'+ password,'cnpj/'+ cnpj ), {
        id:id++,
        username: username,
        password: password,
        cnpj: cnpj
    }).then(() => {
    // Data saved successfully!
    alert('data submitted');
})
    .catch((error) => {
        // The write failed...
        alert(error);
    });

    const dbRef = ref(getDatabase());

    get(child(dbRef, `id/0`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }}).catch((error) => {
      console.error(error);
    });
});