
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyABHXi0OHHqlOMf8R_yoSk6y9XvCimGcww",
      authDomain: "kwitter-6e3ce.firebaseapp.com",
      databaseURL: "https://kwitter-6e3ce-default-rtdb.firebaseio.com",
      projectId: "kwitter-6e3ce",
      storageBucket: "kwitter-6e3ce.appspot.com",
      messagingSenderId: "993650766836",
      appId: "1:993650766836:web:3af021cd24ba3d9264bfa1",
      measurementId: "G-H98C8YWQF6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name+ "!";
function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name- "+ Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      });

});

}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);                                                                                                                                                                                                                                                                                                                                                        
window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function addRoom()
{
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"

      });
      localStorage.setItem("room_name", room_name);
      window.location="index.html";

}








































































