import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <img src="https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png?rf=1024" alt="Bootstrap" width="30" height="24" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to='/'>Zip Code Search</Link>
              <Link className="nav-link" to="highlow">Highs And Lows</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar