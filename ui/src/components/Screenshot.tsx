import React, {useEffect, useState} from "react";

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

    useEffect(() => {
        computeScreenshotConstraints(imageFilePath);
    }, []);

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
        <div className="gallery-item screenshot-frame">
            <a href={imageFilePath} title={alternateText}>
                <img src={imageFilePath} alt={alternateText} className="img-fluid d-block mx-auto screenshot"
                     style={photoConstraints}
                     onLoad={() => computeScreenshotConstraints(imageFilePath)}/>
                <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a href={imageFilePath} title={alternateText} className="preview-link"><i
                        className="fa fa-expand"></i></a>
                </div>
            </a>
        </div>
    );
};

export default Screenshot;