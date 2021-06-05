var firebaseConfig = {
      apiKey: "AIzaSyAX59vQosGHb13CyifOu3ZrkAfRXkRt1QQ",
      authDomain: "dwitter-3d78f.firebaseapp.com",
      databaseURL: "https://dwitter-3d78f-default-rtdb.firebaseio.com",
      projectId: "dwitter-3d78f",
      storageBucket: "dwitter-3d78f.appspot.com",
      messagingSenderId: "353658125060",
      appId: "1:353658125060:web:37e217fe8f3bf48594ae51",
      measurementId: "G-MRTMD9XSC2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
user_name = localStorage.getItem("User_Name");
welcome = "Welcome : " + user_name;
document.getElementById("user_name").innerHTML = welcome;

function Logout() {
      localStorage.removeItem("User_Name");
      window.location = "index.html";
}