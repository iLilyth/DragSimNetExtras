





register("command", (arg1, arg2) => {
    let d = arg1
    let m = arg2
    let dropchance = (100*((1 / d)*(1+(m / 100))))
    ChatLib.chat(dropchance + "%")

}).setName("dropchance")