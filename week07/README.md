# Hook
## Hook의 등장 배경
- 초기의 리액트에서는 주로 함수형 컴포넌트를 사용했음
	- 함수형 컴포넌트가 사용된 이유는 클래스형 컴포넌트의 단점 때문
	- 값의 상태, 생명 주기 관리에만 클래스형 컴포넌트를 사용했음
- 클래스형 컴포넌트의 단점
	- 코드의 구성이 어려움
	- 컴포넌트의 재사용성이 떨어짐
	- 컴파일 단계에서 코드 최적화가 어려움
	- 최신 기술의 적용이 효과적이지 못함
- 클래스형 컴포넌트의 단점을 보완해, 함수형 컴포넌트를 사용할 수 있도록 React Hook이 등장함
## React Hook
- 리액트 v16.8에서 도입됨
- 함수형 컴포넌트가 클래스형 컴포넌트의 기능을 사용할 수 있도록 해는 몇 가지 기능들
	- `useState`, `useEffect` 등
- Hook의 이름은 모두 `use`로 시작함
### 비교
- Class 컴포넌트
	- 생성자에서 state를 정의함
	- setState함수를 통해 state를 업데이트함
- Functional 컴포넌트
	- 기존 함수 컴포넌트에서는 state 정의, 컴포넌트 생명주기에 맞춰 실행할 수 없었음

## Hook 사용 장점
- 상태 로직 단순화
	- 함수형 컴포넌트에 상태를 추가함
	- 전반적인 로직 단순화, 코드의 이해가 쉬워짐
- 코드 재사용성 및 관심사 분리
	- 컴포넌트 계층 구조를 변경하지 않고도 여러 컴포넌트 간 상태 로직 재사용 가능
- 사이드 이펙트 감소
	- 함수형 컴포넌트에 생명주기와 유사한 기능 제공
	- 사이드 이펙트의 효율적 처리 가능

## Hook의 규칙
- 최상위에서만 Hook을 호출해야 함
	- 동일한 순서로 Hook이 호출되는 것을 보장됨
- 오직 React 함수 내에서만 Hook을 호출해야 함
	- React 함수 컴포넌트에서의 Hook 호출
	- Custom Hook에서의 Hook 호출

## Built-in React Hooks
- State Hooks
	- `useState`, `useReducer`
- Context Hooks
	- `useContext`
- Ref Hooks
	- `useRef`
	- `useImperativeHandle`
- Effect Hooks
	- `useEffect`
	- `useLayoutEffect`
	- `useInsertionEffect`
- Performance Hooks
	- `useMemo`
	- `useCallback`
	- `useTransition`
	- `useDferredValue`
- Resource Hooks
	- `use`
- Other Hooks
	- `useDebugValue`, `useId`, `useSyncExternalStore`
- Your own Hooks
	- `custom Hooks`

## useState
- 컴포넌트에 상태 변수를 추가할 수 있음
- `const [something, setSomething] = useState(initialState)`
	- 상태 변수를 선언하려면 구성 요소의 최상위 수준에서 `useState`를 호출함
- `[something, setSomething]` ( 상태 변수의 이름)
	- 상태 변수의 이름은 구조분해 할당을 이용함
- `initialState` (`useState()`의 파라미터)
	- 상태의 초기값
	- 초기화 함수처럼 처리됨
	- 초기 렌더링 이후에는 무시됨
- Returns (반환값)
	- 두 개의 값이 있는 배열을 반환함
	- 현재 상태
		- 첫 번째 렌더링 중에는 intialState 값임
	- set 함수
		- 상태를 다른 값으로 다시 변경, 리렌더링을 트리거할 수 있는 함수
- 상태 안에 객체와 배열을 만들 수 있음
### 주의 사항
- `useState`는 Hook이므로 컴포넌트의 최상위 혹은 자체 Hook에서만 호출할 수 있음
	- 루프나 조건 내에서는 호출 불가
		- 필요한 경우 새 구성 요소를 추출 후 상태를 해당 구성 요소로 옮겨서 사용
- Strict 모드에서는 초기화 함수를 두 번 호출함
	- 불순물을 찾는데 도움을 주기 위함
	- 프로덕션에는 영향을 주지 않음
		- 개발 전용 동작에 해당
	- 초기화 함수가 순수한 경우 동작에 영향을 주지 않음
- set 함수를 호출해도 이미 실행 중인 코드의 현재 상태는 변경 되지 않음
	- 다음 렌더링부터  `useState`에 반환되는 항목에만 영향을 줌





