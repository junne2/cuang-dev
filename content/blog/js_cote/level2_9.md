---
title: 프로그래머스 기능개발-javascript
date: "2022-05-08"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## 기능개발

[https://programmers.co.kr/learn/courses/30/lessons/42586?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/42586?language=javascript)

```jsx
progresses	               speeds	             return
[93, 30, 55]	            [1, 30, 5]	         [2, 1]
[95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	[1, 3, 2]

function solution(progresses, speeds) {
    var answer = [];
    let day =[];
    let cnt = 0
    let to = 0;
    
    for (let i in progresses){
        day.push(Math.ceil((100-progresses[i])/speeds[i]));
    }

    answer.push(1)
    to = day[0];

    for (let j = 1; j < day.length; j++){

        if (to < day[j]){
            answer.push(1)
            to = day[j]

        } else{
          answer[answer.length-1] += 1 
        }        
    }
    return answer;
}
```

기능개발 문제는 기존에 풀었는데  100프로가 되지 않아 정리 해 뒀었던 문제인다.
진행도에 따라 배포되는 과정을 보여 주는 문제로 100 프로가 될때 까지의 일 수를 비교하면 된다.

내가 문제를 2단계중에서는 난이도가 하에 속하는 문제 인것 같다.