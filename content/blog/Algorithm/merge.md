---
title: "분할 정복식 알고리즘 _Algorithm"
date: "2022-05-05"
tags: ["Algorithm", "test", "code",'javascript']
description: "알고리즘 기초내용을 기록하는 곳입니다."
cover: "./algo.png"
---

# **분할 정복식 알고리즘**

칸아카데미의 글과  검색 결과를 추가하여 정리한 내용이다.

**선택 정렬**과 **삽입 정렬**은 최대 실행시간 **Θ(*n^*2)**  으로 나타낼수 있다.

하지만 입력 배열의 크기가 큰 경우 알고리즘을 정렬하는데 시간이 많이 걸린다.

그것을 대비하기위해 병합 정렬과 퀵정렬을 사용하고있는데 이를 **분할 정복식 알고리즘** 이라고 한다.

| 알고리즘 | 최대 실행 시간 | 최소 실행 시간 | 평균 실행 시간 |
| --- | --- | --- | --- |
| 선택 정렬 | Θ(n^2) | Θ(n^2) | Θ(n^2) |
| 삽입 정렬 | Θ(n^2) | Θ(n) | Θ(n^2) |
| 병합 정렬 | Θ(n lg n) | Θ(n lg n) | Θ(n lg n) |
| 빠른 정렬 | Θ(n^2) | Θ(n lg n) | Θ(n lg n) |

![병합정렬.svg](./%EB%B3%91%ED%95%A9%EC%A0%95%EB%A0%AC.svg)

빨간선 = **Θ(*n^*2)   파란선  =  Θ(*n lg n*)    초록선 = Θ(*n*)**

## 분할정복

나눌수 없을때까지 나누어 각각 풀면서 다시 합병하여 문제의 답을 얻는 알고리즘

1. **분할**: 원래 문제를 분할하여 비슷한 유형의 더 작은 하위 문제들로 나눈다.
2. **정복**: 하위 문제 각각을 재귀적으로 해결하며 하위 문제의 규모가 충분히 작으면 문제를 탈출 조건으로 놓고 본다.
3. **합치기**: 하위 문제들의 답을 합쳐서 원래 문제를 해결한다.

### 병합 정렬

궁극적인 목표는 전체 배열을 정렬 하는 것으로 문제를 작은 2개의 문제로 분리하고 각각을 해결한 다음, 

결과를 모아서 원래의 문제를 해결하는 전략이다.
분할 정복 방법은 대개 순환 호출을 이용하여 구현한다.

![병합.png](./%EB%B3%91%ED%95%A9.png)
**병합 정렬의 순서**

1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 
2. 그렇지 않은 경우에 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다
3. 각 부분 리스트를 재귀적 으로 합병 정렬을 이용해 정렬한다
4. 두 부분 리스트를 다시 하나의 정렬

```jsx
// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
var merge = function(array, p, q, r) {
    // This code has been purposefully obfuscated,
    //  as you'll write it yourself in next challenge.
    var a=[],b=[],c=p,d,e;for(d=0;c<=q;d++,c++){a[d]=array[c];}
		for(e=0;c<=r;e++,c++){b[e]=array[c];}c=p;
		for(e=d=0;d<a.length&&e<b.length;)
		{if(a[d]<b[e]){array[c]=a[d];d++;} 
		else {array[c]=b[e]; e++;}c++; }
		for(;d<a.length;){array[c]=a[d];d++;c++;}
		for(;e<b.length;){array[c]=b[e];e++;c++;}
};

// Takes in an array and recursively merge sorts it
var mergeSort = function(array, p, r) {
    if (p <r){
        var cha = Math.floor((p+r)/2);
        mergeSort(array,p,cha);
        mergeSort(array,cha+1,r);
        merge(array,p,cha,r);
    }else {
        return array;
    }
};

var array = [14, 7, 3, 12, 9, 11, 6, 2];
mergeSort(array, 0, array.length-1);
println("Array after sorting: " + array);
Program.assertEqual(array, [2, 3, 6, 7, 9, 11, 12, 14]);
```

## 선형시간  병합하기

