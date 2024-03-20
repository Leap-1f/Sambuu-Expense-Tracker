import { Dashboard, Header } from "@/components/dashboard";
export default function Home() {
  const lastRecords = [
    { name: "Lending & Renting", hour: "3 hours ago", money: "1,000₮" },
    { name: "Lending & Renting", hour: "3 hours ago", money: "1,000₮" },
    { name: "Lending & Renting", hour: "3 hours ago", money: "1,000₮" },
    { name: "Lending & Renting", hour: "3 hours ago", money: "1,000₮" },
    { name: "Lending & Renting", hour: "3 hours ago", money: "1,000₮" },
  ];
  return (
    <div>
      <Header></Header>
      <Dashboard last={lastRecords}></Dashboard>
    </div>
  );
}
