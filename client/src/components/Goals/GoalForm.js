import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function GoalForm(props) {
    let unitOptionOne;
    let unitOptionTwo;

    let sport = props.curGoal.sport;
    let type = props.curGoal.type;

    //if the goal type is distance
    if (type === "Distance") {
        //if the sport is run or bike
        if (sport === "Run" || sport === "Ride") {
            unitOptionOne = <option>mi</option>;
            unitOptionTwo = <option>km</option>;
        } else {
            //unitOptions = //set options to meters/yards
            unitOptionOne = <option>meters</option>;
            unitOptionTwo = <option>yards</option>;
        }
    } else if (type === "Frequency") {
        //unitOptions = //set options to times/days
        unitOptionOne = <option>times</option>;
    } else {
        //unitOptions = //set options to minutes
        unitOptionOne = <option>minutes</option>;
    }
       

console.log(props.curGoal)
return (
    <Form>
        <Form.Group as={Row} controlId="newGoal">
            <Form.Label column sm={4} className="text-right my-2">Sport:</Form.Label>
            <Col sm={6}>
                <Form.Control name="sport" className="my-2" as="select" onChange={props.onGoalChange} defaultValue="Run">
                    <option>Run</option>
                    <option>Ride</option>
                    <option>Swim</option>
                </Form.Control>
            </Col>
            <Form.Label column sm={4} className="text-right  my-2">Type:</Form.Label>
            <Col sm={6}>
                <Form.Control name="type" className="my-2" as="select" onChange={props.onGoalChange} defaultValue="Distance">
                    <option>Distance</option>
                    <option>Frequency</option>
                    <option>Time</option>
                </Form.Control>
            </Col>
            <Form.Label column sm={4} className="text-right my-2">Qty:</Form.Label>
            <Col sm={6}>
                <Form.Control name="qty" className="my-2" type="text" onChange={props.onGoalChange} placeholder="1" />
            </Col>
            <Form.Label column sm={4} className="text-right my-2">Unit:</Form.Label>
            <Col sm={6}>
                <Form.Control name="unit" className="my-2" as="select" onChange={props.onGoalChange} /*defaultValue="mi"*/>
                    {unitOptionOne}
                    {unitOptionTwo}
                     
                     
                     {/* <option>mi</option>
                    <option>km</option>
                    <option>minutes</option>
                    <option>days</option>
                    <option>times</option>
                    <option>meters</option>
                    <option>yards</option> */}
                </Form.Control>
            </Col>
            <Form.Label column sm={4} className="text-right my-2">Time frame:</Form.Label>
            <Col sm={6}>
                <Form.Control name="timeframe" className="my-2" as="select" onChange={props.onGoalChange} defaultValue="This Week">
                    <option>Today</option>
                    <option>This Week</option>
                </Form.Control>
            </Col>
            <Col sm={{ span: 9, offset: 1 }}>
                <Button type="submit" variant="warning" size="lg" className="my-2" block onClick={() => props.onGoalSubmit()} >
                    Create New Goal
                    </Button>
            </Col>
        </Form.Group>
    </Form>
);
}

export default GoalForm;