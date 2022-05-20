function Dataset() {
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
                    <h2 className="course-details-title">Dataset - Fruits 360</h2>
                    <div className="course-details-content clearfix">
                      <p>Fruits 360 es el conjunto de datos utilizado para el entrenamiento de la red neuronal. Este dataset se encuentra disponible en Kaggle y en Github. Este trabajo ha sido realizado entre los años 2017 y 2019 por Horea Muresan y Mihai Oltean, investigadores de la universidad Sapientia de Transilvania.</p>

                      <blockquote>
                        Fruits 360 es el dataset desarrollado por los investigadores Horea Muresan y Mihai Oltean de la universidad Sapientia de Transilvania
                      </blockquote>

                      <img src="img/sapientia.jpg" alt="sapientia"/>

                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="course-details">
                  <div className="course-details-main">
                    <h2 className="course-details-title">Características</h2>
                    <div className="course-details-content clearfix">
                      <p>El conjunto contiene 90483 imágenes de 131 variedades de frutas y verduras. Disponer de un conjunto de datos de alta calidad es esencial para obtener un buen clasificador. Sin embargo, muchos conjuntos de datos contienen imágenes tanto de los objetos a reconocer como de sus fondos, que producen ruido al llevar a cabo un entrenamiento con una red neuronal.</p>

                      <blockquote>
                        El conjunto contiene 90483 imágenes de 131 frutas y verduras, incluyendo todas ellas un fondo blanco preprocesado y un tamaño de 100 x 100 pixeles
                      </blockquote>

                      <img src="img/dataset.jpg" alt="dataset"/>

                      <p>No preprocesar las imágenes de entrenamiento produce ruido en el conjunto de entrenamiento y deriva en que un simple cambio de fondo produzca un error en su clasificación. Para evitar estos inconvenientes, los investigadores propusieron la siguiente metodología de trabajo para el preprocesado de las imágenes.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="course-details">
                  <div className="course-details-main">
                    <h2 className="course-details-title">Metodología</h2>
                    <div className="course-details-content clearfix">
                      <p>Las imágenes se obtuvieron mediante la grabación de videos de 20 segundos utilizando un rotor baja velocidad de 3 rpm y una webcam Logitech C920. Detrás de las frutas se colocó una hoja de papel blanco como fondo. Cada imagen tiene un tamaño de 100x100 pixeles y contiene un único elemento centrado en imagen.</p>

                      <blockquote>
                        Las imágenes se obtuvieron mediante la grabación de videos de 20 segundos utilizando un rotor baja velocidad de 3 rpm y una webcam Logitech C920
                      </blockquote>

                      <img src="img/rotor.jpg" alt="rotor"/>

                      <p>No obstante, debido a las variaciones en las condiciones de iluminación, el fondo
                        no era del todo uniforme y se aplicó un algoritmo para su eliminación. Una vez eliminado el fondo, se aplicó un color blanco uniforme RGB (255, 255, 255)</p>
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

export default Dataset;
