function display5 () {
    led.plotBrightness(2, 2, 0)
}
function display4 () {
    led.plotBrightness(1, 1, 0)
    led.plotBrightness(3, 1, 0)
    led.plotBrightness(2, 3, 0)
    led.plotBrightness(2, 2, 50)
}
function display3 () {
    led.plotBrightness(0, 0, 0)
    led.plotBrightness(4, 0, 0)
    led.plotBrightness(2, 4, 0)
    led.plotBrightness(1, 1, 50)
    led.plotBrightness(3, 1, 50)
    led.plotBrightness(2, 3, 50)
    led.plotBrightness(2, 2, 255)
}
function display2 () {
    led.plotBrightness(0, 0, 50)
    led.plotBrightness(4, 0, 50)
    led.plotBrightness(2, 4, 50)
    led.plotBrightness(1, 1, 255)
    led.plotBrightness(3, 1, 255)
    led.plotBrightness(2, 3, 255)
}
function display1 () {
    led.plotBrightness(0, 0, 255)
    led.plotBrightness(4, 0, 255)
    led.plotBrightness(2, 4, 255)
}
let pattern = 0
basic.forever(function () {
    if (pattern == 0) {
        display1()
    } else if (pattern == 1) {
        display2()
    } else if (pattern == 2) {
        display3()
    } else if (pattern == 3) {
        display4()
    } else {
        display5()
        pattern = -1
    }
    pattern += 1
    basic.pause(300)
})
