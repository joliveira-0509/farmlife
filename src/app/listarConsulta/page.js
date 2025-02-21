'use client';
import React, { useState, useEffect } from "react";
import styles from "./consulta.module.css";

const urlPadrao = "https://api-clinica-2a.onrender.com/consultas";

export default function Consulta() {
    const [consultas, setConsultas] = useState([]);
    const [consultasFiltradas, setConsultasFiltradas] = useState([]);
    const [botaoOpen, setBotaoOpen] = useState(false);

    async function apresentarTodasConsultas() { // Corrigi o nome da função
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
    };

    const pesquisarMedicoPorNome = (nome) => {
        const filtrados = consultas.filter((medico) =>
            medico?.nome?.toLowerCase().includes(nome.toLowerCase())
        );
        setConsultasFiltradas(filtrados);
    };

    const pesquisarPacientePorNome = (nome) => {
        const filtrados = consultas.filter((paciente) =>
            paciente.nome.toLowerCase().includes(nome.toLowerCase())
        );
        setPacientesFiltrados(filtrados);
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

                <div>
                    <button className={styles.botaoTable} onClick={() => setBotaoOpen(!botaoOpen)}>
                        <h1>Buscar por médicos</h1>
                    </button>
                    {botaoOpen && (
                        <>
                            <div className={styles.fundoPop} onClick={() => setBotaoOpen(!botaoOpen)}></div>

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
