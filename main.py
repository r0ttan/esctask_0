# def keyrandomize(keylen):
# keys=['A', 'B']
# codekey = []
# for a in range(keylen):
# return codekey
# keyseq = keyrandomize(6)
def gameon():
    for index in range(3):
        basic.show_animation("""
        . . # . . . . . . . . . . . .
        . . # . . . # . # . . . . . .
        . . # . . . # . # . # . . . #
        . . # . . . # . # . . . . . .
        . . # . . . . . . . . . . . .
        """,
            200)
        basic.clear_screen()
    while not (input.button_is_pressed(Button.A)) or not (input.button_is_pressed(Button.B)):
        pause(100)
    if seqcount > len(keyseq):
        basic.show_string("382")
def win():
    while True:
        basic.show_string(code)
def splashscreen():
    basic.show_animation("""
    . # # # . . # # # . # . . . #
    # . . . # # . . . # # . . . #
    . . . # . . . . # . # . . . #
    . . . . . . . . . . # . . . #
    . . # . . . . # . . # . . . #
    """,
        500)
"""

codekey = [keys[randint(0, 1)] for k in range(6)]

"""
code = ""
keyseq: List[str] = []
seqcount = 0
started = False
keyseq = ["A", "A", "B", "A", "B", "X"]
keys = ["A", "B"]
code = "382"
leftandright = """
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    """

def on_forever():
    
    def on_button_pressed_ab():
        global started
        led.stop_animation()
        started = True
    input.on_button_pressed(Button.AB, on_button_pressed_ab)
    
    
    def on_button_pressed_a():
        global seqcount
        if started:
            serial.write_string("A" + ("" + str(seqcount)) + keyseq[seqcount])
            if keyseq[seqcount] == "A":
                basic.show_icon(IconNames.YES)
                seqcount += 1
            elif keyseq[seqcount] == "X":
                win()
            else:
                basic.show_icon(IconNames.NO)
                seqcount = 0
        else:
            led.stop_animation()
            basic.show_animation("""
        . . . . . . . . . . # . . . . # . . . . # . . . .
        . . . . . # . . . . # . . . . # . . . . . . . . .
        # . . . . # . . . . # . . . . . . . . . . . . . .
        . . . . . # . . . . # . . . . # . . . . . . . . .
        . . . . . . . . . . # . . . . # . . . . # . . . .
        """,
                200)
    input.on_button_pressed(Button.A, on_button_pressed_a)
    
    
    def on_button_pressed_b():
        global seqcount
        if started:
            serial.write_string("B" + ("" + str(seqcount)) + keyseq[seqcount])
            if keyseq[seqcount] == "B":
                basic.show_icon(IconNames.YES)
                seqcount += 1
            elif keyseq[seqcount] == "X":
                win()
            else:
                basic.show_icon(IconNames.NO)
                seqcount = 0
        else:
            led.stop_animation()
            basic.show_animation("""
        . . . . . . . . . . . . . . # . . . . # . . . . #
        . . . . . . . . . # . . . . # . . . . # . . . . .
        . . . . # . . . . # . . . . # . . . . . . . . . .
        . . . . . . . . . # . . . . # . . . . # . . . . .
        . . . . . . . . . . . . . . # . . . . # . . . . #
        """,
                200)
    input.on_button_pressed(Button.B, on_button_pressed_b)
    
    if not (started):
        splashscreen()
    else:
        gameon()
basic.forever(on_forever)
