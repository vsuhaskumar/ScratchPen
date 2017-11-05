//Fading both signin and create
var authentication = {
  init: function() {
    $("#signin").hide();
    $("#create").hide();
    $('#logout').hide();
  },
  addClickListner: function(){
    //#signin,#create
    $("#join").on("click", function(){
      $("#signin").hide();
      $("#scratch").hide();
      $("#create").show();
      $('#logout').hide();
      //$("#create").fadeToggle();
    });

    $("#login").on("click", function(){
      $("#signin").show();
      $("#scratch").hide();
      $("#create").hide();
      $('#logout').hide();
      //$("#create").fadeToggle();
    });


    $("#signupButton").on("click", function(){
      $("#signin").hide();
      $("#create").show();
      $('#logout').hide();
    });

    $("#cancel1").on("click", function(){
      $("#signin").hide();
      $("#create").hide();
      $("#scratch").show();
      $('#logout').hide();
    });

    $("#cancel2").on("click", function(){
      $("#signin").hide();
      $("#create").hide();
      $("#scratch").show();
      $('#logout').hide();
    });

    //To display Logout when user has signed-in
    $("#sign-in").on("click", function(){
      $("#login").hide();
      $("#join").hide();
      $("#scratch").show();
      $('#logout').show();
      $("#signin").hide();
      $("#create").hide();
    });

    $("#signupButton").on("click", function(){
      $("#signin").hide();
      $("#create").show();
      $("#scratch").hide();
      $('#logout').hide();
    });

    $("#logout").on("click", function(){
      $("#signin").hide();
      $("#create").hide();
      $("#scratch").show();
      $('#logout').hide();
      $('#login').show();
      $('#join').show();
    })
  },
  toggleSignIn: function toggleSignIn() {
    if (firebase.auth().currentUser) {
      // [START signout]
      firebase.auth().signOut();
      // [END signout]
    } else {
      var email = document.getElementById('email_signin').value;
      var password = document.getElementById('password_signin').value;
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
      // Sign in with email and pass.
      // [START authwithemail]
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        document.getElementById('sign-in').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authwithemail]
    }
    document.getElementById('sign-in').disabled = true;
  },
  facebookSignIn: function facebookSignIn() {
    if (!firebase.auth().currentUser) {
      // [START createprovider]
      var provider = new firebase.auth.FacebookAuthProvider();
      // [END createprovider]
      // [START addscopes]
      provider.addScope('user_birthday');
      // [END addscopes]
      // [START signin]
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // [START_EXCLUDE]
        //document.getElementById('quickstart-oauthtoken').textContent = token;
        window.alert(token);
        // [END_EXCLUDE]
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // [START_EXCLUDE]
        if (errorCode === 'auth/account-exists-with-different-credential') {
          alert('You have already signed up with a different auth provider for that email.');
          // If you are using multiple auth providers on your app you should handle linking
          // the user's accounts here.
        } else {
          console.error(error);
        }
        // [END_EXCLUDE]
      });
      // [END signin]
    } else {
      // [START signout]
      firebase.auth().signOut();
      // [END signout]
    }
    // [START_EXCLUDE]
    document.getElementById('facebook-login').disabled = true;
    // [END_EXCLUDE]
  },
  googleSignIn: function googleSignIn() {
    if (!firebase.auth().currentUser) {
      // [START createprovider]
      var provider = new firebase.auth.GoogleAuthProvider();
      // [END createprovider]
      // [START addscopes]
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      // [END addscopes]
      // [START signin]
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // [START_EXCLUDE]
        //document.getElementById('quickstart-oauthtoken').textContent = token;
        alert(token);
        // [END_EXCLUDE]
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // [START_EXCLUDE]
        if (errorCode === 'auth/account-exists-with-different-credential') {
          alert('You have already signed up with a different auth provider for that email.');
          // If you are using multiple auth providers on your app you should handle linking
          // the user's accounts here.
        } else {
          console.error(error);
        }
        // [END_EXCLUDE]
      });
      // [END signin]
    } else {
      // [START signout]
      firebase.auth().signOut();
      // [END signout]
    }
    // [START_EXCLUDE]
    document.getElementById('google-login').disabled = true;
    // [END_EXCLUDE]
  },
  handleSignUp: function handleSignUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    // Sign in with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
    // [END createwithemail]
  }
};

//
// $(".load-code").on('click', (function (event) {
// window.alert("Load button clicked");
//   }));
//
//   $(".save-code").on('click', (function (event) {
// window.alert("Save button clicked");
//   }));