---
title: H - index _python
date: "2022-03-14"
tags: ["Algorithm", "test", "code"]
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## H -index

[https://programmers.co.kr/learn/courses/30/lessons/42747](https://programmers.co.kr/learn/courses/30/lessons/42747)

```python
citations = [3, 0, 6, 1, 5]
값 = 3

def solution(citations):
    citations.sort()
    Rh = 0
    Th = len(citations)
    for i in range(Th):
        Rh += 1
        if citations[i] > 2:
            break
        
    Hh = Th-Rh
    answer = max(Hh,Rh)
    
    return answer
________________8.12제외 다틀림
```

문제를 잘못 파악하여 3이상으로 계산한 1차시도.

```python
def solution(citations):
    answer = 0
    citations.sort(reverse = True)
    n = len(citations)
    
    for i in range(n):
        h = citations[i]
        if h >= i:
            answer = i+1
    return answer

	______________________11,16 틀림 87%
```

2차시도는 ‘h번이상 인용논문이 h편이상일때’라는 문구를 토대로 중간값을 찾으려 했고,

우선 정렬하여 값을찾아보았다.


```python
def solution(citations):
    answer = 0
    citations.sort(reverse = True)
    n = len(citations)
    
    for i in range(n):
        h = citations[i]
        if h >= i+1:
            answer = i+1
    return answer
______________________100
```

풀이방법:

h = citations[i] 은 위 문구를 조건으로 생성

중간보다 커질때 값을 리턴 해서 중간 값을 찾았으며 중간값에만 집중하다가 수식에 누락이 있어 수정

누락된 수식의 사용된 사유는 “번째”를 찾을때 내가 사용한건0번째 부터 시작을 했기 때문에 +1을 더해주었다.