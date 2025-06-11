import { useTranslation } from 'react-i18next';

import { ContactInfo, ContactList, Wrapper, SubTitle, Title } from './style';

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <Wrapper id="contacts">
      <Title>{t('contacts.title')}</Title>
      <ContactInfo>
        <p>{t('contacts.address')}</p>
        <p>{t('contacts.phone')}</p>
        <p>{t('contacts.email')}</p>
        <SubTitle>{t('contacts.scheduleTitle')}</SubTitle>
        <ContactList>
          <li>{t('contacts.schedule.mon-fri')}</li>
          <li>{t('contacts.schedule.sat')}</li>
          <li>{t('contacts.schedule.sun')}</li>
        </ContactList>
        <p>{t('contacts.note')}</p>
      </ContactInfo>
    </Wrapper>
  );
};

export default Contacts;
