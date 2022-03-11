---
title: code_test day1
date: "2022-03-11"
tags: ["Algorithm", "test", "code"]
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---
Level 1 문제중 고득점 kit 문제들 풀이

## 완주하지 못한 선수 💯 100%

[https://programmers.co.kr/learn/courses/30/lessons/42576](프로그래머스)

```python
participant = ["leo", "kiki", "eden"]
            ["marina","josipa","nikola","vinko","filipa"]
            ["mislav", "stanko", "mislav", "ana"]
completion = ["eden", "kiki"]
            ["josipa", "filipa", "marina", "nikola"]
            ["stanko", "ana", "mislav"]	
값 = "leo"// "vinko"//"mislav"

1차 시도

def solution(participant, completion):
    answer = ''
    if len(participant) > 1:
		# while문도 사용 가능 [while len(participant) > 1:]
        for i in completion:
            participant.remove(i)
        answer = participant[0]
    return answer
_______________________________정확성 100% 효율성 0%

2차 시도

def solution(participant, completion):
    answer = [x for x in participant if x not in completion]
    return answer
# 비슷한 방법
# def solution(participant, completion):
#    answer = list(set(participant) - set(completion))
#   return answer
____________________________3번 문제 실패

3차 시도
def solution(participant, completion):
    answer = ''
    participant.sort()
    completion.sort()
    for i in range(len(completion)):
        if participant[i] != completion[i]:
            return participant[i] 
    return participant[len(participant)-1]
__________________________ 성공 정확성 100% 효율성 100%
```
**풀이방법:** 

무조건 1개의 값이 남는것에 집중, participant에서 ompletion의 값을 지워 남은 값을 출력 하는 방식으로 1차 시도 결과 효율성이 떨어지는 현상이 발생하엿다. 그래서 생각한것은 
1. 시간을 단축하는 방법을 사용해야 한다는것!
    시간을 줄이기 위한 방법이 뭐가 있을까?
    * 코드를 가볍게 짜는 것은? 
        리스트 끼리 뺄셈이 가능하다는 검색결과를 찾아서 2차 시도를 하였으나 3번 문제의
        경우 ‘mislav’ 라는 중복값이 있는데 중복값이 같이 삭제 되는 현상이 생겻다.
2. 시간을 단축 시키면서 중복값을 지우지 않도록 결과를 도출해야 한다!
    그래서 리스트에서 지우지는 않고 if문으로 비교해서 값이 먼저 나올경우 우선 출력하고 아닐 경우 리스트의 마지막 값을 출력해 보았다.

# 🌟관련 강의 풀이 정리

```python

3-1 Sorting / Loop 를 사용
# 두 리스트를 정리 한다.
  participant.sort()
  completion.sort()
# completion list 만큼 돌면서 participant 에 존재하지 않는선수 찾기
for i in range( len ( completion )):
    if participant[ i ] ≠ completion[ i ]:
        return participant[ i ]
# 다 돌아도 찾지 못한 경우는 마지막주자가 완주하지 못한것이다.
  return participant[ len ( participant ) - 1 ]
```
풀었었던 방법과 같은 방법이다.
가장 쉬운 방법이 루프가 아닐까 싶다.

```python
3-2 Hash 를 활용
hashDict = { }
sumHash = 0
# participant list 의 hash를 구하고 그 값을 더한다. 
  for part in participant:
       hashDict[ hash ( part ) ] = part
       sumHash += hash( part )
# completion list의 hash값을 빼준다.
   for comp in completion:
        sumHash -= hash( comp )
# 남은 값이 완주하지 못한 선수의 값이된다.
   return hashDict [ sumHash ]
```
딕셔너리를 사용하는 방법으로 생성된 딕셔너리로 인해 중복값제거를 막을수 있다.
```python
3-3 Counter을 활용
# participant 의 counter을 구한다
  part_counter = Counter(participant)
# completion 의 counter을 구한다
  comp_counter = Counter(completion)
#둘의 차를 구하고, key 를 읽는다
  answer = part_counter -comp_counter
  return list( answer.keys ( ) )[ 0 ]
# ** Counter(participant)- Counter(completion)
#      return list( answer.keys ( ) )[ 0 ] 와 동일하다.**

```
Counter도 hash 와 비슷하게 딕셔너리를 사용하는 방법이다.<br />
데이터의 중복이 있는 수를 세서 딕셔너리로 나타난다.
위 식에서 사용할경우<br />
part_counter =  Counter({"mislav" : 2, "stanko" :1, , "ana" : 1})로 표기된다.