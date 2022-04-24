---
title: 가장큰수 _python
date: "2022-03-16"
tags: ["Algorithm", "test", "code"]
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## 가장큰수

```python

1차시도

def solution(numbers):
    answer = ''
    num = list(map(str, numbers))
    num.sort(key = lambda x : x * 3, reverse = True)
    for i in num:
        answer += i 
    return answer

_____________________________11번 실패
2차시도

def solution(numbers):
    answer = ''
    num = list(map(str, numbers))
    num.sort(key = lambda x : x * 3, reverse = True)
    answer = answer.join(num)
    return answer
____________________________11번 실패
3차시도

def solution(numbers):
    answer = ''
    num = list(map(str, numbers))
    num.sort(key = lambda x : x * 3, reverse = True)
    answer = answer.join(num)
    return str(int(answer))

____________________________성공
```

lambda  [https://wikidocs.net/64](https://wikidocs.net/64)

**풀이과정:** 

키워드 = 앞자리가 큰수를 찾아야 한다.

앞자리가 큰수를 제일 앞에 두고, 비교를 해야 하는데 문제는 어떻게 정렬하는가

문자순서의 정렬을 선택했는데 문제가 생겼다.

3,310,34 이중에서 문자 정렬은 34>310>3이 되기 때문

원하는 방향의 계산을 위해 문자를 3번 곱해서 뒷자리가 없어도 구분될수 있게  구분하였다.

*3을 한 이유는 수가 1000이하로 정해져 있기 때문에 가능하다.