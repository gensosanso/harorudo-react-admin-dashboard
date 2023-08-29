import { useContext, useEffect } from 'react';
import DataTable from '../../common/containers/DataTable';
import { LayoutContext } from '../../common/contexts/LayoutContext';
import { Payment, payments } from '../../core/mock/payment.mock';
import paymentColumns from './columns';

const ButtonDoc = () => {
  const { setTitle, setBreadcrumbs } = useContext(LayoutContext);

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
        title: 'Table',
        isActive: true,
      },
    ]);
  }, []);

  return (
    <div className="space-y-6">
      <h3>Button sizes</h3>
      <DataTable<Payment> columns={paymentColumns} data={payments} canSelectRows />
    </div>
  );
};

ButtonDoc.displayName = 'ButtonRoot';

export default ButtonDoc;
