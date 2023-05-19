import {IProject} from "./IProject";
import {Button, Card, CardBody, CardTitle, Col, List, Row} from "reactstrap";
import Technology from "./Technology";
import Screenshot from "./Screenshot";
import {useEffect, useState} from "react";

const Project = ({id, title, description, technologies, screenshots, sourceLink, demoLink}: IProject) => {
    let cardBody;
    let descriptionDetails: string[] = description.split("\n");

    const [currentScreenshot, setCurrentScreenshot] = useState("" as string);

    useEffect(() => {
        setCurrentScreenshot(screenshots[0]);

    }, []);

    const updateScreenshot = (step: number) => {
        const currentScreenshotIndex = screenshots.indexOf(currentScreenshot);
        let newScreenshotIndex = currentScreenshotIndex + step;

        if (newScreenshotIndex < 0) {
            newScreenshotIndex = screenshots.length - 1;
        } else if (newScreenshotIndex >= screenshots.length) {
            newScreenshotIndex = 0;
        }

        setCurrentScreenshot(screenshots[newScreenshotIndex]);
    };

    const demoColumn = ({image}: { image: string }) => {
        return (
            <Col className="col-auto mb-5 mx-auto">
                <Row className="justify-content-center">
                    <Col className="col-12 my-auto">
                        <Screenshot imageFilePath={`img/${image}`} alternateText={title}/>
                    </Col>
                    <Col className="col-auto my-3 px-2">
                        <Button className="mx-auto" onClick={() => updateScreenshot(-1)}
                                title={`Previous ${title} Demo Photo`}>
                            &lt;
                        </Button>
                    </Col>
                    <Col className="col-auto my-3 px-2">
                        <Button className="mx-auto" onClick={() => updateScreenshot(1)}
                                title={`Next ${title} Demo Photo`}>
                            &gt;
                        </Button>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    {(sourceLink !== undefined) ? (
                        <Col className="col-auto mb-3 me-md-2 btn btn-primary">
                            <a href={sourceLink} target="_blank">
                                <i className="devicon-github-plain me-2"/>
                                Source
                            </a>
                        </Col>
                    ) : ""}

                    {(demoLink !== undefined) ? (
                        <Col className="col-auto mb-3 ms-md-2 btn btn-primary">
                            <a href={demoLink} target="_blank">
                                <i className="fas fa-play me-2"/>
                                Demo
                            </a>
                        </Col>
                    ) : ""}
                </Row>
            </Col>
        );
    };

    const descriptionColumn = <Col className="col-auto mb-5 mx-auto">
        <List>
            {
                descriptionDetails.map((currentDetail) => <li className="mb-2">- {currentDetail}</li>)
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
                    {demoColumn({image: currentScreenshot})}
                    {descriptionColumn}
                </Row>
            </CardBody>
        );
    } else {
        cardBody = (
            <CardBody className="p-md-3 py-3">
                <Row>
                    {descriptionColumn}
                    {demoColumn({image: currentScreenshot})}
                </Row>
            </CardBody>
        );
    }

    return (
        <Card className="p-md-3 py-3 mb-5">
            <CardTitle className="mb-3 project-title">
                <h2 className="text-center">{title}</h2>
            </CardTitle>

            {cardBody}
        </Card>
    );
};

export default Project;