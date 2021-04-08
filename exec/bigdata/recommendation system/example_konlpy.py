from konlpy.tag import Okt

okt = Okt()

#morphs: 형태소 단위로 구문 분석 수행
print(okt.morphs("도움되셨다면, 공감을 꾸욱 눌러주세요!"))

#nouns: 명사 단위로 구문 분석 수행, 띄어쓰기 없거나 명사만 계속 넣어도 해줌
print(okt.nouns("도움되셨다면, 공감을 꾸욱 눌러주세요!"))

#phrases: 어절 단위로 구문 분석 수행
print(okt.phrases("도움되셨다면, 공감을 꾸욱 눌러주세요!"))

#pos: 형태소 단위로 쪼개고 각 품사들을 표시해서 리스트로 반환
#pos(phrase, norm=False, stem=False)
print(okt.pos("도움되셨다면, 공감을 꾸욱 눌러주세요!"))
