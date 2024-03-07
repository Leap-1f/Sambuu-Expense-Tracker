import {
  LogIn,
  SingUp,
  Loading,
  Currency,
  Balance,
  Finish,
} from "@/components/log";
import { Header, Dashboard, Records } from "@/components/dashboard";

export default function Home() {
  const lastRecords = [
    { name: "Lending & Renting", hour: "3 hours ago", money: "1,000₮" },
    { name: "Lending & Renting", hour: "3 hours ago", money: "1,000₮" },
    { name: "Lending & Renting", hour: "3 hours ago", money: "1,000₮" },
    { name: "Lending & Renting", hour: "3 hours ago", money: "1,000₮" },
    { name: "Lending & Renting", hour: "3 hours ago", money: "1,000₮" },
  ];
  const Category = [
    {
      name: "Food & Drinks",
    },
    {
      name: "Shopping",
    },
    {
      name: "Housing",
    },
    {
      name: "Transportation",
    },
    {
      name: "Vehicle",
    },
    {
      name: "Life & Entertainment",
    },
    {
      name: "Communication, PC",
    },
    {
      name: "Financial expenses",
    },
    {
      name: "Investments",
    },
    {
      name: "Income",
    },
    {
      name: "Others",
    },
  ];
  return (
    <div>
      {/* <LogIn></LogIn> */}
      {/* <SingUp></SingUp> */}
      {/* <Loading></Loading> */}
      {/* <Currency></Currency> */}
      {/* <Balance></Balance> */}
      {/* <Finish></Finish> */}
      <Header></Header>
      {/* <Dashboard last={lastRecords}></Dashboard> */}
      <Records Category={Category}></Records>
    </div>
  );
}
