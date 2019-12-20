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
	let title = document.createElement("h1");
	title.innerHTML = "Member login";
	let photo = document.createElement("img");
	photo.setAttribute("src", "placeholder.png");
	form.append(title);
	form.append(photo);
	form.append(firstName);
	form.append(password);
	container.append(submit);
	login.style.display = "none";
	submit.style.display = "block";
});

	
	submit.addEventListener("click", function () {
	let welcome = document.createElement("p");
	welcome.setAttribute("id", "welcome");
	welcome.innerHTML = `Welcome back ${firstName.value}`;
	container.append(welcome);
})