import Settings from '../config.js'
import {dragSim} from '../Checks/onServer.js'

let drop = undefined
let rareDrop = undefined
let insaneRareDrop = undefined
let incarnateDrop = undefined

const playSoundPitch = [1, 2, 3, 5, 8, 13]

register("chat", (msg) => {
    if (!Settings.RareDropNotification) return
    if(msg.includes("Summoning Eye")) return
    if (msg.startsWith("RARE DROP!")) {
        drop = String(msg)
        
        ChatLib.chat("&2Rare drop copied to clipboard!")
        ChatLib.command(`ct copy ${msg}`, true)
    }else if (msg.startsWith("CRAZY RARE DROP!")) {
        rareDrop = String(msg)
        ChatLib.chat("&2Rare drop copied to clipboard!")
        ChatLib.command(`ct copy ${msg}`, true)
    } else if (msg.startsWith("INSANE RARE DROP!")) {
        insaneRareDrop = String(msg)
        ChatLib.chat("&2Rare drop copied to clipboard!")
        ChatLib.command(`ct copy ${msg}`, true)
    }else if (msg.startsWith("RNGesus INCARNATE!")) {
        incarnateDrop = String(msg)
        ChatLib.chat("&2Rare drop copied to clipboard!")
        ChatLib.command(`ct copy ${msg}`, true)
    }
}).setCriteria("${msg}")

register("tick", () => {
    if (!dragSim() || !Settings.RareDropNotification) return
    if (drop) {
        let text = "";
        for (let i = 0; i < playSoundPitch.length; i++) {
             text += World.playSound("random.orb", 1, [i])
        }
        Client.showTitle("&6" + drop, "", 0, 100, 0)
        drop = undefined
    } else if (rareDrop) {
        let text = "";
        for (let i = 0; i < playSoundPitch.length; i++) {
             text += World.playSound("random.anvil_land", 1, [i])
        }
        Client.showTitle("&d" + rareDrop, "", 0, 100, 0)
        rareDrop = undefined
    } else if (insaneRareDrop) {
        let text = "";
        for (let i = 0; i < playSoundPitch.length; i++) {
             text += World.playSound("mob.wither.death", 1, [i])
        }
        Client.showTitle("&4" + insaneRareDrop, "", 0, 100, 0)
        insaneRareDrop = undefined
    } else if (incarnateDrop) {
        let text = "";
        for (let i = 0; i < playSoundPitch.length; i++) {
             text += World.playSound("mob.enderdragon.growl", 1, [i])
        }
        Client.showTitle("&8" + incarnateDrop, "", 0, 100, 0)
        incarnateDrop = undefined
    }
})