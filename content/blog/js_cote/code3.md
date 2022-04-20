---
title: 핸드폰 번호 가리기-javascript
date: "2022-03-15"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## **핸드폰 번호 가리기**

[https://programmers.co.kr/learn/courses/30/lessons/12948](https://programmers.co.kr/learn/courses/30/lessons/12948)

```jsx
phone_number	  return
"01033334444"	  "*******4444"
"027778888"	    "*****8888"

function solution(phone_number) {
    var answer = '';
    var N = 0
    N = phone_number.length
    for (var i = 0; i < N; i++){
        if (i < (N-4)){
            answer += '*'
        }
        else {
            answer += phone_number[i]
        }
    }
    return answer;
}
```

**풀이방법**  

 뒷자리 4개만 제외하고 번호를 가리는 방법으로 `phone_number` 의 

 if 문으로 문자의 위치를 하나하나 확인해서 뒷 4자리가 되기 전까지는 
 
 * 로 변환 시키고 뒷문자는 그대로 추가하여 출력 하였다.