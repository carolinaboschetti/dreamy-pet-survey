let inputs = document.querySelectorAll (".field[required]")

window.addEventListener ("load", inputs[0].focus())

inputs.forEach(function(input) {
    input.addEventListener("input", function() {
      console.log(`user typed ${input}`)
    })
    input.addEventListener("blur", function(event) {
        const element = event.target
        element.setCustomValidity("")
        let isValid = element.checkValidity()
        if (!isValid) {
            element.setCustomValidity(setErrorMsg(element))
            element.classList.add("invalid")
        } else  {
            element.setCustomValidity("")
            element.classList.remove("invalid")
        }
        console.log(`is ${input.name} valid? ${isValid}`)
    })
  })
  const setErrorMsg = (element) => {
    let errorMsg
    switch (element.name) {
        case "name":
            errorMsg = "This field should be your name."
            break
        case "email":
            errorMsg = "We need your E-mail to avoid duplication."
            break
        case "age":
            if (element.value < 18) {
                errorMsg = "Sorry, we can't accept your application."
            } else if (element.validity.valueMissing) {
                errorMsg = "We need to know how old you are."
            }
            break
        default:
            errorMsg = "Please verify this field."
            break
    }
    return errorMsg 
  }