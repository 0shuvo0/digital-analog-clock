class Clock{
    constructor(target){
        let clock = document.createElement('div')
        clock.classList.add('clock')

        let longHand = document.createElement('div')
        longHand.classList.add('hand')
        clock.appendChild(longHand)

        let shortHand = document.createElement('div')
        shortHand.classList.add('hand')
        shortHand.classList.add('short')
        clock.appendChild(shortHand)

        target.appendChild(clock)

        this.longHand = longHand
        this.shortHand = shortHand
    }

    rotateHands(long, short){
        this.longHand.style.transform = `translateY(-50%) rotate(${long}deg)`
        this.shortHand.style.transform = `translateY(-50%) rotate(${short}deg)`
    }
}

const right = 0
const left = 180
const up = -90
const down = 90
const reset = 135

const zero = [
    [right, down],
    [right, left],
    [right, left],
    [left, down],

    [down, up],
    [right, down],
    [left, down],
    [down, up],

    [down, up],
    [down, up],
    [down, up],
    [down, up],

    [down, up],
    [down, up],
    [down, up],
    [down, up],
    
    [down, up],
    [right, up],
    [left, up],
    [down, up],

    [right, up],
    [right, left],
    [right, left],
    [left, up]
]

const one = [
    [right, down],
    [right, left],
    [down, left],
    [reset, reset],

    [right, up],
    [down, left],
    [down, down],
    [reset, reset],

    [reset, reset],
    [down, up],
    [down, up],
    [reset, reset],

    [reset, reset],
    [down, up],
    [down, up],
    [reset, reset],
    
    [right, down],
    [left, up],
    [right, up],
    [left, down],

    [right, up],
    [right, left],
    [right, left],
    [left, up]
]

const two = [
    [right, down],
    [right, left],
    [right, left],
    [left, down],

    [right, up],
    [right, left],
    [left, down],
    [down, up],

    [right, down],
    [left, right],
    [left, up],
    [down, up],    
    
    [right, down],
    [right, down],
    [left, right],
    [left, up],

    [down, up],
    [right, up],
    [left, right],
    [down, left],

    [right, up],
    [right, left],
    [right, left],
    [left, up]
]

const three = [
    [right, down],
    [right, left],
    [right, left],
    [left, down],

    [right, up],
    [right, left],
    [left, down],
    [down, up],

    [right, down],
    [left, right],
    [left, up],
    [down, up],    
    
    [right, up],
    [right, left],
    [left, down],
    [down, up],

    [down, right],
    [right, left],
    [left, up],
    [down, up],

    [right, up],
    [right, left],
    [right, left],
    [left, up]
]

const four = [
    [right, down],
    [down, left],
    [right, down],
    [left, down],

    [down, up],
    [up, down],
    [up, down],
    [down, up],

    [up, down],
    [up, right],
    [left, up],
    [down, up],    
    
    [right, up],
    [right, left],
    [left, down],
    [down, up],

    [reset, reset],
    [reset, reset],
    [down, up],
    [down, up],

    [reset, reset],
    [reset, reset],
    [right, up],
    [left, up],
]

const five = [
    [right, down],
    [right, left],
    [right, left],
    [left, down],

    [down, up],
    [down, right],
    [right, left],
    [up, left],

    [down, up],
    [up, right],
    [right, left],
    [left, down],    
    
    [right, up],
    [right, left],
    [down, left],
    [up, down],

    [down, right],
    [right, left],
    [left, up],
    [down, up],

    [right, up],
    [right, left],
    [right, left],
    [left, up]
]

const six = [
    [right, down],
    [right, left],
    [right, left],
    [left, down],

    [down, up],
    [down, right],
    [right, left],
    [up, left],

    [down, up],
    [up, right],
    [right, left],
    [left, down],    
    
    [down, up],
    [right, down],
    [down, left],
    [up, down],

    [down, up],
    [right, up],
    [left, up],
    [down, up],

    [right, up],
    [right, left],
    [right, left],
    [left, up]
]

const seven = [
    [right, down],
    [right, left],
    [right, left],
    [left, down],

    [right, up],
    [right, left],
    [left, down],
    [down, up],

    [reset, reset],
    [reset, reset],
    [down, up],
    [down, up],   
    
    [reset, reset],
    [reset, reset],
    [down, up],
    [down, up],

    [reset, reset],
    [reset, reset],
    [down, up],
    [down, up],

    [reset, reset],
    [reset, reset],
    [right, up],
    [left, up],
]

const eight = [
    [right, down],
    [right, left],
    [right, left],
    [left, down],

    [down, up],
    [right, down],
    [left, down],
    [down, up],

    [up, 45],
    [up, right],
    [left, up],
    [reset, up],    
    
    [down, -45],
    [right, down],
    [down, left],
    [-135, down],

    [down, up],
    [right, up],
    [left, up],
    [down, up],

    [right, up],
    [right, left],
    [right, left],
    [left, up]
]

const nine = [
    [right, down],
    [right, left],
    [right, left],
    [left, down],

    [down, up],
    [right, down],
    [left, down],
    [down, up],

    [up, down],
    [up, right],
    [left, up],
    [down, up],    
    
    [right, up],
    [right, left],
    [left, down],
    [down, up],

    [reset, reset],
    [reset, reset],
    [down, up],
    [down, up],

    [reset, reset],
    [reset, reset],
    [right, up],
    [left, up],
]


const digits = [
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine
]

class ClocksArray{
    constructor(target){
        let clocks = document.createElement('div')
        clocks.classList.add("clocks")
        
        this.clocks = []
        for(let i = 0; i < 24; i++){
            this.clocks.push(new Clock(clocks))
        }

        target.appendChild(clocks)
    }

    display(rotations){
        rotations.map((rot, index) => {
            this.clocks[index].rotateHands(rot[0], rot[1])
        })
    }
}

class DigitalClock{
    constructor(target){
        this.minuteL = new ClocksArray(target)
        this.minuteR = new ClocksArray(target)
        this.secondL = new ClocksArray(target)
        this.secondR = new ClocksArray(target)
    }

    displayTime(minuteL, minuteR, secondL, secondR){
        this.minuteL.display(digits[minuteL])
        this.minuteR.display(digits[minuteR])
        this.secondL.display(digits[secondL])
        this.secondR.display(digits[secondR])
    }

    start(){
        setInterval(() => {
            let date = new Date()
            let minutes = date.getMinutes()
            let seconds = date.getSeconds()
            let minuteL, minuteR, secondL, secondR

            if(minutes < 10){
                minuteL = 0
                minuteR = minutes
            }else{
                [minuteL, minuteR] = minutes.toString().split("")
            }

            if(seconds < 10){
                secondL = 0
                secondR = seconds
            }else{
                [secondL, secondR] = seconds.toString().split("")
            }

            this.displayTime(minuteL, minuteR, secondL, secondR)
        }, 1000);
    }
}

const clockEl = document.querySelector('.digital-clock')

let digitalClock = new DigitalClock(clockEl)
digitalClock.displayTime(1, 2, 3, 4)

digitalClock.start();


function setHeight(){
    let width = clockEl.getBoundingClientRect().width
    clockEl.style.height = (width * 1.5) + "px"
}
setHeight()
window.addEventListener("resize", setHeight)

