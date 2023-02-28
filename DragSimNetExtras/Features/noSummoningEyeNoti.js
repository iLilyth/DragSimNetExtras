import Settings from '../config.js'
import {dragSim} from '../Checks/onServer.js'

register("renderTitle", event => {
    if(!Settings.NoSENoti || !dragSim()) return
    let title = event.toString().removeFormatting()
    if(title=="Summoning Eye!"){
        Client.showTitle("", "", 0, 100, 0)
    }
})