발표

​	전체 진행과정은 명세서 소개할 때, 간단히 언급(빅데이터:까지 진행,백엔드:까지 진행,프론트엔드:까지 진행)

​	팀 내에서 구현 과정과 결과, 문제와 해결방법, 발표시간 10분 내외

DB 마이그레이션 (1)

- 내용

  마이그레이션(Migration)이란?: 현재 사용하는 운영환경에서 더 나은 다른 운영환경으로 시스템을 전환하는 과정

  대표적인 예 : 윈도우 10 에서 HDD -> SSD 마이그레이션

  DB 마이그레이션 과정

  1. 원본 데이터 (data.json) 로드
  2. 로드된 데이터를 파싱하여 data frame 형식 으로 변환
  3. 파싱된 data frame을 DB 테이블 형식에 맞춰서 전송

크롤링 (1)

- 내용

유사도 계산 - 4개 (용석)

- 내용
  1. 평균제곱차(Mean Squared Difference) 유사도 :  친숙한 Mean Square Error와 유사
  2. 유클리디안 거리(Euclidean distance) : 피타고라스 정리와 유사
  3. 코사인 유사도(Cosine Similarity) 
  4. 피어슨 유사도(Pearson Similarity) : 코사인과 유사

컨텐츠 기반 필터링 (지희)

- 내용

TF-IDF  (지희)

- 내용

  - 키워드 추출 알고리즘 종류들

  https://medium.com/@Aaron__Kim/단어-word-의-중요도를-측정하는-알고리즘-text-mining-tf-idf-rake-n-gram-86d9ef10873e

협업필터링 (용석)

- 내용

  한 마디로 정의 : 대규모의 기존 사용자로부터 모은 데이터(평점, 구매 패턴 등)를 기반으로 사용자와 비슷한 성향의 항목을 추천하는 기술

  크게 Memory Based 방식 과 Model Based 방식으로 나눌 수 있음

  Memory Based 방식(Neighborhood Model) [참조 : [https://eda-ai-lab.tistory.com/527](https://eda-ai-lab.tistory.com/527) ]

  → 이미 있는 데이터를 기반으로 필터링 -> User-item 행렬을 사용하여 유사도를 계산하여 추천하는 방식, 즉 한 User건 Item이거 유사한 항목을 추천해주는 방식

  Model Based 방식(Latent Model)

  → 머신러닝을 이용하여 평점을 예측할 수 있는 모델을 만드는 방식

  협업 필터링 문제점

  1. Cold start
  2. 비교적 많은 계산량
  3. Long tail

우리 프로젝트에서 어떤 식으로 추천을 할 건지 ? (1)

- 유저-가게 평점 행렬로 협업 필터링 기반 추천
- 가게-특징(카테고리/TF 형태소 분석/위치/ 분점 여부 등등) 행렬로 컨텐츠 기반 필터링 기반 추천
- 유저 나이 - 가게 리뷰 개수 행렬 0000 필터링 기반 추천