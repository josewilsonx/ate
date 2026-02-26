import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Questionario from "./components/Questionario";
import LoginSingup from "./components/LoginSingup/LoginSingup";
import Protecao from "./Proteção";        
import Dashboard from "./Dashboard";      
import QuestionarioPage from "./QuestionarioPage"; 
import Erro from "./erro";              

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Questionario />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-slate-950 text-white min-h-screen flex flex-col">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginSingup />} />
            <Route
              path="/dashboard"
              element={
                <Protecao>
                  <Dashboard />
                </Protecao>
              }
            />
            <Route path="/questionario" element={<QuestionarioPage />} />
            <Route path="*" element={<Erro />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;