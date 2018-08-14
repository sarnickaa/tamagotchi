'use strict'

const Obj = require('./object.js')

let name = prompt("what is your tamagotchis name?")

const myTamagotchi = new Obj(name)

$(() => {
let generateEggButton = document.getElementById('getTamagotchiEgg')
let generateStatsButton = document.getElementById('getTamagotchiStats')
let tamagotchiState = document.getElementById('stage')
let explainer = document.getElementById('explain')
let explainer2 = document.getElementById('explain2')
let gameplay = document.getElementById('game-play')
let playStatement = document.getElementById('playStatement')
let playButton = document.getElementById('tamagotchiPlay')
let careButton = document.getElementById('tamagotchiCare')
let feedButton = document.getElementById('tamagotchiFeed')
let ageButton = document.getElementById('getTamagotchiAge')

let showImage = function() {
  tamagotchiState.style.display = 'block'
  generateEggButton.style.display = 'none'
  explainer.innerHTML = myTamagotchi.new()
}
generateEggButton.addEventListener('click', showImage)

let changeImage = function() {
  tamagotchiState.src = '../../public/images/hatch_2.gif'
  explainer.innerHTML = myTamagotchi.hatch()
  generateStatsButton.style.display = 'block'
  }
tamagotchiState.addEventListener('click', changeImage)

let tamagotchiBaseLevels = function() {
  tamagotchiState.src = '../../public/images/hatch_3.gif'
  explainer.innerHTML = ''
  generateStatsButton.style.display = 'none'
  gameplay.style.display = 'block'
  ageButton.style.display = 'block'
  }
generateStatsButton.addEventListener('click', tamagotchiBaseLevels)

let tamagotchiPlayLevels = function() {
  let playInput = document.getElementById('playInputField').value
  playStatement.innerHTML = myTamagotchi.play(playInput)
  // document.getElementById('playInputField').value("")
  }
playButton.addEventListener('click', tamagotchiPlayLevels)

let tamagotchiCareLevels = function() {
  let careInput = document.getElementById('careInputField').value
  playStatement.innerHTML = myTamagotchi.care(careInput)
  }
careButton.addEventListener('click', tamagotchiCareLevels)

let tamagotchiFoodLevels = function() {
  let foodInput = document.getElementById('foodInputField').value
  playStatement.innerHTML = myTamagotchi.eat(foodInput)
  }
feedButton.addEventListener('click', tamagotchiFoodLevels)

let tamagotchiAge = function () {
  let toggleDisplay = document.getElementById('ageDisplay')
  toggleDisplay.innerHTML = myTamagotchi.age()
    if (toggleDisplay.style.display === 'none' || toggleDisplay.style.display === '') {
        toggleDisplay.style.display = 'block'
    } else {
        toggleDisplay.style.display = 'none'
    }
  }
ageButton.addEventListener('click', tamagotchiAge)
})
