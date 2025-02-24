"use client"
import Link from "next/link";
import style from "./header.module.css";
import Image from "next/image";
import React, { useState } from 'react';

export default function Header() {
    const [medicoOpen, setMedicoOpen] = useState(false);
    const [pacienteOpen, setPacienteOpen] = useState(false);
    const [consultaOpen, setConsultaOpen] = useState(false);

    const medicoMouseOpen = () => setMedicoOpen(true);
    const medicoMouseClose = () => setMedicoOpen(false);

    const pacienteMouseOpen = () => setPacienteOpen(true);
    const pacienteMouseClose = () => setPacienteOpen(false);

    const consultaMouseOpen = () => setConsultaOpen(true);
    const consultaMouseClose = () => setConsultaOpen(false);

    return (
        <header className={style.header}>

            <section className={style.navegador}>
                <Image
                    className={style.imagem}
                    src={"./imagens/farm life (1).svg"}
                    alt={"imagem"}
                    width={100}
                    height={100}
                />
                <div className={style.name}>
                    <h1>FARM LIFE</h1>
                    <h2>~ health center ~</h2>
                </div>
                <div></div> {/* Gambiarra ksksksk */}
            </section>

            <section className={style.acessos}>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <div
                            className={style.medico}
                            onMouseEnter={medicoMouseOpen}
                            onMouseLeave={medicoMouseClose}
                        > medicos
                            {medicoOpen && (
                                <ul>
                                    <li> <Link href='/medicos' >Buscar</Link> </li>
                                </ul>
                            )}

                        </div>
                        <div
                            className={style.paciente}
                            onMouseEnter={pacienteMouseOpen}
                            onMouseLeave={pacienteMouseClose}
                        > Pacientes
                            {pacienteOpen && (
                                <ul>
                                  
                                    <li><Link href='/pacientes'>Buscar</Link></li>
                                    
                                </ul>
                            )}
                        </div>
                        <div
                            className={style.agendamento}
                            onMouseEnter={consultaMouseOpen}
                            onMouseLeave={consultaMouseClose}
                        >Agendamentos
                            {consultaOpen && (
                                <ul>
                                    <li> <Link href="/listarConsulta" >Listar Consulta</Link> </li>
                                    <li> <Link href='/agendarConsulta'> Agendar Consulta </Link> </li>
                                 
                                </ul>
                            )}
                        </div>
                    </ul>
                </nav>
            </section>
        </header>
    );
};


// Menu.js
