---
title: 행열의 곱셈, 진수에서 소수 개수 구하기-javascript
date: "2022-05-11"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## 행열의 곱셈

[https://programmers.co.kr/learn/courses/30/lessons/12949](https://programmers.co.kr/learn/courses/30/lessons/12949)

```jsx
arr1	arr2	return
[[1, 4], [3, 2], [4, 1]]	[[3, 3], [3, 3]]	[[15, 15], [15, 15], [15, 15]]
[[2, 3, 2], [4, 2, 4], [3, 1, 4]]	[[5, 4, 3], [2, 4, 1], [3, 1, 1]]	[[22, 22, 11], [36, 28, 18], [29, 20, 14]]

function solution(arr1, arr2) {
    var answer = [];
    
    for (let i = 0; i< arr1.length; i++){
        answer.push([]);
        for (let j = 0; j <arr2[0].length; j++){
            let sum = 0;
            for (let x = 0; x <arr2.length; x++){
                sum += arr1[i][x]*arr2[x][j];
            }
            answer[i].push(sum)
        }
    }
    return answer;
}
```
행열의 곱셈을 중학교 이후로 처음 해본것 같다.
A와 B 행렬의 값을 서로 곱하여 더해준값을 다시 행열로 정리 하는 문제이다.<br />
크게 어려운 문제는 아니였다.



## **k진수에서 소수 개수 구하기**

[https://programmers.co.kr/learn/courses/30/lessons/92335](https://programmers.co.kr/learn/courses/30/lessons/92335)

```jsx
n	      k	  result
437674	3	   3
110011	10	 2

function solution(n, k) {
    var answer = 0;
    let ans = n.toString(k)
    
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                 return false;
            }
        }
        return true;
    }
    
    let numArr = ans.split("0");
    
    for (let i = 0; i < numArr.length; i++) {
        if (isPrime(Number(numArr[i]))) {
            answer++; 
        }
    }
    return answer;
}
```

1. k진수를 변환한다.
2. 소수인지 판별해 주는 함수를 만든다 
3. 변환된 수에서 수를 나눠야 하는데 0 을 사용하지 않음으로 0으로 나누면 된다.
4. 소수인지 확인 하고 맞는경우의 수를 확인 한다.

소수 확인 문제는 자주 나오는 문제이다. 