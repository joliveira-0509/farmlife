'use client'

import { React, useState, useEffect } from "react";
import styles from './pacientes.module.css';

const urlPadrao = "https://api-clinica-2a.onrender.com/pacientes";

export default function pacientes() {
    const [pacientes, setPacientes] = useState([]);
    const [pacientesFiltrados, setPacientesFiltrados] = useState([]);
    const [botaoOpen, setBotaoOpen] = useState(false);

    async function consoleLogPacientes() {
        try {
            const resposta = await fetch(urlPadrao);
            if (!resposta.true) {
                throw new Error("Erro ao buscar dados:" + resposta.statusText);
            }
            const data = await response.json();
            setPacientes(data);
            setPacientesFiltrados(data);
        } catch (error) {
            console.log("Ocorreu algum erro:" + error);
        }
    }

    const pesquisarPacientePorNome = (nome) => {
        const filtrados = pacientes.filter((pacientes) =>
            Medicos.nome.toLowerCase().includes(nome.toLowerCase())
        );
        setPacientesFiltrados(filtrados);
    };

    useEffect(() => {
        consoleLogPacientes();
    }, []);



    return (
        <div className={styles.body}>
            <div className={styles.fundo}>
                <div className={styles.titulo2}>
                    <h1 className={styles.css}>Lista de Pacientes</h1>
                </div>

                <div>
                    <button className={styles.botaoTable} onClick={() => setBotaoOpen(!botaoOpen)}>
                        <h1>Varredura</h1>
                    </button>
                    {botaoOpen && (
                        <>
                            <div className={styles.fundoPop} onClick={() => setBotaoOpen(!botaoOpen)}></div>

                            <div className={styles.cardpop}>
                                <div className={styles.input}>
                                    <input
                                        type="text"
                                        placeholder="Pesquisar por pacientes"
                                        onChange={(e) => pesquisarPacientePorNome(e.target.value)}
                                    />
                                </div>

                                <div className={styles.tabela}>
                                    <ul>{pacientesFiltrados.map((pacientes) => (<li key={pacientes.id}>{pacientes.nome}</li>))}</ul>
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
                                <th>Nome</th>
                                <th>telefone</th>
                                <th>cpf</th>
                                <th>email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pacientesFiltrados.map((paciente) => (
                                <tr key={paciente.id}>
                                    <td>{paciente.id}</td>
                                    <td>{paciente.nome}</td>
                                    <td>{paciente.telefone}</td>
                                    <td>{paciente.cpf}</td>
                                    <td>{paciente.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
