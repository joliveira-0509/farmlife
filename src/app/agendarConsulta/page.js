'use client';
import styles from './agenda.module.css';
import { useState, useEffect } from 'react';

const urlPacientes = 'https://api-clinica-2a.onrender.com/pacientes';
const urlMedicos = 'https://api-clinica-2a.onrender.com/medicos';

// Função para buscar pacientes
const fetchPacientes = async (setPacientes) => {
    try {
        const response = await fetch(urlPacientes);
        const data = await response.json();
        setPacientes(data);
    } catch (error) {
        console.error('Erro ao buscar pacientes:', error);
    }
};

// Função para buscar médicos
const fetchMedicos = async (setMedicos) => {
    try {
        const response = await fetch(urlMedicos);
        const data = await response.json();
        setMedicos(data);
    } catch (error) {
        console.error('Erro ao buscar médicos:', error);
    }
};

// Componente FormField
const FormField = ({ label, id, type, options }) => (
    <div>
        <label htmlFor={id} className={styles.agendar_label}>{label}</label>
        {type === 'select' ? (
            <select id={id} className={styles.agendar_dropdown}>
                <option value="" selected="">Selecione {label.toLowerCase()}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        ) : (
            <input type={type} id={id} className={styles.agendar_dropdown} />
        )}
    </div>
);

// Componente Form
const Form = ({ pacientes, medicos }) => (
    <form>
        <FormField label="Paciente" id="paciente" type="select" options={pacientes.map(p => ({ value: p.id, label: p.nome }))} />
        <FormField label="Médico" id="medico" type="select" options={medicos.map(m => ({ value: m.id, label: m.nome }))} />
        <FormField label="Data" id="data" type="date" />
        <FormField label="Hora" id="hora" type="select" options={[
            { value: '08:00', label: '08:00' },
            { value: '09:00', label: '09:00' },
            { value: '10:00', label: '10:00' },
            { value: '11:00', label: '11:00' },
            { value: '14:00', label: '14:00' },
            { value: '15:00', label: '15:00' },
            { value: '16:00', label: '16:00' },
            { value: '17:00', label: '17:00' },
        ]} />
        <FormField label="Tipo" id="tipo" type="select" options={[
            { value: 'Plano de Saúde', label: 'Plano de Saúde' },
            { value: 'Particular', label: 'Particular' },
        ]} />
        <button type="submit" className={styles.agendar_button}>Agendar Consulta</button>
    </form>
);

// Componente Agenda
const Agenda = () => {
    const [pacientes, setPacientes] = useState([]);
    const [medicos, setMedicos] = useState([]);

    useEffect(() => {
        fetchPacientes(setPacientes);
        fetchMedicos(setMedicos);
    }, []);

    return (
        <div className={styles.main}>
            <main className={styles.container}>
                <h1 className={styles.titulo}>Agendar Consulta</h1>
                <Form pacientes={pacientes} medicos={medicos} />
            </main>
        </div>
    );
};

export default Agenda;
