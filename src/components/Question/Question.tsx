// Question.tsx
import React from 'react';
import AnswerOptions from '../AnswerOptions/AnswerOptions';
import { Answer } from "../AnswerOptions/AnswerOptions";
import './Question.css';

export interface QuestionType {
    Id: number;
    ControlType: string;
    Text: string;
    PageNumber: number;
    answers: Answer[];
}

interface QuestionProps {
    question: QuestionType;
}

const Question: React.FC<QuestionProps> = ({ question }) => {
    if (question?.answers?.length) {
        return (
            <div className="question">
                <h3>{question.Text}</h3>
                <AnswerOptions answers={question.answers} />
            </div>
        );
    }
    return null;
};

export default Question;
