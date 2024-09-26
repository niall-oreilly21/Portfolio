import React from "react";
import CardData from "./CardData";
import { Link } from "react-router-dom";
import boomImage from "../Assets/Images/img.png";
import {Col} from "react-bootstrap"; // Correct path to the image

export default class Card extends React.Component<{ cardData: CardData }> {
    render() {
        return (
            <Col size={12} sm={6} md={4}>
                <div className="proj-imgbx">
                    <img src={boomImage} />
                    <div className="proj-txtx">
                        <h4>{this.props.cardData.title}</h4>
                        <span>{this.props.cardData.content}</span>
                    </div>
                </div>
            </Col>
        );
    }
}
