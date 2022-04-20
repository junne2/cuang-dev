---
title: 평균 구하기 , 짝수와 홀수 -javascript
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


## 짝수와 홀수

[https://programmers.co.kr/learn/courses/30/lessons/12937](https://programmers.co.kr/learn/courses/30/lessons/12937)

 

```jsx
num	return
3	  "Odd"
4  	"Even"

function solution(num) {
    var answer = '';
    if (num % 2 === 0){
        answer = "Even"
    }else {
        answer = "Odd"
    }
    return answer;
}
```

**풀이방법**

짝수 일경우 Even 홀수 일경우 Odd 를 출력 하는 문제 이다.

파이썬때 부터 구분시 if 문 으로 %2를 하다보니 해당방법에 적응이 되었다.