---
title: while문 정리 _python
date: "2022-03-24"
tags: ["python", "test", "code", "TIL"]
description: "python의 기초를 기록하는 곳입니다."
cover: "./python.png"
---


# while문

while문은 조건문이 참인 동안에 while문 아래의 문장이 반복해서 수행된다.

```python
>>> treeHit = 0
>>> while treeHit < 10:
...     treeHit = treeHit +1
...     print("나무를 %d번 찍었습니다." % treeHit)
...     if treeHit == 10:
...         print("나무 넘어갑니다.")
...
나무를 1번 찍었습니다.
나무를 2번 찍었습니다.
나무를 3번 찍었습니다.
나무를 4번 찍었습니다.
나무를 5번 찍었습니다.
나무를 6번 찍었습니다.
나무를 7번 찍었습니다.
나무를 8번 찍었습니다.
나무를 9번 찍었습니다.
나무를 10번 찍었습니다.
나무 넘어갑니다.
```

위 예에서 while문의 조건문은 `treeHit < 10`이다. 
treeHit가 10보다 작은 동안에 while문 안의 문장을 계속 수행한다. 
whlie문 안의 문장을 보면 제일 먼저 `treeHit = treeHit + 1`로 treeHit 값이 계속 1씩 증가한다. 
그리고 나무를 treeHit번만큼 찍었음을 알리는 문장을 출력하고 treeHit가 10이 되면 "나무 넘어갑니다."라는 문장을 출력한다. 
그러고 나면 `treeHit < 10` 조건문이 거짓이 되므로 while문을 빠져나가게 된다.

> ※ treeHit = treeHit + 1은 프로그래밍을 할 때 매우 자주 사용하는 기법이다. 
treeHit 값을 1만큼씩 증가시킬 목적으로 사용하며, treeHit += 1 처럼 사용하기도 한다.
> 

다음은 while문이 반복되는 과정을 순서대로 정리한 표이다. 이렇게 긴 과정을 소스 코드 단 5줄로 만들 수 있다니 놀랍지 않은가?

["열 번 찍어 안 넘어가는 나무 없다"](https://www.notion.so/c215d0742a2c40c59ab3f539c77e5cd9)

* 검색되어 찾은 내용을 그대로 정리한 자료 이다.
