import {ErrorMessage, Props} from '@hookform/error-message';
import {Message, MultipleFieldErrors, FieldValues} from 'react-hook-form';

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
          <p key={type}>{message}</p>
        ))
      }
    />
  );
}
