# Limpieza de datos
Nombre: María José Jiménez
**Base de datos utilizada**: La base de datos que decidí utilizar fue la que limpió mi compañera Blanca para la Entrega 02, que si bien es bastante sencilla, fue la consideré y que en realidad decidimos en conjunto como grupo, ya que es la que más aporta información para analizar y relacionar con las iniciativas, proyectos y leyes que se han implementado y propuesto, tanto en nuestro país como en el mundo, para disminuir en la emisión de plástico en general, y en mi caso de las bolsas de plástico que se registraron en 2019.

Por lo mismo la base que usé, me permite entrelazas de mejor forma la información y la demostración de los datos de la visualización atómica, para el proyecto en general y la crónica, en comparación por ejemplo con la base de datos que yo limpié previamente, que compara el PIB de los países según la emisión general de plásticos en 2019.

En cuanto a la explicación del procesamiento para crear la visualización, lo explicaré por pasos para facilitar el entendimiento:

# **Paso 1: Importar las bibliotecas necesarias:**
Lo primero que hice para partir el proceso de visualización, fue importar las bibliotecas necesarias para trabajar en Google Colab, que son pandas y altair.

import pandas as pd
import altair as alt

# **Paso 2: Cargar la base de datos a utilizar en formato CSV**
En este caso, decidí utilizar una base de datos limpiada para la entrega 02 por mi compañera Blanca, que me entrega datos comparativos sobre la emisiones de plasticos a los oceanos, en distinas regiones y de distintos tipos de plásticos.

data = pd.read_csv('/content/Basura-oceanos-limpio (1).csv')
data

# **Paso 3: Limpiar y procesar los datos**
En este paso, como yo elegí mostrar en la visualización atómica la comparativa entre emsiones de bolsas de plástico por regiones, decidí elimiar las demás columnas con otros productos de plástico.

# Eliminar columnas que no aportan valor a la visualización
Aquí se deben escribir los números de cada fila a eliminar, exceptuando claramente el numero de fila con el que quiero realizar la visualizaciuión, que en este caso es el numero 4, que pertenece a las bolsas de plástico.
datos_filtrados_1 = data.drop([0, 1, 2, 3, 5, 6, 7, 8])

Y luego de ello, trasponer los datos que estaban en las filas por las columnas
# Transponemos los datos para usar las filas como columnas
datos_filtrados_1 = datos_filtrados_1.transpose()

# **Paso 4: Eliminar filas que no aportan a la visualización**

Luego, hay que borrar las cosas extras que tiene la tabla y que no incorporaremos en el gráfico.

Aquí eliminamos la fila "Unnamed" y los titulos, extras de la base de datos.
datos_filtrados_1 = datos_filtrados_1.drop(datos_filtrados_1.index[:2])

# **Paso 5: Renombramos la columna region y la que corresponde a los porcentajes de cada region

datos_filtrados_1 = datos_filtrados_1.reset_index()
datos_filtrados_1.columns = ['Region', 'Porcentaje']

datos_filtrados_1

# **Paso 6: Crear gráfico de barras para emisiones de bolsas de plástico**
utilicé la función chart para crear esta tipo de gráfico, que a diferencia de otros es interactivo, ya que al pulsar sobre cada barra se muestran los porcentajes de emisión correspondientes. 

chart_bags = alt.Chart(datos_filtrados_1).mark_bar(color='lightgreen').encode(
    x=alt.X('Region', title='Regiones'),
    y=alt.Y('Porcentaje', title='Porcentaje de Emisiones de Bolsas de Plástico'),
    tooltip=['Region', 'Porcentaje']
).properties(
    title='Porcentaje de Emisiones de Bolsas de Plástico por Región',
    width=500,
    height=400
)
# **Paso 7: Mostrar el gráfico visualizado, guardar y descargarlo
# Mostrar el gráfico
chart_bags

# Para exportar el grafico importamos la libreria "files"
from google.colab import files
import altair as alt

# Guardar chart as an HTML file
chart_bags.save('/content/chart_bags.html')

# Guardar el gráfico como archivo HTML
files.download('/content/chart_bags.html')

# Mostrar un mensaje indicando que el archivo ha sido creado
print("El gráfico se ha guardado como 'chart_bags.html'. Abrelo en un navegador para visualizarlo.")

chart_bags
#

Aquí es importante haber ejecutado correctamente todas las celdas previas, ya que de lo contrario no se descargará la visualización en formato html.
Y tras ello, con chart_bags, se mostrará la visualización y al costado derecho hay una especie de botón o tres puntos, que nos permite descargar el gráfico en png. (Pero en mi caso particular, al ser interactivo el gráfico cuando se descargar en este tipo de extensión o tipo de archivo se pierde la función de mostrar los porcentajes exactos de emisón de cada región.)

# Ejemplos sobre preguntas que se pueden responder su base de datos limpia

1. ¿Qué regiones emiten mayor cantidad de bolsas de basura?
2. ¿Existen una relación entre los proyectos de leyes para disminuir la emisón de bolsas y su producción?
3. ¿En nivel de desarollo de los países tiene alguna relación con la producción de bolsas que terminan en los océanos?