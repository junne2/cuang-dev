---
title: 자연수 뒤집어 배열, 직사각형 별찍기 _python
date: "2022-03-15"
tags: ["Algorithm", "test", "code"]
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## 자연수 뒤집어 배열

[https://programmers.co.kr/learn/courses/30/lessons/12932](https://programmers.co.kr/learn/courses/30/lessons/12932)

```python

n = 12345
값 = [5,4,3,2,1]

def solution(n):
    answer = list(map(int,str(int(n))))
    answer.reverse()
    return answer

_______________성공
```

**풀이 과정 :** 

자연수 n 을 문자로 변환하여 리스트를 생성

리스트를 reverse 하여 출력함

문자가 아닌 숫자로 출력하기 위해 한번더 int 를 작업했다.


## 직사각형 별찍기

[https://programmers.co.kr/learn/courses/30/lessons/12969](https://programmers.co.kr/learn/courses/30/lessons/12969)

```python

a,b = 5,3
값 :
  *****
  *****
  *****
  

a, b = map(int, input().strip().split(' '))
for i in range(b):
    print('*'*a)
```

**풀이과정 :** 

몇개의 별을 몇번 찍는 지에 대한 값 이기 때문에 print 를 반복하였다.