```jsx
// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
var merge = function(array, p, q, r) {
    var lowHalf = [];
    var highHalf = [];

    var k = p;
    var i;
    var j;
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }

    k = p;
    i = 0;
    j = 0;
    
    // Repeatedly compare the lowest untaken element in
    //  lowHalf with the lowest untaken element in highHalf
    //  and copy the lower of the two back into array
    while (i < lowHalf.length && j < highHalf.length)
    {
        if (lowHalf[i] < highHalf[j])
        {
            array[k] = lowHalf[i];
            i++;
        }
        else
        {
            array[k] = highHalf[j];
            j++;
        }
 
        k++;
    }
    while (i < lowHalf.length)
    {
        array[k] = lowHalf[i];
        i++; k++;
    }
    while (j < highHalf.length)
    {
        array[k] = highHalf[j];
        j++; k++;
    }
    
    // Once one of lowHalf and highHalf has been fully copied
    //  back into array, copy the remaining elements from the
    //  other temporary array back into the array
    
};

var array = [3, 7, 12, 14, 2, 6, 9, 11];
merge(array, 0,
    Math.floor((0 + array.length-1) / 2),
    array.length-1);
println("Array after merging: " + array);
Program.assertEqual(array, [2, 3, 6, 7, 9, 11, 12, 14]);
```

## 퀵정렬

퀵 정렬은 불안정 정렬 에 속하며, 다른 원소와의 비교만으로 정렬을 수행하는 비교 정렬 에 속한다

분할 정복 알고리즘의 하나로, 평균적으로 매우 빠른 수행 속도를 자랑하는 정렬 방법

합병 정렬(merge sort)과 달리 퀵 정렬은 리스트를 비균등하게 분할한다.

![퀵.png](./%ED%80%B5.png)

병합 정렬과의 차이점

빠른 정렬은 제자리에서 수행됩니다. 그리고 최악의 경우에 대한 수행 시간은 선택 정렬이나 삽입 정렬처럼Θ(n^2) 로 좋지 않다. 하지만 빠른 정렬의 평균 수행 시간은 병합 정렬만큼 좋은 Θ(n log_2 n)이다.

**퀵정렬 순서**

1. 리스트 안에 있는 한 요소를 선택한다. 이렇게 고른 원소를 피벗(pivot) 이라고 한다.
2. 피벗을 기준으로 피벗보다 작은 요소들은 모두 피벗의 왼쪽으로 옮겨지고 피벗보다 큰 요소들은 모두 피벗의 오른쪽으로 옮겨진다. (피벗을 중심으로 왼쪽: 피벗보다 작은 요소들, 오른쪽: 피벗보다 큰 요소들)
피벗을 제외한 왼쪽 리스트와 오른쪽 리스트를 다시 정렬한다.
3. 분할된 부분 리스트에 대하여 순환 호출 을 이용하여 정렬을 반복한다.
    
    부분 리스트에서도 다시 피벗을 정하고 피벗을 기준으로 2개의 부분 리스트로 나누는 과정을 반복한다.
    
4. 부분 리스트들이 더 이상 분할이 불가능할 때까지 반복한다.
    
    리스트의 크기가 0이나 1이 될 때까지 반복한다.
    

```jsx
// This function partitions given array and returns 
//  the index of the pivot.
var partition=function(array, p, r){
    // This code has been purposefully obfuscated,
    // as you will implement it yourself in next challenge
    var e=array,t=p,n=r;var r=function(e,t,n){var r=e[t];e[t]=e[n];e[n]=r;};var i=t;for(var s=t;s<n;s++){if(e[s]<=e[n]){r(e,s,i);i++;}}r(e,n,i);return i;
};

var quickSort = function(array, p, r) {
    if ( p < r ) {
        var d = partition(array,p,r);
        quickSort(array,p,d-1);
        quickSort(array,d+1,r);
    }
};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length-1);
println("Array after sorting: " + array);
Program.assertEqual(array, [2,3,5,6,7,9,10,11,12,14]);
```

파티션 구현 하기

```jsx

// Swaps two items in an array, changing the original array
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var partition = function(array, p, r) {
    var pivot = p;
    for (var i = p; i < r; i++) {
        if (array[i]<= array[r]) {
            swap(array,i,pivot);
            pivot++;
        }
    }
    swap(array, r, pivot);
    return pivot;
};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
var q = partition(array, 0, array.length-1);
println("Array after partitioning: " + array);
Program.assertEqual(q, 4);
Program.assertEqual(array, [5, 2, 3, 4, 6, 7, 14, 9, 10, 11, 12]);
```

참고

[https://ko.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort](https://ko.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort)

[https://gmlwjd9405.github.io/2018/05/10/algorithm-quick-sort.html](https://gmlwjd9405.github.io/2018/05/10/algorithm-quick-sort.html)

[https://im-developer.tistory.com/135](https://im-developer.tistory.com/135)

[https://grab-algorithm.netlify.app/algorithms/quick-sort/](https://grab-algorithm.netlify.app/algorithms/quick-sort/)