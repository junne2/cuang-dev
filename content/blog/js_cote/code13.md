---
title: 나머지가 1이 되는 수 찾기, 2016년 -javascript
date: "2022-03-22"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## 나머지가 1이 되는 수 찾기

[https://programmers.co.kr/learn/courses/30/lessons/87389](https://programmers.co.kr/learn/courses/30/lessons/87389)

  

```javascript
n	  result
10	    3
12	    11

function solution(n) {
    var answer = 0;
    for (var i = 1; i<n; i++) {
        if (n % i === 1) {
            answer = i
            break
        }
    }
    return answer;
}
```

**풀이방법**

n 을 나누었을때의 수 중에 나머지가 1이 되는 가장 작은 값을 찾는 문제이다.

그래서 편하게 접근하여 1부터 값을 넣고 나누어 보았다.

시간을 단축하기 위해 값을 발견하는 경우  break를 실행하여 바로 결과 값을 출력하도록 만들었다.



## 2016년

[https://programmers.co.kr/learn/courses/30/lessons/12901](https://programmers.co.kr/learn/courses/30/lessons/12901)

```javascript
a	 b	 result
5	 24	 "TUE"

function solution(a, b) {
    var answer = '';
    var daily = [31,29,31,30,31,30,31,31,30,31,30,31];
    var day = 0
    for (var i = 0; i < a-1; i ++) {
        day += daily[i]
    }
    day = day + b
    if (day % 7 === 1){
        answer = 'FRI'
    }else if (day % 7 === 2){
        answer = 'SAT'
    }else if (day % 7 === 3){
        answer = 'SUN'
    }else if (day % 7 === 4){
        answer = 'MON'
    }else if (day % 7 === 5){
        answer = 'TUE'
    }else if (day % 7 === 6){
        answer = 'WED'
    }else {
        answer = 'THU'
    }
    return answer;
}
```

**풀이방법**

1월 1일이 금요일인 경우 입력하는 날짜의 요일을 확인하는 문제이다.(윤년이다.)

문제를 해결하기 위해 월별 일수를 daily라는 리스트속에 넣어두었다.

구하고자 하는 달의 앞달까지의 리스트 값을 더하고 그 값에 해당 달의 일수를 더한후 7로 나누었다.

나머지가 몇 인가에 따라서 요일을 출력 하였고 해당 값을 확인 하였다.