

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCw-ylIsq-YEF4tWu8MkxTJs4lWiKvVSi0",
  authDomain: "kwitter-45b54.firebaseapp.com",
  databaseURL: "https://kwitter-45b54-default-rtdb.firebaseio.com",
  projectId: "kwitter-45b54",
  storageBucket: "kwitter-45b54.appspot.com",
  messagingSenderId: "79249640574",
  appId: "1:79249640574:web:7d52c845618930e2875c2f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();
