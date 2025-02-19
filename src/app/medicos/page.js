'use client'
import React, { useState, useEffect } from "react";
import styles from "./medico.module.css";

const urlPadrao = "https://api-clinica-2a.onrender.com/medicos";

export default function Medicos() {
    const [medicos, setMedicos] = useState([]);
    const [medicosFiltrados, setMedicosFiltrados] = useState([]);

    async function apresetarTodosMedicos() {
        try {
            const response = await fetch(urlPadrao);
            if (!response.ok) {
                throw new Error("Erro ao buscar dados:" + response.statusText);
            }
            const data = await response.json();
            setMedicos(data);
            setMedicosFiltrados(data); 
        } catch (error) {
            console.log('Ocorreu algum erro:' + error);
        }
    }

    const pesquisarMedicoPorNome = (nome) => {
        const filtrados = medicos.filter((medico) =>
            medico.nome.toLowerCase().includes(nome.toLowerCase())
        );
        setMedicosFiltrados(filtrados);
    };

    useEffect(() => {
        apresetarTodosMedicos();
    }, []);

    return (
        <div className={styles.body}>
            <div className={styles.fundo}>
                <div className={styles.titulo2}>
                    <h1 className={styles.titulo}>Lista de Médicos</h1>
                </div>

                <div className={styles.input}>
                    <input
                        type="text"
                        placeholder="Pesquisar médico por nome"
                        onChange={(e) => pesquisarMedicoPorNome(e.target.value)}
                    />
                </div>

                <div className={styles.tabela}>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>Especialidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medicosFiltrados.map((medico) => (
                                <tr key={medico.id}>
                                    <td>{medico.id}</td>
                                    <td>{medico.nome}</td>
                                    <td>{medico.email}</td>
                                    <td>{medico.telefone}</td>
                                    <td>{medico.especialidade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}