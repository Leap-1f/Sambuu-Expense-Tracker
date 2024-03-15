import { data } from "autoprefixer";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const Dashboard = ({ last }) => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "jul"],
    datasets: [
      {
        label: "Revenue",
        data: [2800000, 2800000, 2800000, 2800000, 2800000, 2800000, 2800000],
        backgroundColor: "#84CC16",
      },
      {
        label: "loss",
        data: [1800000, 1800000, 1800000, 1800000, 1800000, 1800000, 1800000],
        backgroundColor: "#F97316",
      },
    ],
  };
  const Doug = {
    // labels: ["Bills", "Food", "Shopping", "Insurance", "Clothing"],
    datasets: [
      {
        label: "",
        data: [5000000, 5000000, 5000000, 5000000, 5000000],
        backgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
      },
    ],
  };

  return (
    <div className="flex justify-center bg-[#F3F4F6]">
      <div className="w-[54%] ">
        <div className="flex mt-7 justify-between">
          <div className="w-[32%] bg-blue-500 rounded-xl">
            <div
              className="h-[222px] rounded-xl flex justify-between"
              style={{
                backgroundImage: `url(/Noise.png)`,
              }}
            >
              <div className="pl-8 py-9">
                <div className="flex items-center gap-1">
                  <img className="w-5 h-5" src="/WVector.png" alt="" />
                  <img className="w-[41px] h-[14px]" src="/WGeld.svg" alt="" />
                </div>
                <div className="pt-[80px]">
                  <p className="text-blue-200 text-base font-normal">Cash</p>
                  <h1 className="text-white text-2xl font-semibold">10,000</h1>
                </div>
              </div>
              <div className="flex items-end">
                <img src="/Shape.svg" alt="" />
                {/* <img src="/Logo.svg" alt="" /> */}
              </div>
            </div>
          </div>
          <div className="bg-white w-[32%] h-fit rounded-xl">
            <div className="flex items-center gap-2 border-[1px] border-slate-200 border-x-white border-t-white px-6 py-4 rounded-t-xl">
              <div className="w-2 h-2 rounded-[50%] bg-[#84CC16] "></div>
              <h1 className="text-base font-semibold">Your Income</h1>
            </div>
            <div className="px-6 pt-5 pb-6">
              <h1 className=" text-4xl font-semibold">1,200,000₮</h1>
              <p className=" text-lg font-normal text-[#64748B] pb-4 pt-2">
                Your Income Amount
              </p>
              <div className="flex">
                <img src="up.svg" alt="" />
                <p className="text-lg font-normal">32%</p>
                <p className="text-lg font-normal">from last month</p>
              </div>
            </div>
          </div>
          <div className="bg-white w-[32%] h-fit rounded-xl">
            <div className="flex items-center gap-2 border-[1px] border-slate-200 border-x-white border-t-white px-6 py-4 rounded-t-xl">
              <div className="w-2 h-2 rounded-[50%] bg-[#0166FF] "></div>
              <h1 className="text-base font-semibold">Your Income</h1>
            </div>
            <div className="px-6 pt-5 pb-6">
              <h1 className=" text-4xl font-semibold">-1,200,000₮</h1>
              <p className=" text-lg font-normal text-[#64748B] pb-4 pt-2">
                Total Expenses
              </p>
              <div className="flex">
                <img src="dosho.svg" alt="" />
                <p className="text-lg font-normal">32%</p>
                <p className="text-lg font-normal">from last month</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between *:bg-white *:rounded-xl mt-6">
          <div className="w-[49%]">
            <div className="px-6 py-4 border-[1px] border-slate-200 border-x-white border-t-white rounded-t-xl">
              <h1 className="text-base font-semibold">Income - Expense</h1>
            </div>
            <div className="px-6 py-8">
              <Bar data={data} />
            </div>
          </div>
          <div className="w-[49%] ">
            <div className="px-6 py-4 border-[1px] border-slate-200 border-x-white border-t-white rounded-t-xl">
              <h1 className="text-base font-semibold">Income - Expense</h1>
            </div>
            <div className="px-6 py-8 h-[300px] flex justify-between">
              <Doughnut data={Doug}> </Doughnut>
              <div className=" *:w-3 *:h-3 flex gap-7 flex-col justify-center *:rounded-[50%]">
                <div className="bg-[#1C64F2]"></div>
                <div className="bg-[#E74694]"></div>
                <div className="bg-[#FDBA8C]"></div>
                <div className="bg-[#16BDCA]"></div>
                <div className="bg-[#F2901C]"></div>
              </div>
              <ul className="flex gap-4 flex-col justify-center">
                <li>Bills</li>
                <li>Food</li>
                <li>Shopping</li>
                <li>Insurance</li>
                <li>Clothing</li>
              </ul>
              <ul className="flex gap-4 flex-col justify-center">
                <li>50000₮</li>
                <li>50000₮</li>
                <li>50000₮</li>
                <li>50000₮</li>
                <li>50000₮</li>
              </ul>
              <ul className=" flex gap-4 flex-col justify-center ">
                <li>15.50%</li>
                <li>15.50%</li>
                <li>15.50%</li>
                <li>15.50%</li>
                <li>15.50%</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6 mb-[60px]">
          <div className="px-6 py-4 border-[1px] border-slate-200 border-x-white border-t-white rounded-t-xl bg-white">
            <h1 className="text-base font-semibold">Income - Expense</h1>
          </div>
          {last.map((el) => {
            return (
              <div className="bg-white">
                <div className="mx-6">
                  <div className="flex justify-between items-center py-5 border-[1px] border-slate-200 border-x-white border-t-white">
                    <div className="flex">
                      <div className="bg-[#0166FF] rounded-[50%] flex justify-center items-center w-10 h-10">
                        <img src="House.svg" alt="" />
                      </div>
                      <div>
                        <h1 className="text-base font-normal">{el.name}</h1>
                        <p className="text-xs font-normal text-[#6B7280]">
                          {el.hour}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h1 className=" text-base font-semibold">-{el.money}</h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
