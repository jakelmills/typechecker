const sentenceTag = document.querySelector(`input[type="text"]`)

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector('span.typesize-output')

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector('span.lineheight-output')

const italicTag = document.querySelector(`input[name="italic"]`)

const typefaceTag = document.querySelector(`select[name="typeface"]`)

const fontweightTag = document.querySelector(`input[name="fontweight"]`)
const fontweightOutput = document.querySelector('span.fontweight-output')

const colorTags = document.querySelectorAll('div.colors div')

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

//when font weight slider is changed update the font weight to match
//and update the text next to slider

fontweightTag.addEventListener('input', function(){
  outputTag.style.fontWeight = this.value
  fontweightOutput.innerHTML = this.value
})

//when lineheight slider is changed update the line height to match
//and update the text next to slider

lineheightTag.addEventListener('input', function(){
  outputTag.style.lineHeight = this.value
  lineheightOutput.innerHTML = this.value
})

//when italic checkbox is changed update the font style to match

italicTag.addEventListener('change', function(){
  if (this.checked) {
    outputTag.style.fontStyle = "italic"
  } else {
    outputTag.style.fontStyle = "normal"
  }
})

//when typeface is changed update the font-family

typefaceTag.addEventListener('input', function(){
  outputTag.style.fontFamily = this.value
})

//go through all of the color tags then when one is clicked
//change the bg color and text color
//make the current tag be selected

colorTags.forEach(tag => {
  tag.addEventListener('click', function(){
    outputTag.style.backgroundColor = this.style.backgroundColor
    outputTag.style.color = this.style.color

    //reset classes
    colorTags.forEach(tag => {
      tag.classList.remove('selected')
    })

    this.classList.add('selected')
  })
})
