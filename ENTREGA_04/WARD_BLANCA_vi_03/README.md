# Limpieza de datos
Nombre: Blanca Ward

Para esta entrega, decidir usar la misma base de datos de la entrega anterior, pero haciéndole el enfoque en un solo tipo de basura, las botellas plásticas y las botellas de vidrio. 
A pesar de que se ve como una base simple y sencilla, como grupo consideramos que aporta gran información, ya que al poder dividir por región los datos podemos hacer un análisis más completo y detallado de las medidas implementadas por países, no solo en Chile, sino que en diferentes regiones que hayan implementado proyectos grandes. 


En cuanto a la explicación del procesamiento para crear la visualización, lo explicaré por pasos para facilitar el entendimiento

# Paso 1: Importar las bibliotecas necesarias:
El primer paso para poder partir el proceso de visualización, fue importar as bibliotecas que iba a usar para poder trabajar en Google Colab, en este caso pandas y altair. 

import pandas as pd 
import altair as alt

# Paso 2: Cargar la base de datos a utilizar en formato CSV
Continuando, decidí usar mi base de datos de la entrega dos, la cual se enfoca en la emisiones de plásticos a los océanos, en distinas regiones y de distintos tipos de plásticos y productos.

data = pd.read_csv('/content/Basura-oceanos-limpio (1).csv') data

# Paso 3: Limpiar y procesar los datos
En este paso, como elegí mostrar en la visualización atómica la comparación entre emisión de botellas de plástico por regiones y botellas de vidrio por regiones, decidí eliminar las demás columnas con otros productos de plástico.

# Eliminar columnas que no aportan valor a la visualización 
Aquí se deben escribir los números de cada fila a eliminar, exceptuando claramente el número de fila con el que quiero realizar la visualización, que en este caso es el número 8 y otro el nimero 11, que pertenece a las botellas de plástico y de vidrio. datos_filtrados_1 = data.drop([0, 1, 2, 3, 4, 5, 6, 7])

Y luego de ello, trasponer los datos que estaban en las filas por las columnas Transponemos los datos para usar las filas como columnas datos_filtrados_1 = datos_filtrados_1.transpose()

# Paso 4: Eliminar filas que no aportan a la visualización
Luego, hay que borrar las cosas extras que tiene la tabla y que no incorporaremos en el gráfico.

Aquí eliminamos la fila "Unnamed" y los titulos, extras de la base de datos. datos_filtrados_1 = datos_filtrados_1.drop(datos_filtrados_1.index[:2])

# Paso 5: Renombramos la columna región y la que corresponde a los porcentajes de cada región
datos_filtrados_1 = datos_filtrados_1.reset_index() datos_filtrados_1.columns = ['Region', 'Porcentaje']

datos_filtrados_1

# Paso 6: Crear gráfico de barras para emisiones de botellas de plástico
utilicé la función chart para crear esta tipo de gráfico, que a diferencia de otros es interactivo, ya que al pulsar sobre cada barra se muestran los porcentajes de emisión correspondientes.

chart_bags = alt.Chart(datos_filtrados_1).mark_bar(color='lightgreen').encode( x=alt.X('Region', title='Regiones'), y=alt.Y('Porcentaje', title='Porcentaje de Emisiones de Bolsas de Plástico'), tooltip=['Region', 'Porcentaje'] ).properties( title='Porcentaje de Emisiones de Botellas de Plástico por Región', width=500, height=400 )

# Paso 7: Mostrar el gráfico visualizado, guardar y descargarlo
Mostrar el gráfico
chart_bags

# Para exportar el grafico importamos la libreria "files"
from google.colab import files import altair as alt

# Guardar chart as an HTML file
chart_bags.save('/content/chart_bags.html')

# Guardar el gráfico como archivo HTML
files.download('/content/chart_bags.html')
     
# Mostrar un mensaje indicando que el archivo ha sido creado
print("El gráfico se ha guardado como 'chart_bags.html'. Abrelo en un navegador para visualizarlo.")
chart_bags

# Ahora limpiaremos la base de datos para hacer una segunda visualización
# Limpiar y procesar los datos
# Eliminar columnas que no aportan valor a la visualización
datos_filtrados_1 = data.drop([0, 1, 2, 3, 4, 6, 7, 8])
# Transponemos los datos para usar las filas como columnas
datos_filtrados_1 = datos_filtrados_1.transpose()

# Eliminamos la fila "Unnamed" y los titulos
datos_filtrados_1 = datos_filtrados_1.drop(datos_filtrados_1.index[:2])

# Renombramos la columna region y la que corresponde a los porcentajes de cada region
datos_filtrados_1 = datos_filtrados_1.reset_index()
datos_filtrados_1.columns = ['Region', 'Porcentaje']

datos_filtrados_1

# Gráfico base
base = alt.Chart(datos_filtrados_1).encode(
    y=alt.Y('Region', title='Regiones', sort='-x'),
    # Cambiar el eje a Y para barras horizontales
    x=alt.X('Porcentaje', title='Porcentaje de Emisiones de Botellas de Plástico'),

  # Formato para mostrar los porcentajes
   text=alt.Text('Porcentaje:Q', format='.1f')
)

# Combina barras y texto
chart_plastic = base.mark_bar(color='orange') + base.mark_text(
    # Alinea el texto a la izquierda de la barra
    align='left',
    # Desplaza ligeramente el texto
    dx=3,
    # Ajusta verticalmente si es necesario
       dy=0
)

# Propiedades del gráfico
chart_plastic = chart_plastic.properties(
    title='Emisiones de Botellas de Plástico por Región'
)

# Para exportar el grafico importamos la libreria "files"
from google.colab import files
import altair as alt

# Guardar chart as an HTML file
chart_plastic.save('/content/chart_plastic.html')

# Guardar el gráfico como archivo HTML
files.download('/content/chart_plastic.html')

# Mostrar un mensaje indicando que el archivo ha sido creado
print("El gráfico se ha guardado como 'chart_plastic.html'. Abrelo en un navegador para visualizarlo.")
     
# Muestra el gráfico
chart_plastic# 

Ejemplos sobre preguntas que se pueden responder en la visualización
¿Qué regiones emiten mayor cantidad de botellas de plástico y de vidrio?
¿Existen una relación entre los proyectos de leyes para disminuir la emisión de botellas de plástico y su producción?
¿Existen una relación entre los proyectos de ONG o grupos para disminuir la emisión de botellas de plástico y su producción?
¿Qué regiones emiten más botellas de plástico? 




