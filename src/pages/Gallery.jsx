import { useState } from 'react'

const events = [
  {
    id: 1,
    title: 'XXX AKU Kevät23',
    thumbnail: '/jylha-racing/assets/thumbnails/ks23.png',
    images: [
      '/jylha-racing/assets/images/KevätSlalom2023/1.jpg',
      '/jylha-racing/assets/images/KevätSlalom2023/2.jpg',
      '/jylha-racing/assets/images/KevätSlalom2023/3.jpg',
      '/jylha-racing/assets/images/KevätSlalom2023/4.jpg',
      '/jylha-racing/assets/images/KevätSlalom2023/5.jpg',
      '/jylha-racing/assets/images/KevätSlalom2023/6.jpg',
      '/jylha-racing/assets/images/KevätSlalom2023/7.jpg',
      '/jylha-racing/assets/images/KevätSlalom2023/8.jpg',
      '/jylha-racing/assets/images/KevätSlalom2023/9.jpg',
      '/jylha-racing/assets/images/KevätSlalom2023/10.jpg',
      '/jylha-racing/assets/images/KevätSlalom2023/11.jpg',
    ],
  },
  {
    id: 2,
    title: 'XXVI AKU Syys22',
    thumbnail: '/jylha-racing/assets/thumbnails/ss22.png',
    images: [
      '/jylha-racing/assets/images/SyysSlalom2022/1.JPG',
      '/jylha-racing/assets/images/SyysSlalom2022/2.JPG',
      '/jylha-racing/assets/images/SyysSlalom2022/3.JPG',
      '/jylha-racing/assets/images/SyysSlalom2022/4.JPG',
      '/jylha-racing/assets/images/SyysSlalom2022/5.JPG',
      '/jylha-racing/assets/images/SyysSlalom2022/6.JPG',
      '/jylha-racing/assets/images/SyysSlalom2022/7.JPG',
      '/jylha-racing/assets/images/SyysSlalom2022/8.JPG',
      '/jylha-racing/assets/images/SyysSlalom2022/9.JPG',
      '/jylha-racing/assets/images/SyysSlalom2022/10.JPG',
      '/jylha-racing/assets/images/SyysSlalom2022/11.JPG',
      '/jylha-racing/assets/images/SyysSlalom2022/12.JPG',
      '/jylha-racing/assets/images/SyysSlalom2022/13.JPG',
      '/jylha-racing/assets/images/SyysSlalom2022/14.JPG',
    ],
  },
  {
    id: 3,
    title: 'Sekalaisia kuvia',
    thumbnail: '/jylha-racing/assets/thumbnails/seka.jpg',
    images: [
      '/jylha-racing/assets/images/Sekalaiset/1.jpeg',
      '/jylha-racing/assets/images/Sekalaiset/2.jpg',
      '/jylha-racing/assets/images/Sekalaiset/3.png',
    ],
  },
]

function Gallery() {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const openPopup = (event) => {
    setSelectedEvent(event)
    setSelectedImageIndex(0)
    setIsFullscreen(false)
  }

  const closePopup = () => {
    setSelectedEvent(null)
    setIsFullscreen(false)
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

  const toggleFullscreen = () => {
    setIsFullscreen(prev => !prev)
  }

  return (
    <section className="gallery-section">
      <h1 className="gallery-title">Kuvagalleria</h1>
      <p className="gallery-description">
        Kuvia kisoista ja kulisseista. Päivitämme galleriaa aika ajoin.
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
              loading="lazy"
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
              className={`popup-image ${isFullscreen ? 'fullscreen-image' : ''}`}
              onClick={toggleFullscreen}
              loading="eager"
            />
            
            {selectedImageIndex + 1 < selectedEvent.images.length && (
              <link
                rel="preload"
                as="image"
                href={selectedEvent.images[selectedImageIndex + 1]}
              />
            )}

            {!isFullscreen && (
              <div className="popup-buttons">
                <button onClick={prevImage} className="popup-button">Edellinen</button>
                <button onClick={nextImage} className="popup-button">Seuraava</button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery