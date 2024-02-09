import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]  ">
      <Header/>
      <div className="container mx-auto px-12 py-4 mt-24">
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <EmailSection/>
      </div>
      <Footer/>
    </main>
  );
}
