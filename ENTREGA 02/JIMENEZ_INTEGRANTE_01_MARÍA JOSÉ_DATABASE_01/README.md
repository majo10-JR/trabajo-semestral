# LIMPIEZA DE DATOS 
Nombre: María José Jiménez

En primer lugar, el paso previo a la limpieza de los datos, es obtener una base de datos. Diría que fue lo más difícil de la entrega, ya que como grupo se nos dificultó debido a que no exiten datos concretos sobre los proyectos de limpieza de los océanos, (lo que nos soprendió y a la vez nos frustró mucho a la hora de la entrega, ya que esto es la base de la entrega). 

A pesar de ello, decidimos buscar cuales eran las bases más pertinente a nuestro trabajo. Por esta razón es que decidí, agrupar dos bases de datos en Google Colab, estas las uní con la función merge:
 
 df_merge1=pd.merge(df_1,df_2on=['Entity','Year','Code'],how='inner')
df_merge_1

Luego descargué la nueva base de datos para utilizarla como mi base de datos original, ya que así tenía más variables a comparar, mediante la función:


Una vez en el Google Colab donde finalmente hice la limpieza de datos, fue importar la librería que usé para leer y limpiar los datos:
 import pandas as pd

Luego hice que se leyera la base de datos y la guardé en la variable 'data_base':"""

La función 'read_csv' lee la info del database y la guarda en una variable
data_base = pd.read_csv('Plasticos_emitidos_al_oceano.csv')
data_base