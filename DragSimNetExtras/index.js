/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />
import Settings from "../DragSimNetExtras/config.js"

register("command", Settings.openGUI).setName("DragSimNetExtras").setAliases(["DSNE"]);

//checks
import "./checks/onServer" 

//features
import "./features/copyChat" //by iLilyth
import "./features/damageFormatting" //by iLilyth
import "./features/FPSCounter" //by iLilyth
import "./features/pingCounter" //by iLilyth
import "./Features/dragonDrops" //by iLilyth
import "./Features/noSummoningEyeNoti" //by iLilyth
import "./Features/respawnTimer" //by iLilyth
import "./Trackers/eyesDropped" //by iLilyth
import "./Features/divineNotifier" //by iLilyth


import "./Features/noEndermanTeleport" //by Intel