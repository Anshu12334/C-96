
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyATx-1FTH16B-1ktkQS2IL92mfL5exdx4s",
  authDomain: "c-94-ef38f.firebaseapp.com",
  databaseURL: "https://c-94-ef38f-default-rtdb.firebaseio.com",
  projectId: "c-94-ef38f",
  storageBucket: "c-94-ef38f.appspot.com",
  messagingSenderId: "247063013782",
  appId: "1:247063013782:web:7f97d8335251806d3555b7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";

          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
