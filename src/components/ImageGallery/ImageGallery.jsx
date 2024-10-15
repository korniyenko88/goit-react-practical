import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div>
      <ul className={styles.galleryList}>
        {images.map((image) => (
          <li key={image.id} className={styles.listItem}>
            <ImageCard image={image} onClick={() => onImageClick(image)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
