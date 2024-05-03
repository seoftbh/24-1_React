### `useState` 예제
🔗 Link
![](./md/react_basic_usestate_ex.gif)
- 카운터
  - https://github.com/seoftbh/24-1_React/blob/4b6ec0c02575a3a5ea25880203b7d00ca1a039ee/week07plus/ch06ex/src/Counter.js#L1-L9
- 텍스트 입력 필드
  - https://github.com/seoftbh/24-1_React/blob/4b6ec0c02575a3a5ea25880203b7d00ca1a039ee/week07plus/ch06ex/src/MyInput.js#L1-L14
- 체크박스
  - https://github.com/seoftbh/24-1_React/blob/4b6ec0c02575a3a5ea25880203b7d00ca1a039ee/week07plus/ch06ex/src/MyCheckbox.js#L1-L16
- 입력 양식
  - https://github.com/seoftbh/24-1_React/blob/4b6ec0c02575a3a5ea25880203b7d00ca1a039ee/week07plus/ch06ex/src/Form.js#L1-L14

---
### 이전 상태를 기준으로 상태 업데이트
- `Counter2.js`의 `+3`은 set 함수를 3번 호출하지만 실행 중인 코드의 `age` 상태 변수가 업데이트 되지 않음
- `Counter3.js`는 updater function을 이용해 의도한 대로 3씩 증가함

🔗 Link
![](./md/react_useState_counter.gif)

### 객체를 이용한 상태
🔗 Link
![](./md/react_useState_form.gif)

### 배열을 이용한 상태
🔗 Link
![](./md/react_todolist.gif)

### `immer`라이브러리 사용
🔗 Link
![](./md/react_immer.gif)

### 초기 상태 패싱
- initializer 함수 패싱 
- 초기 상태를 직접 패싱

🔗 Link
![](./md/react_initializer_todo.gif)

### `key`로 상태 재설정
🔗 Link
![](./md/react_resetting_form.gif)

### 이전 렌더링에서 정보 저장
🔗 Link
![](./md/react_storing_count.gif)
