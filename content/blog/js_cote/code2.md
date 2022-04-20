---
title: x 만큼 간격이 있는 숫자-javascript
date: "2022-04-05"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## x 만큼 간격이 있는 숫자

[https://programmers.co.kr/learn/courses/30/lessons/12954](https://programmers.co.kr/learn/courses/30/lessons/12954) 

```javascript
 x	  n	  answer
 2	  5	  [2,4,6,8,10]
 4	  3	  [4,8,12]
-4	  2	  [-4, -8]

function solution(x, n) {
    var answer = [];
    var an = 0;
    for (var i = 0; i <n; i++){
        an = an + x
        answer.push(an)
    }
    return answer;
}
```

**풀이방법** 
x 만큼의 간격이 있는 n 개의 숫자를 리스트로 리턴 하는 문제이다

for 문으로 증가하는 만큼의 수를 리스트에 넣었었는데 바로 통과 되었다.

위 방식은 값을 따로 더하게 되어 있는데 

`for (var i = x ; i <= n ; i += x)` 식을 넣어주면 i안에 그 값이 들어가서 따로 an의 값을 주지 않아도 된다.