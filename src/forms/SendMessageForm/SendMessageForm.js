import React, { Component } from 'react';
import { string, bool, func } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import classNames from 'classnames';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { Form, FieldTextInput, SecondaryButton } from '../../components';
import { propTypes } from '../../util/types';
import css from './SendMessageForm.module.css';

const BLUR_TIMEOUT_MS = 100;

const IconSendMessage = () => (
    <svg
      className={css.sendIcon}
      height="14"
      viewBox="0 0 14 14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className={css.strokeMatter} fill="none" fillRule="evenodd" strokeLinejoin="round">
        <path d="M12.91 1L0 7.003l5.052 2.212z" />
        <path d="M10.75 11.686L5.042 9.222l7.928-8.198z" />
        <path d="M5.417 8.583v4.695l2.273-2.852" />
      </g>
    </svg>
  );

class SendMessageFormComponent extends Component {
  constructor(props) {
    super(props);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.blurTimeoutId = null;
  }

  handleFocus() {
    this.props.onFocus();
    window.clearTimeout(this.blurTimeoutId);
  }

  handleBlur() {
    // We only trigger a blur if another focus event doesn't come
    // within a timeout. This enables keeping the focus synced when
    // focus is switched between the message area and the submit
    // button.
    this.blurTimeoutId = window.setTimeout(() => {
      this.props.onBlur();
    }, BLUR_TIMEOUT_MS);
  }

  render() {
    return (
      <FinalForm
        {...this.props}
        render={formRenderProps => {
          const {
            rootClassName,
            className,
            messagePlaceholder,
            handleSubmit,
            inProgress,
            sendMessageError,
            invalid,
            form,
            formId,
          } = formRenderProps;

          const classes = classNames(rootClassName || css.root, className);
          const submitInProgress = inProgress;
          const submitDisabled = invalid || submitInProgress;
          return (
            <Form className={classes} onSubmit={values => handleSubmit(values, form)}>
              <FieldTextInput
                id={formId ? `${formId}.message` : 'message'}
                inputRootClass={css.textarea}
                name="message"
                onBlur={this.handleBlur}
                onFocus={this.handleFocus}
                placeholder={messagePlaceholder}
                type="textarea"
              />
              <div className={css.submitContainer}>
                <div className={css.errorContainer}>
                  {sendMessageError ? (
                    <p className={css.error}>
                      <FormattedMessage id="SendMessageForm.sendFailed" />
                    </p>
                  ) : null}
                </div>
                <SecondaryButton
                  disabled={submitDisabled}
                  inProgress={submitInProgress}
                  onBlur={this.handleBlur}
                  onFocus={this.handleFocus}
                  rootClassName={css.submitButton}
                >
                  <IconSendMessage />
                  <FormattedMessage id="SendMessageForm.sendMessage" />
                </SecondaryButton>
              </div>
            </Form>
          );
        }}
      />
    );
  }
}

SendMessageFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  inProgress: false,
  messagePlaceholder: null,
  onFocus: () => null,
  onBlur: () => null,
  sendMessageError: null,
};

SendMessageFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  inProgress: bool,

  messagePlaceholder: string,
  onSubmit: func.isRequired,
  onFocus: func,
  onBlur: func,
  sendMessageError: propTypes.error,

  // from injectIntl
  intl: intlShape.isRequired,
};

const SendMessageForm = compose(injectIntl)(SendMessageFormComponent);

SendMessageForm.displayName = 'SendMessageForm';

export default SendMessageForm;
