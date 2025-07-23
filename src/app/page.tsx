import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'               // 👈 NUEVO
import Process from './components/Process'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Portfolio />
      <About />
      <Packages />
      <Testimonials />
      <Blog />            
      <Process />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
