import { Text } from "@/components/Text";
import { memo } from "react";
import { FooterWrapper } from "./styled";

export const Footer = memo(() => {
  return (
    <FooterWrapper>
      <Text type="text">
        ИП Добышев Михаил Владимирович
        <br />
        Свидетельство о государственной
        <br />
        регистрации от 19.01.2021г.
        <br />
        УНП 491461279
      </Text>
      <Text type="text">
        Почта: <a href="mailto:zhlobinld@mail.ru">zhlobinld@mail.ru</a>
        <br />
        Тел.: <a href="tel:+375298436182">(029) 843 61 82</a>
        <br />
        <a href="tel:+375291293520">(029) 129-35-20</a>
      </Text>
      <Text type="text">
        Адрес: 247210, Республика Беларусь,
        <br />
        г. Жлобин, Гомельская обл.,
        <br />
        ул. Северная, 11а.
      </Text>
    </FooterWrapper>
  );
});
