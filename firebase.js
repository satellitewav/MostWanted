//firebase needs thses to figure out on how we r connecting to database
//configuring the app on the front end to link with our firebase which we created on website
var firebaseConfig = {
    apiKey: "AIzaSyC64nUlDTPRpGzxeXEDS-ZvtPlWQDvHQok",
    authDomain: "edgerunners-254ec.firebaseapp.com",
    projectId: "edgerunners-254ec",
    storageBucket: "edgerunners-254ec.appspot.com",
    messagingSenderId: "424078069040",
    appId: "1:424078069040:web:226d4ba674167cb95a4cf5",
    measurementId: "G-5YGWZR0X2X"
};

// Initialize Firebase

var app = firebase.initializeApp(firebaseConfig);
        db = firebase.firestore(app);
        firebase.firestore().settings({
            cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
        });

const analytics = firebase.analytics();

db.collection("players").orderBy("score", "desc").limit(5)
.get()
.then(querySnapshot=>{
        querySnapshot.forEach(doc=>{
            let data = doc.data();
            let row  = `<tr>
                            <td>${data.name}</td>
                            <td>${data.score}</td>
                      </tr>`;
            let table = document.getElementById('myTable')
            table.innerHTML += row
        })
})
.catch(err=>{
    console.log(`Error: ${err}`)
}); 


function display(){
          document.getElementById('table').style.display = "block";
}

window.addEventListener("scroll", (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  });