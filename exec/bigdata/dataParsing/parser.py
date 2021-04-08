import json
import pandas as pd
import os
import shutil
import sys
import numpy as np
import random

DATA_DIR = "../data"
DATA_FILE = os.path.join(DATA_DIR, "data.json")
DUMP_FILE = os.path.join(DATA_DIR, "dump.pkl")

store_columns = (
    "id",  # 음식점 고유번호 / primary key
    "store_name",  # 음식점 이름
    "branch",  # 음식점 지점 여부
    "area",  # 음식점 위치
    "tel",  # 음식점 번호
    "address",  # 음식점 주소
    "latitude",  # 음식점 위도
    "longitude",  # 음식점 경도
    "category",  # 음식점 카테고리
    "image", # 가게 이미지 크롤링한 url
    "taste_avg", # 맛 평균 평점
    "clean_avg", # 위생 평균 평점
    "service_avg", # 서비스 평균 평점
    "review_cnt" # 리뷰 갯수
)

review_columns = (
    "store_id",  # 음식점 고유번호 / 외래키 (store의 primary key)
    "user_id",  # 유저 고유번호   / 외래키 (user의 primary key)
    "taste",  # 맛 평점
    "clean",  # 위생 평점
    "service",  # 서비스 평점
    "content",  # 리뷰 내용
    "reg_time",  # 리뷰 등록 시간
)

user_columns = (
    "id",       # 유저 아이디 / primary key
    "email",    # 유저 이메일 / ${id}@abcd.com
    "nickname", # 유저 닉네임 / 익명${id}
    "gender",   # 유저 성별
    "born_year", # 유저 태어난 해
)

menu_columns = (
    "store_id",    # 판매하는 가게 아이디 / 외래키 (store의 primary key)
    "menu_name", # 메뉴 이름
    "price",    # 메뉴 가격
)

bhours_columns = (
    "store_id", # 음식점 고유 번호 / 외래키 (store의 primary key)
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

        tot_taste = 0
        tot_clean = 0
        tot_service = 0

        for review in d["review_list"]:
            r = review["review_info"]
            u = review["writer_info"]

            clean = random.randrange(0,6)
            service = random.randrange(0,6)

            tot_taste += r["score"]
            tot_clean += clean
            tot_service += service

            reviews.append(
                [d["id"], u["id"], r["score"], clean, service, r["content"], r["reg_time"]]
            )

            user_email = str(u["id"]) + "@abcd.com"
            user_nickname = "익명" + str(u["id"])

            users.append(
                [u["id"], user_email, user_nickname, u["gender"], u["born_year"]]
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

        categories = [c["category"] for c in d["category_list"]]
        if d["review_cnt"] == 0:
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
                    "",
                    0,
                    0,
                    0,
                    d["review_cnt"]
                ]
            )
        else:
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
                    "",
                    tot_taste/d["review_cnt"],
                    tot_clean/d["review_cnt"],
                    tot_service/d["review_cnt"],
                    d["review_cnt"]
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

    # reviews, menus, bhours에 index를 사용하여 id column으로 추가
    review_frame.insert(0, "id", review_frame.index + 1)
    menu_frame.insert(0, "id", menu_frame.index + 1)
    bhour_frame.insert(0, "id", bhour_frame.index + 1)

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

def check_dataframes_info():
    data = load_dataframes()

    term_w = shutil.get_terminal_size()[0] - 1
    separater = "-" * term_w

    stores = data["stores"]
    reviews = data["reviews"]
    users = data["users"]
    menus = data["menus"]
    bhours = data["bhours"]

    stores.replace('', np.nan, inplace=True)
    print("stores dataframe null check")
    print(f"{separater}\n")
    print(stores.isnull().sum())
    print(f"{separater}\n\n")

    reviews.replace('', np.nan, inplace=True)
    reviews.replace('1970-01-01 00:00:00', np.nan, inplace=True)
    print("reviews dataframe null check")
    print(f"{separater}\n")
    print(reviews.isnull().sum())
    print(f"{separater}\n\n")

    users.replace('', np.nan, inplace=True)
    users.replace(0, np.nan, inplace=True)
    print("users dataframe null check")
    print(f"{separater}\n")
    print(users.isnull().sum())
    print(f"{separater}\n\n")

    menus.replace('', np.nan, inplace=True)
    menus.replace(0, np.nan, inplace=True)
    print("menus dataframe null check")
    print(f"{separater}\n")
    print(menus.isnull().sum())
    print(f"{separater}\n\n")

    bhours.replace('', np.nan, inplace=True)
    print("bhours dataframe null check")
    print(f"{separater}\n")
    print(bhours.isnull().sum())
    print(f"{separater}\n\n")



def main():
    length = len(sys.argv)

    if length == 2 :
        command = sys.argv[1]
        if command == "dump" :
            print("[*] Parsing data...")
            data = import_data() # data.json의 데이터를 파싱하여 dataframe으로 변환
            print("[+] Done")

            print("[*] Dumping data...")
            dump_dataframes(data) # dataframe으로 만든 데이터를 .pkl 확장자로 저장
            print("[+] Done\n")
        elif command == "print" :
            print("[*] Print data...")
            print_dataframes()  # 데이터 확인을 하기위한 print 함수
            print("[+] Done\n")
        elif command == "check" :
            print("[*] Check data...")
            check_dataframes_info()  # 데이터 확인을 하기위한 print 함수
            print("[+] Done\n")
        else :
            print("usage : python parser.py [command]")
            print("command")
            print(">> dump : parsing data.json and make dump.pkl with parsing data")
            print(">> print : load dump.pkl and print data")
            print(">> check : check null or empty string value of data")
    else :
        print("usage : python parser.py [command]")
        print("command")
        print(">> dump : parsing data.json and make dump.pkl with parsing data")
        print(">> print : load dump.pkl and print data")
        print(">> check : check null or empty string value of data")


if __name__ == "__main__":
    main()
