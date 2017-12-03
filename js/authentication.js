//Fading both signin and create
var authentication = {
  init: function() {
    $("#signin").hide();
    $("#create").hide();
    $('#logout').hide();
    $('#login').show();
    $('#join').show();
    $('#scratch').show();
    $(".project-list").hide();
    $('.comments').hide();
  },
  addClickListner: function(){
    $("#join").on("click", function(){
      $("#signin").hide();
      $("#scratch").hide();
      $("#create").show();
      $('#logout').hide();
      $('.comments').hide();
      $(".jumbotron, .dashboard-container").hide();
      
    });

    $("#login").on("click", function(){
      $("#signin").show();
      $("#scratch").hide();
      $("#create").hide();
      $('#logout').hide();
      $('.comments').hide();
      $(".jumbotron").hide();
      $(".dashboard-container").hide();
    });

    $("#signupButton").on("click", function(){
      $("#signin").hide();
      $("#create").show();
      $('#logout').hide();
    });

    $("#cancel1").on("click", function(){
      $("#signin").hide();
      $("#create").hide();
      $("#scratch").hide();
      $('#logout').hide();
      $(".jumbotron, .dashboard-container").show();

    });

    $("#cancel2").on("click", function(){
      $("#signin").hide();
      $("#create").hide();
      $("#scratch").hide();
      $('#logout').hide();
      $(".jumbotron, .dashboard-container").show();
    });

    //To display Logout when user has signed-in
    $("#sign-in").on("click", function(){
      $("#login").hide();
      $("#join").hide();
      $("#scratch").show();
      $('#logout').show();
      $("#signin").hide();
      $("#create").hide();
      $('.comments').show();


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
      sessionStorage.removeItem("email");
      firebase.auth().signOut().then(function() {
        console.log("successfully signed out");
        $("#userLabel").text("");

        //resetting blocks and text generator
        Blockly.mainWorkspace.clear();
      }).catch(function(error) {
        // An error happened.
      });
    })
  },
  toggleSignIn: function toggleSignIn() {
    if (firebase.auth().currentUser) {
      firebase.auth().signOut();
    }
    else {
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
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        document.getElementById('sign-in').disabled = false;
      });
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
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
        authentication.globalVar.setStorageValue("email", user.email);
        authentication.globalVar.fbDatabase.ref("/Users/" + user.uid).set({
            "userId": user.email
        });
        $("#login").hide();
        $("#join").hide();
        $("#scratch").show();
        $('#logout').show();
        $("#signin").hide();
        $("#create").hide();
        $("#userLabel").text("Logged in as ", user.email);
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }
};
