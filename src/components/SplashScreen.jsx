import logo from '../assets/logo.png'

function SplashScreen() {
  return (
    <div className="splash-screen">
      <img src={logo} alt="Logo" className="splash-logo" />
    </div>
  )
}

export default SplashScreen