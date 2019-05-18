import React from "react";
import Button from "react-bootstrap/Button";



function CurChallengesCard(props) {
    return (<Button {...props} variant="danger">{props.btnname}</Button>);
}

export default CurChallengesCard;