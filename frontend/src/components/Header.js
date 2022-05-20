import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header header-style-1 sticky-header transparent-header common-header-style">
      <div className="container d-none d-lg-block">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-inner">
              <div className="logo default_logo single-slider-content">
                <Link to="/">
                  <span className="logotipo">VISIÓN ARTIFICIAL</span>
                </Link>
              </div>
              <div className="logo sticky_logo single-slider-content">
                <Link to="/">
                  <span className="logotipo sticky">VISIÓN ARTIFICIAL</span>
                </Link>
              </div>
              <nav className="menu single-slider-content">
                <ul>
                  <li><Link to="/">INICIO</Link></li>
                  <li><Link to="dataset">DATOS</Link></li>
                  <li><Link to="preprocessing">PREPROCESADO</Link></li>
                  <li><Link to="training">ENTRENAMIENTO</Link></li>
                  <li><Link to="prediction">PREDICCIÓN</Link></li>
                </ul>
              </nav>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;