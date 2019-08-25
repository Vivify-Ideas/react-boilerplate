import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { IntlProvider } from 'react-intl';
import { makeSelectLocale } from './selectors';

export function LanguageProvider({ locale, messages, children }) {
  return (
    <IntlProvider
      locale={locale}
      key={locale}
      massages={messages[locale]}
      textComponent={React.Fragment}
    >
      {React.Children.only(children)}
    </IntlProvider>
  );
}

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired
};

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale()
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(LanguageProvider);
