const form = document.querySelector("form");
const nameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const nameError = document.querySelector("#username-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");

function checkUserName() {
	if (nameInput.value.trim() === "") {
		nameError.textContent = "Username is required";
		nameInput.classList.remove("correct");
		nameInput.classList.add("error");
		return false;
	} else {
		nameError.textContent = "";
		nameInput.classList.remove("error");
		nameInput.classList.add("correct");
		return true;
	}
}

function checkEmail() {
	if (emailInput.validity.valid === false) {
		emailError.textContent = "Email is required";

		if (emailInput.validity.typeMismatch) {
			emailError.textContent = "Please enter a valid email address";
		}
		emailInput.classList.remove("correct");
		emailInput.classList.add("error");

		return false;
	} else {
		emailError.textContent = "";
		emailInput.classList.remove("error");
		emailInput.classList.add("correct");
		return true;
	}
}

function checkPassword() {
	if (passwordInput.value.trim() === "") {
		passwordError.textContent = "Password is required";
		passwordInput.classList.remove("correct");
		passwordInput.classList.add("error");
		return false;
	} else if (/[a-zA-Z0-9]/.test(passwordInput.value) === false) {
		passwordError.textContent = "Password must contain numbers or letters";
		passwordInput.classList.remove("correct");
		passwordInput.classList.add("error");
		return false;
	} else if (passwordInput.value.length < 8) {
		passwordError.textContent = "Password must contain at least 8 characters";
		passwordInput.classList.remove("correct");
		passwordInput.classList.add("error");
		return false;
	} else {
		passwordError.textContent = "";
		passwordInput.classList.remove("error");
		passwordInput.classList.add("correct");
		return true;
	}
}

nameInput.addEventListener("input", checkUserName);
emailInput.addEventListener("input", checkEmail);
passwordInput.addEventListener("input", checkPassword);

form.addEventListener("submit", (e) => {
	e.preventDefault();
	// console.log(nameInput.validity);
	// console.log(emailInput.value);
	// console.log(emailInput.validity);
	// console.log(passwordInput.validity);
	const isUserNameValid = checkUserName();
	const isEmailValid = checkEmail();
	const isPAsswordValid = checkPassword();

	// if true then submit the form

	if (isUserNameValid && isEmailValid && isPAsswordValid) {
		form.submit();
	} else {
		showSelectedModal("#sign-up-error-modal");
	}
});

const openModal = document.querySelector(".open-sign-in");
const modal = document.querySelector("#sign-up-modal");
const closeModal = document.querySelector(".modal-close");
const dialog = document.querySelector("dialog");

const closeDialog = dialog.querySelector(".modal-close");

openModal.addEventListener("click", () => {
	// modal.classList.add("open");
	// showSelectedModal("#sign-up-modal");

	dialog.show();
});

closeDialog.addEventListener("click", (e) => {
	dialog.close();
});

// closeModal.addEventListener("click", () => {
// 	modal.classList.remove("open");
// });

function showSelectedModal(selector) {
	const modal = document.querySelector(selector);
	const closeBtn = modal.querySelector(".modal-close");
	if (modal) {
		modal.classList.add("open");
	}

	if (closeBtn) {
		closeBtn.addEventListener("click", () => {
			modal.classList.remove("open");
		});
	}
}
