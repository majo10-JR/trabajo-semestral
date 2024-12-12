
- **Propuesta de visualizaciones atómicas:**

En primer lugar, de las visualizaciones realizadas por nosotras en la entrega 04, decidimos mantener la de emisiones de bolsas plásticas por región en 2019, ya que nos entrega una visión inicial del problema. Además, tuvimos que descartar las demás, ya que decidimos enfocar puntualmente en bolsas plásticas y los demás gráficos eran de botellas de plástico, vidrio y contenedores de plástico. (Está se realizó en Google Colab utilizando Altair).

En segundo lugar, se nos ocurrió hacer una infografía de un mapa de América que mostrara el estado actual de la regulación de las bolsas plásticas en cada país, el nivel de restricción y su año. (Esta la realizamos en Canva).

Siguiendo con las demás visualizaciones, las dos restantes fueron realizadas en Fluorish. la primera de ellas, entrega datos en un  mapa mundial por cada país del índice del mal manejo de plásticos, el nivel de mal manejo de plásticos, que va de muy bajo a muy alto, y finalmente el consumo total de plásticos por país en toneladas.

El segundo gráfico interactivo, es un poco más sencillo, simplemente quisimos mostrar de una manera más dinámica y gráfica los principales países que contaminan en el mundo. Y en tercer lugar, para ir de lleno a los datos de consumo de las bolsas de distinto tipo de materiales, incorporamos un gráfico de barra horizontal, que entregará las cifras de qué tipo de bolsas son las más utilizadas en los principales países según su material.
En cuanto a las dimensiones: la mayoría es país o regiones, y las otras son los porcentajes de consumo, ya sea de bolsas plásticas, del tipo de bolsas plásticas, emisiones, etc.
- **Las dimensiones en el gráfico de Altair:**
Región: cinco tipos de regiones donde se registraron emisión de bolsas plásticas.
 Porcentaje de emisión de bolsas de plástico: los valores registrados de cada región.

- **En la infografía de Canva:**
Países: países de Latinoamérica que tienen regulación en el uso de bolsas plásticas. (México, Panamá, Perú, Colombia, Chile, Argentina y Uruguay).
Año: desde el año que existe ese tipo de regulación en cada país.
Estado: el estado en que se encuentra la prohibición en cada país según la norma.

- **Visualización mapa mundial de Flourish:**
Países: los países que emiten cierta cantidad de plástico.
Consumo total de plásticos por toneladas: el valor en toneladas de consumo de plásticos por cada país.
Índice del mal manejo de plásticos (toneladas): este indica el índice del mal manejo del uso de plásticos.
Nivel del mal manejo de plásticos: que puede ser según las clasificaciones de los valores emitidos en; muy bajo, bajo, medio, alto, muy alto.
- **Visualización tipo Dona de Flourish:**
Países: los principales países que más contaminan con emisiones de plástico. (China, Estados Unidos, India, Brasil, México, Japón, Alemania, Indonesia, Tailandia, Italia).
Cifras: millones de toneladas emitidas por cada país.

- **Códigos utilizados:**
En el código realizado en el caso de la visualización de **Altair**, adjunto en otro archivo este proceso. 

En el caso de las visualizaciones de **Flourish**, en un principio no entendíamos muy bien como funcionaba, ya que no se representaban de buena forma los datos. Luego de entender como era esta dinámica, agregamos cada base de datos correspondiente para la visualización a crear, donde según los datos que queríamos usar desde la misma aplicación pudimos elegir las variables a utilizar, ya que algunas no nos servían. Tras insertar la base de datos de CSV en Flourish, fue el proceso de escoger la paleta de colores que más se asemejara a la de la webstory que estamos realizando.
Finalmente, obtuvimos cada visualización y la exportamos con sus respectivos códigos, para luego agregarlas en el archivo HTML.

