import { useContext, useEffect } from 'react';
import { MdDashboard } from 'react-icons/md';
import Button from '../common/components/Button';
import { LayoutContext } from '../common/contexts/LayoutContext';

const ButtonDoc = () => {
  const { setTitle, setBreadcrumbs } = useContext(LayoutContext);

  useEffect(() => {
    setTitle('Button documentation');
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
        title: 'Button',
        isActive: true,
      },
    ]);
  }, []);

  return (
    <div className="space-y-[8rem]">
      <div className="space-y-[2rem]">
        <div className="space-y-6">
          <h3>Button sizes</h3>
          <div className="flex flex-wrap gap-4">
            <div>
              <Button size="sm">Small</Button>
            </div>

            <div>
              <Button>Default</Button>
            </div>

            <div>
              <Button size="lg">Large</Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3>Button with icon only</h3>

          <div className="flex flex-wrap gap-4">
            <div>
              <Button size="icon-sm">
                <MdDashboard />
              </Button>
            </div>

            <div>
              <Button size="icon-md">
                <MdDashboard />
              </Button>
            </div>

            <div>
              <Button size="icon-lg">
                <MdDashboard />
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3>Button with icon + text</h3>

          <div className="flex flex-wrap gap-4">
            <div>
              <Button size="sm">
                <MdDashboard />
                Small
              </Button>
            </div>

            <div>
              <Button>
                <MdDashboard />
                Default
              </Button>
            </div>

            <div>
              <Button size="lg">
                <MdDashboard />
                Large
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3>Button with text</h3>

          <div className="flex flex-wrap gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ButtonDoc.displayName = 'ButtonDoc';

export default ButtonDoc;
