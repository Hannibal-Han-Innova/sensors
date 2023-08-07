let Light = false
let Compass = false
let Temperture = false
let number = 0
let bearing = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    Light = !(Light)
    Compass = false
    Temperture = false
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    Compass = !(Compass)
    Light = false
    Temperture = false
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Temperture = !(Temperture)
    Light = false
    Compass = false
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    number = randint(0, 6)
    basic.showNumber(number)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.clearScreen()
    music.play(music.createSoundExpression(WaveShape.Noise, 5000, 1295, 255, 146, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    if (Light || Temperture || Compass) {
        if (Light) {
            basic.showNumber(input.lightLevel())
        } else if (Temperture) {
            basic.showNumber(input.temperature())
        } else if (Compass) {
            bearing = input.compassHeading()
            if (bearing < 45 || bearing > 315) {
                basic.showString("N")
            } else {
                basic.showString("X")
            }
        }
    }
})
