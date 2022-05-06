---
title: 124 나라, 다음 큰 숫자 -javascript
date: "2022-05-05"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## 124 나라

[https://programmers.co.kr/learn/courses/30/lessons/12899?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/12899?language=javascript)

```jsx
function solution(n) {
    var answer = '';
    const number = [4,1,2];
    
    while (n){
        answer = number[n % 3] + answer;
        n = (n%3 === 0)? n / 3 - 1 : Math.floor(n / 3);
    }
    return answer;
} 
```

풀이 방법

일단 패턴을 찾아야 하는데 

|  | n % 3 | 124 | index |
| --- | --- | --- | --- |
| 1 | 2 | 1 | 1 |
| 2 | 1 | 2 | 2 |
| 3 | 3 | 4 | 0 |

인것을 확인 할 수 있었고 3진수의 응용 이라는 것을 확인 할 수 있었다.

그래서 나누었을 때 나머지에따른 식의 변경을 확인해 보았다.

| 10진수 | 124 | 몫 | 나머지 | 10진수 | 124 | 몫 | 나머지 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | - | 1 | 7 | 21 | 2 | 1 |
| 2 | 2 | - | 2 | 8 | 22 | 2 | 2 |
| 3 | 4 | - | 0 | 9 | 24 | 2 | 0 |
| 4 | 11 | 1 | 1 | 10 | 41 | 3 | 1 |
| 5 | 12 | 1 | 2 | 11 | 42 | 3 | 2 |
| 6 | 14 | 1 | 0 | 12 | 44 | 3 | 0 |


다음 큰 숫자

[https://programmers.co.kr/learn/courses/30/lessons/12911?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/12911?language=javascript)

```jsx
function solution(n) {
    var answer = 0;
    let ans = n.toString(2).split('1').length;
    while (true) {
        n++
        if (n.toString(2).split('1').length === ans) {
            answer = n
            return answer
        }
    }
    
    return answer;
}
```

풀이 

<aside>
💡  let ans = n.toString(2).split('1').length;

</aside>

ans 를 만들어서 안에 n을 2진수로 바꾸었을때  1이 나올때 split을 하여 갯수를 확인 하였다.

1의 갯수의 +1개가 나온다.

<aside>
💡 while (true) {
        n++
        if (n.toString(2).split('1').length === ans) {
            answer = n
            return answer
        }
    }

</aside>

반복 문을 사용해야 하는데 얼마나 될지 모르기 때문에  와일드 문을 사용 하였다.

n을  계속 하나씩 더하면서 개수가  같은 값을 찾아 나갔다.