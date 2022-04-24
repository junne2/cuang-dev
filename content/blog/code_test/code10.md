---
title: 음양 더하기, 내적 _python
date: "2022-03-21"
tags: ["Algorithm", "test", "code"]
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---


# 음양 더하기

```python
solution([4,7,12], [true,false,true])

def solution(absolutes, signs):
    answer = []
#   값마다의 bool 값 확인
    for i in range(len(absolutes)):
        A = absolutes[i]
        B = signs[i]
#    bool 값에 따라 음 양 계산
        if B == False:
            answer.append(A*-1)
        else:
            answer.append(A)
    return sum(answer)
```

풀이 방법:

해당 숫자 마다의 bool 값을 확인하여 False 인 부분에 음수를 적용하여 더해보았다.

# 내적

[https://programmers.co.kr/learn/courses/30/lessons/70128](https://programmers.co.kr/learn/courses/30/lessons/70128)

```python
내적을 구하는 공식 = a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]
a	         b	        result
[1,2,3,4]	[-3,-1,0,2]	   3
[-1,0,1]	[1,0,-1]    	-2

def solution(a, b):
    answer = 0
    for i in range(len(a)):
        T = a[i]*b[i]
        answer += T
    return answer
```

풀이 방법:

일단 내적을 구하는 공식이 있어 패턴을 찾아 그 식을 구현화 하고 해당 값들을 더해서 실행 해보았다.