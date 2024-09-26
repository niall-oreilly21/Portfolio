import React from "react";
import ItchIoEmbed from "./IthcoToEmbed";

const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
class Button extends React.Component<{ sound: string }> {
    state = {
        play: false
    }

    audio = new Audio('https://soundcloud.com/the-cheerleader/nsync-bye-bye-bye?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing')

    componentDidMount() {
        audio.addEventListener('ended', () => this.setState({ play: false }));
    }

    componentWillUnmount() {
        audio.removeEventListener('ended', () => this.setState({ play: false }));
    }

    togglePlay = () => {
        this.setState({ play: !this.state.play }, () => {
            this.state.play ? this.audio.play() : this.audio.pause();
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
            </div>
        );
    }
}

export default Button;
