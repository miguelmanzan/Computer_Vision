import {useState} from 'react'
import axios from 'axios';

function Prediction() {
  const [pred, setPred] = useState("Por favor, suba una imagen");
  const [spinner, setSpinner] = useState(false);
  const [img, setImg] = useState("");
  const handleChange = (e) => {
    setImg(e.target.files[0])
  }

  const spinners = new Array(12).fill("")

  const handleClick = () => {
    setSpinner(true)
    axios
      .post("http://127.0.0.1:80/", {img: img}, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setPred(res.data.pred)
        setSpinner(false)
      })
      .catch((err) => {
        setSpinner(false)
        console.log(err);
      });
  }

  return (
    <div>
      <br/><br/><br/>
      <main className="page-content">
        <section className="course-details-list-area area-padding-large bg-color-white blog-details-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="course-details">
                  <div className="course-details-main">

                    <div className="card">
                      <h5 className="card-header bg-transparent">
                          Predicción de frutas y verduras
                      </h5>
                      <div className="card-body">
                        <p className="card-text">Pulse para seleccionar una imagen.</p>
                          <input className="form-control border-0" type="file" value={img.value} onChange={handleChange} />
                          <br />
                          <button type="button"
                                  className={`btn btn-success ${img ? "" : " disabled"}`}
                                  onClick={handleClick}
                          >
                            Predecir fruta o verdura
                          </button>
                      </div>
                    </div>

                    <br/><br/>

                    <div className="card mb-3">
                        <h5 className="card-header bg-transparent">
                        Predicción
                        </h5>
                      <div className="card-body text-success">
                        <h1 className={`card-title ${spinner ? " hidden" : ""}`}>{pred}</h1>
                        <div>

                          {spinners.map((el, i) =>
                            <div key={i} className={`spinner-grow ${spinner ? "" : " hidden"}`}>
                              <span className="sr-only"></span>
                            </div>
                          )}
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Prediction;
