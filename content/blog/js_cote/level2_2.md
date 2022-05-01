---
title: 신고결과 받기, 크레인 -javascript
date: "2022-05-01"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

신고결과 받기

[https://programmers.co.kr/learn/courses/30/lessons/92334?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/92334?language=javascript)

```jsx
[id_list	report	k	result]
["muzi", "frodo", "apeach", "neo"]	
["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]	
2	
[2,1,1,0]
["con", "ryan"]	
["ryan con", "ryan con", "ryan con", "ryan con"]	
3	
[0,0]

function solution(id_list, report, k) {
    // 미리 0인 배열 생성해두기
    const answer = new Array(id_list.length);
    answer.fill(0)
    
    let Re_list = {}
    // 아이디별 value가 빈 배열을 가지는 객체
    id_list.map((user)=>{
        Re_list[user] = []
    })
    
    // 중복 제거 하기
    let reSet = new Set(report)
    
    //이용 정지 당한 아이디 찾기
    for (let i of reSet){
        const [id, repo] = i.split(' ')
        Re_list[repo].push(id)
    }
    // 정지 아이디를 신고한 사람에게 카운트 주기
    for(const cnt in Re_list){
        if(Re_list[cnt].length >= k){ 
            Re_list[cnt].map((user)=>{
                answer[id_list.indexOf(user)] += 1
            })
        }
    }
    return answer;
}

```
풀이방법

우선 벨류가 0인 배열을 미리 만들고 시작 했다.<br />
딕을 사용해야지 해야지  하면서도 매번 놓치게 되는것 같다.<br />
나의 관점은 
1. 신고로 정지되는 아이디를 찾는다.
2. 그 아이디와 관련이 있는 아이디를 찾아 숫자를 메긴다.
이기 때문에<br />

우선은 정지먹는 아이디를 찾아야 한다고 생각 했다.
그래서 중복값을 먼저 제거 한 후 for 문을 이용하여 이용 정지된 아이디를 찾았다.

그후 신고한사람에게 카운트를 추가 하여 결론을 낼수 있었다.

크레인 1

[https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript)

```jsx
function solution(board, moves) {
    var answer = 0;
    const stack = [];
    
    for (let move of moves){
        for (let i=0; i<board.length;i++){
            const icon = board[i][move-1];
            if (icon === 0)continue;
            
            if (icon === stack[stack.length-1]){
                stack.pop();
                answer += 2;
            }else {
                stack.push(icon);
            }
            board[i][move -1] = 0;
            break;
        }
    }
    return answer;
}
```
풀이 방법

인형뽑기 라고 생각 하면 되지만 
약간 다른 접근이다.<br />
알고리즘의 종류를 공부하고 나니 아 이게 스택이구나 하는것이 보였다.<br />
스택이란 데이터를 쌓고 나중에 들어온 것을 먼저 내보내는 방법으로 컵을 생각 하고 잇다.<br />

이동하려는 곳의 아이콘이 없는 0값은 그냥 지나치게 만들고<br />
아이콘의 숫자와 스택에 쌓인 마지막 요소의 값이 같은 경우 삭제를 하는 방법으로 <br />
아이콘을 쉽게 매칭 시킬수 있었다.

