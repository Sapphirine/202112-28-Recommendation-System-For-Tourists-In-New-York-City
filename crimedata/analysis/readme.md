# Datasets sources
This is the safety level analysis based on NYPD Complaint Data Historic from NYC Open Data (url:https://data.cityofnewyork.us/Public-Safety/NYPD-Complaint-Data-Historic/qgea-i56i)

The geolocation dataset is also from NYC Open Data (url: https://data.cityofnewyork.us/download/i8iw-xf4u/application%2Fzip)

The idea of using NYPD Complaint Data Historic for safety analysis is inspired from BRUNA MENDES (url : https://www.kaggle.com/brunacmendes/new-york-crime-analysis/). Some of the data processing code is adapted from it.

# Packages
pandas 
geopandas 

# Description
First users need to download the dataset from the link in the crime_analysis.ipynb file, and after executing all cells in the notebook, a csv file called zipcode_saftylevel would be generated.
The safety level is based on numbers of complaints, numbers of complaints normalized by population, and numbers of complaints normalized by area.