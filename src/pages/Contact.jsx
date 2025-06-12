import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <>
      <section className="contact-section">
        <h1>Yhteystiedot</h1>

        <p>
          <FaEnvelope style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          <a href="mailto:admin@jylharacing.fi">admin@jylharacing.fi</a>
        </p>

        <p>
          <FaInstagram style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          <a
            href="https://www.instagram.com/jylharacing"
            target="_blank"
            rel="noopener noreferrer"
          >
            @jylharacing
          </a>
        </p>

        <p>
          <FaFacebook style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          <a
            href="https://www.facebook.com/jylharacing"
            target="_blank"
            rel="noopener noreferrer"
          >
            facebook.com/jylharacing
          </a>
        </p>
      </section>

      <div className="map-embed">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7192.033133253064!2d24.40756538785846!3d63.21465884748183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46869230aa27e39d%3A0x8f7320a442e6d894!2s69950%20Perho!5e0!3m2!1sfi!2sfi!4v1749741781301!5m2!1sfi!2sfi"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Jylhä Racing kartta"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
