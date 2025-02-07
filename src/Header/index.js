"use client"
import Link from "next/link";
import style from "./header.module.css";
import Image from "next/image";

export default function Header() {
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
                <button
                    id="botao" className={style.botao}
                >
                    <h1>Acessar</h1>
                </button>

            </section>

            <section className={style.acessos}>
                <nav>
                    <ul className={style.li}>
                        <li >
                            <Link href="/" className={style.link}>Home</Link>
                        </li>
                        <li>
                            <Link href="/state" className={style.link}>Paciente</Link>
                        </li>
                        <li>
                            <Link href="/listas" className={style.link}>Médico</Link>
                        </li>
                        <li>
                            <Link href="/props" className={style.link}>Listar</Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
    );
};