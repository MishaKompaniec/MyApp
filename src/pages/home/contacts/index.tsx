import { ContactInfo, ContactList, Wrapper, SubTitle, Title } from './style';

const Contacts = () => (
  <Wrapper id="contacts">
    <Title>Контакты</Title>
    <ContactInfo>
      <p>Адрес: г. Черкассы, ул. Цветочная, 15</p>
      <p>Телефон: +38 (093) 123-45-67</p>
      <p>Email: info@flowershop.ck.ua</p>
      <SubTitle>График работы:</SubTitle>
      <ContactList>
        <li>Пн-Пт: 09:00 - 20:00</li>
        <li>Сб: 10:00 - 18:00</li>
        <li>Вс: 10:00 - 16:00</li>
      </ContactList>
      <p>
        Доставка цветов по городу, оформление свадеб и праздничных мероприятий.
      </p>
    </ContactInfo>
  </Wrapper>
);

export default Contacts;
