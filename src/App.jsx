import React, { useEffect, useState } from "react";
import axios from "axios";
import Toast from "react-hot-toast";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const YOUR_ACCESS_KEY = "lktvFemOr_SOo_xtpz2uSRsCf_wDCrh66ltAcYMc6uI"; // replace with your access key
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (searchTerm) {
      fetchImages();
    }
  }, [searchTerm, page]);

 const fetchImages = async () => {
   try {
     setLoading(true);
     const response = await axios.get(
       `https://api.unsplash.com/search/photos`,
       {
         params: {
           query: searchTerm,
           page,
           client_id: YOUR_ACCESS_KEY,
         },
       }
     );

     // Логування відповіді для налагодження
     console.log("Відповідь від Unsplash:", response.data);

     // Перевірка наявності результатів
     if (response.data && response.data.results) {
       setImages((prevImages) =>
         page === 1
           ? response.data.results
           : [...prevImages, ...response.data.results]
       );
     } else {
       setError("Не знайдено зображень");
     }
     setError("");
   } catch (err) {
     setError("Помилка при отриманні зображень");
     console.error("Помилка при отриманні зображень:", err);
   } finally {
     setLoading(false);
   }
 };

  const handleSearch = (term) => {
    if (!term) {
      Toast.error("Please enter a search term");
      return;
    }
    setSearchTerm(term);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {modalImage && <ImageModal image={modalImage} onClose={closeModal} />}
    </div>
  );
}

export default App;
