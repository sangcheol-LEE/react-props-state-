## Props

props는 읽기 전용의 속성

부모에서 자식에게 전해주는 속성이고 읽을수만 있다.

부모컴포넌트인 Parents.js 에서 자식컴포넌트인 children.js 쪽으로
property인 name,age,introduce를 전달 해주는 코드이고,
첫번째 컴포넌트에는 introduce라는 props가 있고,
두번째 컴포넌트에는 없습니다.

그래서 첫번째 컴포넌트는 버튼은 클릭하면 (onClick시 introduce함수가 호출) 되면서 경고창이 나오지만, 두번째 컴포넌트는 props로 전달해주지 않았기 때문에 버튼을 클릭해도 함수는 동작하지 않습니다.
