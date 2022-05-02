---
title: 정수 제곱근 판별, 시저 암호, 이상한 문자 만들기, 소수찾기 -javascript
date: "2022-05-02"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## 정수 제곱근 판별

[https://programmers.co.kr/learn/courses/30/lessons/12934?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/12934?language=javascript)

```jsx
function solution(n) {
    var answer = 0;
    let ans = 0
    ans = Math.sqrt(n);
    if (ans % 1 === 0){
        answer = Math.pow(ans+1, 2);
    } else {
        answer = -1
    }
    return answer;
}
```

정수의 제곱근을 확인하여 n의 제곱근+1 의제곱을 출력하는 문제이다.

우선 제곱근을 확인 해야 하기 때문에 루트를 구할수 있는 `Math.sqrt(n)`을  사용하고

+1 한수를 제곱 할수 있는 `Math.pow(n+1)` 을 사용하였ek.

## 이상한 문자 만들기

[https://programmers.co.kr/learn/courses/30/lessons/12930?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/12930?language=javascript)

```jsx
s	                 return
"try hello world"	  "TrY HeLlO WoRlD"

function solution(s) {
    var answer = '';
    const ans = s.split(' ')
    for (let i=0; i < ans.length; i++){
        for(let j in ans[i]){
            if (j % 2 == 0){
                answer += ans[i][j].toUpperCase();
            }else {
                answer += ans[i][j].toLowerCase();
            }
        }
        if (i !== ans.length-1){
            answer += " "
        }
    }
    return answer;
}
```

문자의 위치를 파악해서 대문자 혹은 소문자로 변환하는 문제이다.

## 시저 암호

[https://programmers.co.kr/learn/courses/30/lessons/12926?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/12926?language=javascript)

```jsx
function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        // 대 소문자 구분
        var textArr = upper.includes(text)? upper : lower;
        // 다음 위치 문자 찾기
        var index = textArr.indexOf(text)+n;
        // 만약 찾는 문자가 Z를 지나는 경우 대비하기
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}
```

## 소수찾기

```jsx
function solution(n) {
    var answer = [];
    const arr = [false,false];
    for(var i=2; i<=n; i++){
        arr.push(true);
    }
    // 에라토스테네스의 체 소수의 배를 제거 하면 소수만 남는다.
    for (let i =2; i <= n ; i++){
        if (arr[i]) {
            for(var k = 2; k <= n / i; k++){
                arr[i*k] = false;
            }
        }
    }
    answer = arr.filter(bool => bool === true).length;
    return answer;
}
```

소수에 대해  항상 검색 하면 에라토스테네스의 체가 나왔는데 효율성을 위해 사용하는 방법인것을 깨달았다.

```jsx
function solution(n) {
    var answer = 1;
    
    function sosu(n) {
        if (n > 2){
            for (let j = 2; j < n; j++){
                if (n % j == 0)return false
            }return answer += 1
        }
    }
    
    for (let i =1; i <= n ; i+=2){
            let ans = sosu(i)
    }
    return answer;
}
```

하나하나 식으로 풀었을때 시간이 너무 많이 걸려서 런타임에러가 발생한다.

그래서 배수를 제거해보자 라는 생각으로 진행해 보았다.