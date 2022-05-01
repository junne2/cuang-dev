---
title: 소수만들기, 오픈채팅 -javascript
date: "2022-04-30"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---


소수 만들기

[https://programmers.co.kr/learn/courses/30/lessons/12977?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/12977?language=javascript)

```jsx
function solution(nums) {
    var answer = 0;
    let N = nums.length 
    
    function sosu(num) {
        for (var i = 2; i< num; i++){
            if (num % i === 0){
                return false
            }
        }
        return true
    }
    
    for (let x = 0; x < N; x++){
        for (let y = x+1; y < N; y++){
            for (let z = y+1; z < N; z++){
                let num = nums[x] + nums[y] + nums[z]
                if (sosu(num) === true){ 
                    answer += 1;
                }                
            }
        }
        
    }
    
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}
```

배열을 주어 졌을때 3개의 수를 뽑아 해당 수중 소수는 몇개인지 확인 하는 문제이다.<br />
간단한 해결을 위해 소수를 구하는 함수를 만들었다.<br />
소수를 반복해서 계산 해야 했기 때문이다.<br />

그리고는 세 수를 더히기 위해 3중 포문을 사용하여 더해주었고
각각의 수가 반복되지 않도록 조건을 수정 하였다.



오픈채팅

```jsx

function solution(record) {
    var answer = [];
    const map = new Map();
    
    for (let i in record){
        const [com, id, name] = record[i].split(' ');
        
        if (com === "Leave"){
            answer.push([id,"님이 나갔습니다."])
            continue
        }
        if (com === "Enter"){
            answer.push([id,"님이 들어왔습니다."])   
        }
        
        map.set(id, name);
    }
    
    
    return answer.map(ele => map.get(ele[0]) + ele[1]);
}
```
채팅방을 들어오고 나가는것에 따른 알럿 변경이다.<br />
닉네임을 바꿔서 들어오는 경우 전에 쓰던 닉네임이 아닌 지금의 닉네임을 사용해야 한다.
그래서 살펴보다가 아이디는 같다는것을 생각하였고
object로 풀면 되지 않을까? 생각 하게 되었다.<br />

그래서 아이디와 프린트구문을 구현하고 아이디를 네임으로 바꾸는 코드를 활용 하였다.

정렬

[https://programmers.co.kr/learn/courses/30/lessons/42746?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/42746?language=javascript)

```jsx
function solution(numbers) {
    
    var answer = numbers.map(c=> c + '').
    				sort((a,b) => (b+a) - (a+b)).join('');
    
    return answer[0]==='0'? '0' : answer;
}
```

1. numbers.map(c=>c+'') = 각 숫자들을 문자로 변환(1 => '1')
2. sort((a,b) => (b+a)-(a+b)) = 문자로 변환된 숫자를 연결하여 비교정렬( '3', '30' => ('303')-('330'))
3. .join('') = 문자열 합치기
4. numbers 배열이 0으로만 구성되어 있을 경우 '0'만 출력

해당 문제는 기록하기 위한 팁을 가져온 것이다.
이렇게 간단하게 적을 때마다 신기하다고 느낀다.
나도 얼른 발전하고 싶다. 라는 뜻에서 가져왓다.