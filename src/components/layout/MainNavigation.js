import { NavLink } from "react-router-dom";

import clasess from "./MainNavigation.module.css";

const MainNavigation = () => {
    return (
        <header className={clasess.header}>
            <div className={clasess.logo}>Great Quotes</div>;
            <nav className={clasess.nav}>
                <ul>
                    <li>
                        <NavLink to="/quotes" activeClassName={clasess.active}>
                            All Quotes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/new-quotes" activeClassName={clasess.active}>
                            Add Quotes
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default MainNavigation;
