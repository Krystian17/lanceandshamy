import { MutableRefObject, useEffect, useState } from "react";
import "../../styles/image-banner.scss";

type propType = {
  client: string;
};

const ImageBanner = ({ client }: propType) => {
  const [currentImage, setCurrentImage] = useState<number>(0); //It always starts at 0 instead of 1

  const bannerTimer = 5000;
  // When the ImageBanner is rendered run this code below

  useEffect(() => {
    setTimeout(() => {
      setCurrentImage(currentImage + 1);
    }, bannerTimer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const imageSlide = document.getElementById("imageSlide")!.children;
      const totalImages = imageSlide.length;

      if (currentImage < totalImages && currentImage !== totalImages) {
        imageSlide[currentImage].classList.add("active");
        setTimeout(() => {
          setCurrentImage(currentImage + 1);
        }, bannerTimer);
        if (imageSlide[currentImage - 1] !== undefined) {
          imageSlide[currentImage - 1].classList.remove("active");
        }
        return;
      } else if (currentImage === totalImages) {
        setCurrentImage(0);
        if (imageSlide[currentImage - 1] !== undefined) {
          imageSlide[currentImage - 1].classList.remove("active");
        }
      }
    }
  }, [currentImage]);

  return (
    <div id="imageSlide" className="banner">
      <div className={`imgSlide img1`} />
      <div className={`imgSlide img2`} />
      <div className={`imgSlide img3`} />
      <div className={`imgSlide img4`} />
      <div className={`imgSlide img5`} />
      <div className={`imgSlide img6`} />
      <div className={`imgSlide img7`} />
      <div className={`imgSlide img8`} />
    </div>
  );
};

export default ImageBanner;
