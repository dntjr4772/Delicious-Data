import pymysql
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import math
import random

# MSSQL 접속
conn = pymysql.connect(host="j4a405.p.ssafy.io", port=3306, user="root", password="1234", db="A405", charset="utf8", cursorclass=pymysql.cursors.DictCursor)

# SQL 실행시키고 결과값 얻어올 때 쓸 커서 생성
cursor = conn.cursor()

# USER TABLE SQL문 실행
user_query = "SELECT id FROM user where born_year>=1990 and born_year<=1999;"

user_result = pd.read_sql(user_query, conn)
user_result.columns = ['user_id']
print(user_result)

# STORE TABLE SQL문 실행
# WHERE절에 받아온 STORE_ID을 컬럼명으로 하는 dataframe 만들기

store_list = []

def storeList(id1, id2, id3, id4, id5, id6, id7, id8, id9, id10, id11, id12,id13, id14, id15, id16, id17, id18, id19, id20, id21, id22, id23, id24, id25, id26, id27, id28, id29, id30):
    store_list = [id1, id2, id3, id4, id5, id6, id7, id8, id9, id10, id11, id12,id13, id14, id15, id16, id17, id18, id19, id20, id21, id22, id23, id24, id25, id26, id27, id28, id29, id30]

store_list = list(map(int, store_list))

store_result = pd.DataFrame([store_list])

store_result = store_result.rename(columns=store_result.iloc[0])
store_result = store_result.drop(store_result.index[0])
# print(store_result)

# REVIEW TABLE SQL문 실행
review_result = pd.DataFrame()

for i in store_list:
    review_query = "SELECT store_id, user_id, clean, service, taste FROM review where store_id = " + str(i) + ";"

    review_temp = pd.read_sql(review_query, conn)
    review_result = pd.concat([review_result,review_temp], ignore_index=True)
    review_result["avg"] = (review_result["clean"] + review_result["service"] + review_result["taste"]) / 3
    # print(review_result)

print(review_result)

# USER X STORE MATRIX 생성
user_store_result = pd.concat([user_result,store_result], axis=1)
# user_store_result.set_index('user_id', inplace=False)
user_store_result.set_index('user_id', inplace=True)
user_store_result = user_store_result.fillna(0)
print(user_store_result)


# 해당 가게에 대해 유저가 작성한 리뷰 꺼내오기

# for i in store_list:
#     print(i)
#     for row in user_result.iterrows():
#         user_id_value = row[0]
#         # type이 numpy.int64이므로 int로 바꾸기 위한 코드
#         # user_id_value = user_id_value.tolist()
#         # print(type(user_id_value))
#         str_expr = "(user_id == " + str(user_id_value) +") and (store_id == " + str(i) +")"
#         for key, value in review_result.iteritems():
#             df_q = review_result.query(str_expr)
#
# print(df_q)

for row in user_result.iterrows():
    user_id_value = row[0]
    str_expr = "(user_id == " + str(user_id_value) + ")"
    for key, value in review_result.iteritems():
        df_q = review_result.query(str_expr)
print(df_q)


item_based_collabor = cosine_similarity(user_store_result)

item_based_collabor = pd.DataFrame(data = item_based_collabor, index= user_store_result.index, columns = user_store_result.index)
print(item_based_collabor)

# 연결 끊기

conn.close()
