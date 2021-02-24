import React from 'react';
import { FieldSelect } from '../../components';
import css from './EditListingDescriptionForm.module.css';

const CustomCertificateSelectFieldMaybe = props => {
  const { name, id, certificateOptions, intl } = props;
  const certificateLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.certificateLabel',
  });

  return certificateOptions ? (
    <FieldSelect className={css.certificate} id={id} label={certificateLabel} name={name}>
      {certificateOptions.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomCertificateSelectFieldMaybe;
