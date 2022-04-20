---
title: 수박수박수박수박수박수? , 서울에서 김서방 찾기 -javascript
date: "2022-03-17"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## **수박수박수박수박수박수?**

[https://programmers.co.kr/learn/courses/30/lessons/12922](https://programmers.co.kr/learn/courses/30/lessons/12922)

```jsx
n	return
3	"수박수"
4	"수박수박"

function solution(n) {
    var answer = '';
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 0){
            answer += '박'
        }else {
        answer += '수'
        }
    }
    return answer;
}
```

**풀이방법**

홀 수에는 ‘수’를 짝 수에는 ‘박’을 출력하면 되는 문제이다.

자주 사용하는 2로 나누어 나머지가 0인경우 짝 아닌경우 홀을 적용하여 식을 풀어 보았다.



## 서울에서 김서방 찾기

[https://programmers.co.kr/learn/courses/30/lessons/12919](https://programmers.co.kr/learn/courses/30/lessons/12919)

 

```jsx
seoul	           return
["Jane", "Kim"]	 "김서방은 1에 있다"

function solution(seoul) {
    var answer = '';
    var ans = 0
    ans = seoul.indexOf('Kim')
    answer = "김서방은 "+ans+"에 있다"
    return answer;
}
```

**풀이방법**

주어진 seoul 이라는 리스트 에서 “Kim”의 위치 값을 찾고 그값을 대입 하여 출력하는 문제이다.

“Kim” 값을 찾기 위해 indexOf를 사용하였다.

indexOf는 리스트내의 위치를 알려주는 함수 이다.