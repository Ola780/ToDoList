import { NavLink } from "react-router-dom";


export default function Navbar() {
    return (
        <header className="navbar">
            <div className="brand">ToDoList</div>
            <nav>
                <NavLink to="/" end className={({ isActive }) => (isActive ? "link active" : "link")}>Start</NavLink>
                <NavLink to="/o-nas" className={({ isActive }) => (isActive ? "link active" : "link")}>O nas</NavLink>
                <NavLink to="/kontakt" className={({ isActive }) => (isActive ? "link active" : "link")}>Kontakt</NavLink>
            </nav>
        </header>
    );
}