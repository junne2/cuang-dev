---
title: 로또의 최고 순위와 최저순위 python
date: "2022-03-12"
tags: ["Algorithm", "test", "code"]
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---
Level 1 문제 풀이

# 로또의 최고 순위와 최저순위

https://programmers.co.kr/learn/courses/30/lessons/77484

```python
# 최종 풀이
lottos	                win_nums	              result
[44, 1, 0, 0, 31, 25]   [31, 10, 45, 1, 6, 19]	  [3, 5]
[0, 0, 0, 0, 0, 0]	    [38, 19, 20, 40, 15, 25]  [1, 6]
[45, 4, 35, 20, 3, 9]	[20, 9, 3, 45, 4, 35]	  [1, 1]

def solution(lottos, win_nums):
    answer = []

#  민우가 틀린숫자 빼서 골라내기
    win = [x for x in lottos if x not in win_nums]

#  만약 전부 맞으면 그냥 끝낸다.전부 틀려도 끝낸다(0이 없는경우).
    if len(win) == 0:
        anwer = [1,1]
        return anwer
    elif len(win) == 6 and win.count(0) == 0:
        anwer = [6,6]
        return anwer

#   M 최대 맞는수 = lottos-win+0의 개수 , S  최소 맞는수= 전체 - win의 개수
    #  모르는숫자의 개수 골라내기
    A = win.count(0)
    M = 7 - (len(lottos) - len(win) + A)
    S = 7 - (len(lottos) - len(win))

# 배열 만들기
    if S == 7:
        S = 6
    answer += [M,S]
    
    return answer
---------------------------------- 성공
```
처음에 단순하게 풀어내 보자 만 생각하고 결과를 만들엇더니 풀이 식이 너무 길었다.
<br />그래서 답을 낼수 있는 패턴을 생각해보았고, 결과
<br />합이 7이라는 공통점을 찾을수 있었다.  ex) 1+6, 2+5 ,3+4...
<br />7에서 맞춘 숫자를 빼서 등수를 만들자 일부문제에서 오류가 났는데 이유가 S의 값에는 '0'이 있기 때문이였다.
<br />그래서 7을 없애기 위해 if문을 사용하였고
<br />빠른 답을 위해 1등의 경우와 순위가 없는 경우는 먼저 빼고 시작 하였다.

```python
1차 시도

def solution(lottos, win_nums):
    answer = []
#  민우가 틀린숫자 빼서 골라내기
    win = [x for x in lottos if x not in win_nums]
#  만약 전부 맞으면 그냥 끝낸다.
    if len(win) == 0:
        anwer = [1,1]
        return anwer
#   M 최대 맞는수 = win 의 전체 갯수 , S  최소 맞는수는 전체 - 0의 개수
    #  모르는숫자의 개수 골라내기
    A = win.count(0)
    M = len(win)
    S = M - A
# 배열 만들기
    if M == 6:
        M = 1
    elif M == 5:
        M = 2
    elif M == 4:
        M = 3
    elif M == 3:
        M = 4
    elif M == 2:
        M = 5
    else:
        M = 6
        
    if S == 6:
        S = 1
    elif S == 5:
        S = 2
    elif S == 4:
        S = 3
    elif S == 3:
        S = 4
    elif S == 2:
        S = 5
    else:
        S = 6
    answer = [M,S]
    
    return answer
--------------------------
```
1차시기는 문제를 알고도 실수 하여 기록을 남기려 한다.
<br />리스트 뺄셈에서 뺄셈이 되는값은 겹치는 값인데 생각을 못한 것 같다.
<br />그래서 2차시기에는 수식을 변경하였다.
```python
2차시도

def solution(lottos, win_nums):
    answer = []
#  민우가 틀린숫자 빼서 골라내기
    win = [x for x in lottos if x not in win_nums]
#  만약 전부 맞으면 그냥 끝낸다.
    if len(win) == 0:
        anwer = [1,1]
        return anwer
#   M 최대 맞는수 = lottos-win+0의개수 , S  최소 맞는수는 전체 - 0의 개수
    #  모르는숫자의 개수 골라내기
    A = win.count(0)
    M = len(lottos) - len(win) + A
    S = len(lottos) - len(win)
# 배열 만들기
    if M == 6:
        M = 1
    elif M == 5:
        M = 2
    elif M == 4:
        M = 3
    elif M == 3:
        M = 4
    elif M == 2:
        M = 5
    else:
        M = 6
        
    if S == 6:
        S = 1
    elif S == 5:
        S = 2
    elif S == 4:
        S = 3
    elif S == 3:
        S = 4
    elif S == 2:
        S = 5
    else:
        S = 6
    answer += [M,S]
    
    return answer
-------------------------
```
답은 맞았지만 식이 너무 길어서 좀더 생각해 보았다.
<br />더 줄일수 있는 방법은 없는걸까?

```python
3차시도

def solution(lottos, win_nums):
    answer = []
#  민우가 틀린숫자 빼서 골라내기
    win = [x for x in lottos if x not in win_nums]
#  만약 전부 맞으면 그냥 끝낸다.
    if len(win) == 0:
        anwer = [1,1]
        return anwer
#   M 최대 맞는수 = lottos-win+0의개수 , S  최소 맞는수는 전체 - 0의 개수
    #  모르는숫자의 개수 골라내기
    A = win.count(0)
    M = 7 - (len(lottos) - len(win) + A)
    S = 7 - (len(lottos) - len(win))
# 배열 만들기 (S만 하는 이유는 M이 0이되는값을 먼저 보냈기 때문에 7이 되지 않아서이다.)
    if S == 7:
        S = 6
    answer += [M,S]
    
    return answer
------------------------------ 14번실패
```
7이라는 패턴값으로 식을 수정해 보았는데 식이 많이 단축 된것 같다.
<br />하지만 14번 문제는 실패였다.
<br />자세히 살펴보니 '처음부터 가려진 숫자가 없을수도 있다'는 결론이 나왔고 그 결과에 따라 식을 추가 하엿다.