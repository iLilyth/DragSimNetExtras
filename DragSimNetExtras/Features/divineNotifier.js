import Settings from '../config.js'
import {dragSim} from '../Checks/onServer.js'

register("chat", (msg) => {
    if(!dragSim()) return
    if(msg=="SUPERIOR" && Settings.DragNotifier){
        Client.showTitle("&eSUPERIOR DRAGON!", "", 0, 100, 0)
    }else if(msg=="DIVINE" && Settings.DragNotifier){
        Client.showTitle("&bDIVINE DRAGON!", "", 0, 100, 0)
    }
}).setChatCriteria("* The ${msg} Dragon has spawned!")