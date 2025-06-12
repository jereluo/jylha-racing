function Footer() {
  return (
    <footer className="footer">
      <div className="sponsors">
      <a href="https://koneharjuoy.fi/" target="_blank" rel="noopener noreferrer">
  <img
    src="assets/images/Sponsorit/koneharju.png"
    style={{ height: '90px' }}
    alt="Sponsor 1"
    className="sponsor-logo"
  />
</a>

<a href="https://www.autokorjaamohytonen.fi/" target="_blank" rel="noopener noreferrer">
  <img
    src="assets/images/Sponsorit/hytonen.png"
    style={{ height: '90px' }}
    alt="Sponsor 2"
    className="sponsor-logo"
  />
</a>


      </div>

      <p>© Jylhä Racing 2021–{new Date().getFullYear()}</p>

      <p>
        Sivuston toteuttanut{' '}
        <a href="https://www.linkedin.com/in/jere-luomanmäki" target="_blank" rel="noopener noreferrer">
          Jere Luomanmäki
        </a>
      </p>
    </footer>
  );
}

export default Footer;
