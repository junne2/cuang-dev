---
title: 두 정수 사이의 합, 나누어 떨어지는 숫자 배열 -javascript
date: "2022-04-12"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## 두 정수 사이의 합

[https://programmers.co.kr/learn/courses/30/lessons/12912](https://programmers.co.kr/learn/courses/30/lessons/12912)

```javascript
a	  b return
3 	5  	  12
3 	3	   3
5 	3 	  12
 
function solution(a, b) {
    var answer = 0;
    var ans = [a,b]
    ans.sort(function(a,b){
        return a - b;
    })
    for (var i = ans[0]; i <= ans[1]; i++) {
        answer += i
    }
    return answer;
}
```

**풀이방법**

a와 b의 사이 값을 더해 주어야 하는 문제이다.

해당 문제를 위해 a와 b를 정렬해서 작은 수가 앞에 유지되도록 하였다.

정렬을 하지 않으면 변수확인이 어려워져서 이다.

그래서 해당 수를 리스트에 넣어 사이의 수를 구하고

for문으로 시작하는 수부터 끝수를 더해 값을 출력 하였다.



## 나누어 떨어지는 숫자 배열

[https://programmers.co.kr/learn/courses/30/lessons/12910](https://programmers.co.kr/learn/courses/30/lessons/12910)

```javascript
arr	          divisor  return
[5, 9, 7, 10]	  5	     [5, 10]
[2, 36, 1, 3] 	1	     [1, 2, 3, 36]
[3,2,6]	        10	   [-1]

function solution(arr, divisor) {
    var answer = [];
    for (var i of arr) {
        if (i % divisor === 0) {
            answer.push(i)
        }
    }
    answer.sort(function(a,b){
        return a - b
    })
    if (answer.length === 0) {
        answer = [-1]
    }
    return answer;
}
```

**풀이방법**

arr의 배열 안의 수를 divisor로 나누었을때 나누어지는 수가 있는경우 그 값을 출력하는 문제로 없는경우 -1을 리턴 해야 한다.

배열의 값을 하나하나 넣어 divisor로 나우었고 나누어 떨어지는 경우를 확인 하기위해 %연산자를 사용하여

새로운 배열에 추가 하였다.