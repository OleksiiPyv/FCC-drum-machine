import React from "react";

export default class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.handlePlay = this.handlePlay.bind(this)
    }

    handlePlay() {
        this.props.playAudio(this.props.keyTrigger)
    }

    render() {
        return (
            <button className="drum-machine__set-item drum-pad" id={this.props.name} onClick={this.handlePlay}>
                <audio
                    className="clip"
                    data-name={this.props.name}
                    id={this.props.keyTrigger}
                    src={this.props.url}
                />
                {this.props.keyTrigger}
            </button>
        );
    }
}
