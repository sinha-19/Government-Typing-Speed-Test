import React, { useState, useEffect, useRef } from 'react';
import './App.css';
function App() {
const textSamples = [
  "The Government of India, established on 15th August 1947, is the apex authority that governs the nation through its three main branches: the Executive, the Legislature, and the Judiciary. The Executive branch, led by the President and administered by the Prime Minister and Cabinet Ministers, ensures day-to-day administration and policy implementation. The Legislature, comprising the Rajya Sabha and the Lok Sabha, is responsible for creating laws, debating policies, and representing the citizens. The Judiciary, headed by the Supreme Court, ensures justice, interprets laws, and maintains constitutional order. Over the years, the Government of India has introduced several reforms, infrastructure initiatives, and welfare schemes, aimed at improving the quality of life for its 1.4 billion citizens. As part of its recruitment process for clerical and support staff, the government conducts various competitive examinations such as SSC CGL, CHSL, and RRB NTPC, where a typing test is often mandatory. These typing tests are designed to evaluate a candidate’s speed, accuracy, and familiarity with official formats, including special characters like &, %, @, and reference codes such as Notification No. 39011/2022-GAD issued on 12/01/2025.",
  "The Staff Selection Commission, widely known as SSC, functions under the Department of Personnel and Training (DoPT) and is primarily responsible for recruiting candidates to non-gazetted posts in various ministries and departments of the Indian government. It conducts multiple recruitment exams annually, including SSC CGL, CHSL, MTS, and others, for positions like Lower Division Clerk (LDC), Data Entry Operator (DEO), and Assistant roles. In addition to written tests, candidates applying for clerical and data entry posts are required to qualify in the Typing Skill Test, which demands a minimum typing speed of 35 words per minute in English or 30 words per minute in Hindi. Candidates must use a standard QWERTY keyboard and are prohibited from using any typing assistance tools like auto-correct or spell-check. Furthermore, improper use of punctuation, such as using a colon instead of a semicolon, or formatting errors can result in a deduction of marks. All documentation, including scanned certificates and identification, must be submitted online through the official SSC portal at ssc.nic.in, generally within seven days of result declaration.",
  "Typing speed and accuracy are critical skills for numerous clerical positions within the government, such as Stenographer Grade D, Junior Secretariat Assistant, and Postal Assistant. These roles often require frequent documentation, note-taking, report generation, and database entry. Candidates must type with precision, maintaining formatting, punctuation, capitalization, and line structure. Sample inputs can include administrative content such as Subject: Annual Procurement Report, FY-2024-25 or numeric data like ₹12,450.75 and dates such as 02-Feb-2025. Email addresses, such as report.admin@gov.in, and sentence case formatting must also be typed correctly. Use of the CAPS LOCK key for full paragraphs is discouraged, and instead, the SHIFT key should be used for selective capitalization. Candidates are evaluated not just on raw speed but also on how closely their typed content mirrors the original passage, including adherence to punctuation, spacing, and special characters.",
  "In government exams for clerical posts like Data Entry Operator (DEO), candidates are evaluated based on the number of key depressions per hour (KDPH) in addition to their typing speed. The standard requirement is 8,000 key depressions per hour, which translates to approximately 133 keystrokes per minute or around 2,000 characters in 15 minutes. Each character typed—including letters, digits, punctuation marks, and spaces—is counted as one key depression. Candidates are expected to input structured data such as Employee ID: HR2025/DEL/0043, PAN: ABCDE1234F, and dates like 05/06/2022 with a minimum of 95% accuracy. Mistakes such as extra spaces, missing symbols, or wrong capitalization can significantly impact the final evaluation. The typing test mimics real-world data entry tasks encountered in government offices and ensures that selected candidates are capable of handling large volumes of structured and semi-structured data efficiently.",
  "The Railway Recruitment Board (RRB), operating under the Ministry of Railways, is responsible for hiring staff for various clerical and typist positions across multiple regional zones, including East Central Railway, Western Railway, and Northern Railway. As part of the recruitment process, candidates are required to undergo a Typing Skill Test, where they must transcribe content with high accuracy and speed. Sample inputs include ticketing and scheduling information such as Train No: 12345, Departure: 09:45 hrs, Arrival: 18:30 hrs, Class: 2A, Fare: ₹1,345.00. They may also be required to type memo and circular formats like Memo No: RRB/ADMIN/25/022 dated 11-Mar-2025. Any deviation from the original passage, including the misuse of the TAB or ENTER keys, can result in penalties. This typing test ensures that clerical candidates can effectively manage office tasks involving precise data handling and official communication.",
  "Various central government departments such as the Income Tax Department, the Central Bureau of Investigation (CBI), and the Ministry of Defence employ clerical staff for roles that demand excellent typing skills. These include drafting notices, recording case details, and issuing official correspondences. Candidates might be tested on their ability to enter sensitive and structured information such as Case No: CBI/DEL/2025/0145, Sanction Order No: 89/Gov/IT/2024-25, or Cheque No: 005432 dated 12-Apr-2025. They must also handle currency and alphanumeric formats correctly, such as ₹9,87,654.32 or $3,500.00. The typing test simulates daily office scenarios where precision is crucial, and even minor mistakes in data entry can lead to administrative delays or errors in documentation. Candidates are assessed on both their typing speed and their ability to accurately replicate complex information under time constraints.",
  "Public Sector Undertakings (PSUs) like Bharat Heavy Electricals Limited (BHEL), Oil and Natural Gas Corporation (ONGC), and National Thermal Power Corporation (NTPC) require clerical staff who are proficient in typing administrative and financial documents. These assessments often include entries like Invoice ID: INV/BHEL/051-2025, GSTIN: 07ABCDE1234F1Z5, and Email: hr@ongc.co.in. Candidates may also need to replicate formatted data tables, bullet points, and financial summaries. Accuracy in decimal placement, such as ₹10.50 instead of ₹10.005, and correct use of uppercase letters and special characters is essential. The test evaluates a candidate's ability to handle documentation used in tenders, billing, audits, and inter-departmental communication. Mastery of typing ensures minimal errors in financial reporting and smooth office operations within these organizations.",
  "Typing tests are an essential component of the recruitment process for clerical and probationary officer (PO) positions in banks through exams conducted by the Institute of Banking Personnel Selection (IBPS) and State Bank of India (SBI). Candidates must transcribe banking data accurately and quickly, including entries such as Account No: 987654321098, IFSC Code: SBIN0009876, Branch Code: 1345, and Interest Rate: 7.25% per annum. The typing passage may also contain sections from RTGS or NEFT forms, legal disclaimers, transaction summaries, and customer instructions. Errors in number formats, punctuation, or account identifiers may lead to transactional faults. Hence, the evaluation criteria focus on both speed and the ability to faithfully replicate structured banking content with high accuracy. The test is designed to reflect actual clerical responsibilities within a bank’s day-to-day operations."
];
  const [currentText, setCurrentText] = useState(textSamples[0]);
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(600);
  const [selectedTime, setSelectedTime] = useState(600);
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [errors, setErrors] = useState(0);
  const [totalChars, setTotalChars] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [testHistory, setTestHistory] = useState([]);
  const [difficulty, setDifficulty] = useState('medium');
  const [showStats, setShowStats] = useState(false);
  const inputRef = useRef(null);
  const timeOptions = [300, 600, 900, 1200];
  const difficultyLevels = {
    easy: textSamples.slice(0, 3),
    medium: textSamples.slice(3, 6),
    hard: textSamples.slice(6, 8)
  };
  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      finishTest();
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);
  useEffect(() => {
    calculateLiveStats();
  }, [userInput]);
  useEffect(() => {
    const randomText = difficultyLevels[difficulty][Math.floor(Math.random() * difficultyLevels[difficulty].length)];
    setCurrentText(randomText);
  }, [difficulty]);
  const startTest = () => {
    setIsActive(true);
    setIsFinished(false);
    setUserInput('');
    setTimeLeft(selectedTime);
    setErrors(0);
    setTotalChars(0);
    setCorrectChars(0);
    setCurrentWordIndex(0);
    inputRef.current?.focus();
  };
  const finishTest = () => {
    setIsActive(false);
    setIsFinished(true);
    calculateFinalResults();
  };
  const resetTest = () => {
    setIsActive(false);
    setIsFinished(false);
    setUserInput('');
    setTimeLeft(selectedTime);
    setWpm(0);
    setAccuracy(100);
    setErrors(0);
    setTotalChars(0);
    setCorrectChars(0);
    setCurrentWordIndex(0);
    const randomText = difficultyLevels[difficulty][Math.floor(Math.random() * difficultyLevels[difficulty].length)];
    setCurrentText(randomText);
  };
  const handleInputChange = (e) => {
    if (!isActive && !isFinished) {
      startTest();
    }
    if (!isFinished) {
      setUserInput(e.target.value);
      updateWordIndex(e.target.value);
    }
  };
  const updateWordIndex = (input) => {
    const words = input.trim().split(' ');
    setCurrentWordIndex(words.length - 1);
  };
  const calculateLiveStats = () => {
    if (userInput.length === 0) return;
    let correctCount = 0;
    let errorCount = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (i < currentText.length) {
        if (userInput[i] === currentText[i]) {
          correctCount++;
        } else {
          errorCount++;
        }
      } else {
        errorCount++;
      }
    }
    setCorrectChars(correctCount);
    setErrors(errorCount);
    setTotalChars(userInput.length);
    const accuracyPercent = userInput.length > 0 ? Math.round((correctCount / userInput.length) * 100) : 100;
    setAccuracy(accuracyPercent);
    const timeElapsed = (selectedTime - timeLeft) / 60;
    if (timeElapsed > 0) {
      const wordsTyped = userInput.trim().split(' ').length;
      const grossWPM = Math.round(wordsTyped / timeElapsed);
      const netWPM = Math.max(0, grossWPM - (errorCount / timeElapsed));
      setWpm(Math.round(netWPM));
    }
  };
  const calculateFinalResults = () => {
    const timeElapsed = (selectedTime - timeLeft) / 60;
    const wordsTyped = userInput.trim().split(' ').length;
    const grossWPM = Math.round(wordsTyped / timeElapsed);
    const netWPM = Math.max(0, grossWPM - (errors / timeElapsed));
    const finalWPM = Math.round(netWPM);
    const finalAccuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 0;
    setWpm(finalWPM);
    setAccuracy(finalAccuracy);
    const testResult = {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      wpm: finalWPM,
      accuracy: finalAccuracy,
      errors: errors,
      duration: selectedTime,
      difficulty: difficulty
    };
    setTestHistory(prev => [testResult, ...prev.slice(0, 9)]);
  };
  const getCharacterClass = (index) => {
    if (index >= userInput.length) {
      return index === userInput.length ? 'char-current' : 'char-pending';
    }
    if (index >= currentText.length) {
      return 'char-extra';
    }
    return userInput[index] === currentText[index] ? 'char-correct' : 'char-incorrect';
  };
  const getWordClass = (wordIndex) => {
    return wordIndex === currentWordIndex ? 'word-current' : '';
  };
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  const getPerformanceLevel = (wpm, accuracy) => {
    if (wpm >= 40 && accuracy >= 95) return 'Excellent';
    if (wpm >= 35 && accuracy >= 90) return 'Good';
    if (wpm >= 30 && accuracy >= 85) return 'Average';
    return 'Needs Improvement';
  };
  const performance = getPerformanceLevel(wpm, accuracy);
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>Government Typing Speed Test</h1>
          <p className="subtitle">Practice for SSC, Banking, Railway and Other Government Exams</p>
        </header>
        <div className="controls">
          <div className="control-group">
            <label>Test Duration:</label>
            <select 
              value={selectedTime} 
              onChange={(e) => setSelectedTime(Number(e.target.value))}
              disabled={isActive}
            >
              {timeOptions.map(time => (
                <option key={time} value={time}>
                  {time/60} Minutes
                </option>
              ))}
            </select>
          </div>
          <div className="control-group">
            <label>Difficulty:</label>
            <select 
              value={difficulty} 
              onChange={(e) => setDifficulty(e.target.value)}
              disabled={isActive}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">⏱</div>
            <div className="stat-content">
              <span className="stat-label">Time Left</span>
              <span className="stat-value">{formatTime(timeLeft)}</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⚡</div>
            <div className="stat-content">
              <span className="stat-label">Speed (WPM)</span>
              <span className="stat-value">{wpm}</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-content">
              <span className="stat-label">Accuracy</span>
              <span className="stat-value">{accuracy}%</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">❌</div>
            <div className="stat-content">
              <span className="stat-label">Errors</span>
              <span className="stat-value">{errors}</span>
            </div>
          </div>
        </div>
        <div className="text-display">
          {currentText.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} className={`word ${getWordClass(wordIndex)}`}>
              {word.split('').map((char, charIndex) => {
                const globalIndex = currentText.split(' ').slice(0, wordIndex).join(' ').length + (wordIndex > 0 ? 1 : 0) + charIndex;
                return (
                  <span key={charIndex} className={getCharacterClass(globalIndex)}>
                    {char}
                  </span>
                );
              })}
              {wordIndex < currentText.split(' ').length - 1 && (
                <span className={getCharacterClass(currentText.split(' ').slice(0, wordIndex + 1).join(' ').length)}>
                  {' '}
                </span>
              )}
            </span>
          ))}
        </div>
        <textarea
          ref={inputRef}
          className="input-area"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Click here and start typing the above text..."
          disabled={isFinished}
          spellCheck={false}
        />
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((selectedTime - timeLeft) / selectedTime) * 100}%` }}
          ></div>
        </div>
        <div className="buttons">
          <button onClick={startTest} disabled={isActive} className="btn-primary">
            {isActive ? 'Test Running...' : 'Start Test'}
          </button>
          <button onClick={resetTest} className="btn-secondary">
            Reset Test
          </button>
          <button onClick={() => setShowStats(!showStats)} className="btn-info">
            {showStats ? 'Hide History' : 'Show History'}
          </button>
        </div>
        {isFinished && (
          <div className="results">
            <div className="results-header">
              <h2>Test Complete</h2>
              <div className="performance-badge">
                {performance}
              </div>
            </div>
            <div className="results-grid">
              <div className="result-item">
                <span className="result-label">Final Speed:</span>
                <span className="result-value">{wpm} WPM</span>
              </div>
              <div className="result-item">
                <span className="result-label">Accuracy:</span>
                <span className="result-value">{accuracy}%</span>
              </div>
              <div className="result-item">
                <span className="result-label">Total Errors:</span>
                <span className="result-value">{errors}</span>
              </div>
              <div className="result-item">
                <span className="result-label">Characters Typed:</span>
                <span className="result-value">{totalChars}</span>
              </div>
            </div>
          </div>
        )}
        {showStats && testHistory.length > 0 && (
          <div className="history">
            <h3>Test History</h3>
            <div className="history-list">
              {testHistory.map((test, index) => (
                <div key={index} className="history-item">
                  <div className="history-date">{test.date} {test.time}</div>
                  <div className="history-stats">
                    <span>{test.wpm} WPM</span>
                    <span>{test.accuracy}% Accuracy</span>
                    <span>{test.errors} Errors</span>
                    <span className="difficulty-tag">{test.difficulty}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;