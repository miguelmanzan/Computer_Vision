import Slider from '../components/Slider'

function Home() {
  return (
    <div>
      <Slider/>
      <main className="page-content">
        <section className="course-details-list-area area-padding-large bg-color-white blog-details-area">
          <div className="container">
            <div className="row">

              <div className="col-lg-9">
                <div className="course-details">
                  <div className="course-details-main">
                    <h2 className="course-details-title">¿Qué es la visión artificial?</h2>
                    <div className="course-details-content clearfix">
                      <p>La visión artificial es una rama de la inteligencia artificial que
                        permite procesar imágenes del mundo real para sacar conocimiento de
                        ellas. Es decir, transforma en conocimiento la información que recibe en
                        forma de imágenes de bits.</p>

                      <blockquote>
                        Disciplina científica que incluye métodos para adquirir, procesar,
                        analizar y comprender las imágenes del mundo real con el fin de producir
                        información numérica o simbólica para que puedan ser tratados por un
                        ordenador
                      </blockquote>

                      <img src="img/vision.jpg" alt="vision"/>

                      <p>Existen un gran número de aplicaciones para la visión artificial, que se extienden a todo tipo de sectores. Desde los campos de la medicina y la seguridad, hasta empresas de control de calidad y logísticas.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="course-details">
                  <div className="course-details-main">
                    <h2 className="course-details-title">Pytorch</h2>
                    <div className="course-details-content clearfix">
                      <p>Pytorch es una librería de Python desarrollada por Facebook, que permite realizar cálculos numéricos haciendo uso de la programación de tensores. Se trata de una alternativa a Tensorflow (de Google) que está ganando cuota de mercado gracias a su facilidad de uso y su capacidad para ejecutarse mediante GPU, mejorando de forma sensible el rendimiento en el entrenamiento de modelos.</p>

                      <blockquote>
                        Pytorch es una librería de machine learning, ampliamente utilizada para aplicaciones de visión artificial
                      </blockquote>

                      <img src="img/pytorch.jpg" alt="pytorch"/>

                      <p>La principal ventaja de Pytorch reside en su sencilla interfaz para la creación de redes neuronales. De hecho, no es necesario el uso de librerías adicionales como ocurre en el caso de Keras para Tensorflow. Asimismo, otro elemento diferencial de Pytorch es la posibilidad nativa de ejecutar operaciones CUDA.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="course-details">
                  <div className="course-details-main">
                    <h2 className="course-details-title">CUDA</h2>
                    <div className="course-details-content clearfix">
                      <p>CUDA es una plataforma de computación en paralelo desarrollada por Nvidia. Permite el uso CUDA C, una variante del lenguaje de programación C para el desarrollo de programas destinados a la computación en paralelo. Estos programas sacan el máximo rendimiento en tarjetas gráficas de Nvidia compatibles con CUDA.</p>

                      <blockquote>
                        CUDA son las siglas de Compute Unified Device Architecture (Arquitectura Unificada de Dispositivos de Cómputo) que hace referencia a una plataforma de computación en paralelo.
                      </blockquote>

                      <img src="img/nvidia.jpg" alt="nvidia"/>

                      <p>Los programas desarrollados en CUDA C (o en cualquiera de los wrappers existentes para Python o Java) utilizan el paralelismo que ofrecen los múltiples núcleos de las tarjetas gráficas para obtener un mejor rendimiento en tareas intensivas, que es un punto clave para el entrenamiento de una red neuronal.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="course-details">
                  <div className="course-details-main">
                    <h2 className="course-details-title">OpenCV</h2>
                    <div className="course-details-content clearfix">
                      <p>OpenCV es una librería de código abierto desarrollada por Intel que proporciona una infraestructura común para las aplicaciones de visión por ordenador. Dispone de un gran número de algoritmos para la detección de objetos, tracking de movimientos, preprocesado de imágenes y una gran cantidad de utilidades relacionadas con la visión artificial.</p>

                      <blockquote>
                        La misión de OpenCV es proveer una infraestructura común para aplicaciones de visión artificial y acelerar su uso en productos comerciales
                      </blockquote>

                      <img src="img/opencv.jpg" alt="opencv"/>

                      <p>OpenCV-Python es la API de Python para OpenCV. A su vez, esta librería hace uso de dos de los paquetes más populares del ecosistema Python: Numpy y Matplotlib. Esta API interpreta las imágenes como una matriz de Numpy que contiene información de cada píxel de la imagen.</p>
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

export default Home;
