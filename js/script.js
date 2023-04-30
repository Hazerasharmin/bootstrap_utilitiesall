






$zindex-levels: (
  n1: -1,
  0: 0,
  1: 1,
  2: 2,
  3: 3
);












"focus-ring": (
  css-var: true,
  css-variable-name: focus-ring-color,
  class: focus-ring,
  values: map-loop($theme-colors-rgb, rgba-css-var, "$key", "focus-ring")
),


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()