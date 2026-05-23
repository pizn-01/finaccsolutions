import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import CoreServices from '@/components/sections/CoreServices'
import ToolsTechnology from '@/components/sections/ToolsTechnology'
import VATalent from '@/components/sections/VATalent'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import WhoWeWorkWith from '@/components/sections/WhoWeWorkWith'
import ContactForm from '@/components/sections/ContactForm'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CoreServices />
        <ToolsTechnology />
        <VATalent />
        <WhyChooseUs />
        <WhoWeWorkWith />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
