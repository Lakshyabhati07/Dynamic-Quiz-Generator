
//
document.addEventListener('DOMContentLoaded', () => {
    const generateQuizBtn = document.getElementById('generateQuizBtn');
    const quizContainer = document.getElementById('quizContainer');
    const submitQuizBtn = document.getElementById('submitQuizBtn');
    let questions = [];

    const questionBank = [
        // Mathematics
        { topic: 'Mathematics', difficulty: 'Beginner', question: '2 + 2 equals?', answer: '4', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Beginner', question: 'What is 3 * 5?', answer: '15', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Beginner', question: 'What is the square of 9?', answer: '81', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Beginner', question: 'What is the cube root of 64?', answer: '4', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Beginner', question: 'What is 10 - 3?', answer: '7', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Beginner', question: 'What is 20 divided by 4?', answer: '5', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Beginner', question: 'What is 4 squared?', answer: '16', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Beginner', question: 'What is 8 * 2?', answer: '16', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Beginner', question: 'What is the next number in the sequence: 1, 3, 5, 7, ?', answer: '9', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Beginner', question: 'What is 12 divided by 3?', answer: '4', type: 'text' },
        
        { topic: 'Mathematics', difficulty: 'Intermediate', question: 'What is 3 squared?', answer: '9', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Intermediate', question: 'What is 8 * 3?', answer: '24', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Intermediate', question: 'What is 9 * 9?', answer: '81', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Intermediate', question: 'What is 2 cubed?', answer: '8', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Intermediate', question: 'What is 6 squared?', answer: '36', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Intermediate', question: 'What is 64 divided by 8?', answer: '8', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Intermediate', question: 'What is the square root of 81?', answer: '9', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Intermediate', question: 'What is 10 + 5?', answer: '15', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Intermediate', question: 'What is the next number in the sequence: 2, 4, 8, 16, ?', answer: '32', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Intermediate', question: 'What is 7 * 9?', answer: '63', type: 'text' },
        
        { topic: 'Mathematics', difficulty: 'Advanced', question: 'What is 12 squared?', answer: '144', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Advanced', question: 'What is 16 * 7?', answer: '112', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Advanced', question: 'What is 10 cubed?', answer: '1000', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Advanced', question: 'What is the square root of 100?', answer: '10', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Advanced', question: 'What is 24 divided by 4?', answer: '6', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Advanced', question: 'What is 25 * 6?', answer: '150', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Advanced', question: 'What is 18 squared?', answer: '324', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Advanced', question: 'What is the next number in the sequence: 1, 4, 9, 16, ?', answer: '25', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Advanced', question: 'What is 30 + 15?', answer: '45', type: 'text' },
        { topic: 'Mathematics', difficulty: 'Advanced', question: 'What is 27 * 4?', answer: '108', type: 'text' },

        // Science
        { topic: 'Science', difficulty: 'Beginner', question: 'What is the chemical symbol for water?', answer: 'H2O', type: 'text' },
        { topic: 'Science', difficulty: 'Beginner', question: 'What is the chemical symbol for oxygen?', answer: 'O', type: 'text' },
        { topic: 'Science', difficulty: 'Beginner', question: 'What is the chemical symbol for carbon dioxide?', answer: 'CO2', type: 'text' },
        { topic: 'Science', difficulty: 'Beginner', question: 'What is the chemical symbol for hydrogen?', answer: 'H', type: 'text' },
        { topic: 'Science', difficulty: 'Beginner', question: 'What is the chemical symbol for nitrogen?', answer: 'N', type: 'text' },
        { topic: 'Science', difficulty: 'Beginner', question: 'What is the chemical symbol for helium?', answer: 'He', type: 'text' },
        { topic: 'Science', difficulty: 'Beginner', question: 'What is the chemical symbol for iron?', answer: 'Fe', type: 'text' },
        { topic: 'Science', difficulty: 'Beginner', question: 'What is the chemical symbol for sodium?', answer: 'Na', type: 'text' },
        { topic: 'Science', difficulty: 'Beginner', question: 'What is the chemical symbol for potassium?', answer: 'K', type: 'text' },
        { topic: 'Science', difficulty: 'Beginner', question: 'What is the chemical symbol for calcium?', answer: 'Ca', type: 'text' },
        
        { topic: 'Science', difficulty: 'Intermediate', question: 'What is the chemical formula for ammonia?', answer: 'NH3', type: 'text' },
        { topic: 'Science', difficulty: 'Intermediate', question: 'What is the chemical formula for sulfuric acid?', answer: 'H2SO4', type: 'text' },
        { topic: 'Science', difficulty: 'Intermediate', question: 'What is the chemical formula for methane?', answer: 'CH4', type: 'text' },
        { topic: 'Science', difficulty: 'Intermediate', question: 'What is the chemical formula for nitric acid?', answer: 'HNO3', type: 'text' },
        { topic: 'Science', difficulty: 'Intermediate', question: 'What is the chemical formula for carbon monoxide?', answer: 'CO', type: 'text' },
        { topic: 'Science', difficulty: 'Intermediate', question: 'What is the chemical formula for carbonic acid?', answer: 'H2CO3', type: 'text' },
        { topic: 'Science', difficulty: 'Intermediate', question: 'What is the chemical formula for acetic acid?', answer: 'CH3COOH', type: 'text' },
        { topic: 'Science', difficulty: 'Intermediate', question: 'What is the chemical formula for hydrogen peroxide?', answer: 'H2O2', type: 'text' },
        { topic: 'Science', difficulty: 'Intermediate', question: 'What is the chemical formula for phosphoric acid?', answer: 'H3PO4', type: 'text' },
        { topic: 'Science', difficulty: 'Intermediate', question: 'What is the chemical formula for hydrochloric acid?', answer: 'HCl', type: 'text' },

        { topic: 'Science', difficulty: 'Advanced', question: 'What is the chemical formula for sodium hydroxide?', answer: 'NaOH', type: 'text' },
        { topic: 'Science', difficulty: 'Advanced', question: 'What is the chemical formula for potassium permanganate?', answer: 'KMnO4', type: 'text' },
        { topic: 'Science', difficulty: 'Advanced', question: 'What is the chemical formula for hydrofluoric acid?', answer: 'HF', type: 'text' },
        { topic: 'Science', difficulty: 'Advanced', question: 'What is the chemical formula for sodium carbonate?', answer: 'Na2CO3', type: 'text' },
        { topic: 'Science', difficulty: 'Advanced', question: 'What is the chemical formula for calcium chloride?', answer: 'CaCl2', type: 'text' },
        { topic: 'Science', difficulty: 'Advanced', question: 'What is the chemical formula for sulfur dioxide?', answer: 'SO2', type: 'text' },
        { topic: 'Science', difficulty: 'Advanced', question: 'What is the chemical formula for potassium iodide?', answer: 'KI', type: 'text' },
        { topic: 'Science', difficulty: 'Advanced', question: 'What is the chemical formula for sodium bicarbonate?', answer: 'NaHCO3', type: 'text' },
        { topic: 'Science', difficulty: 'Advanced', question: 'What is the chemical formula for magnesium sulfate?', answer: 'MgSO4', type: 'text' },
        { topic: 'Science', difficulty: 'Advanced', question: 'What is the chemical formula for barium nitrate?', answer: 'Ba(NO3)2', type: 'text' },

        // History
        { topic: 'History', difficulty: 'Beginner', question: 'Who was the first president of the United States?', answer: 'George Washington', type: 'text' },
        { topic: 'History', difficulty: 'Beginner', question: 'In which year did World War I begin?', answer: '1914', type: 'text' },
        { topic: 'History', difficulty: 'Beginner', question: 'Who was the author of "The Communist Manifesto"?', answer: 'Karl Marx', type: 'text' },
        { topic: 'History', difficulty: 'Beginner', question: 'Who was the leader of the Soviet Union during World War II?', answer: 'Joseph Stalin', type: 'text' },
        { topic: 'History', difficulty: 'Beginner', question: 'Which famous explorer discovered America in 1492?', answer: 'Christopher Columbus', type: 'text' },
        { topic: 'History', difficulty: 'Beginner', question: 'In which year did the American Civil War end?', answer: '1865', type: 'text' },
        { topic: 'History', difficulty: 'Beginner', question: 'Who was the first emperor of Rome?', answer: 'Augustus', type: 'text' },
        { topic: 'History', difficulty: 'Beginner', question: 'What event marked the beginning of World War II?', answer: 'Invasion of Poland', type: 'text' },
        { topic: 'History', difficulty: 'Beginner', question: 'Who was the leader of the Nazi Party in Germany?', answer: 'Adolf Hitler', type: 'text' },
        { topic: 'History', difficulty: 'Beginner', question: 'Which English queen ruled for the longest period in British history?', answer: 'Queen Victoria', type: 'text' },
        
        { topic: 'History', difficulty: 'Intermediate', question: 'Who wrote "The Art of War"?', answer: 'Sun Tzu', type: 'text' },
        { topic: 'History', difficulty: 'Intermediate', question: 'Who was the first female Prime Minister of the United Kingdom?', answer: 'Margaret Thatcher', type: 'text' },
        { topic: 'History', difficulty: 'Intermediate', question: 'Which famous battle took place in 1066 and resulted in the Norman conquest of England?', answer: 'Battle of Hastings', type: 'text' },
        { topic: 'History', difficulty: 'Intermediate', question: 'Who was the first man to walk on the moon?', answer: 'Neil Armstrong', type: 'text' },
        { topic: 'History', difficulty: 'Intermediate', question: 'Who was the leader of the Soviet Union during the Cuban Missile Crisis?', answer: 'Nikita Khrushchev', type: 'text' },
        { topic: 'History', difficulty: 'Intermediate', question: 'Which famous treaty officially ended World War I?', answer: 'Treaty of Versailles', type: 'text' },
        { topic: 'History', difficulty: 'Intermediate', question: 'Who was the first president of the United States to be impeached?', answer: 'Andrew Johnson', type: 'text' },
        { topic: 'History', difficulty: 'Intermediate', question: 'Which French leader is associated with the phrase "let them eat cake"?', answer: 'Marie Antoinette', type: 'text' },
        { topic: 'History', difficulty: 'Intermediate', question: 'Who was the last tsar of Russia?', answer: 'Nicholas II', type: 'text' },
        { topic: 'History', difficulty: 'Intermediate', question: 'Which war was fought between the Allies and the Axis powers from 1939 to 1945?', answer: 'World War II', type: 'text' },
        
        { topic: 'History', difficulty: 'Advanced', question: 'Who was the longest-reigning monarch in British history?', answer: 'Queen Elizabeth II', type: 'text' },
        { topic: 'History', difficulty: 'Advanced', question: 'Who was the founder of the Mongol Empire?', answer: 'Genghis Khan', type: 'text' },
        { topic: 'History', difficulty: 'Advanced', question: 'Which ancient civilization built the pyramids?', answer: 'Ancient Egyptians', type: 'text' },
        { topic: 'History', difficulty: 'Advanced', question: 'Who was the first president of the United States to be assassinated?', answer: 'Abraham Lincoln', type: 'text' },
        { topic: 'History', difficulty: 'Advanced', question: 'Who was the author of "The Wealth of Nations"?', answer: 'Adam Smith', type: 'text' },
        { topic: 'History', difficulty: 'Advanced', question: 'Which ancient Greek philosopher is known as the "Father of Western Philosophy"?', answer: 'Socrates', type: 'text' },
        { topic: 'History', difficulty: 'Advanced', question: 'Who was the longest-serving Prime Minister of Canada?', answer: 'William Lyon Mackenzie King', type: 'text' },
        { topic: 'History', difficulty: 'Advanced', question: 'Which European country was the first to abolish slavery?', answer: 'Denmark', type: 'text' },
        { topic: 'History', difficulty: 'Advanced', question: 'Who was the first female president in the world?', answer: 'Vigdís Finnbogadóttir (Iceland)', type: 'text' },
        { topic: 'History', difficulty: 'Advanced', question: 'Who was the first woman to win a Nobel Prize?', answer: 'Marie Curie', type: 'text' }
    ];

    generateQuizBtn.addEventListener('click', () => {
        const topic = document.getElementById('topics').value;
        const difficulty = document.getElementById('difficulty').value;
        const numQuestions = parseInt(document.getElementById('numQuestions').value, 10);

        questions = questionBank.filter(q => q.topic === topic && q.difficulty === difficulty).slice(0, numQuestions);
        displayQuestions(questions);
    });

    function displayQuestions(questions) {
        quizContainer.innerHTML = ''; // Clear previous questions
        questions.forEach((q, index) => {
            const questionEl = document.createElement('div');
            questionEl.className = 'question';
            if (q.type === 'text') {
                questionEl.innerHTML = `<p>${index + 1}. ${q.question}</p><input type="text" id="answer${index}" class="quiz-answer">`;
            }
            quizContainer.appendChild(questionEl);
        });
        submitQuizBtn.style.display = 'block'; // Show the submit button after generating questions
    }

    submitQuizBtn.addEventListener('click', () => {
        let score = 0;
        let correctAnswers = [];
        questions.forEach((q, index) => {
            const userAnswer = document.getElementById(`answer${index}`).value.trim();
            if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
                score++;
            }
            correctAnswers.push({ question: q.question, correctAnswer: q.answer });
        });

        localStorage.setItem('quizScore', score);
        localStorage.setItem('correctAnswers', JSON.stringify(correctAnswers));
        window.location.href = 'feedback.html'; // Redirect to the feedback page
    });
});
