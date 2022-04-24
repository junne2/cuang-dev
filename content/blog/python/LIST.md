---
title: List _python
date: "2022-03-25"
tags: ["python", "test", "code", "TIL"]
description: "python의 기초를 기록하는 곳입니다."
cover: "./python.png"
---

# List 

리스트는 숫자나 문자 등의 요소들을 집합하여 표기하기 편하다.<br />
`리스트명 = [요소1, 요소2, 요소3, ...]` 으로 구성된다.<br />
비어있는 리스트가 될수도 있고 여러 요솟 값을 가질수 있다.

### 생성 방법
1. `a = [1, 2, 3]` 처럼 직접 선언하는 방법
2. `a = list()` 처럼 함수로 선언하는 방법

### 리스트의 종류
```python

>>> a = ["apple", "banana", "tomato"]  // 1차원 리스트

>>> a = [[10, 20], [30, 40], [50, 60]] // 2차원 리스트
...
```
### 리스트 자리값 확인 하는법

`a = [1, 2, 3, 4, 5, 6, 7, 8, 9]`
a라는 리스트가 있을때  첫 요소를 0 으로 시작하여 계산한다.<br />
ex > <br />
a[0] = 1<br />
a[1] = 2<br />
....

List 의 값 = 1 2 3 4 5<br /> 
    위치값  = 0 1 2 3 4<br />
으로 확인 이 가능 하다.

## 슬라이싱

```python

a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
a[0:2]
[1, 2]

// 문자 슬라이싱
a = 12345
a[0:2]
"12"

```
슬라이싱이란 나눈다. 라는 뜻으로 내가 원하는 범위를 가져올수 있다.<br />
`a [ x : y ]` 으로 표기 되는데 a = list 의 이름 x 는 시작점 y는 자리의 끝 점을 뜻한다.

## 정렬
파이썬 리스트를 수정하는 내장 `list.sort()` 메서드가 있다.<br />
또한 새로운 정렬된 리스트를 만드는 `sorted()` 내장 함수가 있다.

### 오름차순으로 정렬 하는 경우
```python
sorted([5, 2, 3, 1, 4])
[1, 2, 3, 4, 5]

a = [5, 2, 3, 1, 4]
a.sort()
a
[1, 2, 3, 4, 5]
```
일반적으로 `sorted()` 가 더 편리하다 <br />
 하지만 원래 목록이 필요하지 않다면, sort가 더 효율적이다. <br />
다른 점은 `list.sort()` 메서드가 리스트에게만 정의된다는 것이다. <br />
sorted() 함수는 모든 이터러블을 받아들입니다. ex) 딕셔너리와 같은 값을 받을 수 있다. 

# 키 함수

`list.sort()`와 `sorted()`는 모두 비교하기 전에 각 리스트 요소에 대해 호출할 함수(또는 다른 콜러블)를 지정하는 *key* 매개 변수를 가지고 있습니다.

예를 들어, 다음은 대소 문자를 구분하지 않는 문자열 비교입니다:


```python
sorted("Hello world to Python".split(), key=str.lower)
['Hello', 'Python', 'to', 'world']

*key* 매개 변수의 값은 단일 인자를 취하고 정렬 목적으로 사용할 키를 반환하는 함수(또는 다른 콜러블)여야 한다.
일반적인 패턴은 객체의 인덱스 중 일부를 키로 사용하여 복잡한 객체를 정렬하는 것이다.

ex ) 

student_tuples = [
    ('john', 'A', 15),
    ('jane', 'B', 12),
    ('dave', 'B', 10),
]
sorted(student_tuples, key=**lambda** student: student[2]) 
age 순으로 정렬시
[('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]

같은 기법이 이름있는 속성을 갖는 객체에서도 작동한다. 

ex )

class Student:
    def __init__(self, name, grade, age):
        self.name = name
        self.grade = grade
        self.age = age
    def __repr__(self):
        return repr((self.name, self.grade, self.age))

student_objects = [
    Student('john', 'A', 15),
    Student('jane', 'B', 12),
    Student('dave', 'B', 10),
]
sorted(student_objects, key=**lambda** student: student.age)
age 순으로 정렬시
[('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]
```
해당 내용들은 여러 강의와 블로그의 글을 기억하기위해 정리해 올린 글이다.
리스트에 관한 내용이 추가되면 이 글에 추가하여 작업할 예정이다.