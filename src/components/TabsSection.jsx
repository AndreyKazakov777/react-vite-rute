import Button from "./Button/Button"

export default function TabSection({ active, onChange }) {
    return (
        <section>
            <Button isActive={active == 'main'} onClicked2={() => onChange('main')}>Главная</Button>
            <Button isActive={active == 'feedback'} onClicked2={() => onChange('feedback')}>Обратная связь</Button>
        </section>
    )
}