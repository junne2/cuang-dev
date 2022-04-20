---
title: 직사각형 별찍기-javascript
date: "2022-03-14"
tags: ["Algorithm", "test", "code",'javascript','programmers']
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

## 직사각형 별찍기

[https://programmers.co.kr/learn/courses/30/lessons/12969?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/12969?language=javascript)

표준 입력으로 두 개의 정수 n과 m이 주어진다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요

* 제한 조건
n과 m은 각각 1000 이하인 자연수입니다.


```javascript
input = 5 3
output = *****
         *****
         *****

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    function st(x) {
        var A = '';
        for (var i = 0; i < x; i++){
            A += '*'
        }
        return A;
    }
    for (var j = 0; j < b; j++) {
        console.log(st(a));
    }
});
```
**문제 플이**
가로길이가 n 세로길이가 m인 사각형을 출력하면 되는 문제이다.

n과 m을 따로 정의해 주어도 괜찮지만 n에 입력해주어 리스트형식으로 불러오는 방법을 선택 했다.

st라는 함수를 만들어서 n개의 별을 만들고 for 문으로 반복실행해서 m줄을 완성했다.
