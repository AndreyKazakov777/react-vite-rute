import { useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default function EffectSection () {
    const [modal, setModal] = useState(false)

    function openModal() {
        setModal(true)
    }

    return (
        <section>
            <h3>Effects</h3>

            <Button onClicked2={openModal}>Открыть информацию</Button>

            <Modal open={modal}>
                <h3>Hello from model</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus omnis debitis corporis adipisci eius facilis, beatae veniam, asperiores, ipsum minus quibusdam quas repellat ab. Dolore suscipit unde nesciunt culpa quis!</p>

                <Button onClicked2={() => setModal(false)}>Закрыть</Button>
            </Modal>
        </section>
    )
}