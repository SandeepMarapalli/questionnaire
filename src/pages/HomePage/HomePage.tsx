import { Outlet, NavLink, useParams } from "react-router-dom";
export const HomePage = () => {
    const { pageNumber } = useParams();

    return (
        <div>
            <header className="header-section"></header>
            <section className="questionnaire-section">
                {!pageNumber ? <><h1>Welcome to Customer Survey </h1>
                    <NavLink to='questionnaire/1' className='button'>Start Survey</NavLink></> : null}
                <Outlet />
            </section>
        </div>
    );
}


