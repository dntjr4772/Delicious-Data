import sqlalchemy
import pymysql
import pandas as pd
import os

DATA_DIR = "../data"
DUMP_FILE = os.path.join(DATA_DIR, "dump.pkl")

def main():
    data = pd.read_pickle(DUMP_FILE)

    stores = data["stores"]
    users = data["users"]
    reviews = data["reviews"]
    menus = data["menus"]
    bhours = data["bhours"]

    SERVER_DB_URL = 'mysql+pymysql://root:1234@j4a405.p.ssafy.io:3306/A405'
    server_engine = sqlalchemy.create_engine(SERVER_DB_URL, encoding='utf-8')

    stores.to_sql(name='store', con=server_engine, if_exists='append', index=False)
    users.to_sql(name='user', con=server_engine, if_exists='append', index=False)
    reviews.to_sql(name='review', con=server_engine, if_exists='append', index=False)
    menus.to_sql(name='menu', con=server_engine, if_exists='append', index=False)
    bhours.to_sql(name='bhours', con=server_engine, if_exists='append', index=False)


if __name__ == "__main__":
    main()