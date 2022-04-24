---
title: 신규 아이디 추천 _python
date: "2022-03-18"
tags: ["Algorithm", "test", "code"]
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---

# 신규 아이디 추천

[https://programmers.co.kr/learn/courses/30/lessons/72410](https://programmers.co.kr/learn/courses/30/lessons/72410)

```python
no	new_id	                      result
예1	"...!@BaT#*..y.abcdefghijklm"	"bat.y.abcdefghi"
예2	"z-+.^."	                    "z--"
예3	"=.="	                        "aaa"
예4	"123_.def"	                  "123_.def"
예5	"abcdefghijklmn.p"	          "abcdefghijklmn"

def solution(new_id):
    answer = ''
#     1 대문자를 소문자로 전환 한다.
    new_id = new_id.lower()
#     2 대문자 소문자 숫자 -_. 만 두고 제거한다.
    import re
    new_id = re.sub("[^A-Za-z0-9-_.]","",new_id)
#     3 .. 마침표가 연달아 있으면 . 한개로 바꾼다.
    while new_id.count('..') != 0:
        new_id = new_id.replace("..",".")
#     4 문자의 시작과 끝에 .가 있으면 지운다.
    new_id = new_id.strip('.')
#     5 만약 글자의  길이가  0인경우 'a'를 대입한다.
    if len(new_id) == 0:
        new_id = "a"
#     6 글자수가 16자리 이상이면 15자리로 자르고 뒤에 마침표가 있으면 제거한다.
    new_id = new_id[:15].strip('.')
#     7 글자수가 2 이하이면 마지막 글자를 3이될때까지 붙여준다.
    if len(new_id) < 3:
        M = new_id[-1]
        while len(new_id) != 3:
             new_id = new_id + M
    
    answer = new_id
    return answer
```

풀이 방법:

해당 문제는 기본 문자 열에 관한 문제이다.

조건이 7개 정해져 있어서 조건 별로 코드를 적어보았다.

1. 대소문자 전환은 upper(), lower() 으로 적용한다.

2. 내가 원하는 문자외에는 지우는 방법으로 re 가 있다.

    1. ^표시는 그문자만 가능하게 한다는 표시 여서 뺄 경우 문자에 포함된 부분을 제거 한다.

3. ‘.’가 연달아 있는 것을 한 개로 줄이는작업

4. ‘.’ 가 처음과 끝에 있으면 지우는 작업으로 strip(’.’)을 사용하였다.

5. 글자를 다 지운경우를 대비하여 ‘a’를 추가한다.

6. 글자수를 제한하기위해 슬라이싱을 사용하였다.

7. 글자수를 3이상으로 늘리기 위해 마지막 문자를 붙여 반복하였다.