import { useState } from "react";


export default function Todo() {
    const [items, setItems] = useState([]);
    const [text, setText] = useState("");


    function addItem(e) {
        e.preventDefault();
        const value = text.trim();
        if (!value) return;

        const newItem = {
            id: crypto.randomUUID(),
            text: value,
            done: false
        };

        setItems([...items, newItem]);
        setText("");
    }



    function toggle(id) {

        const newItems = items.map(item => {
            if (item.id === id) {
                return {id : item.id, text : item.text, done: !item.done};
            } else {

                return item;
            }
        });

        setItems(newItems);
    }



    function remove(id) {
        setItems(prev => prev.filter(it => it.id !== id));
    }


    return (
        <div className="card">
            <h3>Lista zadań</h3>
            <form onSubmit={addItem} className="row">
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Dodaj zadanie…"
                />
                <button type="submit">Dodaj</button>
            </form>
            <ul className="list">
                {items.length === 0 && <li className="muted">Brak zadań – dodaj pierwsze!</li>}
                {items.map(it => (
                    <li key={it.id} className={it.done ? "done" : ""}>
                        <label>
                            <input type="checkbox" checked={it.done} onChange={() => toggle(it.id)} /> {it.text}
                        </label>
                        <button className="ghost" onClick={() => remove(it.id)}>Usuń</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}