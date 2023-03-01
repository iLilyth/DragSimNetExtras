/// <reference types="../ctautocomplete" />
/// <reference lib="es2015" />

import {
    @ButtonProperty,
    @CheckboxProperty,
    Color,
    @ColorProperty,
    @PercentSliderProperty,
    @SliderProperty,
    @SelectorProperty,
    @NumberProperty,
    @SwitchProperty,
    @TextProperty,
    @Vigilant,
    } from 'Vigilance';
    @Vigilant('DragSimNetExtras', 'DragSimExtras Settings',)
    class Settings {

        @SwitchProperty({
            name: "Chat Copy",
            description: "Copies RNG drops to clipboard automatically",
            category: "?Features",
        })
        AutoCopyRareDrops = true;

        @SwitchProperty({
            name: "No summoning eye notification",
            description: "removes vanilla summoning eye notifications",
            category: "?Features",
        })
        NoSENoti = true;

        @SwitchProperty({
            name: "Rare Drop notifier",
            description: "Scans all the nametags rendered to find rare drops from dragons",
            category: "?Features",
        })
        RareDropNoti = true;

        @SwitchProperty({
            name: "Rare Drop Notification",
            description: "Creates a title on rare drop",
            category: "?Features",
        })
        RareDropNotification = true;

        @SwitchProperty({
            name: "Dragon Spawn Countdown",
            description: "Self Explanatory",
            category: "?Displays",
        })
        DragonSpawnTimer = true;

        @SwitchProperty({
            name: "Good dragon notifier",
            description: "Makes title on Divine or Superior spawn",
            category: "?Features",
        })
        DragNotifier = true;

        @SwitchProperty({
            name: "Format Damage Numbers",
            description: "Adds commas to damage numbers (might reduce framerate idk)",
            category: "?Visual",
        })
        FormatDmg = true;

        @SliderProperty({
            name: "Dragon Spawn Countdown X",
            description: "",
            category: "?Displays",
            min: 0,
            max: 100
        })
        DragonSpawnTimerX = 1;

        @SliderProperty({
            name: "Dragon Spawn Countdown Y",
            description: "",
            category: "?Displays",
            min: 0,
            max: 100
        })
        DragonSpawnTimerY = 18;



        @SwitchProperty({
            name: "Eye Drop Display",
            description: "Shows your eye drop counts",
            category: "?Trackers",
        })
        eyeDropDisplay = true;

        @SliderProperty({
            name: "Eye Drop Display X",
            description: "",
            category: "?Trackers",
            min: 0,
            max: 100
        })
        eyeDropDisplayX = 1;

        @SliderProperty({
            name: "Eye Drop Display Y",
            description: "",
            category: "?Trackers",
            min: 0,
            max: 100
        })
        eyeDropDisplayY = 20;




        @SwitchProperty({
            name: "Eyes Placed Display",
            description: "Shows your eye drop counts",
            category: "?Trackers",
        })
        eyesPlaced = true;

        @SliderProperty({
            name: "Eyes Placed Display X",
            description: "",
            category: "?Trackers",
            min: 0,
            max: 100
        })
        eyesPlacedX = 1;

        @SliderProperty({
            name: "Eyes Placed Display Y",
            description: "",
            category: "?Trackers",
            min: 0,
            max: 100
        })
        eyesPlacedY = 15;




        @SwitchProperty({
            name: "Ping Display",
            description: "Shows your ping",
            category: "?Visual",
        })
        pingCounter = true;

        @SliderProperty({
            name: "Ping Display X",
            description: "",
            category: "?Visual",
            min: 0,
            max: 100
        })
        pingCounterX = 1;

        @SliderProperty({
            name: "Ping Display Y",
            description: "",
            category: "?Visual",
            min: 0,
            max: 100
        })
        pingCounterY = 1;

        @SwitchProperty({
            name: "FPS Counter",
            description: "Adds a FPS counter to your screen",
            category: "?Visual",
        })
        FPSCounter = true;

        @SliderProperty({
            name: "FPS Counter X",
            description: "",
            category: "?Visual",
            min: 0,
            max: 100
        })
        FPSCounterX = 1;

        @SliderProperty({
            name: "FPS Counter Y",
            description: "",
            category: "?Visual",
            min: 0,
            max: 100
        })
        FPSCounterY = 3;

        constructor() {
            this.initialize(this);
        }
    }
    
    export default new Settings();