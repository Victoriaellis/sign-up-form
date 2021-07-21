let object = {}

//change the html displayed on the page on form submit
const submitForm = () => {
  const form = document.querySelector('.form');
  const subheading = document.querySelector('.banner-subheading');
  form.innerHTML = "Thanks for signing up, time to begin your search!";
  form.classList.add("form-confirmation")
  subheading.innerHTML = ""
};

//check passwords, log the completed form value to the console and call the submitForm function above
const logResults = () => {
  password = document.getElementById('password')
  confirmPassword = document.getElementById('confirm-password')
  if (password.value === confirmPassword.value) {
    results = document.querySelectorAll('.result')
    results.forEach(function(option){
      object[option.id] = option.value
      })
    console.log(object);
    submitForm();
  } else {
      alert("please ensure passwords match");
  }
}

//highlight the ticked checkbox for how did you hear about us
const checkbox = document.querySelectorAll('.input')
checkbox.forEach(function(option){
  option.addEventListener('click', function () {
    option.parentElement.classList.toggle("highlight");
  });
});

//identify the checkbox that has been checked
const check = (obj) => {
  obj.checked ? obj.value="checked" : obj.value="unchecked"
}

