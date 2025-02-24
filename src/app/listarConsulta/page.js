'use client';
import React, { useState, useEffect } from "react";
import styles from "./consulta.module.css";

const urlPadrao = "https://api-clinica-2a.onrender.com/consultas";

export default function Consulta() {
    const [consultas, setConsultas] = useState([]);
    const [consultasFiltradas, setConsultasFiltradas] = useState([]);
    const [botaoMedicoOpen, setBotaoMedicoOpen] = useState(false);
    const [botaoPacienteOpen, setBotaoPacienteOpen] = useState(false);

    async function apresentarTodasConsultas() {
        try {
            const response = await fetch(urlPadrao);
            if (!response.ok) {
                throw new Error("Erro ao buscar dados:" + response.statusText);
            }
            const data = await response.json();
            setConsultas(data);
            setConsultasFiltradas(data);
        } catch (error) {
            console.log('Ocorreu algum erro:' + error);
        }
    }

    const pesquisarMedicoPorNome = (nome) => {
        const filtrados = consultas.filter((consulta) =>
            consulta.medico.toLowerCase().includes(nome.toLowerCase())
        );
        setConsultasFiltradas(filtrados);
    };

    const pesquisarPacientePorNome = (nome) => {
        const filtrados = consultas.filter((consulta) =>
            consulta.paciente.toLowerCase().includes(nome.toLowerCase())
        );
        setConsultasFiltradas(filtrados);
    };

    useEffect(() => {
        apresentarTodasConsultas();
    }, []);

    return (
        <div className={styles.body}>
            <div className={styles.fundo}>
                <div className={styles.titulo2}>
                    <h1 className={styles.titulo}>Listar Consultas</h1>
                </div>

                <div className={styles.divbotao}>
                    <div>
                        <button className={styles.botaoTable} onClick={() => setBotaoMedicoOpen(!botaoMedicoOpen)}>
                            <h1>Buscar por médicos</h1>
                        </button>
                        {botaoMedicoOpen && (
                            <>
                                <div className={styles.fundoPop} onClick={() => setBotaoMedicoOpen(!botaoMedicoOpen)}></div>

                                <div className={styles.cardpop}>
                                    <div className={styles.input}>
                                        <input
                                            type="text"
                                            placeholder="Pesquisar por médicos"
                                            onChange={(e) => pesquisarMedicoPorNome(e.target.value)}
                                        />
                                    </div>

                                    <div className={styles.tabelaPop}>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Nome</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {consultasFiltradas.map((consulta) => (
                                                    <tr key={consulta.id}>
                                                        <td>{consulta.medico}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    <div>
                        <button className={styles.botaoTable} onClick={() => setBotaoPacienteOpen(!botaoPacienteOpen)}>
                            <h1>Buscar por paciente</h1>
                        </button>
                        {botaoPacienteOpen && (
                            <>
                                <div className={styles.fundoPop} onClick={() => setBotaoPacienteOpen(!botaoPacienteOpen)}></div>

                                <div className={styles.cardpop}>
                                    <div className={styles.input}>
                                        <input
                                            type="text"
                                            placeholder="Pesquisar por paciente"
                                            onChange={(e) => pesquisarPacientePorNome(e.target.value)}
                                        />
                                    </div>

                                    <div className={styles.tabelaPop}>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Nome</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {consultasFiltradas.map((consulta) => (
                                                    <tr key={consulta.id}>
                                                        <td>{consulta.paciente}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className={styles.tabela}>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Medico</th>
                                <th>Especialidade</th>
                                <th>Paciente</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {consultasFiltradas.map((consulta) => (
                                <tr key={consulta.id}>
                                    <td>{consulta.id}</td>
                                    <td>{consulta.medico}</td>
                                    <td>{consulta.especialidade}</td>
                                    <td>{consulta.paciente}</td>
                                    <td>{consulta.tipo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
