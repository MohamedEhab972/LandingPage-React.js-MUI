import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { theme } from "./theme";
import Header from "./Components/Header/Header";
import WhyChoseUS from "./Components/WhyChoseUS/WhyChoseUS";
import WorkShop from "./Components/WorkShop/WorkShop";
import OurServices from "./Components/OurServices/OurServices";
import ContactUS from "./Components/ContactUS/ContactUS";
import Footer from "./Components/Footer/Footer";
import LangContextProvider from "./context/LangContext";

function App() {
  return (
    <>
      <LangContextProvider>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Header />
          <WhyChoseUS />
          <WorkShop />
          <OurServices />
          <ContactUS />
          <Footer />
        </ThemeProvider>
      </LangContextProvider>
    </>
  );
}

export default App;
