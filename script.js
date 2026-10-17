// 퀴즈 문제 데이터 (중3 역사 교육과정 기반)
const quizData = [
  {
    category: "임진왜란",
    question: "1. 1592년 일본이 조선을 침략하여 발생한 전쟁으로, 이순신의 해전과 의병의 활약으로 위기를 극복한 전쟁은 무엇인가요?",
    options: ["병자호란", "임진왜란", "정묘호란", "홍경래의 난"],
    answer: 1,
    hint: "1592년(임진년)에 일어난 조선 최대의 전란입니다.",
    explanation: "임진왜란(1592)은 도요토미 히데요시가 명나라로 가는 길을 빌린다는 구실(정명가도)로 조선을 침략하며 시작되었습니다."
  },
  {
    category: "임진왜란",
    question: "2. 임진왜란 당시 이순신 장군이 학익진 전법을 사용하여 일본 수군을 대파하고 남해의 제해권을 확보한 결정적인 대첩은?",
    options: ["살수대첩", "귀주대첩", "한산도 대첩", "행주대첩"],
    answer: 2,
    hint: "남해 한산도 앞바다에서 벌어진 3대 대첩 중 하나입니다.",
    explanation: "한산도 대첩에서 이순신은 학익진 전술로 적선을 섬멸하고 남해 제해권을 확보하여 전라도 곡창 지대를 지켜냈습니다."
  },
  {
    category: "임진왜란",
    question: "3. 임진왜란 중 조선 정부가 중앙군 전력 강화를 위해 창설한 군사 조직으로, 포수·살수·사수의 삼수병으로 구성된 것은?",
    options: ["별기군", "훈련도감", "무위영", "삼별초"],
    answer: 1,
    hint: "조선 후기 5군영 중 가장 먼저 설치된 직업 군인 조직입니다.",
    explanation: "선조 때 유성룡의 건의로 창설된 훈련도감은 급료를 받는 상비군 형태의 삼수병(포수, 살수, 사수)으로 편성되었습니다."
  },
  {
    category: "광해군의 정치",
    question: "4. 광해군이 명나라와 신흥 강성해지는 후금(청) 사이에서 실리를 취하고 전쟁을 피하기 위해 펼친 외교 정책은?",
    options: ["친명배금 정책", "중립 외교", "북벌론", "사대교린 정책"],
    answer: 1,
    hint: "어느 한쪽에 기울어지지 않고 실리를 챙기는 외교입니다.",
    explanation: "광해군은 명의 군사 요청을 받아 강홍립을 파견하면서도 후금과의 정면 충돌을 피하는 실리적 '중립 외교'를 펼쳤습니다."
  },
  {
    category: "광해군의 정치",
    question: "5. 광해군 때 방납의 폐단을 막기 위해 경기도에서 처음 실시되었으며, 토지 소유 정도(결수)에 따라 쌀·베·돈으로 공물을 바치게 한 법은?",
    options: ["영정법", "균역법", "대동법", "직전법"],
    answer: 2,
    hint: "특산물 대신 '쌀(대동미)' 등으로 조세를 통일하여 징수한 제도입니다.",
    explanation: "대동법은 특산물 대신 토지 1결당 쌀 12두를 거두게 하여 농민의 부담을 줄이고 국가 재정을 확보했습니다."
  },
  {
    category: "광해군의 정치",
    question: "6. 광해군의 중립 외교와 인목대비 폐위(폐모살제)에 반발하여 서인 세력이 광해군을 축출하고 인조를 왕으로 옹립한 사건은?",
    options: ["이괄의 난", "인조반정", "갑신정변", "무오사화"],
    answer: 1,
    hint: "1623년 서인들이 일으킨 정변입니다.",
    explanation: "서인 세력은 명에 대한 의리를 저버렸다는 명분과 패륜을 이유로 광해군을 몰아내는 '인조반정'을 일으켰습니다."
  },
  {
    category: "두 호란",
    question: "7. 인조반정 이후 서인 정권이 추진한 외교 정책으로, 명나라와 친하게 지내고 후금을 배척한다는 의미의 정책은?",
    options: ["친명배금", "북벌론", "중립외교", "통상개화"],
    answer: 0,
    hint: "'친할 친(親)', '배척할 배(排)' 자를 사용합니다.",
    explanation: "인조 정권은 '친명배금' 정책을 추진하여 후금의 반발을 샀고, 이는 정묘호란과 병자호란의 원인이 되었습니다."
  },
  {
    category: "두 호란",
    question: "8. 1636년 병자호란 당시 인조와 조정이 피신하여 청나라 군대에 맞서 45일간 항전하였으나 결국 항복하게 된 산성은?",
    options: ["북한산성", "남한산성", "행주산성", "진주산성"],
    answer: 1,
    hint: "경기도 광주시에 위치한 세계문화유산 산성입니다.",
    explanation: "인조는 청의 침략을 피해 남한산성으로 들어가 항전했으나, 추위와 식량 부족으로 삼전도에서 청 태종에게 항복했습니다."
  },
  {
    category: "두 호란",
    question: "9. 병자호란으로 청에 당한 굴욕을 씻고 청나라를 정벌하자고 주장한 사상으로, 효종과 송시열 등을 중심으로 추진된 것은?",
    options: ["북학론", "북벌론", "위정척사론", "동도서기론"],
    answer: 1,
    hint: "'북쪽(청)을 정벌하자'는 뜻입니다.",
    explanation: "청에 볼모로 잡혀갔다 돌아와 왕위에 오른 효종은 서인(송시열 등)과 함께 청을 정벌하자는 '북벌론'을 추진했습니다."
  },
  {
    category: "종합 복습",
    question: "10. 조선 후기 외교 흐름의 순서가 바르게 연결된 것은?",
    options: [
      "임진왜란 → 광해군 중립외교 → 친명배금 → 병자호란",
      "병자호란 → 임진왜란 → 광해군 중립외교 → 친명배금",
      "친명배금 → 임진왜란 → 병자호란 → 광해군 중립외교",
      "광해군 중립외교 → 임진왜란 → 병자호란 → 친명배금"
    ],
    answer: 0,
    hint: "일본의 침략(1592년)이 가장 먼저 일어났습니다.",
    explanation: "임진왜란(1592) 이후 광해군의 중립외교, 인조반정 후 친명배금 정책, 이에 따른 병자호란(1636) 순으로 전개되었습니다."
  }
];

