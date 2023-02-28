import Settings from '../config.js'
import {dragSim} from '../Checks/onServer.js'
import {ScreenX} from '../Functions/locationFunction.js'
import {ScreenY} from '../Functions/locationFunction.js'

let respawnTime = 0

let width = 0
let height = 0
const text = new Text('', width, height)

register("chat", (BitsCounterAdd, event) => { 
    respawnTime = 10
}).setChatCriteria("Dragon down!")

register("renderOverlay", () => {
    if (!Settings.DragonSpawnTimer || !dragSim) return
    text.setX(Settings.DragonSpawnTimerX*ScreenX())
    text.setY(Settings.DragonSpawnTimerY*ScreenY())
    text.setString((respawnTime != 0 ? `Dragon spawning in ${respawnTime}s` : ""))
    text.setShadow(true)
    text.draw() 
})

register("step", () => {
    if (respawnTime != 0){
        respawnTime--
    } 
}).setFps(1)