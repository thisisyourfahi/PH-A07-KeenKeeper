import FriendsContainer from "./components/homepage/FriendsContainer";
import Banner from "./pages/homepage/Banner";

export default function Home() {
  return (
    <div className="h-screen container mx-auto">
      <Banner /> 
      
      <FriendsContainer />
    </div>
  );
}
