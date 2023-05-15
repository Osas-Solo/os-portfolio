import {Card, CardTitle} from "reactstrap";
import {useEffect, useState} from "react";

const AboutPage = () => {
    const jobTitles: Array<string> = ["Software Developer", "Backend Developer", "Android Developer"];

    const [jobTitle, setJobTitle] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            changeJobTitle();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    function changeJobTitle() {
        let index: number = -1;

        if (index < jobTitles.length - 1) {
            index++;
        } else {
            index = 0;
        }

        setJobTitle(jobTitles[index]);
    }

    return (
        <Card className="text-center">
            <CardTitle>
                <h1>
                    Osaremhen Solomon Ukpebor
                </h1>
                <h2>{jobTitle}</h2>
            </CardTitle>
            <h2>Osas-Solo</h2>
            <h3>OS</h3>
        </Card>
    );
}

export default AboutPage;