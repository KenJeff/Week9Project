import "./App.css";
import OpportunityList from "./components/OpportunityList";
import AddOppForm from "./components/AddOppForm";
import MyOpps from "./components/MyOpps";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <OpportunityList />
      <MyOpps />
      <AddOppForm />
      <Footer />
    </>
  );
}

export default App;
