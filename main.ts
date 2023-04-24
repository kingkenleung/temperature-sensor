input.onButtonPressed(Button.A, function () {
    counter = 5
    while (counter > 0) {
        led.plotBarGraph(
        counter,
        5
        )
        basic.pause(1000)
        counter += -1
    }
    music.playTone(988, music.beat(BeatFraction.Breve))
    basic.showNumber(dstemp.celsius(DigitalPin.P1))
})
let counter = 0
basic.showNumber(dstemp.celsius(DigitalPin.P1))
basic.forever(function () {
	
})
