import React from "react";

interface IScreenshot {
    imageFilePath: string;
    alternateText: string;
}

const Screenshot = ({imageFilePath, alternateText}: IScreenshot) => {
    function computeScreenshotConstraints(): {
        resizedPhotoWidth: number,
        resizedPhotoHeight: number,
        maximumPhotoWidth: number,
        maximumPhotoHeight: number
    } {
        const photo = new Image();
        photo.src = imageFilePath;

        const originalPhotoWidth: number = photo.width;
        const originalPhotoHeight: number = photo.height;
        let resizedPhotoWidth: number = originalPhotoWidth / 3;
        let resizedPhotoHeight: number = originalPhotoHeight / 3;
        let maximumPhotoWidth: number = window.innerWidth;
        let maximumPhotoHeight: number = window.innerHeight;

        console.log("originalPhotoWidth: " + originalPhotoWidth);

        return {resizedPhotoWidth, resizedPhotoHeight, maximumPhotoWidth, maximumPhotoHeight};
    }

    const {
        resizedPhotoWidth,
        resizedPhotoHeight,
        maximumPhotoWidth,
        maximumPhotoHeight
    } = computeScreenshotConstraints();

    return (
        <img src={imageFilePath} alt={alternateText} className="img-fluid d-block mx-auto" style={
            {
                width: resizedPhotoWidth,
                height: resizedPhotoHeight,
                maxWidth: maximumPhotoWidth,
                maxHeight: maximumPhotoHeight,
            }
        }/>
    );
};

export default Screenshot;