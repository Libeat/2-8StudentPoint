const students = [
  { name: '강태수', id: 1 }, { name: '고정우', id: 2 },
  { name: '곽찬주', id: 3 }, { name: '권준서', id: 4 },
  { name: '김기민', id: 5 }, { name: '김은섭', id: 6 },
  { name: '김지후', id: 7 }, { name: '박민규', id: 8 },
  { name: '박정원', id: 9 }, { name: '배준후', id: 10 },
  { name: '백승찬', id: 11 }, { name: '서준영', id: 12 },
  { name: '송시욱', id: 13 }, { name: '신경용', id: 14 },
  { name: '신이정', id: 15 }, { name: '신정현', id: 16 },
  { name: '신정훈', id: 17 }, { name: '유재헌', id: 18 },
  { name: '윤요한', id: 19 }, { name: '이건희', id: 20 },
  { name: '이경훈', id: 21 }, { name: '이승찬', id: 22 },
  { name: '이재원', id: 23 }, { name: '이정민', id: 24 },
  { name: '이현호', id: 25 }, { name: '임채원', id: 26 },
  { name: '장우혁', id: 27 }, { name: '정상빈', id: 28 },
  { name: '정선균', id: 29 }, { name: '정승호', id: 30 },
  { name: '정용규', id: 31 }, { name: '정진오', id: 32 },
  { name: '조우성', id: 33 }, { name: '한영우', id: 34 },
  { name: '허준성', id: 35 }, { name: '홍정우', id: 36 },
  { name: '황지훈', id: 37 },
];


function generateStudentHTML(student) {
return `
  <div class="student-list" data-student-id="${student.id}">
  <h2>${student.name}</h2>
  <p>점수: <span class="score">0</span></p>
  <h3>점수 추가</h3>
  <button class="add_50-score">50점<br>추가</button>
  <button class="add_50-score">칭찬받음, 우수드립, 태도우수</button>
  <button class="add_100-score">교복지적X, 등교시간준수, 청소우수</button>
  <button class="add_300-score">다른반이김, 학급부서활동우수</button>
  <button class="add_500-score">성적우수,<br>성적향상</button>
  <button class="add_1000-score">체육대회우수,교외활동우수</button>
  <br>
  <h3>점수 감소</h3>
  <button class="subtract_50-score">50점<br>감소</button>
  <button class="subtract_600-score">간식 이용권, 음료 이용권</button>
  <button class="subtract_1200-score">늦은 출석권, 종례 면제권, 야자 면제권</button>
  <button class="subtract_2000-score">자리 우선 선정권, 청소 탈주 1회</button>
  <button class="reset-score">점수<br>초기화</button>
  </div>
`;
}

const studentContainer = document.querySelector("#student-container");

students.forEach(student => {
studentContainer.innerHTML += generateStudentHTML(student);
});

