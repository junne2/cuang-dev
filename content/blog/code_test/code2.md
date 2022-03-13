---
title: 체육복 + K번째수 python
date: "2022-03-09"
tags: ["Algorithm", "test", "code"]
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---
Level 1 문제중 고득점 kit 문제들 풀이

## 체육복 🧪65%

[https://programmers.co.kr/learn/courses/30/lessons/42862](프래그래머스)

```python
탐욕법 - 체육복

n =	5, 5, 3		
lost = [2, 4], [2, 4], [3]		
값 = [1, 3, 5], [3], [1]

def solution(n, lost, reserve):
    answer = 0
    al = [i for i in range(1,n+1)]
    her = list(set(al)-set(lost))
    for j in lost:
        if j-1 in reserve:
            her.append(j)
        else:
            pass
    answer = len(her)
    return answer
_____________________3,5,6,7,9,10,11,12,13,14,15,16	/20 실패
2차 시도

def solution(n, lost, reserve):
    answer = 0
    al = [i for i in range(1,n+1)]
    her = list(set(al)-set(lost))
    for j in lost:
        if j-1 in reserve:
            her.append(j)
        elif j+1 in reserve:
            her.append(j)
        else:
            pass
    answer = len(her)
    return answer
_______________________1,2,4,5,6,10,12/20 실패
 
def solution(n, lost, reserve):
    answer = 0
    
    reserve_only = set(reserve) - set(lost)
    lost_only = set(lost) - set(reserve)
    
    for reserve_item in reserve_only:
        front = reserve_item - 1
        back = reserve_item + 1
        if front in lost_only:
            lost_only.remove(front)
        elif back in lost_only:
            lost_only.remove(back)

    answer =  n - len(lost_only)    
            
    return answer

__________________________100%
** answer 의 값을 for 문 안으로 넣는것을 주의하자!
```

풀이방법:
    처음엔 쉽게 접근하기위해 n명이 있는 al배열을 만들었고,배열에서 lost에 있는 사람을 제거하고 앞번호의 친구가 여분의 체육복이 있으면 빌려오는 식으로 해보았다.
    중복값에 의헤 많이 틀린 값이 나왓다.
    그래서 해당 코드에서 중복값을 뺄수 있는 방법을 생각 하였고 중복 값을 뺄수 있는 식을 만들자 
    그래도 틀렸다. 이유는 앞번호와 뒷번호 에서 빌릴수 있는데 그부분을 생각을 안하고 앞번호만 사용했기 때문
    그결과 생각을 바꿧다.내가 이해를 못한것 같아 풀이 식을 보았다.
        왜 이렇게 푼것인가.
    앞번호에서 빌리던 뒷번호에서 빌리던 중복값을 없애기 위해 only배열을 만들어 앞 또는 뒤에서 체육복을 빌려오는 방식으로 식을 풀어나가는것을 확인 할수 있었고,
    해당 식을 생각하며 따라 만들어 보았다.
    추후 응용코딩을 해볼 생각 이다. 


💡 **### 문제풀이 ###**
**3-1 Set 을 활용**

```python
# 1. Set 을 만든다
  reserve_only = set(reserve) - set(lost)
  lost_only = set(lost) - set(reserve)

# 2. 여분을 기준으로 앞,뒤를 확인 하여 체육복을 빌려준다.
  for reserve in reserve_only:
      front = reserve - 1
      back = reserve + 1
      if front in lost_only:
          lost_only.remove(front)
      elif back in lost_only:
          lost_only.remove(back)

# 3. 전체학생수에서 lost_only 에 남은 학생수를 빼준다.
   return n - len(lost_only) 
```
3-2 배열을 활용
```python
# 1. student 배열 생성
  student = [0] the * (n+2)

# 2. reverve / lsrt 정보 반영
  for r in reverve:
      student[r] += 1
  for l in lost:
      student[r] -= 1

# 3. 여분을 기준으로 앞 뒤를 확인 하여 체육복을 빌려준다.
  for i in range(1,n+1):
      if srudent [i] > 0 :
          frount = i - 1
          back = i + 1
          if student[front] < 0:
              student[i} -= 1
              student[front] += 1
          elif student[back] < 0:
             student[i] -= 1
             student[back] += 1

# 4. 채육복을 가지고 있는 학생의 수를 계산 한다.
answer = 0
for i in range(1, n+1):
    if student[i] ≥ 0:
        answer += 1

return answer

**
```

## K번째수

[https://programmers.co.kr/learn/courses/30/lessons/42748](프로그래머스)

```python
array = [1, 5, 2, 6, 3, 7, 4]	
commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
값 = [5, 6, 3]

def solution(array, commands):
    answer = []
    
    for i in commands:
        list_z  = i
        a = list_z[0]
        b = list_z[1]
        c = list_z[2]
        
        pro = array[a-1:b]
        pro.sort()
        for j in range(c):
            if j+1 == c:
                q = pro[j]
    
        answer.append(q)
    return answer
```

풀이방법: 

array 배열에서 a ~ b 번째 배열을 추출하고 그 값에서 c번째 수를 찾아서 출력하는 방법
배열은 시작이 0부터 이기 때문에 a - 1 을 해서 배열을 추출 그중 c 번째수를 새로운 배열에 넣어 출력 하였다.
Level1 문제중 가장먼저 검색없이 푼 문제이다.
조금더 풀어나갈수 있도록 노력 해야 겟다.
