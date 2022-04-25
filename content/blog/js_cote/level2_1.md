---
title: 문자열 압축, 짝지어 제거하기-javascript
date: "2022-04-24"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

# js Level 2

## 문자열 압축

[https://programmers.co.kr/learn/courses/30/lessons/60057?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/60057?language=javascript)

```javascript
s	                       result
"aabbaccc"	                 7
"ababcdcdababcdcd"	         9
"abcabcdede"	               8
"abcabcabcabcdededededede"	14
"xababcdcdababcdcd"	        17

function solution(s) {
    let N = s.length;
    var answer = N;
    
    // 문자열 크기의 절반 수까지 i개 단위로 압축
    for (var i = 1; i <= parseInt(N/2); i++){
        let ans = "";
        let cut = 1;
        // 0부터 i개의 문자가 첫 번째 압축 문자
        var T_str = s.substr(0,i);
        // 다음에오는 문자가 같은지 확인 하기
        for (var j = i ; j <= N; j += i){
            let N_str = s.substr(j,i);
            
            if (T_str === N_str){
                cut += 1
            }else{
                if (cut === 1) {
                    ans = ans + T_str
                }else{
                    ans = ans+cut+T_str
                }
                cut = 1
                T_str = N_str
            }
        }
        if (cut === 1) {
                    ans = ans + T_str
        }else{
            ans = ans+cut+T_str
        }
				// 매 결과 값을 비교하여 작은 수 저장 하기
        answer = Math.min(answer, ans.length);
    }
    return answer;
}
```

`문제 풀이`

문제를 이해하는것에 시간을 많이 쏟은것 같다.

문제를 보다 이해가 가지 않아 검색을 통해 미리 코드를 본 상태 에서 새로 구현해 보았다.

우선 문제를 이해하기 위한 생각을 정리 해보려고 한다.

- answer 에 input 된 문자열 길이를 입력한 이유
    
    문자열의 길이중 가장 짧은 것을 찾는 문제인데 압축되는것이 없을경우는 입력된값이 작은 값이 될수 있기 때문이다.(나중에 비교를 위해서도 변경하는것이 편했다.)
    
- 많은 블로그에서 문자열 크기에 절반 수까지 압축하는 이유
    
    문자열을 압축한다 했을때 최대로 압축 할수 있는 범위가 문자열의 반 이기 때문이다.
    
    아무리 줄인다 해도 기본 반복되는 문자는 유지되며 대신 숫자 1자리가 자리를 차지하기 때문이다.
    
- `subsr`t 를 사용하는 이유
    
    우선 해당 함수가 무엇인지를 알아야 했는데
    
    ```jsx
    str.substr(start[, length])
    
    `start`
    추출하고자 하는 문자들의 시작위치. 
    만약 음수가 주어진다면, `문자열총길이 + start`의 값으로 취급 
    ex)`start`에 -3을 설정하면, 자동적으로 `문자열총길이 - 3`으로 설정
    
    `length`
    옵션값. 추출할 문자들의 총 숫자.
    ```
    
    **python이 익숙한 나에게는 문자열 슬라이싱 이라고 생각 했다.**
    
    문자열의 시작점부터 n개의 문자를 뽑아오는 기능이다.
    
    함수로 인해 나에게 필요한 문자를 변수에따라 얻을수 있었다.
    
- j 의 증가가 i 만큼 되는 이유
    
    `for (var j = i ; j <= N; j += i)`
    
    문자를 압축할때 처음정한 n개의 압축 으로만 진행 되기 때문이다.
    
    2글자로 압축했다 3글자로 압축하게되면 그만큼의 변수가 생긴다.
    
    그것을 방지하기 위해서 라도 압축방식은 통일 시키는 것이 좋다.
    
- 코드에서 아래 if문을 사용한이유
    
    ```javascript
    if (cut === 1) {
        ans = ans + T_str
    }else{
        ans = ans+cut+T_str
    }
    ```
    
    내가 정리 했던 코드에서 가져온 코드이다.
    
    cut 가 1인 경우는 중복되는 문자가 없다는 것을 뜻하고
    
    그밖에 값에는 중복이 존재하기때문에 else 를 사용한 결과값이 사용되었다.
    
- MIN 의 사용
    
    `answer = Math.min(answer, ans.length);`
    
    값을 매번 확인 하여 내가 구한 값과 그전에 결과가 나온 값을 비교 작은 값을 찾아내는 방법이였다.
    
    최댓 값을 구하는 문제라면 Max 를 사용하면 될까?
    

## 짝지어 제거하기

[https://programmers.co.kr/learn/courses/30/lessons/12973?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/12973?language=javascript)

최종 코드

```jsx
function solution(s){
    var answer = []
    for (var i = 0; i<s.length; i++){
        if (answer.length === 0 || s[i] !== answer[answer.length-1]){
            answer.push(s[i])
        }else{
            answer.pop()
        }
    }
    answer= answer.length === 0 ?1:0
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}

```

중간 과정 코드

```jsx
s	      result
baabaa	1
cdcd	  0

function solution(s){
//리스트 만들기
    var answer = []
    for (var x of s){
        answer.push(x)
    }
		// 같은경우 제거하기
    for (var i = 0; i<s.length/2; i++){
        for (var j = 0; j<answer.length; j++){
            if (answer[j] === answer[j+1]){
                answer.splice(j,2)
            }
        }            
    }
    answer =  answer.length === 0 ? 1:0
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}
3.4.5.6.7.8틀림
```

일단 간단하게 생각 해보자 하고

리스트로 정리해보면 어떨까? 라는 생각으로 진행해 보았다.

우선 s 를 리스트 안에 넣고 

같은 경우를 슬라이싱 으로 제거 하였는데 반복을 어떻게 사용할 것 인가에 대한 의문으로 문제를 풀었더니 실패라는 결과가 나왔다.

반복하는 횟수가 맞지 않아 일부 식에서 틀리는 현상이 벌어졌다.

이후 구상중에 stack 은 어떨까? 하는 생각을 하게 되었다.

결과는 성공  풀이를 짚어보자면  s문자열의 길이만큼 반복하여 answer 이라는 배열에 한 문자씩 추가를 해 준다.

ex) 1번 문제의 경우 baabaa 의 문자열에서

 

| i | s[i] | answer | answer[-1] | push | pop | 내용 |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | b | [] | - | b |  | 빈배열에 b 를 추가 |
| 1 | a | [b] | b | a |  | a ≠ b 이므로 a 를 추가 |
| 2 | a | [b, a] | a |  | a | a = a 이므로 a 를 추가하지 않고 제거 |
| 3 | b | [b] | b |  | b | b = b 이므로 a 를 추가하지 않고 제거 |
| 4 | a | [] | - | a |  | 빈배열에 a 를 추가 |
| 5 | a | [a] | a |  | a | a = a 이므로 a 를 추가하지 않고 제거 |

하여 결국 answer에 남는 요소는 없게 된다.

그러므로 남은 값이 없어 1을 출력한것이다.