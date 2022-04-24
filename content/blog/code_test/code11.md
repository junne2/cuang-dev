---
title: 폰켓몬, 약수의 갯수와 덧셈
 _python
date: "2022-03-22"
tags: ["Algorithm", "test", "code"]
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

# 폰켓몬

[https://programmers.co.kr/learn/courses/30/lessons/1845](https://programmers.co.kr/learn/courses/30/lessons/1845)

```python
nums	         result
[3,1,2,3]	       2
[3,3,3,2,2,4]	   3
[3,3,3,2,2,2]	   2

def solution(nums):
    answer = 0
    N = len(nums)
#   가져갈수 있는 폰캣몬은 P
    P = N / 2
    cas = len(set(nums))
    if cas > P:
        answer = P
    elif cas == P:
        answer = P
    else:
        answer = cas
    return answer
----100
```

풀이방법: 

가장 먼저 지문을 읽으며 패턴을 먼저 찾아보았고

가장많은 종류를 가지는 가지수 이기 때문에 식을 나눌수 있었다.

N = 전체 폰켓몬의 수 

P =  가져갈수 있는 폰켓몬의 수

cas = 폰켓몬의 종류 수 이다.

# 약수의 갯수와 덧셈

[https://programmers.co.kr/learn/courses/30/lessons/77884](https://programmers.co.kr/learn/courses/30/lessons/77884)

```python
left	 right	result
13	 17	    43
24	 27	    52

def solution(left, right):
    answer = 0
    yak = []
    ans = []
#   left 에서 right 사이의 수를 리스트로 표현
    su = [s for s in range(left,right+1)]
#   각 수 마다의 약수를 구하고 그 개수를 저장한다.
	  for i in range(left,right+1):
        for j in range(1,i+1):
            if i % j == 0:
                yak.append(j)
                K = len(yak)
        yak = []
        ans.append(K)
#   약수의 개수를 확인하여 음 양을 계산해준다.
    for x in range(len(ans)):
        if ans[x] % 2 == 0:
            answer += su[x]
        else:
            answer -= su[x]
    return answer
```

풀이 방법:

반복 문을 중첩하여 사용하였다. i 반복 문은 left 에서 right 사이의 수를 j 반복 문은 1 ~ i 까지 확인하며 약수를 찾아내는 반복 문이다.

해당 식으로 각 수 마다 약수의 개수를 확인하여 yak 이라는 배열에 추가하고 그 수가 짝수인경우 더하고 홀수인경우 빼서 답을 구하였다.