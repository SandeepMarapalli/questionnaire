// AnswerOptions.tsx

export interface Answer {
    id: number;
    text: string;
    answerType: string;
}

interface AnswerOptionsProps {
    answers: Answer[];
}

const inputTypes: Record<string, string> = {
    RadioButton: 'radio',
    TextBox: 'text',
    DatePicker: 'date'
};

const AnswerOptions: React.FC<AnswerOptionsProps> = ({ answers }) => {
    return (
        <div className="answer-options">
            {answers.map((answer) => (
                <label key={answer.id}>
                    <input type={inputTypes[answer.answerType]} name={answer.text} value={answer.text} />
                    {answer.text}
                </label>
            ))}
        </div>
    );
};

export default AnswerOptions;
