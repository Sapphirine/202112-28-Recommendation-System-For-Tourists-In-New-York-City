# Require Environment:
pip install tweepy

pip install geopy

pip install textblob

# Description
This is a popularity analysis based on Twitter API. The official accounts of attractions in NYC are selected to gather information such as likes, retweets, and the number of favorites. Then tweets that have a topic related to these attractions are collected to apply sentimental analysis.

The whole process will take hours to finish since Twitter API has limited requests every 15 minutes. To keep the data up to date, once the program starts running, it will check if the last time the data was modified to decide if we need to update the data.
