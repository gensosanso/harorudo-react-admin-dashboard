import { FC, ReactNode } from 'react';
import Label from '../components/Label';

interface IFormFieldProps {
  htmlFor?: string;
  label?: string;
  error?: string;
  hint?: string;
  render: () => ReactNode;
}

const FormField: FC<IFormFieldProps> = ({ render, error, hint, label, htmlFor }) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      {label && <Label htmlFor={htmlFor}>{label}</Label>}
      {render()}
      {error && <p className="text-sm text-danger">{error}</p>}
      {hint && <p className="text-sm text-muted">{hint}</p>}
    </div>
  );
};

export default FormField;
