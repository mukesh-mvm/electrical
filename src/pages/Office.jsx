
import OfficeWiringPage from '../componets/office/OfficeWiringPage'
import OfficeHero from '../componets/office/OfficeHero'
import Highlight from '../componets/office/Highlight'
import ContactSection from '../componets/ContactSection'
import ServiceGallery from '../componets/office/ServiceGallery'


 const Office = () => {


 const content = {
    heading: "Modern Office Wiring & Lighting",
    paragraph:
      "Our expert team provides reliable wiring and lighting solutions that keep your office running safely and efficiently. From high-quality LED installations to secure wiring setups, we ensure your workspace is future-ready.",
    list: [
      "⚡ Complete electrical wiring for office setups",
      "💡 LED lighting for reduced energy costs",
      "🔌 Safe & durable connections for long-term use",
      "🏢 Custom solutions tailored to your office design",
    ],
    button: "Get Your Free Consultation",
    image: "/images/led1.jpg",
    imageAlt: "Office LED lighting setup",
  };




    const heroContent = {
    title: "Complete Office Wiring & LED Lighting Solutions",
    paragraph:
      "Power up your workplace with safe wiring, modern lighting, and energy-efficient solutions designed to enhance productivity.",
    buttonText: "Get a Free Quote",
    image: "/images/led.jpg",
    imageAlt: "Office wiring and lighting",
    buttonColor: "bg-yellow-500 hover:bg-yellow-600 text-black",
  };


  


  const galleryContent = [
  {
    title: "Our Recent Projects",
    description:
      "Delivering excellence in complete office wiring and modern LED lighting setups with top-class precision.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800",
        alt: "Office wiring setup",
      },
      {
        src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800",
        alt: "LED ceiling lights",
      },
      {
        src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
        alt: "Professional wiring",
      },
      {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
        alt: "Modern office lighting",
      },
    ],
  },
];


  return (
    <div>
        <OfficeHero heroContent={heroContent}/>
        <Highlight content={content}/>
        <ServiceGallery galleryContent={galleryContent}/>
        <OfficeWiringPage/>
         <ContactSection/>
        
    </div>
  )
}

export default Office
