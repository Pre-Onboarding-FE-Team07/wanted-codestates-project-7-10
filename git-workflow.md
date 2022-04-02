## Git workflow

### 기본 세팅

1. 팀장은 원격 저장소와 프로젝트를 작성할 로컬 저장소를 생성한다.

   1. `git init` 명령어로 로컬 저장소를 생성한다.
   2. 로컬 저장소의 main 브랜치에서 프로젝트 초기 세팅을 마치고 commit한다.
   3. `git remote add origin <원격 저장소 Git URL>` 명령어로 원격 저장소와 연결한다.
   4. `git push -u origin main` 명령어로 main 브랜치를 push한다.
   5. 로컬 저장소에서 dev 브랜치 생성 후 `git push origin dev` 명령어로 원격 저장소로 push한다.

2. 팀장은 원본 원격 저장소의 **기본 브랜치를 dev로 변경한다.**

3. 팀장과 팀원은 원본 원격 저장소를 fork하고, fork한 저장소를 로컬 저장소로 clone한다.

4. `git remote add upstream <원본 원격 저장소 Git URL>` 명령어로 원본 원격 저장소를 `upstream`으로 추가한다.

  - 작업 전 항상 `git pull upstream dev` 명령어로 최신 변경 사항을 업데이트한 후 시작한다.

---

### 작업 흐름

5. 로컬 저장소에서 **dev 브랜치임을 확인한 후** `feature/<issue_number>/<issue_name>` 형식으로 브랜치를 생성한다.

   - 예시: `git checkout -b feature/10/sign-in`
   - 브랜치를 분기하기 전 항상 `git pull upstream dev` 명령어를 실행하여 dev 브랜치를 업데이트한다.

6. feature 브랜치에서 작업을 마친 후 변경 사항을 commit한다.

   - commit 메시지는 [`.gitmessage.txt`](.gitmessage.txt)를 참고한다.
   - commit 메시지의 description 부분에서 이슈와 PR 연결을 위한 [keyword](https://docs.github.com/en/enterprise/2.16/user/github/managing-your-work-on-github/closing-issues-using-keywords)를 추가한다. (나중에 PR 본문에 작성해도 된다.)

7. 작업 중 혹은 작업을 마무리했는데 upstream의 dev 브랜치에 변경 사항이 있다면 아래 절차를 따른다.

   - 작업 진행 중이라면,

     1. 현재 진행 중인 파일 모두 저장한다. (저장하지 않은 파일이 있다면 나중에 충돌이 발생할 여지가 있다.)
     2. `git stash` 명령어를 통해 현재 작업 중이던 내용을 스택에 저장해둔다.
     3. `git checkout dev` 명령어로 dev 브랜치로 이동한다.
     4. `git pull upstream dev` 명령어로 dev 브랜치를 업데이트한다.
     5. `git checkout <작업 중이던 브랜치>` 명령어로 작업 중이던 브랜치로 돌아온다.
     6. `git merge dev` 명령어를 통해 현재 작업 중이던 브랜치를 업데이트한다. 충돌이 발생한다면 충돌된 부분을 수정한다.
     7. `git stash pop` 명령어를 통해 작업 중이던 코드를 스택에서 꺼낸다. 충돌이 발생한다면 충돌된 부분을 수정한다.
     8. 작업을 재개한다.

   - 모든 작업이 완료되었다면, 위의 과정에서 `c`번에서 `f`번까지 진행한다.

8. 작업한 내역을 `git push origin feature/...` 명령어로 fork한 원격 저장소에 push한다.

9. fork한 원격 저장소에서 작업한 브랜치를 원본 원격 저장소로 pull request한다.

   - main 브랜치가 아닌 **dev 브랜치**에 PR하고 있는지 반드시 확인한다.
   - `reviewers`에 모든 팀원을 추가하여 리뷰를 받을 수 있도록 하고, `assignee`에 자신을 추가하여 누가 작업했는지를 확인할 수 있도록 한다.
   - PR 내용은 최대한 자세하게 작성한다. UI가 있다면 시각적 자료를 하나 이상 포함하고, 컴포넌트 혹은 모듈의 경우 간략한 인터페이스 문서를 작성하여 팀원의 이해를 도울 수 있도록 한다.

10. `reviewers`에 추가된 팀원은 PR을 리뷰하고 코드 상태에 따라 comment 혹은 approve를 한다.

11. 전부 승인되면 해당 PR을 squash merge한다. 충돌이 발생할 경우, 로컬 저장소에서 수정하여 다시 commit하고 병합한다.
