---
title: 실패율-javascript
date: "2022-05-08"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## 실패율

### 최종 답안지
```javascript
function solution(N, stages) {
    let ans = [];
    let answer = [];
    let cnt = 0;
    let people = stages.length;
    
    for (var i = 1; i <= N ; i++){
        people = stages.length;
        stages = stages.filter((element) => element !== i);
        cnt = people - stages.length
        ans.push({idx:i,sucess:cnt/people});
    }
    ans.sort((a,b)=>{
        if(a.sucess>b.sucess){
            return -1;
        }else if (a.sucess<b.sucess){
            return 1;
        }else{
            if(a.idx>b.idx){
                return 1;
            }else{
                return -1;
            }
        }
    })
    return ans.map(ele=>ele.idx);
}
```
여기서 주의 해야 하는 것은 각 라운드마다 분모가 달라진다는 점이며
10라운드 이상 진행 될수 있다는 점이다.


```jsx
// 테스트 통과 제출 2문제..26,27
function solution(N, stages) {
    let ans = [];
    let answer = [];
    let cnt = 0;
    let suc = 0;
    let people = stages.length;
    
    for (var i = 1; i <= N ; i++){
        cnt = stages.join('').split(i).length -1 
        ans.push(Math.ceil(cnt/(people-suc)*100));
        suc += cnt
    }
    for (var j = 1; j <= N ; j++){
        answer.push(ans.indexOf(Math.max(...ans))+1)
        ans.splice(ans.indexOf(Math.max(...ans)),1,-1)
    }
    return answer;
}
```

위 식은 스테이지가 10을 넘기는 경우 문제가 생긴다.

그래서 cnt 를 구하는 식을 수정해 보앗다.

```jsx
function solution(N, stages) {
    let ans = [];
    let answer = [];
    let cnt = 0;
    let suc = 0;
    let people = 0;
    
    for (var i = 1; i <= N ; i++){
        people = stages.length;
        stages = stages.filter((element) => element !== i);
        cnt = people - stages.length
        ans.push(Math.ceil((cnt/people)*100));
        suc += cnt
    }
    for (var j = 1; j <= N ; j++){
        answer.push(ans.indexOf(Math.max(...ans))+1)
        ans.splice(ans.indexOf(Math.max(...ans)),1,-1)
    }
    return answer;
}

14,16,18,19,20,21,26,27통과 29.6
```
위에 풀이 과정을 거치면서 느낀점을 정리

검색 없이 풀어보고자 아는 지식으로 풀었을떼  나는 split으로 개수를 세 나가려 했다.
허나 이경우에  10스테이지 이상인 경우를 생각 하지 못한 방법이라는 것을 께달았다.
그리고 각 라운드에서 실패율이 높은 라운드 순으로 정렬을 해야 했는데

정렬 방법이 생각 나지 않아 max로 불러 오려고 했다.
그런데  여기에도 변수가 존재 했다.
max의 수가 중복되는 경우가 있을수 있다 라는 것이다.
그래서 max 가 아닌 sort 를 사용하기위해 정렬 방법을 바꾸면서  임의로 곱 했던 수를 지우고 ceil을 없앴다

그러니 100프로 계산 완료!

내가 틀리던 이유는 ceil 을 사용한 이유가 변수를 불러 와서 이다.

딕 으로 정렬 하는 방법을 익혀야 겠다.