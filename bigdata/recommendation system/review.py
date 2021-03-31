from konlpy.tag import Okt
from collections import Counter

okt = Okt()

# 경로 입력 후 안되면 \\ 로 바꾸기
f = open('C:\\Users\\multicampus\\Desktop\\review_test.txt','r',encoding='utf-8')
review = f.read()

okt = Okt()
noun = okt.nouns(review)

# 글자 2자 이상인것만 골라내기 위한 작업

# for i,v in enumerate(noun):
#     if len(v)<2:
#             noun.pop(i)

count = Counter(noun)

noun_list = count.most_common(30)
for v in noun_list:
    print(v)

# txt 파일로 저장하기

with open("nour_list_from_review.txt",'w',encoding='utf-8') as f:
    for v in noun_list:
            f.write(" ".join(map(str,v))) # 빈도수 int 값을 str로 전환해서 같이 저장
            f.write("\n")

# csv 파일로 저장하기

# with open("nour_list_from_revew.csv",'w', newline='',encoding='euc-kr') as f:
#     csvw = csv.writer(f)
#     for v in noun_list:
#         csvw.writerow(v)



