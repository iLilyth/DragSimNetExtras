import Settings from '../config.js'
import {dragSim} from '../Checks/onServer.js'
import {ScreenX} from '../Functions/locationFunction.js'
import {ScreenY} from '../Functions/locationFunction.js'

let summoningEyes = Number(FileLib.read("DragSimNetExtras/Storage", "summoningEyes.json"))
let iceEyes = Number(FileLib.read("DragSimNetExtras/Storage", "iceEyes.json"))
let cosmicEyes = Number(FileLib.read("DragSimNetExtras/Storage", "cosmicEyes.json"))
let radioactiveEyes = Number(FileLib.read("DragSimNetExtras/Storage", "radioactiveEyes.json"))
let flamingEyes = Number(FileLib.read("DragSimNetExtras/Storage", "flamingEyes.json"))
let divineEyes = Number(FileLib.read("DragSimNetExtras/Storage", "divineEyes.json"))

let width = 0
let height = 0
const text = new Text('', width, height)

register("chat", (msg) => { 
    if(msg.startsWith("RARE DROP! Summoning Eye")) {
        summoningEyes = (summoningEyes+1)
        Number(FileLib.write("DragSimNetExtras/Storage", "summoningEyes.json", summoningEyes))
    }else if(msg.startsWith("RARE DROP! Ice Eye")) {
        iceEyes = (iceEyes+1)
        Number(FileLib.write("DragSimNetExtras/Storage", "iceEyes.json", iceEyes))
    }else if(msg.startsWith("RARE DROP! Cosmic Eye")) {
        cosmicEyes = (cosmicEyes+1)
        Number(FileLib.write("DragSimNetExtras/Storage", "cosmicEyes.json", cosmicEyes))
    }else if(msg.startsWith("CRAZY RARE DROP! Radioactive Eye")) {
        radioactiveEyes = (radioactiveEyes+1)
        Number(FileLib.write("DragSimNetExtras/Storage", "radioactiveEyes.json", radioactiveEyes))
    }else if(msg.startsWith("RNGesus INCARNATE! Flaming Eye")) {
        flamingEyes = (flamingEyes+1)
        Number(FileLib.write("DragSimNetExtras/Storage", "flamingEyes.json", flamingEyes))
    }else if(msg.startsWith("RNGesus INCARNATE! Divine Eye")) {
        divineEyes = (divineEyes+1)
        Number(FileLib.write("DragSimNetExtras/Storage", "divineEyes.json", divineEyes))
    }
}).setChatCriteria("${msg}")

register("renderOverlay", () => {
    if (!Settings.eyeDropDisplay || !dragSim()) return
    text.setX(Settings.eyeDropDisplayX*ScreenX())
    text.setY(Settings.eyeDropDisplayY*ScreenY())
    text.setString(`&5Summoning Eyes: ${summoningEyes}\n&3Ice Eyes: ${iceEyes}\n&dCosmic Eyes: ${cosmicEyes}\n&2Radioactive Eyes: ${radioactiveEyes}\n&cFlaming Eyes: ${flamingEyes}\n&bDivine Eyes: ${divineEyes}`)
    text.setShadow(true)
    text.draw() 
})