---
title: 피보나치의수, 최댓값과 최솟값-javascript
date: "2022-04-22"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---


## 피보나치의수

[https://programmers.co.kr/learn/courses/30/lessons/12945?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/12945?language=javascript)

```javascript
n	return
3	  2
5	  5

function solution(n) {
    var answer = 0;
    var F = [0,1] 
    for (var i = 2; i <= n; i++){
        F[i] = F[i-1]% 1234567 + F[i-2]% 1234567
    }
    answer= F[n] % 1234567
    return answer;
}
```

문제 풀이

[문제 풀의 주의점 설명글](https://www.notion.so/a6ff4ef3ce0d4756b070ff1b43062348)

피보나치의 수는 F(n) = F(n-1) + F(n-2) 의수 를  확인 하는 수이다.

배열의 바로 앞 수와 그전의 수를 더해주어야 하는 수 이기때문에

[ 0, 1 ]배열을 먼저 선언하고 값을 더해가며 배열값을 추가하여 값을 확인 한다.

1234567을 나누라는 조건이 있었는데  해당글은 위 페이지를 한번더 확인해 보자

## 최댓값과 최솟값

[https://programmers.co.kr/learn/courses/30/lessons/12939](https://programmers.co.kr/learn/courses/30/lessons/12939)

```javascript
s	             return
"1 2 3 4"	     "1 4"
"-1 -2 -3 -4"  "-4 -1"
"-1 -1"	       "-1 -1"

function solution(s) {
    var answer = '';
    var A = s.split(" ")
    var N = A.length
    A.sort(function(a,b){
        return a - b
    })
    var a = A[0]
    var b = A[N-1]
    answer = a+' '+b
    return answer;
}
```

문제 풀이

최솟값과  최댓값을 구하는 문제이다.

정렬해서 첫값과  끝값을 뽑으면 될것 같아서 일단 sort로 정렬을 했고

length 를 이용하여 끝 자리를 확인 하였다.