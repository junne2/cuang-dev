---
title: 문자열 내림 차순 으로 배치, 문자열 내 p와 y의 개수 -javascript
date: "2022-03-18"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## 문자열 내림 차순 으로 배치

[https://programmers.co.kr/learn/courses/30/lessons/12917](https://programmers.co.kr/learn/courses/30/lessons/12917)

```javascript
s	         return
"Zbcdefg"	"gfedcbZ"

function solution(s) {
    var answer = '';
    var ans = []
    var N = s.length
    for (var i= 0; i < N; i++) {
        ans.push(s[i])
    }
    ans.sort().reverse()
    for(var j of ans) {
        answer += j 
    } 
    return answer;
}
```

**풀이방법**

s 의 문자를 내림 차순 으로 정렬하여 출력하는 문제이다.

리스트를 만들어 s문자를 글자 별로 나누어 저장하고 정렬한후 reverse 로 뒤집어 내림 차순 을 완성 하였다.



## **문자열 내 p와 y의 개수**

[https://programmers.co.kr/learn/courses/30/lessons/12916](https://programmers.co.kr/learn/courses/30/lessons/12916)

```javascript
s	         answer
"pPoooyY"	  true
"Pyy"	      false

function solution(s){
    var answer = true;
    var p_c = 0
    var y_c =0
    for (var i of s) {
        if (i==='P'||i==='p') {
            p_c++
        }else if (i==='Y'||i==='y'){
            y_c++
        }
    }
    if (p_c === y_c) {
        answer = true
    }else {
        answer = false
    }

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}
```

**풀이방법**

문자 내부에 p와 y의 갯수를 확인하는 문제이다.

대문자를 포함해서 확인 하기 위해  or  `||`  을 사용하여 if 문을 사용 하였고,

해당 값을  비교하여 bool 값을 출력하였다.