import React from 'react';

export const ImageGalleryItem = ({ img, alt, openModal, getModalImg }) => {
  const modalImages = img.modalImages;
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={img}
        alt={alt}
        onClick={() => {
          getModalImg(modalImages, alt);
          openModal();
        }}
      />
    </li>
  );
};
