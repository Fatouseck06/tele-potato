radio.onReceivedNumber(function (receivedNumber) {
    Patata = receivedNumber
})
input.onButtonPressed(Button.AB, function () {
    Patata = randint(10, 20)
})
input.onGesture(Gesture.Shake, function () {
    if (Patata > 0) {
        radio.sendNumber(Patata)
        Patata = -1
    }
})
let Patata = 0
Patata = -1
radio.setGroup(1)
basic.forever(function () {
    if (Patata == 0) {
        basic.showIcon(IconNames.Skull)
    }
    if (Patata < 0) {
        basic.clearScreen()
    }
    if (Patata > 0) {
        basic.showIcon(IconNames.Chessboard)
        Patata += -1
    }
})
