import { useState } from "react";


export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);


    function handleChange(e) {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    }


    function handleSubmit(e) {
        e.preventDefault();
// Tu docelowo wyślesz dane na backend lub do usługi typu Formspree
        setSent(true);
    }


    if (sent) {
        return (
            <section className="stack gap">
                <h1>Dziękujemy za wiadomość! 💌</h1>
                <p>Skontaktujemy się z Tobą możliwie szybko.</p>
            </section>
        );
    }


    return (
        <section className="stack gap">
            <h1>Kontakt</h1>
            <form className="stack" onSubmit={handleSubmit}>
                <label>
                    Imię
                    <input name="name" value={form.name} onChange={handleChange} required />
                </label>
                <label>
                    E‑mail
                    <input name="email" type="email" value={form.email} onChange={handleChange} required />
                </label>
                <label>
                    Wiadomość
                    <textarea name="message" rows={5} value={form.message} onChange={handleChange} required />
                </label>
                <button type="submit">Wyślij</button>
            </form>
        </section>
    );
}