// 상태 변수
let currentQuestionIndex = 0;
let score = 0;
let attemptCount = 0; // 현재 문제에 대한 시도 횟수
let isSolved = false;   // 현재 문제를 맞혔는지 여부

let categoryScores = {
  "임진왜란": { correct: 0, total: 0 },
  "광해군의 정치": { correct: 0, total: 0 },
  "두 호란": { correct: 0, total: 0 },
  "종합 복습": { correct: 0, total: 0 }
};

// DOM 요소
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const hintBtn = document.getElementById("hint-btn");
const restartBtn = document.getElementById("restart-btn");

const questionNumber = document.getElementById("question-number");
const progressBar = document.getElementById("progress-bar");
const currentScoreDisplay = document.getElementById("current-score");
const categoryTag = document.getElementById("category-tag");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

const feedbackMessage = document.getElementById("feedback-message");
const hintBox = document.getElementById("hint-box");
const hintText = document.getElementById("hint-text");
const explanationBox = document.getElementById("explanation-box");
const explanationText = document.getElementById("explanation-text");

const finalScoreDisplay = document.getElementById("final-score");
const evaluationMessage = document.getElementById("evaluation-message");
const categoryResults = document.getElementById("category-results");

// 이벤트 리스너 설정
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", goToNextQuestion);
hintBtn.addEventListener("click", toggleHint);
restartBtn.addEventListener("click", resetQuiz);

// 퀴즈 시작
function startQuiz() {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  quizScreen.classList.add("fade-in");
  
  currentQuestionIndex = 0;
  score = 0;
  
  for (let key in categoryScores) {
    categoryScores[key].correct = 0;
    categoryScores[key].total = 0;
  }
  
  loadQuestion();
}

