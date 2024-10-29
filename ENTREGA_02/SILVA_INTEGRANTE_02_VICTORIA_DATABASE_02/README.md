# Limpieza de datos
Nombre: Victoria Silva

El tema de buscar bases de datos se nos hizo muy díficil, pues creíamos que nuestro tema iba a contar con mucha información disponible, pero no fue así, la infromación que existia era vaga y sin analísis adecuados para lo que el trabajo requiria. 

Sin embargo, logramos encontrar ciertas bases de datos que brindaban información importante y relevante para lo que necesitabamos. Aquellas tablas las encontre en Our World In Data, pagína web la cual contiene variedad de infromación sobre el tema. En mi caso tuve que agrupar dos tablas con diferentes datos, para así crear una completa. Esto lo hice a traves de Google Colab, aplicando la **Función Merge**

**df_merge_2 = pd.merge(df_3, df_4, on=['Entity', 'Year', 'Code'], how='inner')
df_merge_2**

Luego descargue aquella base de datos para así poder comenzar a limpiarla, **mediante la función**

**df_merge_2.to_csv("Residuos_plasticos_mal_gestionados.csv", encoding='utf-8', index=False)
from google.colab import files
files.download("Plasticos_emitidos_al_oceano.csv")**

Ya en Google Colab con mi base de datos lista comence importando la líbreria que use para leer y limpiar: **import pandas as pd**

Despues para que me apreciera la tabla con la base de datos ocupe La funcion **"read_csv" lee la info del database y la guarda en una variable**
**data_base = pd.read_csv("Residuos Plasticos.csv", sep=";")
data_base**

Luego, comence a ver los cambios y limpiezas que queria realizar en mi base de datos. En primer lugar decidi traducir las columnas. Parti con la columna "Entity" para que se traduciera a "País". Aquello lo hice con la función: 

**la columna "Etnity" pasa a ser "País"
data_base.rename(columns={"Entity": "País"}, inplace=True)
data_base**

Despues hice lo mismo con la columna "Year" que la cambie a "Año" a traves de la función: 

**la columna "Year" pasa a ser "Año"
data_base.rename(columns={"Year": "Año"}, inplace=True)
data_base**

Siguiendo con la otra columna "Share of global mismanaged plastic waste", paso a ser "Proporción de residuos plásticos mal gestionados a nivel mundial" a traves de la función: 

**la columna "Share of global mismanaged plastic waste" pasa a ser "Proporción de residuos plásticos mal gestionados a nivel mundial"
data_base.rename(columns={"Share of global mismanaged plastic waste": "Proporción de residuos plásticos mal gestionados a nivel mundial"}, inplace=True)
data_base**

Ya con la última columna "Probability of plastic being emitted to ocean" la tarduci a "Probabilidad de que el plástico se emita al océano", con la misma función: 

**la columna "Probability of plastic being emitted to ocean" pasa a ser "Probabilidad de que el plástico se emita al océano"
data_base.rename(columns={"Probability of plastic being emitted to ocean": "Probabilidad de que el plástico se emita al océano"}, inplace=True)
data_base**


Despues quise eliminar una columna, que no aportaba y no me servia de nada dentro de la base de datos. Aquella columna era "Code" que me daba los codígos de cada país. Esto lo hice a traves de la función: 

**La funcion "drop" con "axis=1" elimina la columna que se le entrega
data_base=data_base.drop("Code", axis=1)
data_base**

Por último quise revisar y corroborar que mi tabla estuviera completa sin datos en blanco, es decir que no existiera nada en nulo. Aquello lo hice aplicando la función: 

**La funcion "isnull().sum()" entrega el numero de datos nulos en cada columna
data_base.isnull().sum()**

Esa función permite ver el número de datos nulos en cada columna. Mi base de datos estaba completa, contaba con información en cada país, asi que finalmente en cada columna me dijo que no habian datos nulos, marcandolos con un 0. 


# Lista de las fuentes de datos utilizadas
Para mi base de datos, use la pagina Our World in Data: 
https://ourworldindata.org/. De aquella página, ponia en el buscador la infromación que necesitaba y me daba distintos gráficos y tablas relacionadas al tema. Como ya mencione anteriormente yo use dos bases de datos distintas, que luego uni para crear una sola: 
- https://ourworldindata.org/ocean-plastics
- https://ourworldindata.org/grapher/share-of-global-mismanaged-plastic-waste?tab=table

Esos links llevan directo a las tablas de manera individual. 

Se nos hizo muy dificil el hecho de encontrar bases de datos por lo que por eso tuvimos que acudir a mezclar información. 

# Ejemplos sobre preguntas que se pueden responder su base de datos limpia

1. ¿Qué países tienen el mayor porcentaje de residuos plásticos mal gestioandos?
2. ¿Qué países tienen un alto porcentaje de residuos plásticos mal gestionados pero un bajo porcentaje de que aquellos terminen ene l océano?
3. ¿Cómo se pueden comparar los niveles de residuos plásticos mal gestioandos en países desarrollados frente a países en desarrollo?
4. ¿Qué países tienen una probabilidad mayor al 1% de que sus propios reisudos plásticos terminen en el océano?
