# LIMPIEZA DE DATOS 
**Nombre: María José Jiménez**

En primer lugar, el paso previo a la limpieza de los datos, es obtener una base de datos. Diría que fue lo más difícil de la entrega, ya que como grupo se nos dificultó debido a que no exiten datos concretos sobre los proyectos de limpieza de los océanos, (lo que nos soprendió y a la vez nos frustró mucho a la hora de la entrega, ya que esto es la base de la entrega). 

A pesar de ello, decidimos buscar cuales eran las bases más pertinente a nuestro trabajo. Por esta razón es que decidí, agrupar dos bases de datos en Google Colab, estas las uní con la **función merge:**
 
 df_merge1=pd.merge(df_1,df_2on=['Entity','Year','Code'],how='inner')
 df_merge_1

Luego descargué la nueva base de datos para utilizarla como mi base de datos original, ya que así tenía más variables a comparar, **mediante la función:**
df_merge_1.to_csv("Plasticos_emitidos_al_oceano.csv", encoding='utf-8', index=False)
 
 from google.colab import files
files.download("Plasticos_emitidos_al_oceano.csv")


Una vez en el Google Colab donde finalmente hice la limpieza de datos, fue importar la librería que usé para leer y limpiar los datos:
 import pandas as pd

Luego hice que se leyera la base de datos y la guardé en la variable 'data_base':"""

La función 'read_csv' lee la info del database y la guarda en una variable
data_base = pd.read_csv('Plasticos_emitidos_al_oceano.csv')
data_base

Una de las decisiones que tomé fue traducir cada columna, para un mejor entendimiento de las variables. Esto lo realicé mediante la función:
data_base = data_base.rename(columns = {'Entity': 'Pais'}) Donde en cada columna a traducir reemplacé el nombre original por el nuevo.

## Finalmente inicié la limpieza de datos 
Como la culumna 'año' tiene el mismo valor (2019)

Con la función 'unique()' entrega el listado de valores únicos de la columna
data_base['Año'].unique()

Por lo tanto, está columna no aporta información (es redudante) y procedemos a eliminarla de la base de datos:

Con la función 'drop' con 'axis = 1' elimina la columna que se le entrega
data_base = data_base.drop('Año', axis = 1)
data_base

Tras ello, fui revisando en cada columna que variable tenía datos nulos, como lo fue en continente, 

La función 'isnull().sum()' entrega el n° de datos nulos en cada columna
data_base.isnull().sum()

"""Podemos ver que la columna 'Continente' tiene todos sus datos nulos:"""

 La función 'unique()' entrega el listado de valores únicos de la columna
data_base['Continente'].unique()

Por lo tanto, no aporta información. Procedemos a eliminarla de la base de datos:

La función 'drop' con 'axis = 1' elimina la columna que se le entrega
data_base = data_base.drop('Continente', axis=1)
data_base

Ahora veamos qué países no tienen información en la columna 'Sigla':

Con esto podemos ver qué filas no tienen esta información
data_base[data_base['Sigla'].isnull()]

Podemos ver que las filas que no tienen está información corresponden a continentes o zonas geográficas.

Ahora veamos qué países no tienen información en la columna 'PIB per capita':

Con esto podemos ver qué filas no tienen esta información
data_base[data_base['PIB per capita'].isnull()]

"""Se puede ver que, en este caso, nuevamente la gran mayoría corresponde a continentes o zonas geográficas (como Europa, Asia, Norte América, entre otros), cuyos países ya se encuentran representados en otras filas. Por lo tanto, no aportan información muy relevante a los datos.

Como las filas que tienen datos nulos en la columna 'Sigla' están contenidas en el grupo de filas que tienen datos nulos en la columna 'PIB per capita', eliminamos las filas nulas de este último grupo:
"""

Con la función 'dropna()' elimina las filas con datos nulos
En este caso, para 'Sigla' y 'PIB per capita'
data_base = data_base.dropna()
data_base

"""Revisamos que efectivamente no queden datos nulos:"""

Para finalizar con la limpieza de datos, usamos la función 'isnull().sum()' entrega el n° de datos nulos en cada columna
data_base.isnull().sum()

Con esto, obtenemos una base de datos limpia y sin valores nulos.


**Lista de las fuentes de datos utilizadas:**
En relación a las fuentes, utilicé dos bases de datos: que se encuentran https://ourworldindata.org/ocean-plastics, esta nos entregaban más variablas para poder compararlas y así tener una base más solida a limpiar.

**Algunos ejemplos sobre preguntas que se pueden responder en la base de datos limpia:**

- ¿Qué países emiten más plásticos al océano en términos absolutos y per cápita?

- ¿Cuál es la distribución global de plásticos emitidos al océano según los continentes y qué continente contribuye con la mayor proporción?

- ¿Existe una correlación entre el PIB per cápita de un país y la cantidad de plásticos emitidos al océano per cápita en ese país?
