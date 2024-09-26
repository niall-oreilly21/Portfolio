import React from "react";

class ItchIoEmbed extends React.Component<any, any> {
    render(){
        return (
            <div>
                <h1>My Game on Itch.io</h1>
        <iframe
        title="My Game"
        src="https://your-game-name.itch.io/your-game"  // Replace with your itch.io embed URL
        width="800"
        height="600"
        frameBorder="0"
        allowFullScreen
        ></iframe>
        </div>
        );
    }

}

export default ItchIoEmbed;
