import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import FinanceServices from '@/components/sections/FinanceServices'
import ManpowerServices from '@/components/sections/ManpowerServices'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import ContactForm from '@/components/sections/ContactForm'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FinanceServices />
        <ManpowerServices />
        <WhyChooseUs />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
