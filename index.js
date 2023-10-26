// Add your code here

	const requestContent =	{
		name: "Mark",
		email: "momuga@mail.com",
	};

 	function sumbitData() {
 	
		const requestData = {
		method: "POST",
	 	headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
			body: JSON.stringify(requestContent),
		};

		return fetch("http://localhost:3000/users", requestData)
		.then(function (response)
		{
			return response.json();
		})
		.then(function (object)
		{
			console.log(object);
		})
		.catch(function (error) {
			alert("Error");
			console.log(error.message);
		});
	}