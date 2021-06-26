import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

import Logo from "../../Images/imagefooter.png";

import { FooterCont, Lists, Signature } from "./Footer.styles";

function Footer() {
    return (
        <FooterCont>
            <Signature>
                <img
                    src={Logo}
                    alt={"Logo Warren"}
                />

                <p>
                    Corretora de investimentos que cria uma experiência completa, segura e transparente ✨
                </p>

                <section>
                    <IconContext.Provider
                        value={{ color: "var(--white)", size: "1.7rem" }}
                    >
                        <FaFacebook />
                    </IconContext.Provider>

                    <IconContext.Provider
                        value={{ color: "var(--white)", size: "1.7rem" }}
                    >
                        <FaInstagram />
                    </IconContext.Provider>

                    <IconContext.Provider
                        value={{ color: "var(--white)", size: "1.7rem" }}
                    >
                        <FaTwitter />
                    </IconContext.Provider>

                    <IconContext.Provider
                        value={{ color: "var(--white)", size: "1.7rem" }}
                    >
                        <FaLinkedin />
                    </IconContext.Provider>
                </section>
            </Signature>

            <Lists>
                <ul>
                    <h4>Sobre</h4>
                    <li>Quem Somes</li>
                    <li>Planos Warren</li>
                    <li>Blog</li>
                    <li>Warren Invites</li>
                    <li>Trabalhe Conosco</li>
                    <li>Imprensa</li>
                </ul>

                <ul>
                    <h4>Investir</h4>
                    <li>Trade</li>
                    <li>Conta</li>
                    <li>Produtos de Investimento</li>
                    <li>Previdência</li>
                    <li>Conta PJ</li>
                    <li>for Business</li>
                </ul>

                <ul>
                    <h4>Aprender</h4>
                    <li>Warren Educação</li>
                    <li>in Company</li>
                    <li>Desintoxicação Financeira</li>
                    <li>Warren Life Express</li>
                    <li>Como investir na bolsa</li>
                    <li>Mercado em Análise</li>
                </ul>

                <ul>
                    <h4>Falo Conosco</h4>
                    <li>Duvidas?</li>
                    <li>Acesse nosso FAQ</li>
                    <li>Precisa de ajuda?</li>
                    <li>meajuda@warren.com.br</li>
                    <li>Acesse o chat</li>
                    <li>Das 8h às 20h (dias úteis)</li>
                </ul>
            </Lists>
        </FooterCont>
    );
}

export default Footer;