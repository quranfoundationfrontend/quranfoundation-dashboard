import Image from "next/image";
import DashboardOverview from "./dashboardWidgets/DashboardOverview";
import ServiceHealth from "./dashboardWidgets/ServiceHealth";

export default function Home() {
  return (
 <div className="flex flex-col gap-1">
 <DashboardOverview/>
<ServiceHealth/>
 </div>
  );
}

