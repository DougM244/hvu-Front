import React from "react";
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./index.module.css"
import { useRouter } from "next/router";

//Sem botão de relatório
export function SubHeader01 () {
    const router = useRouter();

    const handleAgendamentosClick = () => {
        router.push('/agendarconsulta');
    };

    const handleAnimaisClick = () => {
        router.push('/getAllAnimalTutor');
    };

    return (
        <div className={styles.button_box}>
            <button type="button" className="btn btn-link" id={styles.button_decoration} onClick={handleAgendamentosClick}>Agendamentos</button>
            <button type="button" className="btn btn-link" id={styles.button_decoration} onClick={handleAnimaisClick}>Meus animais</button>
        </div>
    );
}

//Com botão de relatório
export function SubHeader02 () {
    const router = useRouter();

    const handleAgendamentosClick = () => {
        router.push('/agendarconsulta');
    };

    const handleAnimaisClick = () => {
        router.push('/getAllTutorSecretario');
    };

    return (
        <div className={styles.button_box}>
            <button type="button" className="btn btn-link" id={styles.button_decoration} onClick={handleAgendamentosClick}>Agendamentos</button>
            <button type="button" className="btn btn-link" id={styles.button_decoration} onClick={handleAnimaisClick}>Animais</button>
            <button type="button" className="btn btn-link" id={styles.button_decoration}>Relatórios</button>
        </div>
    );
}

