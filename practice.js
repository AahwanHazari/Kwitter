
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyABHXi0OHHqlOMf8R_yoSk6y9XvCimGcww",
    authDomain: "kwitter-6e3ce.firebaseapp.com",
    databaseURL: "https://kwitter-6e3ce-default-rtdb.firebaseio.com",
    projectId: "kwitter-6e3ce",
    storageBucket: "kwitter-6e3ce.appspot.com",
    messagingSenderId: "993650766836",
    appId: "1:993650766836:web:3af021cd24ba3d9264bfa1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.databaseURL().ref("/").child(user_name).update({
        purpose:"adding user"
    });

}