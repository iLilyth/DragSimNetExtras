import { registerForge } from "../utils/forge_events";

registerForge(Packages.net.minecraftforge.event.entity.living.EnderTeleportEvent, EventPriority.NORMAL, (event) => {
    cancel(event)
})