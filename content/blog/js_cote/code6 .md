---
title: 내림 차순 으로 배치하기 , 약수의 합 -javascript
date: "2022-04-08"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## 내림 차순 으로 배치하기

[https://programmers.co.kr/learn/courses/30/lessons/12933?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/12933?language=javascript)

```javascript
n	      return
118372	  873211

function solution(n) {
    var answer = '';
    var ans = []
    var N = String(n)
    for (var i of N)
        ans.push(parseInt(i))
    ans.sort(function(a,b){
        return b - a
    })
    for(j of ans){
        answer += String(j)
    }
    answer= parseInt(answer)
    return answer;
}
```

**풀이방법**

n을 문자로 변환 하여 자리수 하나하나를 리스트 속에 넣어 내림 차순 으로 정렬 하고 

문자를 다시 숫자로 전환하는 방법을 사용하였다. 

더 쉽게 할수 있는 방법이 있을것 같아 좀더 연구 해 봐야 할것 같다.

## 약수의 합

[https://programmers.co.kr/learn/courses/30/lessons/12928](https://programmers.co.kr/learn/courses/30/lessons/12928)

```javascript
n	   return
12	  28
5	    6

function solution(n) {
    var answer = 0;
    for (var i = 1; i <= n; i++){
        if (n % i === 0) {
            answer += i
        }
    }    
    return answer;
}
```

**풀이방법**

주어진 n의 약수를 구하고 해당 수들을 더하는 방법이다 

따로 약수를 확인 하지 않아도 되기 때문에  조건에 맞는 부분들만 더해주어 결과값을 출력 하였다.
