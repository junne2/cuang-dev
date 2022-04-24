---
title: 숫자 문자열과 영단어 , 수 내림차순으로 배치하기 _python
date: "2022-03-17"
tags: ["Algorithm", "test", "code"]
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

**숫자 문자열과 영단어**

[https://programmers.co.kr/learn/courses/30/lessons/81301](https://programmers.co.kr/learn/courses/30/lessons/81301)

```python
숫자와 영단어
s = "one234five"
값 = 12345

def solution(s):
    a = ['zero','one','two','three','four','five','six','seven','eight','nine']
    b = [0,1,2,3,4,5,6,7,8,9]
    answer = 0
    for i in range(10):
        s = s.replace(a[i],str(b[i])) 
    return int(s)
__________________________성공
```

**정수 내림차순으로 배치하기**

[https://programmers.co.kr/learn/courses/30/lessons/12933](https://programmers.co.kr/learn/courses/30/lessons/12933)

```python
**정수 내림차으로 정렬

n = 118373
값 = 873211**

def solution(n):
    answer = ''
    s = str(n)
    num = list(map(str, s))
    num.sort()
    for i in num[::-1]:
        answer += i 
    return int(answer)

___________2,3,11번 실패

def solution(n):
    answer = ''
    num = list(map(str, str(n)))
    num.sort()
    num.reverse()
    answer = int(answer.join(num)) 
    return answer
___________2,3,11번 실패

def solution(n):
    answer = ''
    num = list(map(str, str(int(n))))
    num.sort()
    num.reverse()
    answer = int(answer.join(num)) 
    return answer
	_______________성공

```

이유는 찾아보는중 int 연관성

첫 입력이 문자로 입력이 되어 문제가 있었던것 같다

문제를 푸는 와중에 int 와 str 을 잘 보아 두어야 겠다.
