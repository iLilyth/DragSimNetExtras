export function skySim(){
    let onServer
    if (Server.getIP().includes("skysim")) return onServer = true
    else return onServer = false
}

export function dragSim(){
    let onServer
    if (Server.getIP().includes("dragsim.net")) return onServer = true
    else return onServer = false
}
