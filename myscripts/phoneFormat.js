// Format the phone number input to (xxx)-xxx-xxxx
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', function (e) {
  const phoneNumber = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = !phoneNumber[2] ? phoneNumber[1] : `(${phoneNumber[1]})-${phoneNumber[2]}${phoneNumber[3] ? `-${phoneNumber[3]}` : ''}`;
});

document.addEventListener("DOMContentLoaded", function() {
  const figureWrappers = document.querySelectorAll(".figure-wrapper");

  figureWrappers.forEach((item, index) => {
      setTimeout(() => {
          item.classList.add("slide-in");
      }, index * 500); // Adjust the delay (500ms) as needed for your desired speed
  });
});

