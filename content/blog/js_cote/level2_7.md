---
title: k진수에서 소수 개수 구하기 ,JadenCase 문자열 만들기-javascript
date: "2022-05-07"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## **k진수에서 소수 개수 구하기**

[https://programmers.co.kr/learn/courses/30/lessons/92335](https://programmers.co.kr/learn/courses/30/lessons/92335)

```jsx
n	      k	  result
437674	3	   3
110011	10	 2

function solution(n, k) {
    var answer = 0;
    let ans = n.toString(k)
    
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                 return false;
            }
        }
        return true;
    }
    
    let numArr = ans.split("0");
    
    for (let i = 0; i < numArr.length; i++) {
        if (isPrime(Number(numArr[i]))) {
            answer++; 
        }
    }
    return answer;
}
```

1. k진수를 변환한다.
2. 소수인지 판별해 주는 함수를 만든다 
3. 변환된 수에서 수를 나눠야 하는데 0 을 사용하지 않음으로 0으로 나누면 된다.
4. 소수인지 확인 하고 맞는경우의 수를 확인 한다.

## **JadenCase 문자열 만들기**

[https://programmers.co.kr/learn/courses/30/lessons/12951](https://programmers.co.kr/learn/courses/30/lessons/12951)

```jsx
s	                       return
"3people unFollowed me"	"3people Unfollowed Me"
"for the last week"	    "For The Last Week"

function solution(s) {
    var answer;
    s = s.toLowerCase();
    
    answer = s.split(' ').map(s =>{
        let str = s.split("");
        if (str[0] != null){
            str[0] = str[0].toUpperCase();
            return str.join('');
        }
    }).join(' ')
    return answer;
}

```