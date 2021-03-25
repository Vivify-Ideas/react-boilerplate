import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { makeSelectLocale } from 'store/language/selectors';

export function LanguageProvider({ messages, children }) {
  const locale = useSelector(makeSelectLocale());

  return (
    <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
      {React.Children.only(children)}
    </IntlProvider>
  );
}

LanguageProvider.propTypes = {
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
};

export default LanguageProvider;
