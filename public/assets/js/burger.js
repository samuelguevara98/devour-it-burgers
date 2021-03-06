//$(function() {
    $(".change-devoured").on("click", function(event) {
        console.log("something")
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevoured");
  
      var newDevourState = {
        devoured: newDevour
      };
      console.log(id, newDevourState, "NEWDEVOURSTATE");
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log("this is being called");
      var newBurger = {
        name: $("#burg").val().trim(),
        devoured: false
      };
  console.log(newBurger, "***Newburger***")
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
      console.log("this is being called", id)
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
//  });
  