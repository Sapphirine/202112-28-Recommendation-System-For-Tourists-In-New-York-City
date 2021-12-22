# EECS 6893 Group 28 Final Project
- Jian Gao(jg4305)
- Yaning Wang(yw3606)
- Jiongxin Ye(jy3114)

## About This Project 
   This project develops a New York City traveling place recommendation system. When people are not familiar with NYC, they can enter their requirements into this system and get a list of recommended places. This system searches places in 3 directions: safety level, price level, and popular level. Based on the demand from the user, the algorithm will change the weight for each attribute and select a better location.
## Required Environment:
Make sure your computer's time/location range is the same as New York Time

If on Windows, right click the date and time on the lower right.
Click "Adjust Date/Time".
Click "Sync now."

1. Install [Anaconda Navigator](https://www.anaconda.com/products/individual)


2. Build a ``` Python 3.8 ``` Environment
![Alt Text](gifs/Instruction_anaconda.gif)

3. Open previous built enviroment's Terminal and Install required packages
```
pip install --upgrade "ibm-watson>=5.3.0"
pip install pandas-gbq
pip install jupyter
pip install notebook
pip install fuzzywuzzy
pip install tqdm
pip install tweepy
pip install geopy
pip install textblob
```
4. Download zip of this repository. Extract the zip to a place on your disk.

5. Once every package is installed, open a new environment terminal, and type ``` jupyter notebook ``` to open Jupyter Notebook

6. On the Jupyter Notebook's page, direct into the folder you just extracted.

7. Open the file ```main.ipynb```, and run each cell. When you run the cell contains:
~~~python
if __name__ == "__main__":
    main()
~~~
The system will open a webpage ```main.html```

8. Type anything to invoke the system. And follow the dialogue of our system to get recommendations!

9. You could type ```restart``` to restart the system 

#### All process
![Alt Text](gifs/all-process.gif)
## Some Clarification:
- There is a limit of requests for Hotel API. We have already run out of it this month. And there are some issues about GCP BigQuery (One of our teammates's account was blocked by Google), thus our previous uploaded data could not be accessed. So we modified our codes that user could only find hotels in zipcode 10025 and 10001. If you type a zipcode that we have not stored any hotel in our bigquery, we will ask you to re-enter a zipcode.
- Analyzing Tweets takes a long time (may be 2 hours or longer), so we update it periodically. You could refer to Twitter folder, there is a README. We have already run it recently and stored data in .csv files so that you do not need to run it again.
- Due to Google GCP Bigquery's slow upload, we have already uploaded all data into tables in BigQuery to save your time.
- Each of us has used up the free experience of $300 plus the extra $50. Thus, in the future, this program may need to add a billing information in the used account.

## Tools Used:
- [IBM Watson Assistant](https://www.ibm.com/products/watson-assistant). You could refer the instruction of installation and usage here: [IBM Watson Assistant API Doc](https://cloud.ibm.com/apidocs/assistant/assistant-v2?code=python)
- [Tweepy](https://docs.tweepy.org/en/v3.5.0/)
- [Google Maps/Places API](https://developers.google.com/maps/documentation)
- [Google GCP Bigquery](https://cloud.google.com/bigquery?utm_source=google&utm_medium=cpc&utm_campaign=na-US-all-en-dr-bkws-all-all-trial-e-dr-1009892&utm_content=text-ad-none-any-DEV_c-CRE_547127448229-ADGP_Desk%20%7C%20BKWS%20-%20EXA%20%7C%20Txt%20~%20Data%20Analytics%20~%20BigQuery_Big%20Query%20Expansion-KWID_43700066498002489-kwd-327307220541&utm_term=KW_cloud%20bigquery-ST_cloud%20bigquery&gclid=CjwKCAiAtouOBhA6EiwA2nLKH1zpoKvmEFSXDYkqylo4P9Ck4LuB1Ch2EdBR8IgfZByGsHQDMJtl4xoCcLcQAvD_BwE&gclsrc=aw.ds)
- [Geopy](https://geopy.readthedocs.io/en/stable/)
- [TextBlob](https://textblob.readthedocs.io/en/dev/)
## Reference:
- How to realize connection between front-end JS and back-end Python. (2019, February 23). bupt_gwy. 
https://blog.csdn.net/a312863063/article/details/87898349

- Twitter Inc. (2016). GitHub - twbs/bootstrap: The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web. GitHub. https://github.com/twbs/bootstrap

- NYPD Complaint Data Historic | NYC Open Data. (2021, July 7). NYC OpenData. 
https://data.cityofnewyork.us/Public-Safety/NYPD-Complaint-Data-Historic/qgea-i56i

- Shani, G. Gunawardana, A. Evaluating Recommendation Systems. 
https://www.bgu.ac.il/~shanigu/Publications/EvaluationMetrics.17.pdf

