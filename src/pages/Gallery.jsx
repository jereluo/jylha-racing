import { useState } from 'react'

const events = [
  {
    id: 1,
    title: 'Kilpailu 2024',
    thumbnail: '/jylha-racing/assets/logo1.png',
    images: [
      '/jylha-racing/assets/logo1.png',
       '/jylha-racing/assets/logo.png',
    ],
  },
  {
    id: 2,
    title: 'Kilpailu 2023',
    thumbnail: '/jylha-racing/assets/logo1.png',
    images: [
      '/jylha-racing/assets/logo1.png',
       '/jylha-racing/assets/logo.png',
    ],
  },
  {
    id: 3,
    title: 'Kilpailu 2022',
    thumbnail: '/jylha-racing/assets/logo1.png',
    images: [
      '/jylha-racing/assets/logo1.png',
       '/jylha-racing/assets/logo.png',
    ],
  },
  {
    id: 4,
    title: 'Kilpailu 2021',
    thumbnail: '/jylha-racing/assets/logo1.png',
    images: [
      '/jylha-racing/assets/logo1.png',
       '/jylha-racing/assets/logo.png',
    ],
  },
  {
    id: 5,
    title: 'Kilpailu 2020',
    thumbnail: '/jylha-racing/assets/logo1.png',
    images: [
      '/jylha-racing/assets/logo1.png',
       '/jylha-racing/assets/logo.png',
    ],
  },
  {
    id: 6,
    title: 'Kilpailu 2999',
    thumbnail: '/jylha-racing/assets/logo1.png',
    images: [
      '/jylha-racing/assets/logo1.png',
       '/jylha-racing/assets/logo.png',
    ],
  },
]

function Gallery() {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const openPopup = (event) => {
    setSelectedEvent(event)
    setSelectedImageIndex(0)
  }

  const closePopup = () => {
    setSelectedEvent(null)
  }

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev + 1 < selectedEvent.images.length ? prev + 1 : 0
    )
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev - 1 >= 0 ? prev - 1 : selectedEvent.images.length - 1
    )
  }

  return (
    <section className="gallery-section">
      <h1 className="gallery-title">Kuvagalleria</h1>
      <p className="gallery-description">
        Tänne tulee kuvia kausien varrelta. Päivitämme galleriaa silloin tällöin!
      </p>

      <div className="gallery-grid">
        {events.map(event => (
          <div
            key={event.id}
            className="thumbnail-wrapper"
            onClick={() => openPopup(event)}
          >
            <h3 className="thumbnail-title">{event.title}</h3>
            <img
              src={event.thumbnail}
              alt={event.title}
              className="thumbnail"
            />
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
              &times;
            </button>
            <h2 className="popup-title">{selectedEvent.title}</h2>
            <img
              src={selectedEvent.images[selectedImageIndex]}
              alt={`${selectedEvent.title} kuva ${selectedImageIndex + 1}`}
              className="popup-image"
            />
            <div className="popup-buttons">
              <button onClick={prevImage} className="popup-button">Edellinen</button>
              <button onClick={nextImage} className="popup-button">Seuraava</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
