import React from "react";
import Card from "./CardData";

class Container extends React.Component<{card : Card}>
{
    constructor(props : {card: Card}) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h2 className="card-title">{this.props.card.title}</h2>
                    <p className="card-text">{this.props.card.content}</p>
                </div>
            </div>
        );
    }

}

export default Container