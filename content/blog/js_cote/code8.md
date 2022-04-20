---
title: 문자열 다루기 기본 -javascript
date: "2022-04-09"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## 문자열 다루기 기본

[https://programmers.co.kr/learn/courses/30/lessons/12918](https://programmers.co.kr/learn/courses/30/lessons/12918)

```javascript
s       return
"a234"	false
"1234"	true

function solution(s) {
    var answer = true;
    var S = ['0','1','2','3','4','5','6','7','8','9']
    if (s.length === 4 || s.length === 6 ){
        for (var i of s) {
            if (i in S){
                answer = true
            }else {
                answer = false
                break
            }
        }
    } else {
        answer = false
    }
    return answer;
}
// 5,6 이 틀리는 이유는 자리수 제한 문제 때문이다.
```

**풀이방법**

문자 속에 숫자만 있는경우는 true를 문자가 섞여 있는경우 false를 출력 하는 문제이다.

해당 방법을 사용하기 위해 숫자만 있는 배열을 만들어 보았다.

처음에는 자릿수제한을 보지 않고 풀어서 5번과 6번이 오류가 났었는데  
** 문제에 4자리 혹은 6자리 라는 제한 사항이 있는 것을 확인 하고 자릿수 제한을 추가 하였다.

지문을 확실하게 읽는 것을 연습 해야 겠다.