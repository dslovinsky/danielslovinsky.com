import {ErrorMessage, Props} from '@hookform/error-message';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Message, MultipleFieldErrors, FieldValues} from 'react-hook-form';

import styles from 'styles/components/contact.module.scss';

type TAs =
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | React.ComponentType<any>
  | keyof JSX.IntrinsicElements;

interface Render {
  message: Message;
  messages?: MultipleFieldErrors;
}

export default function ErrorMessages({...props}: Props<FieldValues, TAs>) {
  return (
    <ErrorMessage
      {...props}
      render={({messages}: Render) =>
        messages &&
        Object.entries(messages).map(([type, message]) => (
          <div
            key={type}
            className={`${styles.error_message} flex items-center my-1.5`}>
            <FontAwesomeIcon
              height={18}
              width={18}
              icon={'exclamation-triangle'}
              className="mb-0.5"
            />
            <p className="mx-2">{message}</p>
          </div>
        ))
      }
    />
  );
}
