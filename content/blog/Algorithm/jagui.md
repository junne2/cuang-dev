---
title: "재귀 알고리즘 _Algorithm"
date: "2022-05-04"
tags: ["Algorithm", "test", "code",'javascript']
description: "알고리즘 기초내용을 기록하는 곳입니다."
cover: "./algo.png"
---

# 재귀

어떤 문제를 해결하기 위해 알고리즘을 설계할 때 동일한 문제의 조금 더 작은 경우를 해결함으로써 <br />그 문제를 해결하는 것 으로  이런 테크닉을 **재귀** 라고 한다.

재귀의 대표적인 예는 팩토리얼 이다.

```jsx
// for 문 사용시
var factorial = function(n) {
    var result = 1;
    for(var i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
};
// 5! = 팩토리얼 1*2*3*4*5 를 가르킨다.
println("The value of 5! should be " + 5*4*3*2*1);
println("The value of 5! is " + factorial(5));

Program.assertEqual(factorial(5), 120);

// 재귀 사용시
var factorial = function(n) {
	// base case: 
	if (n === 0) {
    return 1;
}
	// recursive case:
    return n * factorial(n - 1);
}; 

println("The value of 0! is " + factorial(0) + ".");
println("The value of 5! is " + factorial(5) + ".");

Program.assertEqual(factorial(0), 1);
Program.assertEqual(factorial(5), 120);
```

## **회문(palindrome)**

앞에서 읽는 철자와 뒤에서 읽는 철자가 똑같은 단어로. 예를 들어 *rotor* 는 회문이지만 *motor*
 는 회문이 아니다.

회문을 확인 할수 있는 방법은

- 문자열에 글자가 없거나 하나의 글자만 있다면 회문
- 그 밖의 경우에는, 문자열의 첫 번째 글자와 마지막 글자를 비교
- 첫 번째 글자와 마지막 글자가 서로 다르다면 이 문자열은 회문이 아니다.
- 그렇지 않다면, 첫 번째 글자와 마지막 글자는 서로 같고 그 두 글자를 문자열 에서 삭제한 후, 남은 문자열이 회문인지 확인 하여 이 작은 문자열의 회문 여부 결과를 원래 문자열의 회문 여부 결과로 반환한다.

```jsx
// Returns the first character of the string str
// 첫번째 문자 골라내기
var firstCharacter = function(str) {
    return str.slice(0, 1);
};

// Returns the last character of a string str
// 끝문자 골라내기
var lastCharacter = function(str) {
    return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
// 첫 문자와 끝문자 제외하기
var middleCharacters = function(str) {
    return str.slice(1, -1);
};

// 재귀로 만들어 보자
var isPalindrome = function(str) {
    // base case #1
		// 길이가 0 or 1 인경우 바로 리턴
    if (str.length <= 1) {
        return true;
    }
    // base case #2
		// 첫문자와 끝이 같지 않다면 false리턴
    if (firstCharacter(str)!==lastCharacter(str)) {
        return false;
    }
    // recursive case
		// 맞다면 다시 한번 실행
    return isPalindrome(middleCharacters(str));
};

var checkPalindrome = function(str) {
    println("Is this word a palindrome? " + str);
    println(isPalindrome(str));
};

checkPalindrome("a");
Program.assertEqual(isPalindrome("a"), true);
checkPalindrome("motor");
Program.assertEqual(isPalindrome("motor"), false);
checkPalindrome("rotor");
Program.assertEqual(isPalindrome("rotor"), true);
```