import Settings from '../config.js'
import {dragSim} from '../Checks/onServer.js'

let itemNumber = 0
let dragonDown = false
const itemList = ["Shadow Assassin", "Eagle Wing", "Necron's", "Giant's Sword", "Infernal Crimson", "Warden Helmet", "Terminator", "Divine Helmet", "Book of Seidr", "Platinum Egg", "Hyperion", "Scylla", "@)$&#^ #*$(@)"]

register("chat", () => {
    dragonDown = true
}).setChatCriteria("Dragon down!")

register("renderEntity", (entity, pos, partialticks, event) => {
    if(!Settings.RareDropNoti || !dragSim) return
    if(dragonDown){
        if(itemList.some(n => entity.getName().includes(n))) {
            Client.showTitle("&d" + entity.getName() , "", 0, 100, 0)
            dragonDown = false
        }
    }
})