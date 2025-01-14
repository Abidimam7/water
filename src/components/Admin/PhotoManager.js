import React, { useState } from 'react';

const PhotoManager = () => {
  const [photos, setPhotos] = useState([]);

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    const newPhotos = files.map((file) => {
      const photoUrl = URL.createObjectURL(file);
      return { photoUrl, file };
    });
    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
  };

  const handleRemovePhoto = (photoUrl) => {
    setPhotos((prevPhotos) => prevPhotos.filter((photo) => photo.photoUrl !== photoUrl));
  };

  return (
    <div>
      <h2>Manage Photos</h2>
      <input type="file" multiple onChange={handlePhotoUpload} />
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {photos.map(({ photoUrl }, index) => (
          <div key={index} style={{ position: 'relative', margin: '10px' }}>
            <img
              src={photoUrl}
              alt={`Uploaded ${index}`}
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <button
              style={{ position: 'absolute', top: '5px', right: '5px' }}
              onClick={() => handleRemovePhoto(photoUrl)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoManager;
