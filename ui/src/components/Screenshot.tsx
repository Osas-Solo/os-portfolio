import React, {useEffect, useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

interface IScreenshot {
    imageFilePath: string;
    alternateText: string;
}

interface IPhotoConstraints {
    width: number;
    height: number;
    maxWidth: number;
    maxHeight: number;
}

const Screenshot = ({imageFilePath, alternateText}: IScreenshot) => {
    const [photoConstraints, setPhotoConstraints] = useState({} as IPhotoConstraints);
    const [screenshotModal, setScreenshotModal] = useState(false as boolean);

    useEffect(() => {
        computeScreenshotConstraints(imageFilePath);
    }, []);

    const displayScreenshotInFull = () => setScreenshotModal(!screenshotModal);

    const computeScreenshotConstraints = (imageSource: string) => {
        const photo = new Image();
        photo.src = imageSource;

        const originalPhotoWidth: number = photo.naturalWidth;
        const originalPhotoHeight: number = photo.naturalHeight;
        let resizedPhotoWidth: number = originalPhotoWidth;
        let resizedPhotoHeight: number = originalPhotoHeight;

        if (originalPhotoWidth > originalPhotoHeight) {
            resizedPhotoWidth = originalPhotoWidth / 2;
            resizedPhotoHeight = originalPhotoHeight / 2;
        } else if (originalPhotoHeight > originalPhotoWidth) {
            resizedPhotoWidth = originalPhotoWidth / 3;
            resizedPhotoHeight = originalPhotoHeight / 3;
        }

        let maximumPhotoWidth: number = window.innerWidth;
        let maximumPhotoHeight: number = window.innerHeight;

        setPhotoConstraints(
            {
                width: resizedPhotoWidth,
                height: resizedPhotoHeight,
                maxWidth: maximumPhotoWidth,
                maxHeight: maximumPhotoHeight
            }
        );
    };

    return (
        <figure className="screenshot-frame">
            <img src={imageFilePath} alt={alternateText} className="img-thumbnail img-fluid d-block mx-auto mb-auto
                screenshot" style={photoConstraints} onLoad={() => computeScreenshotConstraints(imageFilePath)}
                 onClick={displayScreenshotInFull}/>

            <Modal isOpen={screenshotModal} toggle={displayScreenshotInFull}>
                <ModalHeader toggle={displayScreenshotInFull}>{alternateText}</ModalHeader>
                <ModalBody>
                    <img className="img-fluid d-block mx-auto w-auto h-auto" src={imageFilePath} alt={alternateText}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={displayScreenshotInFull}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </figure>
    );
};

export default Screenshot;