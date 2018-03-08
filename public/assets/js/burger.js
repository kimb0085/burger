//attach handlers when the DOM is loaded

$(function(){
	$(".burgerAvailable").on("click", function(event){
		var id = $(this).data("id");
		var newDevBurger = $(this).data("newBurger");

		var newBurgerDevoured = {
			devoured: newBurger
		}

		//PUT request
		$.ajax("/api/burgers" + id, {
			type: "PUT",
			data: newBurgerDevoured
		}).then(
			function(){
				console.log("changed burger to: " newBurger);

				location.reload();
			}
		)
	});

	$(".create-form").on("submit", function(event){
		event.preventDefault();

		var newBurger = {
			name: $("#name").val().trim(),
			devoured: $(".addBurgerButton").val().trim()
		}

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(
			function(){
				console.log("created a new delicious burger");

				location.reload();
			}
		);
	});

	$(".delete-burger").on("click", function(event){
		var id = $(this).data("id");

			$.ajax("/api/burgers" + id, {
				type: "DELETE",
			}).then(
				function(){
					console.log("deleted burger: ", id);

					location.reload();
			}
		);
	});
});

