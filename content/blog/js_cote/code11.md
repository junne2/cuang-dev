---
title: 같은 숫자는 싫어 -javascript
date: "2022-03-21"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## 같은 숫자는 싫어

[https://programmers.co.kr/learn/courses/30/lessons/12906](https://programmers.co.kr/learn/courses/30/lessons/12906)

```javascript
arr	             answer
[1,1,3,3,0,1,1]	 [1,3,0,1]
[4,4,4,3,3]	     [4,3]

function solution(arr) {
    var answer = [];
    var ans = ''
    for (var i =0; i< arr.length; i++) {
        if (ans !== arr[i]){
            ans = arr[i]
            answer.push(arr[i])
        }
    }
    return answer;
}
//실패 사유가 문자여서 이다. 리스트속이 문자임을 잘 확인 하자.
//
function solution(arr)
{
    let answer = [];

    for(let i =0; i < arr.length-1; i++){
        if (arr[i] === arr[i+1]){
            arr[i] = 'a'
        }
    }
    answer = arr.filter((element)=> element !== 'a')

    return answer;
}
```

**풀이방법**

리스트의 연속되는 값을 줄이는 문제이다.

중복제거를 사용할경우 해당값이 반복되면 무조건 지워지겠다. 라는 생각이 들었고 그 부분을 방지하기위해

리스트속 값의 앞에 해당하는 값을 저장하여 그값과 다른경우를 새 리스트에 넣어 출력해 보았다.

답은 맞았지만 틀리다 라는 결과가 나와 확인해보니 리스트속의 숫자를 문자로 인식하니 맞는 값이 나왔다.

사소한 실수를 주의 해야 할것 같다.

아래 풀이 방법은 연속되는 값의 뒷값을 문자 ‘a’로 치환하여 제거하는 방법을 사용한것이다.