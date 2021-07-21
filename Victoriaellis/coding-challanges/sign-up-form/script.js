//const submit = document.getElementById('submit');
let object = {}

const submitForm = () => {
  const form = document.querySelector('.form');
  const subheading = document.querySelector('.banner-subheading');
  form.innerHTML = "Thanks for signing up, time to begin your search!";
  form.classList.add("form-confirmation")
  subheading.innerHTML = ""
};

const logResults = () => {
 results = document.querySelectorAll('.result')
 results.forEach(function(option){
  object[option.id] = option.value
 })
 console.log(object);
 submitForm();
}

const checkbox = document.querySelectorAll('.input')
checkbox.forEach(function(option){
  option.addEventListener('click', function () {
    option.parentElement.classList.toggle("highlight");
  });
});

const check = (obj) => {
  obj.checked ? obj.value="checked" : obj.value="unchecked"
}

