//  def keyrandomize(keylen):
//  keys=['A', 'B']
//  codekey = []
//  for a in range(keylen):
//  return codekey
//  keyseq = keyrandomize(6)
function gameon() {
    for (let index = 0; index < 3; index++) {
        basic.showAnimation(`
        . . # . . . . . . . . . . . .
        . . # . . . # . # . . . . . .
        . . # . . . # . # . # . . . #
        . . # . . . # . # . . . . . .
        . . # . . . . . . . . . . . .
        `, 200)
        basic.clearScreen()
    }
    while (!input.buttonIsPressed(Button.A) || !input.buttonIsPressed(Button.B)) {
        pause(100)
    }
    if (seqcount > keyseq.length) {
        basic.showString("382")
    }
    
}

function win() {
    while (true) {
        basic.showString(code)
    }
}

function splashscreen() {
    basic.showAnimation(`
    . # # # . . # # # . # . . . #
    # . . . # # . . . # # . . . #
    . . . # . . . . # . # . . . #
    . . . . . . . . . . # . . . #
    . . # . . . . # . . # . . . #
    `, 500)
}

/** codekey = [keys[randint(0, 1)] for k in range(6)] */
let code = ""
let keyseq : string[] = []
let seqcount = 0
let started = false
keyseq = ["A", "A", "B", "A", "B", "X"]
let keys = ["A", "B"]
code = "382"
let leftandright = `
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    `
basic.forever(function on_forever() {
    input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
        
        led.stopAnimation()
        started = true
    })
    input.onButtonPressed(Button.A, function on_button_pressed_a() {
        
        if (started) {
            serial.writeString("A" + ("" + ("" + seqcount)) + keyseq[seqcount])
            if (keyseq[seqcount] == "A") {
                basic.showIcon(IconNames.Yes)
                seqcount += 1
            } else if (keyseq[seqcount] == "X") {
                win()
            } else {
                basic.showIcon(IconNames.No)
                seqcount = 0
            }
            
        } else {
            led.stopAnimation()
            basic.showAnimation(`
        . . . . . . . . . . # . . . . # . . . . # . . . .
        . . . . . # . . . . # . . . . # . . . . . . . . .
        # . . . . # . . . . # . . . . . . . . . . . . . .
        . . . . . # . . . . # . . . . # . . . . . . . . .
        . . . . . . . . . . # . . . . # . . . . # . . . .
        `, 200)
        }
        
    })
    input.onButtonPressed(Button.B, function on_button_pressed_b() {
        
        if (started) {
            serial.writeString("B" + ("" + ("" + seqcount)) + keyseq[seqcount])
            if (keyseq[seqcount] == "B") {
                basic.showIcon(IconNames.Yes)
                seqcount += 1
            } else if (keyseq[seqcount] == "X") {
                win()
            } else {
                basic.showIcon(IconNames.No)
                seqcount = 0
            }
            
        } else {
            led.stopAnimation()
            basic.showAnimation(`
        . . . . . . . . . . . . . . # . . . . # . . . . #
        . . . . . . . . . # . . . . # . . . . # . . . . .
        . . . . # . . . . # . . . . # . . . . . . . . . .
        . . . . . . . . . # . . . . # . . . . # . . . . .
        . . . . . . . . . . . . . . # . . . . # . . . . #
        `, 200)
        }
        
    })
    if (!started) {
        splashscreen()
    } else {
        gameon()
    }
    
})
