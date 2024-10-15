import React from "react";
import Modal from "react-modal"; // make sure to configure modal styles in your App
import styles from "./ImageModal.module.css";

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal isOpen={!!image} onRequestClose={onClose} className={styles.modal}>
      <button onClick={onClose} className={styles.closeButton}>
        ✖
      </button>
      <h2>{image.description || image.alt_description}</h2>
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>Likes: {image.likes}</p>
      <p>Photographer: {image.user.name}</p>
    </Modal>
  );
};

export default ImageModal;
