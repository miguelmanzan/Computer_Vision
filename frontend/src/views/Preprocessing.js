function Preprocessing() {
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
                    <h2 className="course-details-title">Preprocesado</h2>
                    <div className="course-details-content clearfix">
                      <p>Para lograr buenos resultados en el reconocimiento de objetos mediante visión artificial es imprescindible conocer nuestro conjunto de entrenamiento. Como vimos en la sección anterior, contamos con un conjunto de entrenamiento con unas características bien definidas.</p>

                      <blockquote>
                        Para lograr buenos resultados en el reconocimiento de objetos mediante visión artificial es imprescindible conocer nuestro conjunto de entrenamiento
                      </blockquote>

                      <img src="img/preprocessing.jpg" alt="preprocessing"/>

                      <p>Se trata de imágenes de 100x100 pixeles con un único elemento centrado. Además, se ha eliminado el fondo de la imagen y se ha sustituido por un color blanco uniforme.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="course-details">
                  <div className="course-details-main">
                    <h2 className="course-details-title">Modelo pre-entrenado</h2>
                    <div className="course-details-content clearfix">
                      <p>Se ha utilizado el modelo propuesto por los investigadores Piotr Dollar y C. Lawrence Zitnick de Microsoft Research. Se trata de un modelo Random Forest para la detección de estructuras que mapea la imagen obteniendo los bordes de los objetos.</p>

                      <blockquote>
                        Se ha utilizado el modelo propuesto por los investigadores Piotr Dollar y C. Lawrence Zitnick de Microsoft Research.
                      </blockquote>

                      <img src="img/edge.jpg" alt="edge"/>

                      <p>En concreto, se utiliza la implementación desarrollada por OpenCV Foundation en su repositorio opencv_extra, que contiene extensiones y modelos pre-entrenados para una gran cantidad de funcionalidades relacionadas con la visión artificial.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="course-details">
                  <div className="course-details-main">
                    <h2 className="course-details-title">Thresholding</h2>
                    <div className="course-details-content clearfix">
                      <p>Una vez detectados los bordes de los objetos que contiene la imagen, se convierte la imagen a escala de grises y se aplica un thresholding dinámico. El thresholding consiste en la comparación entre un umbral y los valores de los píxeles de la imagen recibida en escala de grises.</p>

                      <blockquote>
                        El thresholding consiste en la comparación entre un umbral y los valores de los píxeles de la imagen recibida en escala de grises.
                      </blockquote>

                      <img src="img/thresholding.jpg" alt="thresholding"/>

                      <p>Si el valor de un píxel cualquiera de la imagen es mayor que el umbral propuesto, se le asigna un negro puro y, en caso contrario, se le asigna un blanco puro. De esta forma, transformamos nuestra imagen en una imagen binaria, compuesta únicamente de pixeles negros y blancos puros.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="course-details">
                  <div className="course-details-main">
                    <h2 className="course-details-title">Máscara</h2>
                    <div className="course-details-content clearfix">
                      <p>El thresholding dinámico permite calcular todas las áreas de todos los objetos de la imagen. Gracias a ello, es posible filtrar los objetos detectados estableciendo un área máxima y un área mínima.</p>

                      <blockquote>
                        El thresholding dinámico permite calcular todas las áreas de todos los objetos de la imagen.
                      </blockquote>

                      <img src="img/mask.jpg" alt="mask"/>

                      <p>Una vez filtrados los objetos de la imagen, se obtiene el objeto de mayor área y se le aplica una máscara para eliminar su fondo, que se rellena con un blanco puro. Y, por último, se procede al recorte de la imagen para ajustarla al borde (crop).</p>
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

export default Preprocessing;
