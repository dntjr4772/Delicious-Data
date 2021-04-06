import pymysql
# MSSQL 접속

cnxn = pymysql.connect(host="j4a405.p.ssafy.io", port=3306, user="root", password="1234",db="A405")

cursor = cnxn.cursor()

store_list = [168397, 90685, 255297, 163900, 226309, 217292, 57307, 241160, 367799, 377430]
# SQL문 실행
cursor.execute('SELECT clean_avg, service_avg, taste_avg FROM store WHERE ID'+ +';')

# 데이타를 하나씩 Fetch하여 출력
row = cursor.fetchone()

while row:
    print(row[0], row[1], row[2])
    row = cursor.fetchone()

# 연결 끊기
cnxn.close()