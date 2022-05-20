function Training() {
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
                    <h2 className="course-details-title">¿Qué es una red neuronal?</h2>
                    <div className="course-details-content clearfix">
                      <p>Son redes de neuronas artificiales conectadas entre sí que transmiten señales desde la entrada hasta generar una salida.</p>

                      <blockquote>
                        Las redes neuronales son redes de neuronas artificiales conectadas entre sí que transmiten señales desde la entrada hasta generar una salida
                      </blockquote>

                      <img src="img/network.jpg" alt="network"/>

                      <p>Destacan en los procesos de análisis, reconocimiento y clasificación de imágenes, a partir de un modelo entrenado.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="course-details">
                  <div className="course-details-main">
                    <h2 className="course-details-title">Redes Neuronales Convolucionales</h2>
                    <div className="course-details-content clearfix">
                      <p>Son un tipo de red neuronal artificial donde las neuronas artificiales, corresponden a campos receptivos de una manera muy similar a las neuronas en la corteza visual primaria.</p>

                      <blockquote>
                        Las redes neuronales convolucionales son un tipo de red neuronal artificial donde las neuronas artificiales, corresponden a campos receptivos
                      </blockquote>

                      <img src="img/convolucional.jpg" alt="convolucional"/>

                      <p>Su sistema de trabajo se basa en la localización de patrones en áreas reducidas de la imagen y no en su conjunto.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="course-details">
                  <div className="course-details-main">
                    <h2 className="course-details-title">Entrenamiento</h2>
                    <div className="course-details-content clearfix">
                      <p>Una vez detectados los bordes de los objetos que contiene la imagen, se convierte la imagen a escala de grises y se aplica un thresholding dinámico. El thresholding consiste en la comparación entre un umbral y los valores de los píxeles de la imagen recibida en escala de grises.</p>

                      <blockquote>
                        El thresholding consiste en la comparación entre un umbral y los valores de los píxeles de la imagen recibida en escala de grises.
                      </blockquote>

                      <img src="img/training.jpg" alt="training"/>

                      <p>Si el valor de un píxel cualquiera de la imagen es mayor que el umbral propuesto, se le asigna un negro puro y, en caso contrario, se le asigna un blanco puro. De esta forma, transformamos nuestra imagen en una imagen binaria, compuesta únicamente de pixeles negros y blancos puros.</p>
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

export default Training;
