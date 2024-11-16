# Limpieza de datos
Nombre: Victoria Silva

**Base de datos utilizada** La base de datos utilizada para esta entrega fue la que utilizo Blanca Ward en la entrega pasada. Ella se encrago de limpirala y ordenarla. Decidimos utilizar esta ya que era la que brindaba mayor informacion relevante e importante para nuestro trabajo. Era la que mas calzaba con lo que necesitabamos y la cual se ajustaba a uestras futuras proyecciones. La idea es analizar la base desde distintas secciones como por ejemplo en mi caso, desde el lado de los envolotrios  y contendeores de comida plasticos, para asi luego detectar las distintas leyes y restriccciones que se han ido implementando tanto en nuestro pais como en el mundo. 

Ahora comenzare a decribir todos los pasos realizados con una breve explicación: 
# **Paso 1 Importar bibliotecas necesarias:** 
Para comenzar lo primero que hice fue fue importar las bibliotecas necesarias para trabajar en Google Colab, utilizando pandas (para la manipulación de datos) y altair (para crear gráficos interactivos).
import pandas as pd
import altair as alt

# **Paso 2 Cargar el archivo CSV:**
Tal como mencione anterioremente cargue la base de datos ya limpia de mi compañera llamada, Basura Oceanos Limpio, esta base abraca la informacimn de ls distintos tipos de plastcis emitidios en el mundo. Aqui comienza el punto de partida para la limpieza y análisis

data = pd.read_csv('/content/Basura-oceanos-limpio (1).csv')
data


# **Paso 3 Limpieza  y procesamiento de los datos:**
En este paso me enfoque en eliminar las cosas que no iba a necesitar. Yo me iba a enfocar en los cntendores y los envolotrios, por lo que el resto de infromación no me servia y debia ser eliminada.  En esta caso es solo de contendores

# Eliminar columnas que no aportan valor a la visualización
Acá se eliminan las filas iniciales que no contienen la información necesaria , lo cual asegura que solo se trabaje con ls datos que queremos y nos sirven. Aquí se deben escribir los números de cada fila a eliminar.

datos_filtrados_1 = data.drop([0, 2, 3, 4, 5, 6, 7, 8])

# Transponemos los datos para usar las filas como columnas
Los datos se convierten de filas a columnas con .transpose() Aquello permite que las regiones se conviertean en una categoria y los valores agregados se estructuren de manera correcta

datos_filtrados_1 = datos_filtrados_1.transpose()

# Eliminamos filas no deseadas y los titulos
Se eliminan las primeras filas que contienen encabezados innecesraios o datos vacios.

datos_filtrados_1 = datos_filtrados_1.drop(datos_filtrados_1.index[:2])

# Renombramos las columnas 
Las columnas se renombran a Region y Porcentaje, asi proporcionando nosmbres claros y comprensibles 

datos_filtrados_1 = datos_filtrados_1.reset_index()
datos_filtrados_1.columns = ['Region', 'Porcentaje']

datos_filtrados_1

# **Paso 4 Crear Gráfico de barras para Contenedores de Comida:**
Aca use la funcion chart para crear el grafico, el cuals e diferencia porque es interactivo, pues cuando uno se para arriba de alguna barra te muestra los procentajes de emisión correspondiente. 

chart_food = alt.Chart(datos_filtrados_1).mark_bar(color='yellow').encode(
    x=alt.X('Region', title='Regiones'),
    y=alt.Y('Porcentaje', title='Porcentaje de Emisiones de Contenedores de Comida')
).properties(
    title='Emisiones de Contenedores de Comida por Región'
)

# Agregar etiquetas de porcentaje
Se usan etiquetas mark text para mostrar los valores de procentaje directamente en las barras. Esto mejora la legibilidad del gráfico

text = alt.Chart(datos_filtrados_1).mark_text(
    # Centrar el texto horizontalmente
    align='center',  
    # Centrar el texto verticalmente
    baseline='middle',  
# Ajustar posición del texto hacia arriba
Acá estamos ajustando cosaas para que el gráfico se eva mas ordenado y limpio

    dy=-5,  
    #Cambiar el color del texto
    color='black'  
).encode(
    x=alt.X('Region'),
    y=alt.Y('Porcentaje'),
    #Formato con un decimal
    text=alt.Text('Porcentaje:Q', format='.1f')
   
)
# Combinar el gráfico de barras y el texto
Luego seguimos personalizando el gráfico para reflejar los datos

chart_combined = (chart_food + text).properties(
    title='Emisiones de Contenedores de Comida por Región'
)

