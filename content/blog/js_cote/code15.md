---
title: 예산, 음양더하기 -javascript
date: "2022-04-15"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## 예산

[https://programmers.co.kr/learn/courses/30/lessons/12982](https://programmers.co.kr/learn/courses/30/lessons/12982)

```javascript
d	          budget	result
[1,3,2,5,4]	  9	      3
[2,2,3,3]	    10	    4

function solution(d, budget) {
    var answer = 0;
    var x = 0
    d.sort(function(a, b) {
        return a - b;
    });
    var N = d.length
    for (var i =0; i<N; i++) {
        if (d[i] > budget) {
            break
        }
        if (x === budget){
            break
        }else if (x >= budget){
            answer -= 1
            break
        }
        x = x + d[i]
        answer += 1
    }
    return answer;
}
```

**풀이방법**

d 배열의 수의 합 중 budget을 만들수 있는 최대의 갯수를 확인 하는 문제

시간을 단축하기 위해 우선 배열의 값을 정렬 하여 가장 낮은 숫자가 budget 보다 큰경우는 바로 출력하고

해당 배열의 값이 budget과 같은 경우도 미리 출력 하였다.

그 외의 값을 계산 하여 작은 값을 순서대로 더해서 budget 보다 커지는 수의  갯수를 구하고 그 값을 출력하였다.

-1을 한 이유는 같은 값이 아니고 작은 값을 찾는 문제인데 마지막값을 더할경우는 클때 이기 때문에  마지막 값을 빼준것이다.




## 음양더하기

[https://programmers.co.kr/learn/courses/30/lessons/76501](https://programmers.co.kr/learn/courses/30/lessons/76501)

```javascript
absolutes	 signs	           result
[4,7,12]	[true,false,true]	   9
[1,2,3]	  [false,false,true]	 0

function solution(absolutes, signs) {
    var answer = 0;
    var N = absolutes.length
    for (var i =0; i < N; i++) {
        if (signs[i] === true) {
            answer += absolutes[i]  
        }else {
            answer -= absolutes[i]
        }
    }
    return answer;
}
```

**풀이방법**

absolutes배열의 값을 signs배열의 bool 을 적용하여 음양을 계산 해주는 방식이다.

true 인 경우 + 를 false 인 경우 - 를 해주는 방식으로 for 문을 사용하여 값을 계산해 주었다.