import { useEffect, useState } from 'react';
import { NavLink, useParams } from "react-router-dom";
import { API_URL } from "../../constants/appConstants";
import Questions from '../../components/Questions/Questions';
import './Questionnaire.css';
import { QuestionType } from "../../components/Question/Question";
import logo from '../../logo.png';

export interface Questions {
    id: string,
    questions: QuestionType[];
    SupportedLanguages: []
}

export const QuestionnairePage = () => {
    const { pageNumber } = useParams();
    const [questionOptions, setQquestionOptions] = useState<Questions | null>(null);
    useEffect(() => {
        const getData = async (page: string) => {
            const results = await (await fetch(`${API_URL}/${page}`)).json();
            setQquestionOptions(results)
        }
        if (pageNumber) {
            getData(pageNumber);
        }
    }, [pageNumber]);

    return (
        <div className="questionnaire">
            <img src={logo} alt='logo' />
            {questionOptions ? <Questions questions={questionOptions.questions} /> : null}
            <NavLink to={`../questionnaire/${pageNumber ? Number(pageNumber) + 1 : 'home'}`}>Next Page</NavLink>
        </div>
    );
}


