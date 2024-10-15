import React from "react";
import styles from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div onClick={onClick}>
      <img className = {styles.cardImg}
        src={image.urls.small}
        alt={image.alt_description}
        
      />
    </div>
  );
};

export default ImageCard;
