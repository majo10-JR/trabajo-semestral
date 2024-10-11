# Limpieza de datos
Nombre: Blanca Ward

# Explicación de cómo se realizó el proceso de limpieza de datos, cada paso y decisión tomada.

# Inicio
Para empezar, encontramos la base de datos en Our World in Data, ya que esta ofrece un análisis  sobre los desechos plásticos en los océanos por región. Este conjunto de datos proporciona información sobre los diferentes tipos de desechos plásticos encontrados en varias áreas del mundo, permitiendo una comprensión más clara del impacto de la contaminación plástica en nuestros océanos, para así tener una visión de que productos plásticos son los que más se desechan en los oceanos. 
Este proceso fue muy dificil para nosotras, ya que no encontramos ninguna base muy grande de datos, desde una fuente confiable. Nos contactamos con diferentes ONG pero hasta la fecha, seguimos a la espera de sus reportes. 

Luego de tener descargada mi base de datos en Excel con formato csv, abrí Google Colab, inicié un nuevo notebook, e importé la librería que usaría para limpiar los datos. Para eso escribí:
 import pandas as pd

Luego, le dije que lea la información del database y lo guaradar en una variable: 
data_base = pd.read_csv("Basura-oceanos.csv")
data_base

# Limpieza de datos 

Para empezar la limpieza, quise cambiar los nombres de regiones y de productos (los que se podían) en español, para que se entendiera de mejor forma. Todos los hice con este código y fui cambiando dependiendo el nombre que correspondía. Para eso utilicé este código cada vez que quería cambiar las palabras: 
data_base.rename(columns={"Entity": "Productos"}, inplace=True)
data_base

Luego le pedi que me leyera la cantidad de datos nulos para así, limpiarla y poder tenerla más organanizada.  Lo hice con este codigo: 
data_base.isnull().sum()

Despues de tener la cantidad de datos nulos, decidí eliminar las columnas que sentí que no aportaban información. La primera de ellas es una que decía "Code" la cual no me aportaba infrmación util. Luego eliminé "High Income", ya que quería enfocarme en las regiones nada más. Por ultimo decidí eliminar la columna "Year", ya que todas contenían el mismo año y eso no aportaba ninguna información. Todos estos con esta información, dependiendo la palabra de la columna que queríamos eliminar: 
data_base=data_base.drop("Code", axis=1)
data_base

Para continuar con la limpieza, empecé a eliminar los productos que no contenían plastico, ya que mi investigaión solo se enfoca en ese tipo de productos, entonces no es necesario tener los otros porcentajes. Primero lo hice con estas tres columnas, ya que no queria hacer todas de una por si había errores: 
data_base = data_base.drop([1, 2, 3], axis=0)
data_base
Y luego:
data_base = data_base.drop([4, 5, 6, 13, 15], axis=0)
data_base

Luego, me di cuenta que al eliminar esos numeros, la tabla no cambió el orden, entones quedaba desordenado, partiendo con el numero 0 y luego saltando al 7. Entonces apliqué esta formula para poder ordenar desde el 1 y asi sucesivamente:  
data_base =data_base.drop("level_0", axis=1)
data_base =data_base.drop("index", axis=1)
data_base

Para finalizar, me di cuenta que los valores nulos, igual son importantes, entonces quería que se pudiese ver que es un 0%, ya que de esa forma entndemos la cantidad de basura de ese producto en comparación con los otros. Para eso utilice este codigo: 
data_base = data_base.fillna(0)
data_base


# Lista de las fuentes de datos utilizadas y una explicación de por qué las eligieron.
Para mi base de datos utilicé Our World in Data: https://ourworldindata.org/grapher/waste-items-ocean-region
La verdad es que tuvimos muchos problemas para encontrar bases de datos, y utilicé esta ya que abarca perfectamente lo que necesitabaos para el trabajo. A pesar de qu esta bae abarcaba todos los tipos de basura, on una lipieza, quedaba perfecto para analizar solo los plasticos. 
Además comparé las bases que usaron mis compañeras y ninguna abarcaba los distintos tipos de platico, sino que los agrupaban como un tipo de contaminante.


# Algunos ejemplos sobre preguntas que se pueden responder su base de datos limpia

1. ¿Cuál es la región que tiene mayor cantidad de bolsas de plástico reportadas?
2. ¿Qué tipo de productos plásticos son más prevalentes en Latinoamérica y el Caribe en comparación con Asia Oriental?
3. ¿Existen diferencias significativas en el uso de embalaje industrial entre Asia Oriental y el Pacífico y América Latina?
4. ¿Qué tipo de producto plástico presenta la mayor variabilidad en su uso entre las distintas regiones?