# **Paso 5 Mostrar el gráfico y guardarlo:**

chart_combined

# Para exportar el grafico importamos la libreria "files"

from google.colab import files
import altair as alt

# Guardar chart como archivo HTML 

chart_combined.save('/content/chart_combined.html')

# Guardar el gráfico como archivo HTML

files.download('/content/chart_combined.html')

# Mostrar un mensaje indicando que el archivo ha sido creado

print("El gráfico se ha guardado como 'chart_conbined.html'. Abrelo en un navegador para visualizarlo.")

# **Paso 6 Ahora limpiaremos la base de datos para hacer una segunda visualización:**

# Limpiar y procesar los datos 
Los mismo pasos de limpieza se repiten pero en este caso para preparar los datos de envoltorios plasticos

# Eliminar columnas que no aportan valor a la visualización
Eliminamos las columnas que no nos sirven. Se eliminan las filas iniciales que no contienen la información necesaria , lo cual asegura que solo se trabaje con ls datos que queremos y nos sirven. Aquí se deben escribir los números de cada fila a eliminar.

datos_filtrados_1 = data.drop([0, 1, 2, 3, 4, 5, 6, 7])

# Transponemos los datos para usar las filas como columnas

datos_filtrados_1 = datos_filtrados_1.transpose()

# Eliminamos la fila "Unnamed" y los titulos

datos_filtrados_1 = datos_filtrados_1.drop(datos_filtrados_1.index[:2])

# Renombramos la columna region y la que corresponde a los porcentajes de cada region

datos_filtrados_1 = datos_filtrados_1.reset_index()
datos_filtrados_1.columns = ['Region', 'Porcentaje']

datos_filtrados_1

# **Paso 7 Gráfico de barras para Envoltorios de Plástico:**
Se usa .mark_bar() para crear grafico de color rojo. Esto ayuda a distinguir visulamente ambos graficos 

chart_Wrappers = alt.Chart(datos_filtrados_1).mark_bar(color='red').encode(
    x=alt.X('Region', title='Regiones'),
    y=alt.Y('Porcentaje', title='Porcentaje de Emisiones de Envoltorios de Plástico')
).properties(
    title='Emisiones de Envoltorios de Plástico por Región'
)
# Agregar etiquetas de porcentaje
Nuevamente se añaden etiquetas de porcentaje de en las barras para mejorar la interpretación

text = alt.Chart(datos_filtrados_1).mark_text(
 # Centrar el texto horizontalmente
    align='center', 
  # Centrar el texto verticalmente
     baseline='middle', 
   
    # Ajustar posición del texto hacia arriba
    dy=-5,  

# Cambiar el color del texto
    color='black'  
).encode(
    x=alt.X('Region'),
    y=alt.Y('Porcentaje'),

    #Formato con un decimal
    text=alt.Text('Porcentaje:Q', format='.1f')
    
)
# Combinar el gráfico de barras y el texto
chart_combined = (chart_Wrappers + text).properties(
    title='Emisiones de Envoltorios de Plástico por Región'
)

# **Paso 8 Mostrar el gráfico y exportarlo:**

chart_combined

# Para exportar el grafico importamos la libreria "files"

from google.colab import files
import altair as alt

# Guardar chart como HTML file
chart_combined.save('/content/chart_combined.html')

# Guardar el gráfico como archivo HTML
files.download('/content/chart_combined.html')

# Mostrar un mensaje indicando que el archivo ha sido creado
print("El gráfico se ha guardado como 'chart_combined.html'. Abrelo en un navegador para visualizarlo.")

chart_combined
#

Es muy importante seguir tods los pass de manera crrecta, pues un error en algun lugar y nada funcionara bien. 

# **PREGUNTAS QUE SE PUEDEN RESPONDER EN LA VISUALIZACIÓN:** 
Sobre contendores: 
1. ¿Que región lidera en emisiones relacionadas con los contendores de comida, y como se compara con las tras regiones?
2. ¿Que factores ulturales o economicos podrian asociarse al incremento de emsion en África del Norte y Medio Oriente?
3. ¿Que region tiene el menor porcentaje de emisión y a que se puede deber aquello?

Sobre envoltorios: 
1. ¿Que region presenta el mayor porcentaje de emisiones de envoltorios y por qué podria ser?
2. ¿Que diferencias se observan entre las regiones en cuanto a las emisiones generadas?
3. ¿Que relacion puede existir entre el desarrolllo economico y cultural y la emisión por envlotrios en Asia Oriental y el Pácifico?
