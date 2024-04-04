//READ MORE BUTTONS 3
function myFunction5() {
  var dots5 = document.getElementById("dots5");
  var moreText5 = document.getElementById("more5");
  var btnText5 = document.getElementById("moreBtn5");
  
  if (dots5.style.display === "none") {
    dots5.style.display = "inline";
    btnText5.innerHTML = "Read more...";
    moreText5.style.display = "none";
  } else {
    dots5.style.display = "none";
    btnText5.innerHTML = "Read less";
    moreText5.style.display = "inline";
  }
}
//---------------TUTORS REGISTRATION---------------------

const form = document.getElementById('applicationForm');
    const steps = Array.from(document.getElementsByClassName('step'));
    let currentStep = 0;

    function showStep(step) {
      steps[currentStep].classList.remove('active');
      steps[step].classList.add('active');
      currentStep = step;
    }

    function prevStep() {
      if (currentStep > 0) {
        showStep(currentStep - 1);
      }
    }

    function nextStep() {
      if (currentStep < steps.length - 1) {
        if (validateStep(currentStep)) {
          showStep(currentStep + 1);
        }
      }
    }

    function validateStep(step) {
      // Perform validation logic for each step
      // You can add custom validation logic based on your requirements

      // Example: Validate Step 1 - Personal Details
      if (step === 0) {
        const firstName = document.getElementById('firstName').value;
        const surname = document.getElementById('surname').value;
        const gender = document.getElementById('gender').value;
        const ageRange = document.getElementById('ageRange').value;
        const townOfOrigin = document.getElementById('townOfOrigin').value;
        const localGovtOfOrigin = document.getElementById('localGovtOfOrigin').value;
        const stateOfOrigin = document.getElementById('stateOfOrigin').value;
        const disability = document.getElementById('disability').value;

        // Perform validation checks for each field
        if (firstName === '') {
          alert('Please enter your first name.');
          return false;
        }

        // Perform similar checks for other fields

        return true;
      }

      // Add validation logic for other steps if required

      return true;
    }

    //form action form 
    const form1 = document.querySelector("#applicationForm")
    const submitButton = document.querySelector("#submitButton")
    const scriptURL =
    'https://script.google.com/macros/s/AKfycbx7Ym3ywYJjApOi1Rq_W4gcNGlhZwxPnJ4PxqgeDqZV5TJYBNqJomg7CdXWhjFWpv68qw/exec'
    form1.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form1)
    fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
    alert('Success!', response)
    submitButton.disabled = false
    })
    .catch(error => {
    alert('Error!', error.message)
    submitButton.disabled = false
    }
    )
    })

    // Function to toggle application form
    const applyButton = document.getElementById('applyButton');
  const formContainer = document.getElementById('formContainer');

  applyButton.addEventListener('click', function() {
    formContainer.style.display = 'block';
  });

