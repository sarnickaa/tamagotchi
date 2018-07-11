class Tamagotchi {
    age() {
        // let birth = new Date
        // //console.log(birth)
        let askDate = new Date()
        let askDate2 = Date.parse(askDate)
        console.log(askDate2)

        let birthDate = this.ageStart
        console.log(this.ageStart)
        let birthDate2 = Date.parse(birthDate)
        console.log(birthDate2)
        let age = askDate2 - birthDate2

        let ageReadable = Math.floor(age / 1000 / 60)

        if (ageReadable > 60) {
            let ageHrs = (Math.round(ageReadable / 1000 / 60 / 60) + 1)
            return `${this.name} is ${ageHrs} hours old!`
        } else {
            return `${this.name} is ${ageReadable} minutes old!`
        }
    }

    birthday() {
        let date = new Date()
        return date.toDateString()
    }

    // here is another one I am not sure about. I believe this is overriding the built in constructor when we call new Tamagotchi.
    // I could be wrong of course
    new() {
        return `Congratulations! You are the proud parent of a ${this.name} ${this.lifeStage[0]}! Go On! hatch your new best friend!`
    }
    hatch() {
        return `Wow! Your ${this.lifeStage[1]} ${this.name} has hatched out of its egg! ${this.name}s birthday is ${this.birthday()}`
    }
    play(game) {
        /* playing with your tamagotchi should increase happiness, satisfy need for attention, and may decrease weight */
        switch (game) {
            case 'ball':
                this.happinessLevel += 5;
                this.weight -= 5;
                this.attentionLevel += 5;
                return `Catch is fun! My Happiness Level is ${this.happinessLevel} and my Attention Level is ${this.attentionLevel} Exercise is great for my figure too! my weight is ${this.weight}`
                break
            case 'video games':
                this.happinessLevel += 30;
                this.weight += 10;
                this.attentionLevel += 1;
                return `YES! videogames are the BEST! My Happiness Level is ${this.happinessLevel} and my Attention Level is ${this.attentionLevel} But i really should get outside! my weight is ${this.weight}`
                break
            case 'teddy bear':
                this.happinessLevel += 10;
                this.weight += 1;
                this.attentionLevel += 10;
                return `My favorite childhood teddy! I love him so. My Happiness Level is ${this.happinessLevel} and my Attention Level is ${this.attentionLevel} Exercise is great for my figure too! my weight is ${this.weight}`
                break
            case 'tag':
                this.happinessLevel += 10;
                this.weight -= 5;
                this.attentionLevel += 7;
                return `Tag is fun! Youre IT! My Happiness Level is ${this.happinessLevel} and my Attention Level is ${this.attentionLevel} Exercise is great for my figure too! my weight is ${this.weight}`
                break
            case 'netflix':
                this.happinessLevel += 20;
                this.weight += 15;
                this.attentionLevel += 7;
                return `I LOVE it when you and I netflix & chill! My Happiness Level is ${this.happinessLevel} and my Attention Level is ${this.attentionLevel} But i really should get outside! my weight is ${this.weight}`
                break
            default:
                return `hmmm. i dont know that game :( try something else!`
        }
    }
    care(attention) {
        switch (attention) {
            case 'groom':
                this.happinessLevel += 10;
                this.attentionLevel += 7;
                return `I feel so pretty! My Happiness Level is ${this.happinessLevel} and my Attention Level is ${this.attentionLevel}`
                break
            case 'sing':
                this.happinessLevel += 20;
                this.attentionLevel += 10;
                return `I love singing Norwegian Death metal with you! My Happiness Level is ${this.happinessLevel} and my Attention Level is ${this.attentionLevel}`
                break
            case 'walk':
                this.happinessLevel += 0;
                this.attentionLevel += 2;
                return `Walks are ok. But I'm only a tiny ${this.name} in a big big world and i get scared! My Happiness Level is ${this.happinessLevel} and my Attention Level is ${this.attentionLevel}`
                break
            case 'pet':
                this.happinessLevel += 30;
                this.attentionLevel += 15;
                return `I LOOOOVE belly rubs! dont stop! My Happiness Level is ${this.happinessLevel} and my Attention Level is ${this.attentionLevel}`
                break
            case 'bath':
                this.happinessLevel -= 20;
                this.attentionLevel += 15;
                return `OH NO! I hate baths! I want to stay dirty thank you very much. My Happiness Level is ${this.happinessLevel} and my Attention Level is ${this.attentionLevel}`
                break
            default:
                return `care for me! I need your attention! Try singing to me! (i probably like cooler music than you, though)`
        }
    }
    speak() {
        if (this.happinessLevel < 50) {
            return `Im sad! Play with me or feed me candy!`
        } else if (this.hungerLevel > 10) {
            return `Im hungry! feed me things i like!`
        } else if (this.attentionLevel < 0) {
            return `Im lonely! play with me!`
        } else {
            return `Im feeling great! My Happiness Level is ${this.happinessLevel}, my Hunger Level is ${this.hungerLevel} & my Attention Level is ${this.attentionLevel}! You are a great parent!`
        }
    }
    eat(food) {
        switch (food) {
            case 'grass':
                this.happinessLevel -= 10;
                this.hungerLevel += 10;
                this.weight -= 1;
                return `Yuck! I dont like grass! My Happiness Level is ${this.happinessLevel} and my Hunger Level is ${this.hungerLevel}`
                break
            case 'meat':
                this.happinessLevel -= 20;
                this.hungerLevel += 15;
                this.weight -= 3;
                return `No! I only eat plants! My Happiness Level is ${this.happinessLevel} and my Hunger Level is ${this.hungerLevel}`
                break
            case 'tofu':
                this.happinessLevel += 5;
                this.hungerLevel -= 5;
                this.weight += 2;
                return `Meh. Tofu is ok...but a bit boring. My Happiness Level is ${this.happinessLevel} and my Hunger Level is ${this.hungerLevel}`
                break
            case 'candy':
                this.happinessLevel += 100;
                this.hungerLevel = 0;
                this.weight += 10;
                return `MY FAVORITE! But keep an eye on my weight! My Happiness Level is ${this.happinessLevel}, my Hunger Level is ${this.hungerLevel} and my weight is ${this.weight}`
                break
            case 'pizza':
                this.happinessLevel += 20;
                this.hungerLevel = 0;
                this.weight += 5;
                return `yum! Pizza is great! But do keep an eye on my weight! My Happiness Level is ${this.happinessLevel}, my Hunger Level is ${this.hungerLevel} and my weight is ${this.weight}`
                break
            default:
                return `eew! what is that? No! Try something better! (like candy!)`
        }
    }
    constructor(name) {
        this.name = `${name}ichi`
        this.weight = 1 // default
        this.description = `I am a Tamagotchi named ${this.name} & I was born on ${this.birthday()}`
        this.hungerLevel = 10 // default
        this.happinessLevel = 1 // default
        this.attentionLevel = 1 // default
        this.lifeStage = ['egg', 'baby', 'child', 'teen', 'adult']
        this.ageStart = new Date()
    }
}

let name = prompt("what is your tamagotchis name?")

// removed this line and the exports for now
// const myTamagotchi = new Tamagotchi(name)

module.exports = {
    Tamagotchi // 
}