import { FC } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useLocation } from 'react-router-dom';
import Card from './components/Card';

const Dashboard: FC = () => {
  const location = useLocation();
  const data = {
    series: [
      {
        name: 'TotalUser',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: '',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
    },
  };

  const TrafficBylocation = {
    series: [
      {
        name: 'TotalUser',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: '',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
    },
  };

  const user = {
    series: [44, 55, 41, 17],
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['Yaounde', 'Douala', 'Bafoussam', 'Other'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  };

  return (
    <div className="flex-col">
      <div className="mb-3 inline-flex h-7 cursor-pointer items-center justify-start gap-1 rounded-lg px-2 py-1 transition-colors duration-300 hover:bg-black/10">
        <div className="text-sm font-semibold leading-tight text-slate-900">Today</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.64645 5.65967C3.84171 5.44678 4.15829 5.44678 4.35355 5.65967L7.64645 9.25C7.84171 9.4629 8.15829 9.4629 8.35355 9.25L11.6464 5.65968C11.8417 5.44678 12.1583 5.44678 12.3536 5.65968C12.5488 5.87257 12.5488 6.21775 12.3536 6.43065L9.06066 10.021C8.47487 10.6597 7.52513 10.6597 6.93934 10.021L3.64645 6.43065C3.45118 6.21775 3.45118 5.87257 3.64645 5.65967Z"
            fill="black"
            fillOpacity="0.4"
          />
        </svg>
      </div>
      <div className="grid grid-cols-4 gap-5 ">
        <Card title="Community" value="10" indicator="+11.01%" colorType="red" />
        <Card title="Members" value="508" indicator="+9.15%" colorType="gray" />
        <Card title="Reported Incidents" value="10" indicator="-0.56%" colorType="red" />
        <Card title="Security Services" value="06" indicator="-1.45%" colorType="gray" />
      </div>

      <div className="my-5 inline-flex h-80 w-full flex-col items-center justify-start gap-3 rounded-2xl bg-slate-50 px-4 pb-6 pt-5">
        <div className="inline-flex items-center justify-start gap-2 self-stretch">
          <div className="flex items-center justify-start gap-4">
            <div className="flex items-start justify-start gap-1">
              <div className="inline-flex flex-col items-start justify-center gap-1 rounded-lg px-2 py-1">
                <div className="text-sm font-semibold leading-tight text-slate-900">
                  Total Users
                </div>
              </div>
              <div className="inline-flex cursor-pointer flex-col items-start justify-center gap-1 rounded-lg p-1 px-2 transition-colors hover:rounded hover:bg-black/5">
                <div className="text-sm font-normal leading-tight text-black text-opacity-40">
                  Reported incidents
                </div>
              </div>
              <div className="inline-flex cursor-pointer flex-col items-start justify-center gap-1 rounded-lg p-1 px-2 transition-colors hover:rounded hover:bg-black/5">
                <div className="text-sm font-normal leading-tight text-black text-opacity-40 ">
                  Operating Status
                </div>
              </div>
            </div>
            <div className=" h-[1px] w-5 origin-top  rotate-90 border border-black/20 " />
            <div className="flex w-fit  cursor-pointer items-center justify-center p-1 px-2 transition-colors hover:rounded hover:bg-black/5">
              <div className="text-xs font-normal leading-[18px] text-slate-900  ">
                Current Week
              </div>
            </div>
            <div className="flex w-fit cursor-pointer  justify-center rounded  p-1 px-2 text-center transition-colors hover:rounded hover:bg-black/5">
              <div className="text-xs font-normal leading-[18px] text-slate-900">Previous Week</div>
            </div>
          </div>
          <div className="flex h-7 w-7 items-center justify-end gap-1 rounded-lg p-1">
            <div className="relative h-5 w-5" />
          </div>
        </div>
        <div className="relative flex h-[236px] w-full flex-col items-start justify-start ">
          <ReactApexChart
            options={data.options}
            series={data.series}
            type="line"
            height={236}
            width={980}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="relative h-[273px] rounded-2xl bg-slate-50">
          <div className=" p-5 text-sm font-semibold leading-tight text-slate-900">
            Traffic by location
          </div>
          <div className=" mx-auto flex h-full w-full">
            <ReactApexChart
              options={TrafficBylocation.options}
              series={TrafficBylocation.series}
              type="bar"
              height={180}
              width={480}
            />
          </div>
        </div>

        <div className="relative max-h-[273px] flex-col  rounded-2xl bg-slate-50">
          <div className=" p-5 text-sm font-semibold leading-tight text-slate-900">
            Traffic by city
          </div>
          <div className=" mx-auto flex h-full w-full">
            <ReactApexChart
              options={user.options}
              series={user.series}
              type="donut"
              height={180}
              width={432}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
