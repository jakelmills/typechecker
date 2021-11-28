const sentenceTag = document.querySelector(`input[type="text"]`)
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
