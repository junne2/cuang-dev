---
title: 3진법 뒤집기, 최소 직사각형 -javascript
date: "2022-05-04"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

### 3진법 뒤집기

[https://programmers.co.kr/learn/courses/30/lessons/68935](https://programmers.co.kr/learn/courses/30/lessons/68935)

```jsx
n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
		45	    1200	      0021	         7

function solution(n) {
    var answer = 0;
    let ans = '';
    ans = n.toString(3).split('').reverse().join('')
    answer = parseInt(ans,3)
    return answer;
}
```

문제 풀이

우선 3진법으로 변환해야 해서 해당문제에 사용할만한 함수를 찾아 보았다.

**`.toString(N)`** : 숫자를 문자열로 변환하여 반환한다. N진수의 수로 변환해 준다.

라는 함수를 찾아서 해당 함수를 사용하여 문자열을 나눔 **`.split()`**과 동시에 뒤집어서 **`.reverse()`**  합쳤다 **`.join()`**

그 뒤 다시 10 진법으로 만들어야 했기 때문에 평소 문자를 정수로 만들때 사용하던 **`parseInt(int, N)` 를 사용 하엿다.**

해당 문제는 진법 계산과 문자열 구조를 이해할수 있는 기초 구조 문제가 아닐까한다.

### 최소 직사각형

[https://programmers.co.kr/learn/courses/30/lessons/86491?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/86491?language=javascript)

```jsx
sizes	                                          result
[[60, 50], [30, 70], [60, 30], [80, 40]]	       4000
[[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]	   120
[[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]	   133

function solution(sizes) {
    var answer = 0;
    // 가로 세로 를 큰 순서가 앞으로 오도록 정리한다.
    const rot = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);
    
    // 제일 큰 사이즈를 찾아서 가로와 세로 길이를 기록한다.
    let maxSize = [0, 0];
    rot.forEach(([w, h]) => {
        if (w > maxSize[0]) maxSize[0] = w;
        if (h > maxSize[1]) maxSize[1] = h;
    })

    // 두 수의 곱을 하여 지갑의 크기를 구한다.
    answer = maxSize[0]*maxSize[1];
    return answer
}
```

map 함수가 유용하게 쓰인다.

우선 배열속 요소를 비교하여 큰값을 앞으로 오도록 배열을 수정한다.

그후 배열의 max 값을 찾아야 한다.

forEach 는 각 배열의 요소를 실행하는 함수로 해당 함수를 통해 쉽게 최대 값에 접근 할수 있다.