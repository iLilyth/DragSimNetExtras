import Settings from '../config.js'
import {dragSim} from '../Checks/onServer.js'
import {ScreenX} from '../Functions/locationFunction.js'
import {ScreenY} from '../Functions/locationFunction.js'

let eyesPlaced = Number(FileLib.read("DragSimNetExtras/Storage", "eyesPlaced.json"))


let width = 0
let height = 0
const text = new Text('', width, height)

register("chat", (msg) => { 
    if(msg.startsWith("* You placed a Summoning Eye!")) {
        eyesPlaced = (eyesPlaced+1)
        Number(FileLib.write("DragSimNetExtras/Storage", "eyesPlaced.json", eyesPlaced))
    }
}).setChatCriteria("${msg}")

register("renderOverlay", () => {
    if (!Settings.eyesPlaced || !dragSim()) return
    text.setX(Settings.eyesPlacedX*ScreenX())
    text.setY(Settings.eyesPlacedY*ScreenY())
    text.setString(`&5Summoning Eyes placed: ${eyesPlaced}`)
    text.setShadow(true)
    text.draw() 
})