import "./globals.css";
import Header from "@/Header/index";

export const metadata = {
  title: "Farm Life",
  description: "Gerenciador de consultorios",
  charset:'UTF-8',
  author:'João Vitor Silva de Oliveira',
  keywords:'algo para buscar'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
