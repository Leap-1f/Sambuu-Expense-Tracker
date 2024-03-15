import { Records, Header, TrueCategory } from "@/components/dashboard";
export default function Home() {
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
      <Header></Header>
      {/* <TrueCategory></TrueCategory> */}
      <Records category={Category}></Records>
    </div>
  );
}
