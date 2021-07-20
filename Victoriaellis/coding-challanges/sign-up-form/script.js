const submit = document.getElementById('submit');

const submitForm = () => {
  const form = document.querySelector('.form');
  const subheading = document.querySelector('.banner-subheading');
  console.log('Submitted!');
  form.innerHTML = "Thanks for signing up, time to begin your search!";
  form.classList.add("form-confirmation")
  subheading.innerHTML = ""
};

submit.addEventListener("click", (event) => {
  event.preventDefault();
  submitForm()
});


const checkbox = document.querySelectorAll('.input')
checkbox.forEach(function(option){
  option.addEventListener('click', function () {
    option.parentElement.classList.toggle("highlight");
  });
});