// 해당 학생의 점수를 로컬 스토리지에 저장
function saveScore(studentId, score) {
    const scores = JSON.parse(localStorage.getItem("student-scores") || "{}");
    scores[studentId] = score;
    localStorage.setItem("student-scores", JSON.stringify(scores));
  }
  
  // 해당 학생의 점수를 로컬 스토리지에서 불러오기
  function loadScore(studentId) {
    const scores = JSON.parse(localStorage.getItem("student-scores") || "{}");
    return scores[studentId] || 0;
  }
  

  // 모든 add_50-score 버튼 가져오기
  const add_50Buttons = document.querySelectorAll('.add_50-score');

  // 각 버튼을 순회하며 클릭 이벤트 리스너 추가
  add_50Buttons.forEach(button => {
    button.addEventListener('click', () => {
      const studentList = button.parentNode;
      const scoreSpan = studentList.querySelector('.score');
      const studentId = studentList.dataset.studentId; // 고유한 학생 ID 가져오기
      let score = parseInt(scoreSpan.textContent);
      score += 50;
      scoreSpan.textContent = score;

      // 변경된 점수를 로컬 스토리지에 저장
      saveScore(studentId, score);
    });
  });

  // 모든 add_100-score 버튼 가져오기
  const add_100Buttons = document.querySelectorAll('.add_100-score');

  // 각 버튼을 순회하며 클릭 이벤트 리스너 추가
  add_100Buttons.forEach(button => {
    button.addEventListener('click', () => {
      const studentList = button.parentNode;
      const scoreSpan = studentList.querySelector('.score');
      const studentId = studentList.dataset.studentId; // 고유한 학생 ID 가져오기
      let score = parseInt(scoreSpan.textContent);
      score += 100;
      scoreSpan.textContent = score;

      // 변경된 점수를 로컬 스토리지에 저장
      saveScore(studentId, score);
    });
  });
  
  // 모든 add_300-score 버튼 가져오기
  const add_300Buttons = document.querySelectorAll('.add_300-score');

  // 각 버튼을 순회하며 클릭 이벤트 리스너 추가
  add_300Buttons.forEach(button => {
    button.addEventListener('click', () => {
      const studentList = button.parentNode;
      const scoreSpan = studentList.querySelector('.score');
      const studentId = studentList.dataset.studentId; // 고유한 학생 ID 가져오기
      let score = parseInt(scoreSpan.textContent);
      score += 300;
      scoreSpan.textContent = score;

      // 변경된 점수를 로컬 스토리지에 저장
      saveScore(studentId, score);
    });
  });

  // 모든 add_500-score 버튼 가져오기
  const add_500Buttons = document.querySelectorAll('.add_500-score');

  // 각 버튼을 순회하며 클릭 이벤트 리스너 추가
  add_500Buttons.forEach(button => {
    button.addEventListener('click', () => {
      const studentList = button.parentNode;
      const scoreSpan = studentList.querySelector('.score');
      const studentId = studentList.dataset.studentId; // 고유한 학생 ID 가져오기
      let score = parseInt(scoreSpan.textContent);
      score += 500;
      scoreSpan.textContent = score;

      // 변경된 점수를 로컬 스토리지에 저장
      saveScore(studentId, score);
    });
  }); 

  // 모든 add_1000-score 버튼 가져오기
  const add_1000Buttons = document.querySelectorAll('.add_1000-score');

  // 각 버튼을 순회하며 클릭 이벤트 리스너 추가
  add_1000Buttons.forEach(button => {
    button.addEventListener('click', () => {
      const studentList = button.parentNode;
      const scoreSpan = studentList.querySelector('.score');
      const studentId = studentList.dataset.studentId; // 고유한 학생 ID 가져오기
      let score = parseInt(scoreSpan.textContent);
      score += 1000;
      scoreSpan.textContent = score;

      // 변경된 점수를 로컬 스토리지에 저장
      saveScore(studentId, score);
    });
  });

  // 모든 subtract_50-score 버튼 가져오기
  const subtract_50Buttons = document.querySelectorAll('.subtract_50-score');

  // 각 버튼을 순회하며 클릭 이벤트 리스너 추가
  subtract_50Buttons.forEach(button => {
    button.addEventListener('click', () => {
      const studentList = button.parentNode;
      const scoreSpan = studentList.querySelector('.score');
      const studentId = studentList.dataset.studentId; // 고유한 학생 ID 가져오기
      let score = parseInt(scoreSpan.textContent);

      if (score > 0) {
        score -= 50;
        scoreSpan.textContent = score;
      }

      // 변경된 점수를 로컬 스토리지에 저장
      saveScore(studentId, score);
    });
  });

  // 모든 subtract_600-score 버튼 가져오기
  const subtract_600Buttons = document.querySelectorAll('.subtract_600-score');

  // 각 버튼을 순회하며 클릭 이벤트 리스너 추가
  subtract_600Buttons.forEach(button => {
    button.addEventListener('click', () => {
      const studentList = button.parentNode;
      const scoreSpan = studentList.querySelector('.score');
      const studentId = studentList.dataset.studentId; // 고유한 학생 ID 가져오기
      let score = parseInt(scoreSpan.textContent);

      if (score >= 600) {
        score -= 600;
        scoreSpan.textContent = score;
      }

      // 변경된 점수를 로컬 스토리지에 저장
      saveScore(studentId, score);
    });
  });

  // 모든 subtract_1200-score 버튼 가져오기
  const subtract_1200Buttons = document.querySelectorAll('.subtract_1200-score');

  // 각 버튼을 순회하며 클릭 이벤트 리스너 추가
  subtract_1200Buttons.forEach(button => {
    button.addEventListener('click', () => {
      const studentList = button.parentNode;
      const scoreSpan = studentList.querySelector('.score');
      const studentId = studentList.dataset.studentId; // 고유한 학생 ID 가져오기
      let score = parseInt(scoreSpan.textContent);

      if (score >= 1200) {
        score -= 1200;
        scoreSpan.textContent = score;
      }

      // 변경된 점수를 로컬 스토리지에 저장
      saveScore(studentId, score);
    });
  });

  // 모든 subtract_2000-score 버튼 가져오기
  const subtract_2000Buttons = document.querySelectorAll('.subtract_2000-score');

  // 각 버튼을 순회하며 클릭 이벤트 리스너 추가
  subtract_2000Buttons.forEach(button => {
    button.addEventListener('click', () => {
      const studentList = button.parentNode;
      const scoreSpan = studentList.querySelector('.score');
      const studentId = studentList.dataset.studentId; // 고유한 학생 ID 가져오기
      let score = parseInt(scoreSpan.textContent);

      if (score >= 2000) {
        score -= 2000;
        scoreSpan.textContent = score;
      }

      // 변경된 점수를 로컬 스토리지에 저장
      saveScore(studentId, score);
    });
  });

  // 모든 reset-score 버튼 가져오기
  const resetButtons = document.querySelectorAll('.reset-score');

  // 각 버튼을 순회하며 클릭 이벤트 리스너 추가
  resetButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 사용자 확정 대화상자 추가
      const confirmed = window.confirm("정말로 점수를 초기화 하겠습니까?");

      if (confirmed) {
        const studentList = button.parentNode;
        const scoreSpan = studentList.querySelector('.score');
        const studentId = studentList.dataset.studentId;
        scoreSpan.textContent = 0;

        // 변경된 점수를 로컬 스토리지에 저장
        saveScore(studentId, 0);
      }
    });
  });


  // 페이지가 로드될 때, 각 학생의 저장된 점수를 불러와서 화면에 표시
  window.addEventListener('load', () => {
    const studentLists = document.querySelectorAll('.student-list');
    studentLists.forEach(studentList => {
      const studentId = studentList.dataset.studentId; // 고유한 학생 ID 가져오기
      const scoreSpan = studentList.querySelector('.score');
      const score = loadScore(studentId);
      scoreSpan.textContent = score;
    });
  });