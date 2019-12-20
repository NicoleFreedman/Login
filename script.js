let container = document.querySelector(".container");

let form = document.querySelector(".form");

let submit = document.getElementById("submit");

let login = document.querySelector("#login");

let firstName;

login.addEventListener("mouseenter", function () {
	login.style.background = "#3f989c";
});

login.addEventListener("mouseleave", function () {
	login.style.background = "#20c4cc";
});

login.addEventListener("click", function () {
	firstName = document.createElement("input");
	firstName.setAttribute("placeholder", "Usermame");
	let password = document.createElement("input");
	password.setAttribute("placeholder", "Password");
	password.setAttribute("type", "password");
	// let submit = document.createElement("div");
	// submit.setAttribute("id", "submit");
	// submit.setAttribute("class", "button");
	// submit.innerHTML = "Submit!";
	form.append(firstName);
	form.append(password);
	container.append(submit);
	login.style.display = "none";
	submit.style.display = "block";
	// login.innerHTML = "Submit!";
	// login.id = "submit";
	// let submit = document.querySelector("#submit");
	// submit.setAttribute( "onclick", Boo());
});

	
	submit.addEventListener("click", function () {
	let welcome = document.createElement("p");
	welcome.setAttribute("id", "welcome");
	welcome.innerHTML = `Welcome back ${firstName.value}`;
	container.append(welcome);
})

