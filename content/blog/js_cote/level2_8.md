---
title: 3차 n진수 게임 ,이진 변환 반복하기-javascript
date: "2022-05-07"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## **[3차] n진수 게임**

[https://programmers.co.kr/learn/courses/30/lessons/17687](https://programmers.co.kr/learn/courses/30/lessons/17687)

```jsx
n	  t. 	m. 	p. 	result
2	  4	    2	  1	  "0111"
16	  16	2	  1	  "02468ACE11111111"
16    16	2	  2.  "13579BDF01234567"

function solution(n, t, m, p) {
    var answer = '';
    let recod = '';
    let cnt = 0;

    
    while(recod.length <= t*m){
        recod += cnt.toString(n).toUpperCase();
        cnt ++;
    }
    
    cnt =0;
    
    for (let i = 0; i<recod.length; i++){
        if (cnt === t)
            break;
        if (i%m === p-1){
            answer += recod[i];
            cnt ++;
        }
    }
    return answer;
}

```
n진법의 수로 이어말하기를 할때 p가  말해야 하는 배열을 구하는 식이다.

2진법을 1부터 나열된 값을 m명이서 각각 t번 주고 받아야 하는데 p번째인 사람이 말해야 하는 스택을 뽑는 문제로 다소 햇갈리는 문재가 잇긴 하지만 어렵지는 않았다.



## **이진 변환 반복하기**

[https://programmers.co.kr/learn/courses/30/lessons/70129](https://programmers.co.kr/learn/courses/30/lessons/70129)

```jsx
회차	이진 변환 이전	제거할 0의 개수	0 제거 후 길이	이진 변환 결과
1	   "110010101001"	  6	        6	          "110"
2	   "110"	          1	        2	          "10"
3	   "10"	            1	        1	           "1"

function solution(s) {
    var answer = [];
    let cnt = 0;
    
    let AL = s.toString(2);
    let Z_sum  = 0;

    while (s.length !== 1){
        let Z_cnt = s.split('0').length-1;
        s = s.split('0').join('');
        let ans = s.length;
        s = ans.toString(2);
        Z_sum += Z_cnt;
        cnt++
    }
    answer = [cnt,Z_sum]
    return answer;
}
```

주어진 수를 2진수로 전환하고 그 수에서 0을 제외한 길이를 또 2진수로 전환하여 1이 될때 까지 반복
하는 문제 이다.

0의 개수를 제거 하기 위해 split을 사용하였다.
