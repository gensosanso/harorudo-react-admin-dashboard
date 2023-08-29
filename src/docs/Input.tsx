import { useContext, useEffect, useState } from 'react';
import DatePicker from '../common/components/DatePicker';
import { Input } from '../common/components/Input';
import FormField from '../common/containers/FormField';
import { LayoutContext } from '../common/contexts/LayoutContext';

const DatePickerDoc = () => {
  const { setTitle, setBreadcrumbs } = useContext(LayoutContext);

  const [date] = useState<Date | null>(null);
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    setTitle('Table documentation');
    setBreadcrumbs([
      {
        title: 'Dashboard',
        link: '/',
      },
      {
        title: 'Documentation',
        link: '/',
      },
      {
        title: 'Input',
        isActive: true,
      },
    ]);
  }, []);

  return (
    <div className="space-y-[2rem] bg-white p-4">
      <div className="space-y-6">
        <h3>Simple input</h3>
        <FormField
          hint={input}
          render={() => <Input value={input} onChange={(e) => setInput(e.target.value)} />}
        />
      </div>
      <div className="space-y-6">
        <h3>Date picker</h3>
        <FormField hint={date ? date.toISOString() : ''} render={() => <DatePicker />} />
      </div>
    </div>
  );
};

DatePickerDoc.displayName = 'DatePickerDoc';

export default DatePickerDoc;
