import {IProject} from "./IProject";
import {Button, Card, CardBody, CardTitle, Col, List, Row} from "reactstrap";
import Technology from "./Technology";

const Project = ({id, title, description, technologies, screenshots, sourceLink, demoLink}: IProject) => {
    let cardBody;
    let descriptionDetails: string[] = description.split("\n");

    const demoColumn = <Col className="col-md-6 col-12 mb-3">
        <Row>
            <Col className="col-1 my-auto">
                <Button>&lt;</Button>
            </Col>
            <Col className="col-10 my-auto">
                <img src={`img/${screenshots[0]}`} alt={title} className="img-thumbnail w-auto h-auto"/>
            </Col>
            <Col className="col-1 my-auto">
                <Button>&gt;</Button>
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
            <CardBody className="p-3">
                <Row>
                    {demoColumn}
                    {descriptionColumn}
                </Row>
            </CardBody>
        );
    } else {
        cardBody = (
            <CardBody className="p-3">
                <Row>
                    {descriptionColumn}
                    {demoColumn}
                </Row>
            </CardBody>
        );
    }

    return (
        <Card className="p-3 mb-5">
            <CardTitle className="mb-3">
                <h3 className="text-center">{title}</h3>
            </CardTitle>

            {cardBody}
        </Card>
    );
};

export default Project;