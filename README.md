## 각각의 커밋과 함께 코드를 보면 이해하는데 도움이 되실겁니다.

## Props

props는 읽기 전용의 속성

부모에서 자식에게 전해주는 속성이고 읽을수만 있다.

부모컴포넌트인 Parents.js 에서 자식컴포넌트인 children.js 쪽으로
property인 name,age,introduce를 전달 해주는 코드이고,
첫번째 컴포넌트에는 introduce라는 props가 있고,
두번째 컴포넌트에는 없습니다.

그래서 첫번째 컴포넌트는 버튼은 클릭하면 (onClick시 introduce함수가 호출) 되면서 경고창이 나오지만, 두번째 컴포넌트는 props로 전달해주지 않았기 때문에 버튼을 클릭해도 함수는 동작하지 않습니다.

## State

state는 상태라는 뜻

컴포넌트 자체에서 가지고 있는 값이고 내가 원한다면 값을 변경할 수 있다.
state를 만들 땐
constructor 라는 메소드를 사용해야한다.
그 이후 super () 메소드 사용

constructor() {
super ()
this.state={};
}

이런 형식으로 작성해준다. 클래스형 컴포넌트에서만 !

this 라는 건 내가 속해있는 컴포넌트를 지칭하는 단어 ! (간략하게 표현 시)

console을 render안에서 찍는 이유는 ?
=> 리액트는 화면을 그릴 때 render라는 함수를 호출해서 화면을 띄운다.
