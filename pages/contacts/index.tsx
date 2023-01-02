import { Text } from "@/components/Text";
import { ContactsPageWrapper, InfoWrapper } from "./styled";

const Contacts = (): JSX.Element => (
  <ContactsPageWrapper>
    <InfoWrapper>
      <Text type="h2">1. г.Жлобин</Text>
      <Text type="text">«Любимый дом-1»</Text>
      <Text type="text">Гомельская обл., г. Жлобин, микр-н 17, д. 29-1а</Text>
      <Text type="text">
        Телефон <a href="tel:+375291322214">+375(29)-132-22-14</a>
      </Text>
      <Text type="text">
        {"Режим работы магазина Пн-Пт: 10.00-19.00\nСб-Вс: 10.00-17.00"}
      </Text>
    </InfoWrapper>
    <InfoWrapper>
      <Text type="h2">2. г.Светлогорск</Text>
      <Text type="text">«Мебель по карману»</Text>
      <Text type="text">
        Гомельская обл., г. Светлогорск, ул. Интернациональная, 30
      </Text>
      <Text type="text">
        Телефон <a href="tel:+375445339103">+375(44)533-91-03</a>
      </Text>
      <Text type="text">
        <a href="tel: +375299509555"> +375(29)950-95-55</a>
      </Text>
      <Text type="text">
        {
          "Режим работы магазина	Пн-Пт: 10.00-19.00\nСб: 10.00-17.00/nВс: 10.00-15.00"
        }
      </Text>
    </InfoWrapper>
    <InfoWrapper>
      <Text type="h2">3. г.Бобруйск</Text>
      <Text type="text">«Дом мебели»</Text>
      <Text type="text">
        Могилевская обл., г. Бобруйск, ул. М. Горького, 41
      </Text>
      <Text type="text">
        Телефон <a href="tel:+375296575357">+375(29)657-53-57</a>
      </Text>
      <Text type="text">
        {"Режим работы магазина Пн-Пт: 10.00-19.00\nСб-Вс: 10.00-16.00"}
      </Text>
    </InfoWrapper>
    <InfoWrapper>
      <Text type="h2">4. г.Могилев</Text>
      <Text type="text">«Любимый дом»</Text>
      <Text type="text">
        {"г. Могилев, бульвар Непокоренных, 26\nТЦ РИО, второй этаж"}
      </Text>
      <Text type="text">
        Телефон <a href="tel:+375447557844">+375(44)755-78-44</a>
      </Text>
      <Text type="text">
        {"Режим работы магазина Пн-Пт: 10.00-19.00\nСб-Вс: 10.00-17.00"}
      </Text>
    </InfoWrapper>
    <InfoWrapper>
      <Text type="h2">5. г. Минск</Text>
      <Text type="text">«Катрин-мебель»</Text>
      <Text type="text">
        {
          "г. Минск, у. Матусевича, 35\nТЦ «Мебельный МегаМаркет Домашний очаг», 3-ий этаж"
        }
      </Text>
      <Text type="text">
        Телефон <a href="tel:+375296221216">+375(29)622-12-16</a>
      </Text>
      <Text type="text">
        {"Режим работы магазина Пн-Пт: 10.00-20.00\nСб-Вс: 10.00-20.00"}
      </Text>
    </InfoWrapper>
  </ContactsPageWrapper>
);

export default Contacts;
