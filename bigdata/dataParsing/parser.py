import json
import pandas as pd
import os
import shutil

DATA_DIR = "../data"
DATA_FILE = os.path.join(DATA_DIR, "data.json")
DUMP_FILE = os.path.join(DATA_DIR, "dump.pkl")

store_columns = (
    "id",  # 음식점 고유번호
    "store_name",  # 음식점 이름
    "branch",  # 음식점 지점 여부
    "area",  # 음식점 위치
    "tel",  # 음식점 번호
    "address",  # 음식점 주소
    "latitude",  # 음식점 위도
    "longitude",  # 음식점 경도
    "category",  # 음식점 카테고리
    "review_cnt", # 리뷰 갯수
)

review_columns = (
    "id",  # 리뷰 고유번호
    "store",  # 음식점 고유번호
    "user",  # 유저 고유번호
    "score",  # 평점
    "content",  # 리뷰 내용
    "reg_time",  # 리뷰 등록 시간
)

user_columns = (
    "id",       # 유저 아이디
    "gender",   # 유저 성별
    "born_year", # 유저 태어난 해
)

menu_columns = (
    "store",    # 판매하는 가게 아이디
    "menu_name", # 메뉴 이름
    "price",    # 메뉴 가격
)

bhours_columns = (
    "store", # 음식점 고유 번호
    "type", # 영업시간 종류 / 1 : 영업시간, 2 : 쉬는시간, 3 : 휴무일
    "week_type", # 주단위 종류 / 1 : 매주, 2 : 첫째주, 3 : 둘째주, 4: 셋째주, 5 : 넷째주, 6 : 공휴일
    "mon", # 월요일 포함유무 / 1 : 포함, 2 : 미포함
    "tue", # 화요일 포함유무 / 1 : 포함, 2 : 미포함
    "wed", # 수요일 포함유무 / 1 : 포함, 2 : 미포함
    "thu", # 목요일 포함유무 / 1 : 포함, 2 : 미포함
    "fri", # 금요일 포함유무 / 1 : 포함, 2 : 미포함
    "sat", # 토요일 포함유무 / 1 : 포함, 2 : 미포함
    "sun", # 일요일 포함유무 / 1 : 포함, 2 : 미포함
    "start_time", # 시작 시간 / HH:MM:SS
    "end_time", # 종료 시간 / HH:MM:SS
    "etc", # 기타 정보
)

def import_data(data_path=DATA_FILE):

    try:
        with open(data_path, encoding="utf-8") as f:
            data = json.loads(f.read())
    except FileNotFoundError as e:
        print(f"`{data_path}` 가 존재하지 않습니다.")
        exit(1)

    stores = []  # 음식점 테이블
    reviews = []  # 리뷰 테이블
    users = []  # 리뷰 작성자 정보
    menus = []  # 메뉴 정보
    bhours = []  # 영업시간 정보

    for d in data:

        categories = [c["category"] for c in d["category_list"]]
        stores.append(
            [
                d["id"],
                d["name"],
                d["branch"],
                d["area"],
                d["tel"],
                d["address"],
                d["latitude"],
                d["longitude"],
                "|".join(categories),
                d["review_cnt"],
            ]
        )

        for review in d["review_list"]:
            r = review["review_info"]
            u = review["writer_info"]

            reviews.append(
                [r["id"], d["id"], u["id"], r["score"], r["content"], r["reg_time"]]
            )

            users.append(
                [u["id"], u["gender"], u["born_year"]]
            )

        for menu in d["menu_list"]:
            menus.append(
                [d["id"], menu["menu"], menu["price"]]
            )

        for bhour in d["bhour_list"]:
            bhours.append(
                [
                    d["id"],
                    bhour["type"],
                    bhour["week_type"],
                    bhour["mon"],
                    bhour["tue"],
                    bhour["wed"],
                    bhour["thu"],
                    bhour["fri"],
                    bhour["sat"],
                    bhour["sun"],
                    bhour["start_time"],
                    bhour["end_time"],
                    bhour["etc"],
                ]
            )

    store_frame = pd.DataFrame(data=stores, columns=store_columns)
    review_frame = pd.DataFrame(data=reviews, columns=review_columns)
    user_frame = pd.DataFrame(data=users, columns=user_columns)
    menu_frame = pd.DataFrame(data=menus, columns=menu_columns)
    bhour_frame = pd.DataFrame(data=bhours, columns=bhours_columns)

    user_frame = user_frame.drop_duplicates() # 중복된 값들 제거(유일한 값들만 가져옴)
    user_frame = user_frame.reset_index() # dataframe 기본 인덱스 리셋
    user_frame = user_frame.drop('index', axis=1) # dataframe 특정 columns 삭제, 이 경우 이전 index로 사용되던 columns 제거
    user_frame.insert(1, 'password', 1234) # 특정 인덱스에 원하는 column 과 value 삽입(value는 동일한 값으로 통일되어 입력됨)

    #print(user_frame)

    return {"stores": store_frame, "reviews": review_frame, "users": user_frame, "menus": menu_frame, "bhours" : bhour_frame}

def dump_dataframes(dataframes):
    pd.to_pickle(dataframes, DUMP_FILE)


def load_dataframes():
    return pd.read_pickle(DUMP_FILE)

def print_dataframes():
    data = load_dataframes()

    term_w = shutil.get_terminal_size()[0] - 1
    separater = "-" * term_w

    print("[음식점]")
    print(f"{separater}\n")
    print(data["stores"].head())
    print(str(data["stores"].shape[0]) + " rows * " + str(data["stores"].shape[1]) + " cols dataframe")
    # df.shape[0] => dataframe의 row 개수 / df.shape[1] => dataframe의 col 개수
    print(f"\n{separater}\n\n")

    print("[리뷰]")
    print(f"{separater}\n")
    print(data["reviews"].head())
    print(str(data["reviews"].shape[0]) + " rows * " + str(data["reviews"].shape[1]) + " cols dataframe")
    print(f"\n{separater}\n\n")

    print("[리뷰작성자]")
    print(f"{separater}\n")
    print(data["users"].head())
    print(str(data["users"].shape[0]) + " rows * " + str(data["users"].shape[1]) + " cols dataframe")
    print(f"\n{separater}\n\n")

    print("[메뉴]")
    print(f"{separater}\n")
    print(data["menus"].head())
    print(str(data["menus"].shape[0]) + " rows * " + str(data["menus"].shape[1]) + " cols dataframe")
    print(f"\n{separater}\n\n")

    print("[영업시간]")
    print(f"{separater}\n")
    print(data["bhours"].head())
    print(str(data["bhours"].shape[0]) + " rows * " + str(data["bhours"].shape[1]) + " cols dataframe")
    print(f"\n{separater}\n\n")

def main():

    # print("[*] Parsing data...")
    # data = import_data() # data.json의 데이터를 파싱하여 dataframe으로 변환
    # print("[+] Done")
    #
    # print("[*] Dumping data...")
    # dump_dataframes(data) # dataframe으로 만든 데이터를 .pkl 확장자로 저장
    # print("[+] Done\n")
    #
    # data = load_dataframes() # .pkl로 저장된 파싱된 데이터를 불러옴

    print_dataframes() # 데이터 확인을 하기위한 print 함수


if __name__ == "__main__":
    main()
