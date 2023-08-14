// Questions.tsx
import React from 'react';
import Question from '../Question/Question';
import { QuestionType } from "../Question/Question";

interface QuestionsProps {
    questions: QuestionType[];
}

const Questions: React.FC<QuestionsProps> = ({ questions }) => {
    return (
        <div className="question-page">
            {questions.map((question) => (
                <Question key={question.Id} question={question} />
            ))}
        </div>
    );
};

export default Questions;
