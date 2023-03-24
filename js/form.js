const nameAndSurname = document.querySelector("#nameAndSurname")
const email = document.querySelector("#email")
const phoneNumber = document.querySelector("#phoneNumber")
const questionText = document.querySelector("#questionText")
const sendBtn = document.querySelector(".send-btn")

const showError = () => {
	email.classList.add("show-error")
	nameAndSurname.classList.add("show-error")
	phoneNumber.classList.add("show-error")
	questionText.classList.add("show-error")
}

const removeError = () => {
	email.classList.remove("show-error")
	nameAndSurname.classList.remove("show-error")
	phoneNumber.classList.remove("show-error")
	questionText.classList.remove("show-error")
}

const sendBtnAnimation = () => {
	const planePath = sendBtn.querySelector(".circle")
	const planeIcon = sendBtn.querySelector(".plane-icon")

	planePath.classList.add("rotateCircle")
	planeIcon.classList.remove("hide")

	setTimeout(() => {
		planeIcon.classList.add("hide")
		planePath.classList.remove("rotateCircle")
	}, 2750)

	setTimeout(() => {
		sendBtn.classList.add("checked")
		sendBtn.innerHTML = "Sent"
	}, 3000)
}

const checkForm = () => {
	const reEmail =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	const rePhoneNumber = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/

	if (
		nameAndSurname.value !== "" &&
		email.value !== "" &&
		reEmail.test(email.value) &&
		phoneNumber.value !== "" &&
		rePhoneNumber.test(phoneNumber.value) &&
		questionText.value !== ""
	) {
		removeError()
		sendBtnAnimation()
	} else {
		showError()
	}
}

const clearForm = () => {
	nameAndSurname.value = ""
	email.value = ""
	phoneNumber.value = ""
	questionText.value = ""
}

sendBtn.addEventListener("click", e => {
	e.preventDefault()
	checkForm()
	clearForm()
})
