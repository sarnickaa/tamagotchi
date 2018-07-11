'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const obj = require('./object.js')
$(() => {
    // your JS code goes here


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
        console.log(obj)
            // I changed this to create a new instane of Tamagotchi where we need it, I would have to look up what you 
            // were trying with your modules export of an instance, not sure if/how that works
            // so here you required object as obj and create a new instance of Tamagotchi from obj
            // then I replaced all instance of myTamagotchi with newTam 
        const newTam = new obj.Tamagotchi()
        explainer.innerHTML = newTam.new()

        // nameInput.style.display = 'none'
    }
    generateEggButton.addEventListener('click', showImage)

    let changeImage = function() {
        tamagotchiState.src = '../../public/images/hatch_2.gif'
        explainer.innerHTML = obj.hatch()
        generateStatsButton.style.display = 'block'
            // explainer2.innerHTML = myTamagotchi.ageStart
    }
    tamagotchiState.addEventListener('click', changeImage)

    // const startTimer = function() {
    //   let inActivity = 120000;
    // }



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
        playStatement.innerHTML = newTam.play(playInput)
    }
    playButton.addEventListener('click', tamagotchiPlayLevels)

    let tamagotchiCareLevels = function() {
        let careInput = document.getElementById('careInputField').value
        playStatement.innerHTML = newTam.care(careInput)
    }
    careButton.addEventListener('click', tamagotchiCareLevels)

    let tamagotchiFoodLevels = function() {
        let foodInput = document.getElementById('foodInputField').value
        playStatement.innerHTML = newTam.eat(foodInput)
            // consequencesFood()
    }
    feedButton.addEventListener('click', tamagotchiFoodLevels)

    let tamagotchiAge = function() {
        let toggleDisplay = document.getElementById('ageDisplay')
        toggleDisplay.innerHTML = newTam.age()
        if (toggleDisplay.style.display === 'none' || toggleDisplay.style.display === '') {
            toggleDisplay.style.display = 'block'
        } else {
            toggleDisplay.style.display = 'none'
        }
    }
    ageButton.addEventListener('click', tamagotchiAge)

})