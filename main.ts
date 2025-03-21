basic.forever(function () {
    if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.Black) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.Black)) {
        basic.showNumber(3)
    } else if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.Black) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.White)) {
        basic.showNumber(2)
    } else if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.White) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.Black)) {
        basic.showNumber(1)
    } else if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.White) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.White)) {
        basic.showNumber(0)
    }
})
