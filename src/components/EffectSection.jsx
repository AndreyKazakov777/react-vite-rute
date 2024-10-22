import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default function EffectSection () {
    function openModal() {}

    return (
        <section>
            <h3>Effects</h3>

            <Button onClick={openModal}>Открыть информацию</Button>

            <Modal>
                <h3>Hello from model</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus omnis debitis corporis adipisci eius facilis, beatae veniam, asperiores, ipsum minus quibusdam quas repellat ab. Dolore suscipit unde nesciunt culpa quis!</p>
            </Modal>
        </section>
    )
}