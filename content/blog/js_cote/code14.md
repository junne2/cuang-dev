---
title: 두수를 뽑아서 더하기 -javascript
date: "2022-03-23"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## 두수를 뽑아서 더하기

[https://programmers.co.kr/learn/courses/30/lessons/68644](https://programmers.co.kr/learn/courses/30/lessons/68644)

```javascript
numbers	     result
[2,1,3,4,1]	[2,3,4,5,6,7]
[5,0,2,7]	  [2,5,7,9,12]

function solution(numbers) {
    var answer = [];
    var N = numbers.length
    for (var i =0; i<N; i++) {
        for (var j = 1; j < N; j++) {
            var su = 0
            if (i === j)
                continue;
            su = parseInt(numbers[i] + numbers[j])
            answer.push(su)
        }
    }
    answer.sort(function(a, b) {
        return a - b;
    });
    const answere = [...new Set(answer)];
    return answere;
}
```

**풀이방법**

주어지는 배열 numbers 에서 두수를 뽑아서 더하고 해당값을 리스트로 만드는 문제이다.

일단 모든 수를 하나하나 더해보자 하는 마음으로 for문을 중첩하여 사용하였다.

sort로 오름 차순 으로 정렬하고 난후 Set 를 사용하여 중복되는 값들을 1개의 값만 남기고 제거 하여  

결과 값을 확인 하엿다.