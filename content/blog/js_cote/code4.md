---
title: 하샤드 수 -javascript,python
date: "2022-03-15"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## 하샤드 수

[https://programmers.co.kr/learn/courses/30/lessons/12947](https://programmers.co.kr/learn/courses/30/lessons/12947)

자릿수 더하기 [https://programmers.co.kr/learn/courses/30/lessons/12931](https://programmers.co.kr/learn/courses/30/lessons/12931)

문자열을 정수로 바꾸기 [https://programmers.co.kr/learn/courses/30/lessons/12925](https://programmers.co.kr/learn/courses/30/lessons/12925)

```javascript
arr	return
10	true
12	true
11	false
13	false

function solution(x) {
    var answer = true;
    var A = String(x)
    var S = 0
    for (var i of A) {
        S = S + parseInt(i)
    }
    if(x % S === 0) {
        return true
    }else if (x % S !== 0) {
        return false
    }
}

______________________________________________________________________
//파이썬 풀이
def solution(x):
    answer = True
    s_list = list(str(x))
    H = int(s_list[0]) + int(s_list[1])
    if int(x) % H == 0:
        answer = True
    else:
        answer = False
    return answer
```

**풀이방법**  

양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 한다. 

라는 조건을 토대로 x의 수를 자릿수 별로 인식 하는 방법을 우선으로 선택 하여 

문자로 전환하여 for문으로 두수를 더하고 S에 저장하여 x를 S로 나누어 떨어지는지 확인 하여 

불 값을 적용 하였다

위 url주소는 이 문제의 기초 지식이 되었던 문제를 정리해 보았다.
