from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity # 코사인 유사도
import numpy as np
import pandas as pd
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize


# TF : 특정 문서 d에서의 특정 단어 t의 등장 횟수
# DF : 특정 단어 t가 등장한 문서의 수
# IDF : DF에 반비례하는 수 (idf-smoothing 여부에 따라서 결과가 달라짐)
# TF-IDF : TF와 IDF를 곱해준 값

docs = ['먹고 싶은 사과', '먹고 싶은 바나나', '길고 노란 바나나 바나나', '저는 과일이 좋아요']

vect = CountVectorizer() # Counter Vectorizer 생성

countvect = vect.fit_transform(docs) # docs 안에 있는 문장을 Counter Vectorizer 형태로 바꾸기
countvect # 4(문장수)*9(단어수) 형태의 백터 행렬

countvect.toarray()

vect.vocabulary_ # 숫자가 의미하는 단어별로 확인 가능(순서 랜덤)

print(sorted(vect.vocabulary_)) # 숫자가 의미하는 단어별로 확인 가능(순서 정렬)

countvect_df = pd.DataFrame(countvect.toarray(), columns =sorted(vect.vocabulary_))
countvect_df.index = ['리뷰1','리뷰2','리뷰3','리뷰4']
print(countvect_df)

cosine_similarity(countvect_df,countvect_df)

# 코사인 유사도 계산값 -> 문장 유사도(비슷함 정도)를 계산함
print(cosine_similarity(countvect_df,countvect_df))

# max_features = 빈도수가 높은 단어 n개만 사용하라
vect = TfidfVectorizer(max_features=4)
tfvect = vect.fit(docs)

#TF-IDF 수행하기 위한 데이터프레임 생성 및 계산
tfidv_df = pd.DataFrame(tfvect.transform(docs).toarray(),columns =sorted(vect.vocabulary_))
tfidv_df.index = ['리뷰1','리뷰2','리뷰3','리뷰4']

cosine_similarity(tfidv_df,tfidv_df)

# print(cosine_similarity(tfdiv_df,tfdiv_df))
print(tfidv_df)
print('=============================================')
print('예제 - 영화 csv 데이터 내 overview 데이터로 tf-idf 진행')
data = pd.read_csv('C:/Users/multicampus/Desktop/movies_metadata.csv', low_memory=False, encoding='utf-8')
data.head(2)
data.columns

data = data[data['overview'].notnull()].reset_index(drop=True)
data.shape

# 불용어(의미 없는 단어 나, 저, 너, 이것, 저것 등) 제거
# tfidf = TfidfVectorizer(stop_words='english', max_features=10000)
tfidf = TfidfVectorizer(stop_words='english')

tfidf_matrix = tfidf.fit_transform(data['overview'])
print(tfidf_matrix.shape)

cosine_matrix = cosine_similarity(tfidf_matrix,tfidf_matrix)

np.round(cosine_matrix, 4)

# movie title와 id를 매핑할 dictionary 생성
movie2id = {}
for i, c in enumerate(data['title']): movie2id[i] = c

# id와 movie title를 매핑할 dictionary 생성해
id2movie = {}
for i, c in movie2id.items(): id2movie[c] = i

# Toy Story의 id 추출
idx = id2movie['Toy Story'] # Toy Story = 0번
sim_scores = [(i, c) for i, c in enumerate(cosine_matrix[idx]) if i != idx] # 자기 자신을 제외한 영화들의 유사도 및 인덱스를 추출
sim_scores = sorted(sim_scores, key = lambda x: x[1], reverse=True) # 유사도가 높은 순서대로 정렬
sim_scores[0:10] # 상위 10개의 인덱스와 유사도를 추출

# 인덱스를 Movie Title로 변환
sim_scores = [(movie2id[i], score) for i, score in sim_scores[0:10]]
print('추천 영화, 유사도 순')
print(sim_scores)

