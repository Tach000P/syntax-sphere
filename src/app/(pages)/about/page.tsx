import QRCOde from "@/ui/QRCode/QRCode";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас - Syntax Sphere",
  description: "Информация о нас и контакты",
};

function About() {
  return (
    <div>
      <h1>О нас</h1>
      <p>
        Этот сайт создан для того, чтобы делиться последними новостями и
        руководствами по различным темам. Мы стремимся предоставлять актуальную
        и полезную информацию для наших читателей. Если у вас есть вопросы или
        предложения, пожалуйста, свяжитесь с нами через контактную форму.
      </p>
      <h1>Контакты</h1>
      <p>
        Вы можете связаться с нами по электронной почте:{" "}
        <a href="mailto:syntax.sphere.project">Syntax Sphere</a>
      </p>
      <div>
        <h1>Наши соц сети:</h1>
        <QRCOde type="tg" link="syntax_sphere" />
      </div>
      <div>
        <h1>Наши спонсоры:</h1>
        <QRCOde type="start" link="seven_team" />
      </div>
    </div>
  );
}

export default About;
