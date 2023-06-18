import React from "react"
import { ImageGalleryItem } from "components/imageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({
  data,
  openModal,
  getModalImg,
  modalImages
}) => {
  return (
    <ul className="ImageGallery">
      {data.map(item => (
        <ImageGalleryItem
          key={item.id}
          img={item.img}
          alt={item.alt}
          openModal={openModal}
          getModalImg={getModalImg}
        />
      ))}
    </ul>
  );
};

