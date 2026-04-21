import Image from "next/image";
import Banner from "./pages/homepage/Banner";

export default function Home() {
  return (
    <div className="h-screen container mx-auto">
      <Banner />
    </div>
  );
}
