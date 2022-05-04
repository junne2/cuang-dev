---
title: "알고리즘의 기초 2 _Algorithm"
date: "2022-05-03"
tags: ["Algorithm", "test", "code",'javascript']
description: "알고리즘 기초내용을 기록하는 곳입니다."
cover: "./algo.png"
---

# 알고리즘의 기초 2

공부하기 좋을것같은 페이지 기록

[칸아카데미](https://ko.khanacademy.org/computing/computer-science/algorithms)

알고리즘 강의이다.

### 알고리즘에 필요한 기본 개념

- 시간 복잡도
    
    **문제를 해결하는데 걸리는 시간과 입력의 함수 관계를 나타냄**<br />
     프로그램을 작성할 때에 입력의 크기에 따라서 프로그램이 계산하는 횟수가 크게 달라진다. <br />입력된 자료의 양과 알고리즘 실행에 걸리는 시간 사이에는 어느 정도의 관계가 있다.
    
    복잡도를 나타낼 때에는 **Big O** 표기법을 이용한다. 
    
    ## BIC O 표기법 
    시간 복잡도|설명|예시
    --|--|--|
    O(1)	|상수 형태. n의 값에 상관없이 일정한 의 계산만 한다.|스택의 Push, Pop
    O(logn)	|로그 형태|이진트리
    O(n)	|선형|for 문
    O(nlogn)	|선형로그 형태|퀵 정렬(quick sort), 병합정렬(merge sort), 힙 정렬(heap Sort)
    O(n2),O(n3),⋯	|다차 형태|이중 for 문, 삽입정렬(insertion sort), 거품정렬(bubble sort), 선택정렬(selection sort)
    O(2n)	|지수 형태 |피보나치 수열
    O(n!)	|팩토리얼 형태
    
    맨 위에서부터 시간 복잡도 가 낮고 빠르고, 아래로 갈 수록 시간 복잡도 가 높고 느려진다. 
    
    제한된 시간 안에 올바르게 output 을 출력 하려면 시간 복잡도를 낮춰야 한다.
    

    <br />
    <br />

- **자료구조**
    
    **데이터 사이의 관계를 반영한 저장구조 및 그 조작 방법을 뜻한다.**<br />
     컴퓨터의 프로그램을 실행하면 CPU 에서 메모리로 데이터를 이동해서 처리하는데, <br />
    이 때 메모리를 효율적으로 사용하기 위해 **데이터에 맞는 특성의 자료구조를 사용하는** 것이 중요하다.
    
    자료구조의 구성
    
    - `Insert` : 데이터를 어떻게 **저장** 할 것인가
    - `Search` : 데이터를 어떻게 **탐색** 할 것인가
    - `Delete` : 데이터를 어떻게 **삭제** 할 것인가
    
    자료 구조의 분류
    
    - 단순구조 : 프로그래밍에서 사용되는 기본 데이터 타입
    - 선형구조 : 저장되는 자료의 전후관계가 1:1 (리스트, 스택, 큐 등)
    - 비선형구조 : 데이터 항목 사이의 관계가 1:n 또는 n:m (트리, 그래프 등)
    - 파일구조 : 서로 관련된 필드들로 구성된 레코드의 집합인 파일에 대한 자료구조

    <br />
    <br />

- **정렬**
    - 선택정렬
        
        자리가 정해져 첫번째  있으며 자리에 가장 작은 요소를 그리고 난 후에 두번째 자리에 그 다음 가장 작은 요소를 선택해 집어 넣으며 배열이 끝날때 까지 반복한다.
        
        오름 차순 정렬을 예로 들수있다.
        
    - 버블정렬
        
        현재 배열 요소와 그 다음 배열 요소를 비교한다음 조건에 맞으면 교환하는 식의 정렬이다. 
        
        배열의 0번 인덱스의 요소와 1번 인덱스의 요소를 비교하고, 그 다음 1번 인덱스의 요소와 2번 인덱스의 요소를 비교 한다. 
        
    - 삽입정렬
        
        우선 배열의 한 원소인 key 라는 값을 우선 가지고 있고, 이 key 를 알맞은 자리에 삽입하면 된다. key 보다 큰 값은 하나 씩 밀어버리고 key 보다 작은 값을 만났을 때 그 뒷자리에 삽입하는 것입니다.
        
    
    **시간복잡도**
    
    선택 정렬과 버블 정렬은 항상 **n^2**의 시간복잡도를 갖지만 삽입정렬은 조금 다르다. 
    
    삽입 정렬은 평균적으로 **n^2**이지만 만약 정렬된 원소들로 구성된 배열이 입력으로 들어오면 **n^2**의 시간 복잡도를 갖는다. for문의 루프가 1번만 실행하기 때문에 바로 현재 키보다 작은 원소를 만난다.<br />

    정렬|최적의 시간|평균
    --|--|--|
    선택 정렬	|n^2	|n^2    
    버블 정렬	|n^2	|n^2
    삽입 정렬	|n	    |n^2


< 참고 >
참고한 블로그 및 검색 자료를 정리 하였습니다.

[https://wayhome25.github.io/cs/2017/04/17/cs-18/](https://wayhome25.github.io/cs/2017/04/17/cs-18/)

[https://blog.yena.io/studynote/2018/11/14/Algorithm-Basic.html](https://blog.yena.io/studynote/2018/11/14/Algorithm-Basic.html)

[https://ko.wikipedia.org/wiki/알고리즘](https://ko.wikipedia.org/wiki/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)
[https://namu.wiki/w/점근 표기법](https://namu.wiki/w/%EC%A0%90%EA%B7%BC%20%ED%91%9C%EA%B8%B0%EB%B2%95)

[https://noahlogs.tistory.com/27](https://noahlogs.tistory.com/27)

[https://ko.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-o-notation](https://ko.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-o-notation)

[https://holika.tistory.com/29](https://holika.tistory.com/29)