// 문제 로드
function loadQuestion() {
  resetState();
  const currentQuiz = quizData[currentQuestionIndex];
  
  categoryScores[currentQuiz.category].total++;

  questionNumber.textContent = `문제 ${currentQuestionIndex + 1} / ${quizData.length}`;
  progressBar.style.width = `${((currentQuestionIndex + 1) / quizData.length) * 100}%`;
  currentScoreDisplay.textContent = score;
  
  categoryTag.textContent = currentQuiz.category;
  questionText.textContent = currentQuiz.question;
  hintText.textContent = currentQuiz.hint;
  explanationText.textContent = currentQuiz.explanation;

  currentQuiz.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.classList.add("option-btn");
    button.textContent = `${index + 1}. ${option}`;
    button.addEventListener("click", () => selectOption(index, button));
    optionsContainer.appendChild(button);
  });
}

// 상태 초기화
function resetState() {
  attemptCount = 0;
  isSolved = false;

  feedbackMessage.className = "feedback-message hidden";
  feedbackMessage.textContent = "";
  hintBox.classList.add("hidden");
  explanationBox.classList.add("hidden");
  nextBtn.classList.add("hidden");
  hintBtn.classList.remove("hidden");
  optionsContainer.innerHTML = "";
}

// 보기 클릭 처리
function selectOption(index, selectedBtn) {
  if (isSolved) return; // 이미 정답을 맞힌 문제라면 동작 안 함

  attemptCount++;
  const currentQuiz = quizData[currentQuestionIndex];

  // 1. 정답을 맞힌 경우
  if (index === currentQuiz.answer) {
    isSolved = true;
    selectedBtn.classList.add("correct");

    // 점수 계산 (첫 시도 10점, 재시도 후 정답 시 5점)
    if (attemptCount === 1) {
      score += 10;
      categoryScores[currentQuiz.category].correct++;
      feedbackMessage.textContent = "⭕ 정답입니다! (10점 획득)";
    } else {
      score += 5;
      categoryScores[currentQuiz.category].correct += 0.5; // 부분 점수 집계
      feedbackMessage.textContent = `⭕ 정답입니다! (${attemptCount}번째 시도로 정답! 5점 획득)`;
    }

    feedbackMessage.className = "feedback-message correct";
    currentScoreDisplay.textContent = score;

    // 모든 보기 버튼 비활성화
    const buttons = optionsContainer.querySelectorAll(".option-btn");
    buttons.forEach(btn => btn.disabled = true);

    // 정답 시 해설과 '다음 문제' 버튼 활성화
    explanationBox.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
    hintBtn.classList.add("hidden");
    hintBox.classList.add("hidden");

  } else {
    // 2. 오답을 선택한 경우 (다시 도전 유도)
    selectedBtn.classList.add("incorrect");
    selectedBtn.disabled = true; // 선택한 틀린 버튼만 비활성화

    feedbackMessage.textContent = "❌ 틀렸습니다. 다른 답을 선택해 보세요!";
    feedbackMessage.className = "feedback-message incorrect";
  }
}

// 힌트 토글
function toggleHint() {
  hintBox.classList.toggle("hidden");
}

// 다음 문제 이동
function goToNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

// 결과 화면 출력
function showResults() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  resultScreen.classList.add("fade-in");

  finalScoreDisplay.textContent = score;

  if (score >= 90) {
    evaluationMessage.textContent = "🎉 대단합니다! 조선 후기 외교와 전쟁 단원의 핵심을 완벽히 이해하셨네요!";
  } else if (score >= 60) {
    evaluationMessage.textContent = "👍 잘했습니다! 스스로 문제를 해결하며 부족한 부분을 잘 보완했습니다.";
  } else {
    evaluationMessage.textContent = "📚 끝까지 포기하지 않고 풀어낸 노력이 훌륭합니다! 교과서를 다시 살펴보고 재도전해 보세요.";
  }

  categoryResults.innerHTML = "";
  for (let category in categoryScores) {
    if (categoryScores[category].total > 0) {
      const item = document.createElement("div");
      item.classList.add("category-item");
      
      // 이해도 표시
      const categoryScore = Math.min(100, Math.round((categoryScores[category].correct / categoryScores[category].total) * 100));
      item.innerHTML = `
        <span><strong>${category}</strong></span>
        <span>이해도: ${categoryScore}%</span>
      `;
      categoryResults.appendChild(item);
    }
  }
}

// 재시작
function resetQuiz() {
  resultScreen.classList.add("hidden");
  startQuiz();
}
