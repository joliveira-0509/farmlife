import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.apresenta}>
        <h1>Bem-Vindo ao Farm Life</h1>
        <h3>No Farm Life, nossa missão é proporcionar uma melhor comunicação entre nossos pacientes e médicos visando um melhor atendimento e tratamento. Nosso site tem como objetivo centralizar ações para agilizar os processos de atendimentos. </h3>
      </div>
      <h2 className={styles.oferta}> ↪O que oferecemos</h2>
      <section className={styles.cards}>

        <div className={styles.cad1}>
          <div className={styles.card}>
            <h4>Artigos Informativos
              Nossos artigos são escritos por especialistas em diversas áreas da medicina, garantindo que você receba informações precisas e atualizadas. Cobrimos uma ampla gama de tópicos, desde doenças comuns até avanços recentes na medicina.
            </h4>
          </div>
          <div className={styles.card}>
            <h4>Biblioteca de Condições Médicas.Encontre descrições detalhadas de condições médicas, sintomas, diagnósticos e opções de tratamento. Nossa biblioteca é constantemente atualizada para refletir as últimas pesquisas e diretrizes médicas.
            </h4>
          </div>
          <div className={styles.card}>
            <h4>Ferramentas Interativas.Utilize nossas ferramentas interativas, como calculadoras de IMC, rastreadores de sintomas e planejadores de dieta, para ajudar a gerenciar sua saúde de maneira proativa.
            </h4>
          </div>
          <div className={styles.card}>
            <h4>Consultas Online.Oferecemos a possibilidade de agendar consultas online com médicos qualificados. Receba orientação médica no conforto da sua casa, com a conveniência de horários flexíveis.
            </h4>
          </div>
        </div>
        <div className={styles.cad2}>
          <div className={styles.card}>
            <h4>Comunidade de Saúde
              Participe de nossos fóruns e grupos de apoio para compartilhar experiências, fazer perguntas e obter suporte de outros membros da comunidade e profissionais de saúde.
            </h4>
          </div>
          <div className={styles.card}>
            <h4>Notícias e Atualizações
              Fique por dentro das últimas notícias e avanços na área da saúde. Nossa seção de notícias é atualizada regularmente com informações relevantes e confiáveis.
            </h4>
          </div>
        </div>
      </section>
    </div>
  );
}
