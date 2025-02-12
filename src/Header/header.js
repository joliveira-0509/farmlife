'use client';
import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
    const [isMedicoOpen, setIsMedicoOpen] = useState(false);
    const [isPacienteOpen, setIsPacienteOpen] = useState(false);
    const [isConsultaOpen, setIsConsultaOpen] = useState(false);

    const handleMedicoMouseEnter = () => setIsMedicoOpen(true);
    const handleMedicoMouseLeave = () => setIsMedicoOpen(false);

    const handlePacienteMouseEnter = () => setIsPacienteOpen(true);
    const handlePacienteMouseLeave = () => setIsPacienteOpen(false);

    const handleConsultaMouseEnter = () => setIsConsultaOpen(true);
    const handleConsultaMouseLeave = () => setIsConsultaOpen(false);

    return (
        <div className={styles.header}>
            <h1>Clínica Vitalidade</h1>
            <nav>
                <Link href="/">Home</Link>
                <div
                    className={styles.medico}
                    onMouseEnter={handleMedicoMouseEnter}
                    onMouseLeave={handleMedicoMouseLeave}
                >
                    Médicos
                    {isMedicoOpen && (
                        <ul>
                            <li>Listar Registros</li>
                            <li>Buscar</li>
                            <li>Adicionar Novo</li>
                            <li>Editar</li>
                            <li>Excluir</li>
                        </ul>
                    )}
                </div>
                <div
                    className={styles.paciente}
                    onMouseEnter={handlePacienteMouseEnter}
                    onMouseLeave={handlePacienteMouseLeave}
                >
                    Pacientes
                    {isPacienteOpen && (
                        <ul>
                            <li>Listar Registros</li>
                            <li>Buscar</li>
                            <li>Adicionar Novo</li>
                            <li>Editar</li>
                            <li>Excluir</li>
                        </ul>
                    )}
                </div>
                <div
                    className={styles.consulta}
                    onMouseEnter={handleConsultaMouseEnter}
                    onMouseLeave={handleConsultaMouseLeave}
                >
                    Consultas
                    {isConsultaOpen && (
                        <ul>
                            <li>Listar Consultas</li>
                            <li>Agendar Consulta</li>
                            <li>Reagendar</li>
                            <li>Cancelar</li>
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
}