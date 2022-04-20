---
title: 가운데 글자 가져오기, 부족한 금액 계산하기 -javascript
date: "2022-04-14"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## 가운데 글자 가져오기

[https://programmers.co.kr/learn/courses/30/lessons/12903](https://programmers.co.kr/learn/courses/30/lessons/12903)

```javascript
s	       return
"abcde"	    "c"
"qwer"	    "we"

function solution(s) {
    var answer = '';
    var N = s.length
    var n = 0
    if (N % 2 === 0){
        n = N / 2
    }else {
        n = Math.ceil(N/2)
    }
    if (N % 2 === 0) {
        answer = s[n-1] + s[n]
    }else {
        answer = s[n-1]
    }
    return answer;
}
```

**풀이방법**

문자의 중간글자를 출력하는 문제이다.

중간값은 문자의 글자 수를 계산하여 홀수의 경우는 해당 값을 짝수는 n-1의 값부터 해당 값을 가져오면 되는데

/연산자를 사용하면 소수 점이 나오기 때문에 해당값을 올림 (ceil) 해주었다. 



## 부족한 금액 계산하기

[https://programmers.co.kr/learn/courses/30/lessons/82612](https://programmers.co.kr/learn/courses/30/lessons/82612)

```javascript
price	money	count	result
  3	   20	    4	    10

function solution(price, money, count) {
    var answer = 0;
    for (var i = 1; i <= count; i++) {
        answer = (price * i)+ answer
    }
    if (answer < money){
        return 0
    }
    answer = answer - money
    return answer;
}
```

**풀이방법**

놀이기구의 입장료를 계산하고 모자라는 값을 출력하는 문제이다.

재 입장 할때 마다 입장료가 1배씩 올라가는 변수가 있어 주의해야 한다.

일단 for문으로 count(타고싶은 만큼) 의 수를 적용하여 필요한 값을 찾아 보았다.

그후 해당 값을 가지고 있는 소지 금과 비교하여 금액이 남는 경우는 0을 출력하고 모자란경우는 뺄셈하여

값을 확인 하였다.