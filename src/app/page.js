import FriendsContainer from "./components/homepage/friends/FriendsContainer";
import Banner from "./pages/homepage/Banner";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner /> 
      
      <FriendsContainer />
    </div>
  );
}
