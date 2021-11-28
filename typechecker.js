const sentenceTag = document.querySelector(`input[type="text"]`)
const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector('span.typesize-output')
const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.value

//when user types in sentence tag update the output tag accordingly
//if there's no value put in placeholder text

sentenceTag.addEventListener('keyup', function(){
  if (this.value) {
    outputTag.value = this.value
  } else {
    outputTag.value = originalText
  }
})

//when user types in output tag update sentence outputTag

outputTag.addEventListener('keyup', function(){
  if (this.value){
    sentenceTag.value = this.value
  } else {
    sentenceTag.value = originalText
  }
})

//when type size slider is changed update the text next to it
//and update output text size

typesizeTag.addEventListener('input', function(){
  outputTag.style.fontSize = this.value + "px"
  typesizeOutput.innerHTML = this.value + "px"
})
