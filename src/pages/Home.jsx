import Counter from "../components/Counter.jsx";
import Todo from "../components/Todo.jsx";


export default function Home() {
    return (
        <section className="stack gap">
            <h1>Witaj na stronie 👋</h1>
            <p>To jest startowa strona Twojej aplikacji. Poniżej dwa przykładowe komponenty.</p>
            <Counter />
            <Todo />
        </section>
    );
}