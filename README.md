# Visión artificial

Aplicación para procesar, analizar y reconocer imágenes de frutas y verduras del mundo real mediante el uso de la visión por computador.

## ¿Qué es la visión artificial?

La visión artificial es una rama de la inteligencia artificial que permite procesar imágenes del mundo real para sacar conocimiento de ellas. Es decir, transforma en conocimiento la información que recibe en forma de imágenes de bits.

Existen un gran número de aplicaciones para la visión artificial, que se extienden a todo tipo de sectores. Desde los campos de la medicina y la seguridad, hasta empresas de control de calidad y logísticas.

### Pytorch

Pytorch es una librería de Python desarrollada por Facebook, que permite realizar cálculos numéricos haciendo uso de la programación de tensores. Se trata de una alternativa a Tensorflow (de Google) que está ganando cuota de mercado gracias a su facilidad de uso y su capacidad para ejecutarse mediante GPU, mejorando de forma sensible el rendimiento en el entrenamiento de modelos.

La principal ventaja de Pytorch reside en su sencilla interfaz para la creación de redes neuronales. De hecho, no es necesario el uso de librerías adicionales como ocurre en el caso de Keras para Tensorflow. Asimismo, otro elemento diferencial de Pytorch es la posibilidad nativa de ejecutar operaciones CUDA.

### CUDA

CUDA es una plataforma de computación en paralelo desarrollada por Nvidia. Permite el uso CUDA C, una variante del lenguaje de programación C para el desarrollo de programas destinados a la computación en paralelo. Estos programas sacan el máximo rendimiento en tarjetas gráficas de Nvidia compatibles con CUDA.

Los programas desarrollados en CUDA C (o en cualquiera de los wrappers existentes para Python o Java) utilizan el paralelismo que ofrecen los múltiples núcleos de las tarjetas gráficas para obtener un mejor rendimiento en tareas intensivas, que es un punto clave para el entrenamiento de una red neuronal.

### OpenCV

OpenCV es una librería de código abierto desarrollada por Intel que proporciona una infraestructura común para las aplicaciones de visión por ordenador. Dispone de un gran número de algoritmos para la detección de objetos, tracking de movimientos, preprocesado de imágenes y una gran cantidad de utilidades relacionadas con la visión artificial.

OpenCV-Python es la API de Python para OpenCV. A su vez, esta librería hace uso de dos de los paquetes más populares del ecosistema Python: Numpy y Matplotlib. Esta API interpreta las imágenes como una matriz de Numpy que contiene información de cada píxel de la imagen.

## Datos - Fruits 360

Fruits 360 es el conjunto de datos utilizado para el entrenamiento de la red neuronal. Este dataset se encuentra disponible en Kaggle y en Github. Este trabajo ha sido realizado entre los años 2017 y 2019 por Horea Muresan y Mihai Oltean, investigadores de la universidad Sapientia de Transilvania.

### Características

El conjunto contiene 90483 imágenes de 131 variedades de frutas y verduras. Disponer de un conjunto de datos de alta calidad es esencial para obtener un buen clasificador. Sin embargo, muchos conjuntos de datos contienen imágenes tanto de los objetos a reconocer como de sus fondos, que producen ruido al llevar a cabo un entrenamiento con una red neuronal.

No preprocesar las imágenes de entrenamiento produce ruido en el conjunto de entrenamiento y deriva en que un simple cambio de fondo produzca un error en su clasificación. Para evitar estos inconvenientes, los investigadores propusieron la siguiente metodología de trabajo para el preprocesado de las imágenes.

### Metodología

Las imágenes se obtuvieron mediante la grabación de videos de 20 segundos utilizando un rotor baja velocidad de 3 rpm y una webcam Logitech C920. Detrás de las frutas se colocó una hoja de papel blanco como fondo. Cada imagen tiene un tamaño de 100x100 pixeles y contiene un único elemento centrado en imagen.

No obstante, debido a las variaciones en las condiciones de iluminación, el fondo no era del todo uniforme y se aplicó un algoritmo para su eliminación. Una vez eliminado el fondo, se aplicó un color blanco uniforme RGB (255, 255, 255)

## Preprocesado

Para lograr buenos resultados en el reconocimiento de objetos mediante visión artificial es imprescindible conocer nuestro conjunto de entrenamiento. Como vimos en la sección anterior, contamos con un conjunto de entrenamiento con unas características bien definidas.

Se trata de imágenes de 100x100 pixeles con un único elemento centrado. Además, se ha eliminado el fondo de la imagen y se ha sustituido por un color blanco uniforme.

### Modelo pre-entrenado

Se ha utilizado el modelo propuesto por los investigadores Piotr Dollar y C. Lawrence Zitnick de Microsoft Research. Se trata de un modelo Random Forest para la detección de estructuras que mapea la imagen obteniendo los bordes de los objetos.

En concreto, se utiliza la implementación desarrollada por OpenCV Foundation en su repositorio opencv_extra, que contiene extensiones y modelos pre-entrenados para una gran cantidad de funcionalidades relacionadas con la visión artificial.

### Thresholding

Una vez detectados los bordes de los objetos que contiene la imagen, se convierte la imagen a escala de grises y se aplica un thresholding dinámico. El thresholding consiste en la comparación entre un umbral y los valores de los píxeles de la imagen recibida en escala de grises.

Si el valor de un píxel cualquiera de la imagen es mayor que el umbral propuesto, se le asigna un negro puro y, en caso contrario, se le asigna un blanco puro. De esta forma, transformamos nuestra imagen en una imagen binaria, compuesta únicamente de pixeles negros y blancos puros.

### Máscara

El thresholding dinámico permite calcular todas las áreas de todos los objetos de la imagen. Gracias a ello, es posible filtrar los objetos detectados estableciendo un área máxima y un área mínima.

Una vez filtrados los objetos de la imagen, se obtiene el objeto de mayor área y se le aplica una máscara para eliminar su fondo, que se rellena con un blanco puro. Y, por último, se procede al recorte de la imagen para ajustarla al borde (crop).

## ¿Qué es una red neuronal?

Son redes de neuronas artificiales conectadas entre sí que transmiten señales desde la entrada hasta generar una salida.

Destacan en los procesos de análisis, reconocimiento y clasificación de imágenes, a partir de un modelo entrenado.

### Redes Neuronales Convolucionales

Son un tipo de red neuronal artificial donde las neuronas artificiales, corresponden a campos receptivos de una manera muy similar a las neuronas en la corteza visual primaria.

Su sistema de trabajo se basa en la localización de patrones en áreas reducidas de la imagen y no en su conjunto.
