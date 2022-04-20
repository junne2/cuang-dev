---
title: 평균 구하기 -javascript
date: "2022-03-16"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## 평균 구하기

[https://programmers.co.kr/learn/courses/30/lessons/12944](https://programmers.co.kr/learn/courses/30/lessons/12944)

```jsx
arr	       return
[1,2,3,4]	  2.5
[5,5]	      5

function solution(arr) {
    var answer = 0;
    var sum = 0
    for (var i of arr) {
        sum += i 
    }
    var N = arr.length
    answer = sum / N
    return answer;
}
```

**풀이방법**  

arr 리스트에 있는 값들을 전부 더하고 length 를 사용하여 갯수를 구해 나누는 방법을 사용하였다.

문제의 기초인것 같다.