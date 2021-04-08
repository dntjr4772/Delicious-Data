import pandas as pd
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize



nltk.download('stopwords')
nltk.download('punkt')

data = pd.read_csv('C:/Users/multicampus/Desktop/review_example.csv', low_memory=False, encoding='cp949')
# data.head(2)
# data.columns

cat = data['content']
cat_val = cat.values
cat_list = cat_val.tolist()
# print(cat_val)

stop_words = "먹으려다가 별로 싫었어요 아까움 실패 없어 힘든 부족함 이하"
# 위의 불용어는 명사가 아닌 단어 중에서 저자가 임의로 선정한 것으로 실제 의미있는 선정 기준이 아님
stop_words=stop_words.split(' ')
word_tokens = word_tokenize(str(cat_val))

result = []
for w in word_tokens:
    if w not in stop_words:
        result.append(w)
# 위의 4줄은 아래의 한 줄로 대체 가능
# result=[word for word in word_tokens if not word in stop_words]

print(word_tokens)
print('\n\n\n 불용어 필터링 결과 \n\n\n')
print(result)