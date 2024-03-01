import {
  LogIn,
  SingUp,
  Loading,
  Currency,
  Balance,
  Finish,
} from "@/components/log";
import { Header, Dashboard } from "@/components/dashboard";

export default function Home() {
  return (
    <div>
      {/* <LogIn></LogIn>
      <SingUp></SingUp>
      <Loading></Loading> */}
      {/* <Currency></Currency>
      <Balance></Balance>
      <Finish></Finish> */}
      <Header></Header>
      <Dashboard></Dashboard>
    </div>
  );
}
