  var firebaseConfig = {
    apiKey: "AIzaSyADTWyVGoEJW09_0LKFTFr8cQXCkKQNVqg",
    authDomain: "tohacks-2f29b.firebaseapp.com",
    databaseURL: "https://tohacks-2f29b.firebaseio.com",
    projectId: "tohacks-2f29b",
    storageBucket: "tohacks-2f29b.appspot.com",
    messagingSenderId: "881201827002",
    appId: "1:881201827002:web:668f912b17f1a693064683",
    measurementId: "G-CDZ4X8C4BV"
  };
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();

  const docRef = firestore.doc("samples/sandwichData");
  const outputHeader = document.querySelector("#title");
  const submitButton = document.querySelector("#submit");

  var radiosQ1 = document.getElementsByName('age');
  for (var i = 0, length = radiosQ1.length; i < length; i++) {
      if (radiosQ1[i].checked) {
          // do whatever you want with the checked radio
          var radios1Final = (radiosQ1[i].value);
          // only one radio can be logically checked, don't check the rest
          break;
        }
    }

  var radiosQ2 = document.getElementsByName('edu');
  for (var i = 0, length = radiosQ2.length; i < length; i++) {
      if (radiosQ2[i].checked) {
          // do whatever you want with the checked radio
          var radios2Final = (radiosQ2[i].value);
          // only one radio can be logically checked, don't check the rest
          break;
        }
    }

    var radiosQ3 = document.getElementsByName('employment');
  for (var i = 0, length = radiosQ3.length; i < length; i++) {
      if (radiosQ3[i].checked) {
          // do whatever you want with the checked radio
          var radios3Final = (radiosQ3[i].value);
          // only one radio can be logically checked, don't check the rest
          break;
        }
    }

    var radiosQ4 = document.getElementsByName('dependent');
  for (var i = 0, length = radiosQ4.length; i < length; i++) {
      if (radiosQ4[i].checked) {
          // do whatever you want with the checked radio
          var radios4Final = (radiosQ4[i].value);
          // only one radio can be logically checked, don't check the rest
          break;
        }
    }

    var radiosQ5 = document.getElementsByName('expenses');
  for (var i = 0, length = radiosQ5.length; i < length; i++) {
      if (radiosQ5[i].checked) {
          // do whatever you want with the checked radio
          var radios5Final = (radiosQ5[i].value);
          // only one radio can be logically checked, don't check the rest
          break;
        }
    }

    var radiosQ6 = document.getElementsByName('debt');
  for (var i = 0, length = radiosQ6.length; i < length; i++) {
      if (radiosQ6[i].checked) {
          // do whatever you want with the checked radio
          var radios6Final = (radiosQ6[i].value);
          // only one radio can be logically checked, don't check the rest
          break;
        }
    }

  submitButton.addEventListener("click", function() {
      const q1 = radios1Final;
      const q2 = radios2Final;
      const q3 = radios3Final;
      const q4 = radios4Final;
      const q5 = radios5Final;
      const q6 = radios6Final;
      console.log("I am going to save " + q1 + " to Firestore");
      console.log("I am going to save " + q2 + " to Firestore");
      console.log("I am going to save " + q3 + " to Firestore");
      console.log("I am going to save " + q4 + " to Firestore");
      console.log("I am going to save " + q5 + " to Firestore");
      console.log("I am going to save " + q6 + " to Firestore");
      docRef.set({
          question1Response: q1, question2Response: q2, question3Response: q3, question4Response: q4, question5Response: q5, question6Response: q6
      }).then(function(){
          console.log("Status saved!");
      }).catch(function(error){
          console.log("Got an error: ", error);
      });
  })