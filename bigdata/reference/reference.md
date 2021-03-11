reference



## Crawling

download google img

```
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
# 기다리기
import time
import urllib.request

driver = webdriver.Chrome()
driver.get("https://www.google.co.kr/imghp?hl=ko&tab=ri&ogbl")
elem = driver.find_element_by_name("q")
# 키보드 입력값
elem.send_keys("치킨")
elem.send_keys(Keys.RETURN)

# 스크롤 내려주기
SCROLL_PAUSE_TIME = 5

# 스크롤의 길이를 알아내기
last_height = driver.execute_script("return document.body.scrollHeight")

while True:
    # Scroll down to bottom
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

    # Wait to load page
    time.sleep(SCROLL_PAUSE_TIME)

    # Calculate new scroll height and compare with last scroll height
    new_height = driver.execute_script("return document.body.scrollHeight")
    if new_height == last_height:
        try:
            # 결과 더 보기 버튼 누르기
            driver.find_element_by_css_selector(".mye4qd").click()
        except:
            break
    last_height = new_height

images = driver.find_elements_by_css_selector(".rg_i.Q4LuWd")
count = 1
for image in images:
    try:
        image.click()
        time.sleep(2)
        imgURL = driver.find_element_by_xpath('/html/body/div[2]/c-wiz/div[3]/div[2]/div[3]/div/div/div[3]/div[2]/c-wiz/div/div[1]/div[1]/div/div[2]/a/img').get_attribute("src")
        print(imgURL)
        urllib.request.urlretrieve(imgURL, str(count) + ".jpg")
        count = count +1
    except:
        pass

driver.close()
```

download naver img

```
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
# 기다리기
import time
import urllib.request

driver = webdriver.Chrome()
driver.get("https://search.naver.com/search.naver?where=image&sm=tab_jum&query=")
elem = driver.find_element_by_name("query")
# 키보드 입력값
elem.send_keys("앗싸곱창 방학동")
elem.send_keys(Keys.RETURN)

# 값을 못가져 오는데 왜 못찾는지 이유를 모르겠음,,,,,.,.,,,,
print(driver.find_elements_by_css_selector("._image._listImage"))

driver.find_elements_by_css_selector("._image._listImage")[0].click()
time.sleep(2)
imgURL = driver.find_element_by_css_selector("._image").get_attribute("src")

urllib.request.urlretrieve(imgURL, "test.jpg")

# driver.close()
```

