---
title: 1차 다트 게임 -javascript
date: "2022-05-04"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## [1차 다트 게임]

[https://programmers.co.kr/learn/courses/30/lessons/17682](https://programmers.co.kr/learn/courses/30/lessons/17682)

```jsx
예제	 dartResult	answer	  설명
1	    1S2D*3T	    37	      11 * 2 + 22 * 2 + 33
2	    1D2S#10S	9	      12 + 21 * (-1) + 101
3   	1D2S0T	    3         12 + 21 + 03
4   	1S*2T*3S	23	      11 * 2 * 2 + 23 * 2 + 31
5.  	1D#2S*3S	5	      12 * (-1) * 2 + 21 * 2 + 31
6	    1T2D3D#	    -4	      13 + 22 + 32 * (-1)
7	   1D2S3T*	    59	      12 + 21 * 2 + 33 * 2
 

function solution(dartResult) {
    var answer = [];
    var ans = 0
    var S = [0,1,2,3,4,5,6,7,8,9,10]
    var N = dartResult.length
    var count = 0
    var co= 0
    for (var i = 0; i < N; i++){
        if (dartResult[i] in S) {
            continue
        }else if (dartResult[i] === 'S'){
            // S 점수 1배
            if (dartResult[i-2] in S){
                // 10점대를 대비한 식
                answer.push(parseInt([dartResult[i-2],dartResult[i-1]].join('')));
                i += 1
            }else{
                answer.push((dartResult[i-1]))
                count += 1
            }
        }else if (dartResult[i] === 'D'){
            if (dartResult[i-2] in S){
                // D 는 더블로 2배점수
                answer.push(parseInt([dartResult[i-2],dartResult[i-1]].join('')));
                i += 1
            }else{
                co = dartResult[i-1]**2
                answer.push(co)
                count += 1
            }
        }else if (dartResult[i] === 'T'){
            if (dartResult[i-2] in S){
                // 점수의 3승 점수로 계산
                answer.push(parseInt([dartResult[i-2],dartResult[i-1]].join('')));
                i += 1
            }else{
                co = dartResult[i-1]**3
                answer.push(co)
                count += 1
            }
        }else if (dartResult[i] === '*'){
            // 스타상으로 이번회차와 전회차 점수 두배
            if ( i < 3 ){
                answer[0] = answer[0] * 2
            }else if ( i < 6 ){
                answer[0] = answer[0] * 2
                answer[1] = answer[1] * 2
            }else{
                answer[1] = answer[1] * 2
                answer[2] = answer[2] * 2
            }
            
        }else if (dartResult[i] === '#'){
            // 이번회차 점수 * -1 하기
            answer[count-1] = answer[count-1]*(-1)
        }
    }
    for (var j of answer) {
        ans += parseInt(j)
    }
    return ans;
}
```

간단하게 생각 하고 풀어보고자 하였고<br />
해당 사항마다 점수 적용 방법을 써서 문제를 풀어 나갔다.<br />
간단하게 풀수 있도록 연구 해볼 예정이다.<br />
해당 문제는 어떤 알고리즘 분류를 저장해야 하는지는 모르겟지만
스택의 응용이 아닐까 싶다.
쌓인 점수를 응용해서 계산 해야 하기 때문이다.