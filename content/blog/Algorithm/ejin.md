---
title: "알고리즘의 이진검색_Algorithm"
date: "2022-05-03"
tags: ["Algorithm", "test", "code",'javascript']
description: "알고리즘 기초내용을 기록하는 곳입니다."
cover: "./algo.png"
---

# 이진 검색

칸 아카데미

**정렬된 리스트에서 원하는 항목을 찾기에 효율적인 알고리즘**. <br />
이 검색법은 후보 범위가 한 항목으로 좁아질 때까지 찾고자 하는 항목을 포함하고 있는 리스트를 반으로 나누는 과정을 계속 반복한다.

많이 사용하는 경우는 배열에서 어떤 항목을 찾아야 하는 때 이다

흔히 우리가 자주하는 업 다운 게임을 생각 하면 된다.<br />
1 부터 100 까지 의 수중 한가지의 타겟 을 찾을때 1에서 100까지 100번을 계산하는 것이 아닌 <br />
중간값을 비교하여 최대한 확인 시간을 줄여나가는 방법이다.<br />
해당 문제에서의 시간 복잡도 는 


| 시간 복잡도 | 최고 | 평균 | 최저 |
| --- | --- | --- | --- |
| 이진 검색 | O(1) | Θ(log n) | O(log n) |

추측 게임의 단계 정리

1. *min*=1, *max*=*n*, n으로 둔다.
2. max 와 *mi*n의 평균을 구하되, 정수가 되도록 내림한다.
3. 추측이 맞으면 끝냅니다!
4. 추측값이 너무 작으면 *min* 을 추측값보다 1 크게 설정한다.
5. 추측값이 너무 크면 *max* 를 1 작게 설정한다.
6. 2 단계로 돌아갑니다.

연습문제

1단계

```jsx
var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess =0;
    while (min<=max){
        guess = Math.floor((max+min)/2);
        if(array[guess]===targetValue){
            return guess;
        }else if (array[guess]<targetValue){
            min = guess + 1;
        } else{
            max = guess - 1;
        }
    }
    return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
println("Found prime at index " + result);

Program.assertEqual(doSearch(primes, 73), 20);
```

걸리는 시간 확인하기

```jsx
var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess =0;
    var primes = 0;
    while (min<=max){
        guess = Math.floor((max+min)/2);
        primes += 1;
        if(array[guess]===targetValue){
            println(guess);
            println(primes);
            return guess;
        }else if (array[guess]<targetValue){
            min = guess + 1;
        } else{
            max = guess - 1;
        }
    }
    return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
println("Found prime at index " + result);

Program.assertEqual(doSearch(primes, 73), 20);
```

****이진 검색 실행 시간**** 

2013년 유엔 회원국의 수는 193개국 이었습니다. 이 국가 명 들은 알파벳 순으로 배열내에서 정렬한다면, 이진 검색을 활용하여 특정한 국가명을 찾을 때까지 최악의 경우 몇 개의 국가명을 확인해야 할까요?

**답** = 8개

- 힌트
    
    힌트 #1
    
    배열에 n*n*n개의 요소가 있다면, 최대 추측의 수는 \log_2(n) + 1log2(*n*)+1log, start base, 2, end base, left parenthesis, n, right parenthesis, plus, 1을 내림한 값이어야 합니다.
    
    힌트 #2
    
    **2 / 3**
    
    log_2(64) 는 6입니다.
    
    log_2(128) 은 7입니다.
    
    log_2(256)은 8입니다.
    
    **힌트 #3**
    
    **이는 log_2(193) 이 7과 8 사이 어딘가에 있다는 뜻입니다. 따라서 \log_2(193) + 1은 8과 9 사이에 있고, 이것을 내림하여 8을 얻습니다. 따라서 정답은 최대 8개입니다.로그에 대해 다시 공부하고 싶다면 칸아카데미에서 "로그"를 검색해 보세요.**
    

문제들중에 한문제만 골라서 가져왔다   해당 글들은 칸 아카데미 에서 가져온 글이며 문제가 생길시 지우려 한다.