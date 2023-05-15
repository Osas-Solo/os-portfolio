import {Card, CardTitle} from "reactstrap";
import {useEffect, useRef, useState} from "react";

const AboutPage = () => {
    const jobTitles: Array<string> = ["Software Developer", "Backend Developer", "Android Developer"];
    const [jobTitleIndex, setJobTitleIndex] = useState(0);
    const savedJobTitle = useRef<() => void>();

    function changeJobTitle() {
        setJobTitleIndex(Math.floor(Math.random() * jobTitles.length));
    }

    useEffect(() => {
        savedJobTitle.current = changeJobTitle;
    });

    useEffect(() => {
        function tick() {
            savedJobTitle.current?.();
        }

        let id = setInterval(tick, 500);
        return () => clearInterval(id);
    }, []);

    return (
        <Card className="text-center p-5">
            <CardTitle>
                <h1>
                    Osaremhen Solomon Ukpebor
                </h1>
                <h2>{jobTitles[jobTitleIndex]}</h2>
            </CardTitle>
            <h2>Osas-Solo</h2>
            <h3>OS</h3>
        </Card>
    );
}

export default AboutPage;