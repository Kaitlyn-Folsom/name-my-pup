
$("#submit").on("click", function() {
  event.preventDefault();

  console.log("Submit Button Clicked");

  function validateForm() {
      var isValid = true;
      $(".form-control").each(function() {
          if ($(this).val() === '')
              isValid = false;
      });
      $(".chosen-select").each(function() {
          if ($(this).val() === null)
              isValid = false
      })
      return isValid;
  }//End validate form function

  //Checks to make sure the form is filled out before creating a match
  if (validateForm() === true) {
  //creating a new object to take in the input values
  var newFriend = {
    name: $("#friendName").val(),
    photo: $("#friendPhoto").val(),
    scores: [
      $("#q1").val(),
      $("#q2").val(),
      $("#q3").val(),
      $("#q4").val(),
      $("#q5").val(),
      $("#q6").val(),
      $("#q7").val(),
      $("#q8").val(),
      $("#q9").val(),
      $("#q10").val()
    ]
  };

  var currentURL = window.location.origin;
  // AJAX post the data to the friends API.
  $.post(currentURL + "/api/dogs", newFriend, function(data) {
    console.log(newFriend);

    // Grab the result from the AJAX post so that the best match's name and photo are displayed.
    $("#matchName").text(data.name);
    $("#matchImg").attr("src", data.photo);

    //Show the modal
    $("#resultsModal").modal("show");

    console.log("Your match is...");
    console.log(data);
  });

  }else {
    alert("Please fill out all fields before submitting!");
    console.log("Please fill out all fields before submitting!");
  }
  return false;
});

// ======================
// GET RANDOM NAME
// ======================
$("#random").on("click", function() {
  event.preventDefault();
  
  var currentURL = window.location.origin;

  $.get(currentURL + "/api/dogs", function(data) {
    
    var dogObj = data;
    console.log(dogObj);

    if(document.getElementById('gender_male').checked) {
        console.log("Male radio checked");

        var maleDogs = dogObj.filter(function(dogs){
          return dogs.sex === "male";
        });

        var randomName = maleDogs[Math.floor(Math.random()*maleDogs.length)];
        console.log(randomName.name);
        // Print name to the page
        $("#nameDiv").text(randomName.name);

    } else if(document.getElementById('gender_female').checked) {
        //Female radio button is checked

        var femaleDogs = dogObj.filter(function(dogs){
          return dogs.sex === "female";
        });

        var randomName = femaleDogs[Math.floor(Math.random()*femaleDogs.length)];
        console.log(randomName.name);
        // Print name to the page
        $("#nameDiv").text(randomName.name);

    } else if (document.getElementById('gender_both').checked){

        var randomName = dogObj[Math.floor(Math.random()*dogObj.length)];
      
        console.log(randomName.name);
        // Print name to the page
        $("#nameDiv").text(randomName.name);
    } else {
        $("#nameDiv").text("please choose a gender option");
    }
    
  });

});
