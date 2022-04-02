# 검색어 추천이 있는 검색창 만들기
![검색어 추천이 있는 검색창 미리보기](https://user-images.githubusercontent.com/50618754/155432551-0090f0ee-fa9f-4080-a191-0b50c9e3f0ea.gif)

## 실행 방법
* 배포 사이트

[Humanscape Deploy🩺](https://wanted-codestates-project-7-10.surge.sh/)

* 로컬

1) `git clone https://github.com/Pre-Onboarding-FE-Team07/wanted-codestates-project-7-10.git`
2) `yarn`
3) `yarn start:dev`


## 프로젝트 구조
```
--📁 src 
  ---📁 assets ➡ 아이콘 공간
  ---📁 component ➡ 화면 공간
  -- 📁 hooks ➡ 키보드에 대한 함수 로직
  ---📁 redux ➡ 데이터를 불러오고 저장하는 공간
  ---📁 utilities ➡ API 호출 최적화
```

## 팀 멤버
| 이름   | 직책 | 역할                 |
| ----- | -- | -------------------- |
| [⚡️박진용](https://github.com/jinyongp) | 팀장 | 개발환경 구축 및 배포  |
| [✨김정훈](https://github.com/jeonghun10) | 팀원 | 키보드로 추천 검색어 이동 |
| [🎨문선경](https://github.com/dev-seomoon) | 팀원 | UI 컴포넌트 구현 및 반응형 적용 |
| [🚀심채윤](https://github.com/Lela12) | 팀원 | 검색어 추천 API 호출 - axios로 데이터 불러오기    |
| [✏️예효은](https://github.com/ye-yo) | 팀원 | API 호출 최적화 - Debounce 구현 |
| [🔨이예지](https://github.com/Lee-ye-ji) | 팀원 | 검색어 추천 API 호출 - Redux 사용  |
| [🚚최민우](https://github.com/exxocism) | 팀원 | API 호출 최적화           |

 
##  문선경

#### UI 컴포넌트 구현 (검색영역 구현)

#### 구현한 방법

컴포넌트 구성 :
```jsx
<SearchArea>
  <Title />
  <SearchBar />
  <RecommendArea />
</SearchArea>
```

- [https://clinicaltrialskorea.com/](https://clinicaltrialskorea.com/) 의 검색 영역을 클론코딩
- 검색어 추천 영역을 RecommendArea 컴포넌트로 구현
- 반응형 구현
- 동적인 기능 추가 시 참고할 수 있도록 일부 컴포넌트에 주석 첨부

추가한 패키지

- @svgr/webpack: 검색창의 돋보기 아이콘을 구현한 svg 파일을 React Component로 사용하기 위해서 추가함.

    - svg를 사용한 이유는 코드로 이루어져 있어 다른 이미지 파일(png, jpg 등)보다 용량이 적기 때문.
    - svg를 React Component로 사용한 이유는, props를 통해서 svg 속성을 변경할 수 있어 유연성이 보장되기 때문. [참고 사이트]([https://www.pluralsight.com/guides/how-to-load-svg-with-react-and-webpack](https://www.pluralsight.com/guides/how-to-load-svg-with-react-and-webpack))
    
- react-responsive : html/css만으로 반응형 웹 구현이 가능한 경우 미디어쿼리를 사용하면 되지만, 화면 크기에 따라 컴포넌트 구조도 일부 변경되어야 해서 react-responsive 패키지 사용.


#### 어려웠던 점 (에러 핸들링)

1. svg 파일을 인식하지 못하는 문제
   1. 웹팩에 file-loader 패키지 다운로드 및 webpack.config.js에 rule 추가
   2. { ReactComponent as ~ } 로 svg 파일 ReactComponent로 import하기
   3. 위와 같은 방식으로 해결하려고 했음.
   4. 그런데  default import만 가능하고 ReactComponent로 import하면 에러가 발생해서, [해당 사이트](https://stackoverflow.com/questions/62176521/react-svg-import-as-a-component-does-not-render)를 참고하여 @svgr/webpack 패키지를 다운로드하고 webpack.config.js에 rule을 추가하는 방식으로 다시 해결.


2. webpack.config.js Lint 에러 - require is not defined
   - `.eslintignore` 파일 추가 후 webpack.config.js 무시하도록 수정하여 해결.

3. eslint, prettier svg 파일 에러

   - eslint : svg 파일에 대해 다음 에러 발생 'React' must be in scope when using JSX  react/react-in-jsx-scope

   - prettier : [error] No parser could be inferred for file: src/assets/icon_search.svg

     ⇒ .eslintignore, .prettierignore 파일에 src/assets 폴더 (js, jsx 를 제외한 리소스 폴더)를 추가하여 해결함.

## 심채윤
#### 검색어 추천 API 호출 - axios로 데이터 불러오기

#### 추가한 패키지
- `yarn add axios`
  - axios 사용하기 위해서 패키지 추가함

#### 구현 기능
- 검색어 추천 API를 호출(axios로 데이터 불러오기)
- 캐시 기능 연결

#### 어려웠던 점
- axios를 통해 API를 불러와서 화면에 보여주는 작업이 쉽지 않아 많은 시간이 소요됨
  - axios GET메소드를 사용하여 검색어 추천 API 요청을 하여 데이터를 화면에 보여주었음
  - 또한, slice 함수를 통해 사용자가 입력 시 7개의 데이터가 나오게끔 함

- index.jsx 파일에 App.jsx 파일이 오류가 생겼음 
  - eslintrc.json 파일에 아래의 코드를 추가하여 해결 하였음
```json
"settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx"]
      }
    }
  }
```


## 이예지
#### 검색어 추천 API 호출 - Redux로 만들기

#### 구현한 방법

- `yarn add react-redux redux-thunk redux redux-promise` 패키지 설치 

- redux 파일의 구조를 다음과 같이 작성해서 로직을 구현하였습니다. 
```
--📁 redux
      -- 📃 store.js ➡ state가 관리되는 오직 하나의 공간
      -- 📁 actions
    	-- 📃 search.js ➡ 선언했던 SEARCH_RESULT 액션에 대한 함수 로직 공간
        -- 📃 types.js ➡ 상수 형태로 사용해야 할 액션의 이름들 저장
     -- 📁 reducers
    	-- 📃 index.js ➡  여러 개의 reducer를 관리하기 위한 저장소
        -- 📃 search.js ➡ search 관련된 reducer  
```
- Redux를 이용해 UI에 데이터 가져오고 state에 동작하는 코드 작성
```jsx
// redux의 action -> state 변경하는 로직
const dispatch = useDispatch();
// input에 있는 값 가져오는 onChange 함수
const onchangeValue = (e) => {
  dispatch(searchResult(e.target.value));
};
// 검색 버튼 누르면 동작하는 event함수
const onSearch = () => {};
...
<input
  type="text"
  placeholder="질환명을 입력해 주세요. "
  onChange={onchangeValue}
/>
```
* `RecommendArea.jsx` 검색 되어지는 부분에 대한 데이터 값 가져오기 작성
```jsx
const result = useSelector((state) => state.search.success);

  if (result && result.length === 0) {
    return (
      <RecommendAreaStyled show={show}>
        <Info>검색어 없음</Info>
      </RecommendAreaStyled>
    );
  }
  if (result && result.length > 0) {
    return (
      <RecommendAreaStyled show={show}>
        <Info>추천 검색어</Info>
        {result &&
          result.map((data, idx) => (
            <Recommends key={idx}>
              <Recommend id={data.id} content={data.name} />
            </Recommends>
          ))}
      </RecommendAreaStyled>
    );
  }
  return null;
```

#### 어려웠던 점 (에러 핸들링)

- 프로젝트 시 fork하여 새로운 브랜치를 만든 후 작업을 하는 부분이 생소해서 어려웠었습니다. 
ex) 앞서 팀원이 merge를 하면 기존에 작성했던 코드를 일일히 복사하는 어려움이 있었다. 팀원 분에게 요청하셨더니 `git remote add upstream <원본 원격 저장소>` 하는 방법을 알려주셔서 해결하였습니다!
- **[React] regeneratorRuntime is not defined 에러 해결** React에서 ES8 문법인 async/await를 사용해 비동기 함수를 작성하면 브라우저에서 다음과 같은 에러가 발생하였습니다. 이부분에 대한 오류는 애플리케이션이 컴파일될 때, `regeratorRuntime`이 async/await 문법을 번역하도록 했는데 해당 regenerator를 제공하지 않아서 발생한 에러입니다.
이 부분에 해결하기 위해 여러방법을 찾아봤지만, 결국 찾지 못하고 팀원 분에게 도움을 받아 `@babel/plugin-transform-runtime`패키지를 다운로드하여 `webpack.config.js`에 아래와 같은 코드를 작성할 수 있었습니다.
```js
{
  test: /\.jsx?$/,
  exclude: '/node_modules',
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            esmodules: true,
          },
        },
      ],
      '@babel/preset-react',
    ],
  },
},
{
  test: /\.svg$/,
  use: ['@svgr/webpack'],
},
```


## 김정훈
#### 키보드로 추천 검색어 이동
담당자 : 김정훈

#### 구현한 방법
onKeydown 이벤트핸들러를 이용하여 해당 키(ArrowUp, ArrowDown)가 눌렸을 경우 activeIndex 값을 증감 시켜 서버와 통신으로 받은 데이터와 일치 하는 인덱스 값에 백그라운드 컬러를 주어 구현

#### 어려웠던 점
1. 모듈화
  - 초기 코드 작성시 모듈화를 고려하지 않고 작성하여 같은 작업을 두번 하는 경우가 발생하였고 이후 팀원의 조언을 통해 작성한 코드를 모듈화하는 방법을 이용하여 협업을 진행함.

2. Git workflow
  - 여러사람과 협업을 진행하는 과정에서 Git 사용이 매끄럽지 않아 upstream에서 Pull하는 과정에서 에러가 발생함. 팀에서 정한 Git 규칙을 이용하여 흐름에 따라 진행하였고 에러를 줄일 수 있었음.


## 박진용

### 수행한 역할 및 작업

- 첫 번째 프로젝트로 팀장 역을 수행했습니다. 제일 먼저 적극적으로 나서서 팀원 분들과 함께 과제를 분석하고 기능을 나눴습니다. 그리고 대표로서 각자 구현하고자 희망하는 기능을 우선할 수 있도록 팀원의 역할을 배분했습니다. 저는 프로젝트 생성 및 초기화와 배포를 담당했고, 어려움을 겪은 팀원 분이 있을 때 함께하기로 했습니다.

- 원격 저장소 생성 및 설정과 프로젝트 생성 및 초기화를 진행했습니다.

  - 원격 저장소 설정은 자체 제작한 [Git Workflow](git-workflow.md)를 따랐습니다.

  - 번들러 사용에 익숙해지고자 CRA를 사용하지 않고 React와 Webpack을 설치하여 프로젝트를 직접 구성해보았습니다.

  - Eslint와 prettier를 추가하여 프로젝트의 코딩 스타일과 컨벤션이 일관성을 갖도록 했습니다. lint-staged와 husky의 조합을 통해 commit을 하기 전에 lint 작업이 알아서 수행될 수 있도록 자동화했습니다.

- 소통을 통해 틈틈이 프로젝트 진행사항을 파악했고 이슈 발생 시 어려움을 겪는 팀원과 함께하며 문제를 해결했습니다.

  - 작업 도중 해결되지 않는 문제를 오랜 시간 혼자 끌어안기보다 문제를 공유하여 빠른 해결을 우선할 수 있도록 독려했습니다.

  - 몇몇 팀원 분이 문제를 해결하지 못하고 있을 때 이를 공유하고 함께 참여하여 문제를 빠르게 해결하는 긍정적인 결과를 얻을 수 있었습니다.

- [자체 제작한 Git Workflow](git-workflow.md)를 공유하여 팀원들이 Git 작업을 수행할 때의 어려움을 해소했습니다.

  - Git workflow에 대해 숙련도가 부족한 팀원 분들에게 큰 도움이 되었습니다.

  - 특히, 작업을 진행 중인데 upstream 저장소에 최신 코드가 업데이트되었을 때 진행 중이던 작업에 최신 코드를 병합해야 하는 경우 많은 어려움을 겪었지만 해당 자료로 문제를 해결할 수 있었습니다.

- 팀원 간 작업이 긴밀하게 연결되어 있는 경우, 작업이 다른 팀원과 겹치지 않도록 모듈화 그리고 함수화를 강조했습니다.

  - 작업 간의 의존성을 최대한 제거하여 각 작업이 비동기적으로 진행될 수 있도록 했습니다. 각 작업이 동기적으로 진행되어 다른 팀원의 작업이 완료되기를 기다리느라 자신의 작업을 진행하지 못하고 있는 상황을 최소화하는 결과를 만들 수 있었습니다.

  - 마지막에 각자 구현한 기능을 합쳐 하나의 프로젝트로 완성할 때 각 팀원이 구현한 내용을 서로 공유하는 시간을 내어 각 팀원이 앞으로 어떤 작업을 수행하면 될지 이해를 도왔습니다.

- @jeonghun10 님이 작성해주신 `useUserInput` hook을 연결하여 추천 검색어를 키보드로 제어할 수 있도록 했고, 검색 결과를 redux state에 저장하여 전역에서 사용할 수 있도록 구현했습니다.

- 작업을 전부 완료하고 main 브랜치에 dev 브랜치를 병합한 후, [surge](https://surge.sh)를 통해 배포 완료했습니다.

### 어려웠던 점

- 초기에 프로젝트를 완벽하게 구성하지 못해서 팀원 분들이 작업을 진행할 때 webpack이나 lint 관련 문제를 해결하는데 많은 시간을 할애해야 했습니다. 팀 분위기가 아직 익숙치 않아 문제가 발생하더라도 빨리 공유되지 않는 문제 또한 있어서 같은 문제로 오랜 시간 정체되어 있는 경우도 발생했습니다. 때문에, 팀원 분들에게 어디까지 진행되었는지, 이슈가 발생하지는 않았는지 계속 순회 돌면서 팀원들과 소통하였고, 문제 발생 시 함께하며 해결하는 방법으로 시간 손해를 최소화했습니다.
  
- 각 팀원 간의 작업 의존성을 제거하는데 많은 고민이 필요했습니다. 의존성을 가진 다른 팀원의 코드가 필요한 상황일 때는 간단한 테스트 코드를 제작하도록 하거나 제공했습니다. 혹은 다른 팀원의 코드를 클론하여 임시로 테스트해보는 방법 또한 시도해보았습니다.

- 사전에 스타일이나 컨벤션에 대한 규칙을 정했지만, 짧은 시간 내에 빠르게 개발을 해야하니 규칙을 지키지 않는 경우가 많아졌습니다. 짧은 시간 내에 완료해야하는 프로젝트의 경우, 규칙을 간소화하거나 더욱 완벽한 가이드라인 및 강제성이 필요함을 깨달았습니다.

## 예효은
#### API 호출 최적화 - Debounce 구현

키보드 입력은 단시간에 지속적으로 이벤트가 발생하므로 키보드 입력시마다 API를 호출하게되면 서버 과부하가 발생할 수 있음. 이를 해결하기 위해서 API 호출 횟수를 줄이는 방법이 필요하며 이는 debounce 기법을 통해 해결할 수 있음.

#### Debounce
: 여러번 발생하는 함수에서 가장 마지막 함수만을 실행하는 기법으로 일정시간을 대기한 후 함수를 실행하며 그 시간 내에 같은 함수가 또 호출될 시에는 이전 함수는 실행되지 않음.

#### 구현
debounce 구현은 lodash 라이브러리를 사용하는 방법도 있으나 이번 프로젝트에서는 setTimeout 을 활용한 함수를 간단하게 직접 구현. 구현된 debounce 함수는 onchange 이벤트에 적용하여 API 호출함수가 마지막 이벤트에서만 실행되도록 함으로써 API 호출 횟수를 최적화함.

#### 어려웠던 점
debounce를 onchange 이벤트에 추가함으로써 검색 중일때는 이벤트가 실행되지 않고 검색의 마지막 이벤트만 실행되어 검색 중... 표시를 띄우지 못한다는 문제가 있었음. 이를 해결하기 위해서 검색결과와는 별개로 검색중임을 확인하는 isSearching state를 새로 만들었고, onchange 이벤트가 발생할 때 이 값을 true로 변경하여 '검색 중...' 문구가 나타나도록 만들었음.

## 최민우
#### API 호출 최적화

- 캐싱을 통하여 여러번 API 서버에 질의할 필요 없이 이미 저장된 값을 활용할 수 있도록 axios 라이브러리를 래핑하는 작업을 수행하였다.

#### 구현
- 캐싱을 구현하는 여러 방법이 있지만 새로고침등의 변화에도 유지되는 localStorage를 이용하는 것이 좋을 것 같다는 생각을 하였다.
- 쿼리를 JSON 형태로 비교하여 동일한 요청은 캐시에서 인출하여 사용하고, 그렇지 않은 경우는 요청을 보낸 뒤 응답을 저장하고 값을 돌려주는 방식으로 사용하였다.
- 이렇게 구현할 경우 다른 팀원들이 라이브러리 로드방식만 변경하면 동일하게 작성 가능하여 사용성이 편리하다.

#### 어려웠던 점
- 최초에는 모든 fetch 요청을 가로채는 방식으로 진행하려고 하였으나, 라이브러리의 로드 순서같은 것을 조정하는데 어려움을 겪어서 모든 통신을 통제하는데 어려움을 겪었고,
- 나중에 팀원이 axios를 사용하는 것을 확인하여 해당 방식에 맞게끔 조정하는 작업이 있었다.
- 결국 래퍼함수 형태로 작성하는 것이 적절할 것으로 판단하여 방향을 수정하였다.
