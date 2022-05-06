---
title: 다리를 지나는 트럭, 프린터 -javascript
date: "2022-05-06"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## 다리를 지나는 트럭

[https://programmers.co.kr/learn/courses/30/lessons/42583](https://programmers.co.kr/learn/courses/30/lessons/42583)

```jsx
bridge_length	 weight	 truck_weights	                    return 
2	             10	     [7,4,5,6]	                        8
100	           10      [10]	                              101
100	           100     [10,10,10,10,10,10,10,10,10,10]	  110

function solution(bridge_length, weight, truck_weights) {
    var answer = 1;
    let que = [];
    let quesum = 0;
    
// 다리의 길이를 설정하기 위해 빈배열 만드는 작업
    for(let i =0;i<bridge_length;i++){
        que.push(0);
    }
    // 첫번째과정을 미리 처리해 보았다.
		// 대기중인 트럭에서 앞에 것을 뺀다.
    let now = truck_weights.shift();
		// 뺀트럭을 다리로 보낸다.
    que.push(now)
		// 다리에 올라가있는 트럭의 무게를 확인한다
    quesum = now
		// 트럭이 들어갔음으로 빈배열을 하나 빼준다.
    que.shift()
    

// 위에 과정을 반복해주면 되기 때문에 와일문을 사용
    while (quesum) {
        // n 번째 대기 트럭을 뺀다.
        now = truck_weights.shift();
				// 다리에 빈칸을 만든다.
        var a = que.shift()
				// 해당 다리에 무게를 빼준다
        quesum -= a
        
		// 만약 현재 다리무게 + 추기될 트럭의 무게가 제한무게에 걸리지 않는다면
        if (quesum+now <= weight){
						// 다리에 대기 트럭을 넣는다.
            que.push(now)
						// 대기트럭의 무게를 더해준다
            quesum += now
            
            
        }else{
						// 들어간 트럭이 없으므로 0을 추가한다.
            que.push(0)
						// 트럭을 보내지 않았기떼문에 대기열로 돌려보낸다.
            truck_weights.unshift(now);
        }
				// 횟수계산을 위해 매 계산마다 더해준다.
        answer++
    }
    
    return answer;
}
```

문제 풀이 스택과 큐문제이다.

for 문으로 다리의 길이를 표현해 주었고 

들어오고나가는 트럭에 따라  무게를 변동하여 적용해 주었다.

어려운 문제는 아니 였지만 이해하는데에 시간이 조금 걸렸다.

## 프린터

[https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript)

```jsx
priorities	       location	   return
[2, 1, 3, 2]	         2	     1 
[1, 1, 9, 1, 1, 1]	   0	     5

function solution(priorities, location) {
    var answer = 1;
    let cnt = 0
    let max = Math.max(...priorities)
    
// priorities dml 길이가 0이 될때 까지 반복
    while (priorities.length) {
				// 만약 바로 제일큰 수 이면서 목표이면 출력
        if (priorities[cnt] === max){
            if(location === 0){
                return answer;
            }
					//아닌경우 priorities에서 앞에 요소를 빼고 answer 을 추가 max를 새로 지정한다.
            priorities.shift();
            answer += 1;
            max = Math.max(...priorities)
        
				// 맥스보다 작은 수들일경우 뒤로 보낸다    
        }else{
            priorities.push(priorities.shift());
        }
				// 만약 목표로 했던수가 지금단계기 아니라면 위치가 힌자리씩 뻬준다.
        if (location !== 0){
            location-= 1;
        // 0인경우 에는 목표수가 뒤로 이동 했기 때문에 목표수의 위치를 재 설정한다.
				}else{
            location = priorities.length-1;
        }
    }
    
    return answer;
}
```

문제 풀이는 중간중간 주석으로  옮겨 놓았다.

문제를 풀이 하다보니 한줄한줄 코드를 미리 해석해 두는 것이 다시 보기에 편한것 같다.

내가 사용한것은 스택/큐 로 목표한 수가 아니라면 계속 위치를 이동시켜야 했다.

단계별로 차근히 접근하면 풀어 나갈수 있을것 같다.