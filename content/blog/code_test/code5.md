---
title: 전화번호 목록 _python
date: "2022-03-14"
tags: ["Algorithm", "test", "code"]
description: "알고리즘 테스트코드를 기록하는 곳입니다."
cover: "./main1.jpg"
---


## 전화번호 목록

```python
phone_book = ["119", "97674223", "1195524421"],["123","456","789"],["12","123","1235","567","88"]
값 = false, true, false

def solution(phone_book):
    answer = True
    phone_book.sort()
    for i in range(len(phone_book)-1):
        A = phone_book[i+1]
        B = phone_book[i]
        if B in A:
            answer = False
            break
    return answer
	_________________________13 번 실패 효율100 95%
```

문제의 효율은 잡았지만 정확한 답은 아니였다.

```python
def solution(phone_book):
    answer = True
    phone_book.sort()
    for i in range(len(phone_book)-1):
        if phone_book[i] in phone_book[i+1]:
            return False
    return answer

```
