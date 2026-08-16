import "./globals.css";
import { Header } from "../components/Header";
export const metadata={title:"QuizOmDengang – Quiz om det, der skete engang",description:"Test din viden om mennesker, begivenheder og historier fra dengang."};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="da"><body><Header/>{children}<footer className="footer"><b>QuizOmDengang</b><span>Quiz om det, der skete engang.</span><div className="footerLinks"><a href="/">Forside</a><a href="/quizzer">Alle quizzer</a><a href="/rangliste">Rangliste</a><a href="/privatliv">Privatlivspolitik</a></div></footer></body></html>}
