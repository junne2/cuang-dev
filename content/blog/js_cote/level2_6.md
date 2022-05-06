---
title: 큰 수 만들기 , n개의 최소 공배수 -javascript
date: "2022-05-06"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## 큰 수 만들기

[https://programmers.co.kr/learn/courses/30/lessons/42883](https://programmers.co.kr/learn/courses/30/lessons/42883)

```jsx
number	      k. 	return
"1924"	      2	  "94"
"1231234"	    3 	"3234"
"4177252841"	4 	"775841"

function solution(number, k) {
    var answer = '';
    var ans = [];
    
    for (let i = 0 ; i < number.length;i++) {
				// 비교를 위해 첫수를 지정
        let su = number[i]
				// 없애야 하는 수만큼 지우기 위해 while문을 사용하였다.
				//새로운 배열에 추가하면서 이전수보다 작은수를 k만큼 지운다.
        while (k > 0 && ans[ans.length-1] < su){
            ans.pop();
            k--;
        }
        ans.push(su);
    }
		// 마지막에 틀려서 넣은식이다.
		// k가 남았지만 이전에 입력된수보다 작지 않은 수가 있었기 때문에 k가 남아버렸다.
    ans.splice(ans.length-k,k)
		// 수들을 합쳐서 문자열로 니타내기 위해 사용 하였다.
    answer = ans.join('');
    return answer;
}
```

 문제 풀이

탐욕법 알고리즘문제이다.

주어진 number 라는 문자에서 작은 수를 지우고 그 순서를 유지해서 가장 큰수를 만들어야 하는 문제인데 

처음엔 문자를 나눠놓고 시작해야하나? 하고 머리를 굴려보았다.

하지만 그럴경우는 경우의 수가 너무 많아  제일 작은수를 먼저 지워보자 하는 생각으로 진행 하였다.

## N개의 최소 공배수

[https://programmers.co.kr/learn/courses/30/lessons/12953](https://programmers.co.kr/learn/courses/30/lessons/12953)

```jsx
arr	        result
[2,6,8,14] 	168
[1,2,3]	     6

function solution(arr) {
    var answer = 0;
    function gcd(a,b) {
        if (b === 0) return a;
        return gcd(b,a%b);
    }
    
    answer = arr.reduce((a,b) => (a*b) / gcd(a,b));
    
    return answer;
}
```

gcd. 즉 공배수는 자주 사용하는 기본 이다.

식을 잘 기억 해두자]