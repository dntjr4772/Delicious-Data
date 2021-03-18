ALGORITHM



공부

### 배열 (Array)

------

- C++에서 사이즈 구하기

```
int arr[] = { 1, 2, 3, 4, 5, 6, 7 }; 
int n = sizeof(arr) / sizeof(arr[0]); // 7
```





1. #### 배열 회전 프로그램

[![img](https://camo.githubusercontent.com/b67aa70fe7b7137c2dac7fcc0f2c0e13dffe685bd5c42a43cab0753bb4e8f392/68747470733a2f2f74312e6461756d63646e2e6e65742f6366696c652f746973746f72792f393941464132334635424538463331423043)](https://camo.githubusercontent.com/b67aa70fe7b7137c2dac7fcc0f2c0e13dffe685bd5c42a43cab0753bb4e8f392/68747470733a2f2f74312e6461756d63646e2e6e65742f6366696c652f746973746f72792f393941464132334635424538463331423043)

*전체 코드는 각 하이퍼링크를 눌러주시면 이동됩니다.*



- [기본적인 회전 알고리즘 구현](https://github.com/gyoogle/tech-interview-for-developer/blob/master/Computer Science/Data Structure/code/rotate_array.cpp)

  > temp를 활용해서 첫번째 인덱스 값을 저장 후 arr[0]~arr[n-1]을 각각 arr[1]~arr[n]의 값을 주고, arr[n]에 temp를 넣어준다.
  >
  > ```
  > void leftRotatebyOne(int arr[], int n){
  >     int temp = arr[0], i;
  >     for(i = 0; i < n-1; i++){
  >         arr[i] = arr[i+1];
  >     }
  >     arr[i] = temp;
  > }
  > ```
  >
  > 이 함수를 활용해 원하는 회전 수 만큼 for문을 돌려 구현이 가능

- [저글링 알고리즘 구현](https://github.com/gyoogle/tech-interview-for-developer/blob/master/Computer Science/Data Structure/code/juggling_array.cpp)

  > [![ArrayRotation](https://camo.githubusercontent.com/67cbcc777f2456f8dccc00cdd2d2ecc274ce942f32751df5c71aaa000a33c8e7/68747470733a2f2f63646e636f6e747269627574652e6765656b73666f726765656b732e6f72672f77702d636f6e74656e742f75706c6f6164732f617272612e6a7067)](https://camo.githubusercontent.com/67cbcc777f2456f8dccc00cdd2d2ecc274ce942f32751df5c71aaa000a33c8e7/68747470733a2f2f63646e636f6e747269627574652e6765656b73666f726765656b732e6f72672f77702d636f6e74656e742f75706c6f6164732f617272612e6a7067)
  >
  > 최대공약수 gcd를 이용해 집합을 나누어 여러 요소를 한꺼번에 이동시키는 것
  >
  > 위 그림처럼 배열이 아래와 같다면
  >
  > arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}
  >
  > 1,2,3을 뒤로 옮길 때, 인덱스를 3개씩 묶고 회전시키는 방법이다.
  >
  > a) arr [] -> { **4** 2 3 **7** 5 6 **10** 8 9 **1** 11 12}
  >
  > b) arr [] -> {4 **5** 3 7 **8** 6 10 **11** 9 1 **2** 12}
  >
  > c) arr [] -> {4 5 **6** 7 8 **9** 10 11 **12** 1 2 **3** }

- [역전 알고리즘 구현](https://github.com/gyoogle/tech-interview-for-developer/blob/master/Computer Science/Data Structure/code/reversal_array.cpp)

  > 회전시키는 수에 대해 구간을 나누어 reverse로 구현하는 방법
  >
  > d = 2이면
  >
  > 1,2 / 3,4,5,6,7로 구간을 나눈다.
  >
  > 첫번째 구간 reverse -> 2,1
  >
  > 두번째 구간 reverse -> 7,6,5,4,3
  >
  > 합치기 -> 2,1,7,6,5,4,3
  >
  > 합친 배열을 reverse -> **3,4,5,6,7,1,2**
  >
  > - swap을 통한 reverse
  >
  > ```
  > void reverseArr(int arr[], int start, int end){
  >     
  >     while (start < end){
  >         int temp = arr[start];
  >         arr[start] = arr[end];
  >         arr[end] = temp;
  >         
  >         start++;
  >         end--;
  >     }
  > }
  > ```
  >
  > - 구간을 d로 나누었을 때 역전 알고리즘 구현
  >
  > ```
  > void rotateLeft(int arr[], int d, int n){
  >     reverseArr(arr, 0, d-1);
  >     reverseArr(arr, d, n-1);
  >     reverseArr(arr, 0, n-1);
  > }
  > ```





1. #### 배열의 특정 최대 합 구하기

**예시)** arr[i]가 있을 때, i*arr[i]의 Sum이 가장 클 때 그 값을 출력하기

(회전하면서 최대값을 찾아야한다.)

```
Input: arr[] = {1, 20, 2, 10}
Output: 72

2번 회전했을 때 아래와 같이 최대값이 나오게 된다.
{2, 10, 1, 20}
20*3 + 1*2 + 10*1 + 2*0 = 72

Input: arr[] = {10, 1, 2, 3, 4, 5, 6, 7, 8, 9};
Output: 330

9번 회전했을 때 아래와 같이 최대값이 나오게 된다.
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
0*1 + 1*2 + 2*3 ... 9*10 = 330
```



##### 접근 방법

arr[i]의 전체 합과 i*arr[i]의 전체 합을 저장할 변수 선언

최종 가장 큰 sum 값을 저장할 변수 선언

배열을 회전시키면서 i*arr[i]의 합의 값을 저장하고, 가장 큰 값을 저장해서 출력하면 된다.



##### 해결법

```
회전 없이 i*arr[i]의 sum을 저장한 값
R0 = 0*arr[0] + 1*arr[1] +...+ (n-1)*arr[n-1]


1번 회전하고 i*arr[i]의 sum을 저장한 값
R1 = 0*arr[n-1] + 1*arr[0] +...+ (n-1)*arr[n-2]

이 두개를 빼면?
R1 - R0 = arr[0] + arr[1] + ... + arr[n-2] - (n-1)*arr[n-1]

2번 회전하고 i*arr[i]의 sum을 저장한 값
R2 = 0*arr[n-2] + 1*arr[n-1] +...+ (n?1)*arr[n-3]

1번 회전한 값과 빼면?
R2 - R1 = arr[0] + arr[1] + ... + arr[n-3] - (n-1)*arr[n-2] + arr[n-1]


여기서 규칙을 찾을 수 있음.

Rj - Rj-1 = arrSum - n * arr[n-j]

이를 활용해서 몇번 회전했을 때 최대값이 나오는 지 구할 수 있다.
```

[구현 소스 코드 링크](https://github.com/gyoogle/tech-interview-for-developer/blob/master/Computer Science/Data Structure/code/maxvalue_array.cpp)





1. #### 특정 배열을 arr[i] = i로 재배열 하기

**예시)** 주어진 배열에서 arr[i] = i이 가능한 것만 재배열 시키기

```
Input : arr = {-1, -1, 6, 1, 9, 3, 2, -1, 4, -1}
Output : [-1, 1, 2, 3, 4, -1, 6, -1, -1, 9]

Input : arr = {19, 7, 0, 3, 18, 15, 12, 6, 1, 8,
              11, 10, 9, 5, 13, 16, 2, 14, 17, 4}
Output : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
         11, 12, 13, 14, 15, 16, 17, 18, 19]
```

arr[i] = i가 없으면 -1로 채운다.

##### 접근 방법

arr[i]가 -1이 아니고, arr[i]이 i가 아닐 때가 우선 조건

해당 arr[i] 값을 저장(x)해두고, 이 값이 x일 때 arr[x]를 탐색

arr[x] 값을 저장(y)해두고, arr[x]가 -1이 아니면서 arr[x]가 x가 아닌 동안을 탐색

arr[x]를 x값으로 저장해주고, 기존의 x를 y로 수정

```
int fix(int A[], int len){
    
    for(int i = 0; i < len; i++) {
        
        
        if (A[i] != -1 && A[i] != i){ // A[i]가 -1이 아니고, i도 아닐 때
            
            int x = A[i]; // 해당 값을 x에 저장
            
            while(A[x] != -1 && A[x] != x){ // A[x]가 -1이 아니고, x도 아닐 때
                
                int y = A[x]; // 해당 값을 y에 저장
                A[x] = x; 
                
                x = y;
            }
            
            A[x] = x;
            
            if (A[i] != i){
                A[i] = -1;
            }
        }
    }
    
}
```

[구현 소스 코드 링크](https://github.com/gyoogle/tech-interview-for-developer/blob/master/Computer Science/Data Structure/code/rearrange_array.cpp)







# BruteForce 완전 탐색

------

> [toc]

## 설명

문제를 해결하기 위해 확인해야 하는 모든 경우를 전부 탐색하는 방법

그 중에서도 `백 트래킹 Back-Tracking` 을 통해야 하는 상황을 해야하기!

*모든 코테 문제에서 기본적으로 접근해 봐야 한다. 많은 연습이 필요!*

장점 : 부분점수를 얻기 좋다

단점 : 전부 탐색하기에 시간 복잡도가 일반적으로 높다

## 코테에 나오는 BruteForce 종류

(총 4가지)

N개 중

1. 중복을 허용해서

2. 중복 없이

    M개를

    a. 순서 있게 나열하기

    b. 고르기

## 문제

#### 1+A 버전 (N개 중 1.중복을 허용해서 M개를 A.순서 있게 나열하기)

[BOJ 15651_N과 M(3)](https://www.acmicpc.net/problem/15651)

- How to :

```
# 시간, 공간 복잡도 계산하기
N = 4, M = 3   ___ ___ ___
    		    4 x 4 x 4 = 4^3
    			
        		시간 : O(N^M) => 7^7 ~= 82만
                공간 : O(M)

# 구현 스케치
변수 N, M
기록하는 배열 selected []

Recurrence Function
1. 만약 M개를 전부 고름 => 조건에 맞는 탐색을 한 가지 성공한 것!
2. 아직 M개를 고르지 않음 => k번째부터 M번째 원소를 조건에 맞게 고르는 모든 방법을 시도한다.
rec_func(int k) {
    if (k == M + 1) { // 다 골랐다!
        # selected[1...M] 배열이 새롭게 탐색된 결과
    } else {
        # 1~N 까지를 k 번 원소로 한 번씩 정하고,
        # 매번 k+1 번부터 M번 원소로 재귀호출 해주기
    }
}


#########


# 입력값 받아서 배열에 저장
import sys
n, m = map(int, sys.stdin.readline().split(' '))

selected = [0 for _ in range(m)]
used = [0 for _ in range(n + 1)]

# 재귀 함수 정의하기
def rec_func(k):
    if k == m:
        for x in selected:
            sys.stdout.write(str(x) + ' ')
        sys.stdout.write('\n')
    else:
        for cand in range(1, n + 1):
            selected[k] = cand
            rec_func(k + 1)
            selected[k] = 0

rec_func(0)

# 
```

[BOJ 15649_N과 M(1)](https://www.acmicpc.net/problem/15649)

- How to : level2

  ![image-20210317233013416]()

```
# 시간, 공간 복잡도 확인하기
N = 4, M = 3  ___ ___ ___
			   4 x 3 x 2 = 4!

# 구현 스케치


# 
import sys
n, m = map(int, sys.stdin.readline().split(' '))

selected = [0 for _ in range(m)]
used = [0 for _ in range(n + 1)]
def rec_func(k):
    if k == m:
        for x in selected:
            sys.stdout.write(str(x) + ' ')
        sys.stdout.write('\n')
    else:
        for cand in range(1, n + 1):
            if used[cand]:
                continue
            selected[k] = cand
            used[cand] = 1
            rec_func(k + 1)
            selected[k] = 0
            used[cand] = 0

rec_func(0)
```

#### 1 + B 버전 (N개 중 1. 중복을 허용해서 M개를 B.고르기)

[BOJ 15652_N과 M(4)](https://www.acmicpc.net/problem/15652)

- How to : level 2

  이전 문제와의 차이점 : 고른차순 비내림차순

```
# 시간, 복잡도 확인
N = 4, M = 3   ___ ___ ___

				4 x 4 x 4 = 4^3 보단 작다
    			시간 : O(N^M) => 8^8 ~= 1677만 보다는 작다.
            	공간 : O(M)
                    
# 구현 스케치
start 는 이전에 쓰였던 숫자 즉, k-1 번째에 쓰였던 숫자보다는 작거나 같아야 한다.
start 가 0이면 1로 바꿔주고 시작,
cand 값이 0 부터 시작하는 것이 아니라 start 부터 시작한다.


# sol
import sys
n, m = map(int, sys.stdin.readline().split(' '))

selected = [0 for _ in range(m)]
used = [0 for _ in range(n + 1)]
def rec_func(k):
    if k == m:
        for x in selected:
            sys.stdout.write(str(x) + ' ')
        sys.stdout.write('\n')
    else:
        start = 1 if k == 0 else selected[k - 1]
        for cand in range(start, n + 1):
            selected[k] = cand
            rec_func(k + 1)
            selected[k] = 0

rec_func(0)
```

#### 2 + B 버전 (N개 중 2. 중복 없이 M개를 B. 고르기)

[BOJ 15650_N과 M(2)](https://www.acmicpc.net/problem/15650)

How to : level 2

[![image-20210318010620888]()](https://github.com/Dinoryong/CS-academy/blob/main/Algorithm/BruteForce 완전 탐색.md)

```
# 시간, 복잡도 확인
N = 4, M = 3   ___ ___ ___

				4 x 4 x 4 = 4^3 보단 작다
    			시간 : O(N^M) => 8^8 ~= 1677만 보다는 작다.
            	공간 : O(M)

# 구현 스케치


#
```

## SOLUTION

[![image-20210318010815394]()](https://github.com/Dinoryong/CS-academy/blob/main/Algorithm/BruteForce 완전 탐색.md)

BruteForce 완전 탐색 문제 접근법

- BruteForce는 `함수 정의`가 50%
- 고를 수 있는 값의 종류 파악하기
- `중복`을 허용하는 지
- `순서`가 중요한 지

------

refs

> [rhs_github](https://github.com/Dinoryong/CS-academy/blob/main/Algorithm)











