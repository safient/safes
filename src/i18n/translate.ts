import _ from 'lodash';
import i18n from 'i18n-js';

i18n.translations['en'] = require('./locales/en.json');

const _translate = _.memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
);

export const translate = (key: string, config?: object) => {
  return _translate(key, config || {});
};
