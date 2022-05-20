import {Link} from "react-router-dom";

function Slider() {
  return (
    <div
      className="slider-area active-slider-def animated-slider-content slider-nav-btn-1 nav-style-2 common-slider-style">
      <div className="single-slider fullscreen image-bg" style={{background: "url(img/slider.jpg"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="single-slider-content">
                <div className="font-light animated-part cd-headline clip">
                  <h1>Visión
                    <span className="cd-words-wrapper">
                      <b className="is-visible">&nbsp;Artificial</b>
                      <b>&nbsp;Artificial</b>
                    </span>
                  </h1>
                </div>
                <h3>Reconocimiento de frutas</h3>
                <p>Aplicación para procesar, analizar y reconocer imágenes de frutas y verduras del mundo real mediante
                  el uso de la visión por computador.</p>
                <div className="slider_btn_box">
                  <Link to="prediction" className="readmore-btn sgs">Probar</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;