import {IProject} from "./IProject";
import {Button, Card, CardBody, CardTitle, Col, List, Row} from "reactstrap";
import Technology from "./Technology";
import Screenshot from "./Screenshot";

const Project = ({id, title, description, technologies, screenshots, sourceLink, demoLink}: IProject) => {
    let cardBody;
    let descriptionDetails: string[] = description.split("\n");

    const demoColumn = <Col className="col-md-6 col-12 mb-3">
        <Row className="justify-content-center">
            <Col className="col-12 my-auto">
                <Screenshot imageFilePath={`img/${screenshots[0]}`} alternateText={title}/>
            </Col>
            <Col className="col-auto my-3 px-2">
                <Button className="mx-auto">&lt;</Button>
            </Col>
            <Col className="col-auto my-3 px-2">
                <Button className="mx-auto">&gt;</Button>
            </Col>
        </Row>
        <Row className="justify-content-center mt-5">
            {(sourceLink !== undefined) ? (
                <Col className="col-auto">
                    <a href={sourceLink} target="_blank" className="btn btn-primary">Source</a>
                </Col>
            ) : (<span/>)}
            {(demoLink !== undefined) ? (
                <Col className="col-auto">
                    <a href={demoLink} target="_blank" className="btn btn-primary">Demo</a>
                </Col>
            ) : (<span/>)}
        </Row>
    </Col>;

    const descriptionColumn = <Col className="col-md-6 col-12 mb-3">
        <List>
            {
                descriptionDetails.map((currentDetail) => <li>{currentDetail}</li>)
            }
        </List>

        <Row className="d-flex justify-content-center">
            {
                technologies.map((currentTechnology) =>
                    <Col className="col-auto my-2">
                        <Technology name={currentTechnology} fontSize={5} spacing={0} marginRight={1}/>
                    </Col>
                )
            }
        </Row>
    </Col>;

    if (id % 2 === 0) {
        cardBody = (
            <CardBody className="p-md-3 py-3">
                <Row>
                    {demoColumn}
                    {descriptionColumn}
                </Row>
            </CardBody>
        );
    } else {
        cardBody = (
            <CardBody className="p-md-3 py-3">
                <Row>
                    {descriptionColumn}
                    {demoColumn}
                </Row>
            </CardBody>
        );
    }

    return (
        <Card className="p-md-3 py-3 mb-5">
            <CardTitle className="mb-3">
                <h3 className="text-center">{title}</h3>
            </CardTitle>

            {cardBody}
        </Card>
    );
};

export default Project;