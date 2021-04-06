README

python-sql 서버 연결 예시

```
from pandas import DataFrame
import psycopg2

conn = psycopg2.connect(host=host_address, database=name_of_database, user=user_name, password=user_password)

cur = conn.cursor()

cur.execute("SELECT * FROM %s;" % name_of_table)

the_data = cur.fetchall()

colnames = [desc[0] for desc in cur.description]

the_frame = DataFrame(the_data)
the_frame.columns = colnames

cur.close()
conn.close()
```

