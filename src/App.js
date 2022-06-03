import React from "react";
import "./App.scss";
import DrumPad from "./components/DrumPad";
import Controls from "./components/Controls";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            power: true,
            display: String.fromCharCode(160),
            drumKit: "Heater Kit",
            drumKits: Object.keys(drumKits),
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.displayOutput = this.displayOutput.bind(this);
        this.playAudio = this.playAudio.bind(this);
        this.handleKitChange = this.handleKitChange.bind(this);
        this.handlePowerChange = this.handlePowerChange.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
    }

    handleKeyPress(e) {
        if (this.state.power) {
            if (
                [81, 87, 69, 65, 83, 68, 90, 88, 67].every(
                    (x) => x !== e.keyCode
                )
            )
                return;
            this.playAudio(e.code.replace(/Key/, ""));
        }
    }

    playAudio(id) {
        if (this.state.power) {
            const audio = document.getElementById(id.toUpperCase());
            audio.currentTime = 0;
            audio.play();
            this.displayOutput(audio.dataset.name);
        }
    }

    displayOutput(val) {
        this.setState({
            display: val,
        });

        setTimeout(() => {
            this.setState({
                display: String.fromCharCode(160),
            });
        }, 2000);
    }

    handleKitChange(e) {
        if (this.state.power) {
            this.setState({
                drumKit: e.target.value,
            });

            this.displayOutput(e.target.value);
        }
    }

    handlePowerChange() {
        this.setState((state) => {
            return { power: !state.power };
        });

        if (this.state.power) {
            this.displayOutput("Power: off!");
        } else {
            this.displayOutput("Power: on!");
        }
    }

    render() {
        return (
            <div className="App drum-machine">
                <div className="drum-machine__set" id="drum-machine">
                    {drumKits[this.state.drumKit].map((x) => {
                        return (
                            <DrumPad
                                key={x.id}
                                name={x.id}
                                keyTrigger={x.keyTrigger}
                                url={x.url}
                                playAudio={this.playAudio}
                                power={this.state.power}
                            />
                        );
                    })}
                </div>
                <Controls
                    display={this.state.display}
                    handleKitChange={this.handleKitChange}
                    drumKit={this.state.drumKit}
                    drumKits={this.state.drumKits}
                    power={this.state.power}
                    handlePowerChange={this.handlePowerChange}
                />
            </div>
        );
    }
}

const drumKits = {
    "Heater Kit": [
        {
            keyCode: 81,
            keyTrigger: "Q",
            id: "Heater-1",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        },
        {
            keyCode: 87,
            keyTrigger: "W",
            id: "Heater-2",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        },
        {
            keyCode: 69,
            keyTrigger: "E",
            id: "Heater-3",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        },
        {
            keyCode: 65,
            keyTrigger: "A",
            id: "Heater-4",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        },
        {
            keyCode: 83,
            keyTrigger: "S",
            id: "Clap",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        },
        {
            keyCode: 68,
            keyTrigger: "D",
            id: "Open-HH",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        },
        {
            keyCode: 90,
            keyTrigger: "Z",
            id: "Kick-n'-Hat",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        },
        {
            keyCode: 88,
            keyTrigger: "X",
            id: "Kick",
            url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        },
        {
            keyCode: 67,
            keyTrigger: "C",
            id: "Closed-HH",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        },
    ],

    "Smooth Piano Kit": [
        {
            keyCode: 81,
            keyTrigger: "Q",
            id: "Chord-1",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
        },
        {
            keyCode: 87,
            keyTrigger: "W",
            id: "Chord-2",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
        },
        {
            keyCode: 69,
            keyTrigger: "E",
            id: "Chord-3",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
        },
        {
            keyCode: 65,
            keyTrigger: "A",
            id: "Shaker",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
        },
        {
            keyCode: 83,
            keyTrigger: "S",
            id: "Open-HH",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
        },
        {
            keyCode: 68,
            keyTrigger: "D",
            id: "Closed-HH",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
        },
        {
            keyCode: 90,
            keyTrigger: "Z",
            id: "Punchy-Kick",
            url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
        },
        {
            keyCode: 88,
            keyTrigger: "X",
            id: "Side-Stick",
            url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
        },
        {
            keyCode: 67,
            keyTrigger: "C",
            id: "Snare",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
        },
    ],
};

export default App;
