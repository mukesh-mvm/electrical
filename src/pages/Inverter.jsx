
import OfficeWiringPage from '../componets/office/OfficeWiringPage'
import OfficeHero from '../componets/office/OfficeHero'
import Highlight from '../componets/office/Highlight'
import ContactSection from '../componets/ContactSection'
import ServiceGallery from '../componets/office/ServiceGallery'


 const Inverter = () => {


 const content = {
  heading: "Reliable Power Backup Systems",
  paragraph:
    "Ensure uninterrupted power supply with our expert UPS and inverter installations. We provide systems that efficiently convert and manage energy, keeping your home or office running smoothly during outages.",
  list: [
    "⚡ Installation of UPS and inverter systems for homes and offices",
    "🔋 Efficient energy conversion for continuous power supply",
    "💡 Safe and reliable backup solutions for critical devices",
    "🏢 Customized power backup systems tailored to your needs",
  ],
  button: "Schedule Your Power Backup Consultation",
  image: "/images/inverter1.jpg",
  imageAlt: "UPS and inverter installation",
};

// Hero Section Content
const heroContent = {
  title: "Comprehensive Power Backup Solutions",
  paragraph:
    "Protect your home or office from unexpected power outages with our UPS and inverter systems. Our certified electricians ensure safe installation and efficient energy conversion for uninterrupted operation.",
  buttonText: "Get Your Free Quote",
  image: "/images/inverter.jpg",
  imageAlt: "Power backup system installation",
  buttonColor: "bg-yellow-500 hover:bg-yellow-600 text-black",
};

// Gallery Content
const galleryContent = [
  {
    title: "Our Recent Power Backup Projects",
    description:
      "Delivering excellence in UPS and inverter installations, energy conversion systems, and backup solutions with precision and reliability.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1581091215369-3e4c2f1a4f59?w=800",
        alt: "UPS system installation",
      },
      {
        src: "https://images.unsplash.com/photo-1599058917211-7f3f5d37e4c7?w=800",
        alt: "Inverter backup setup",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        alt: "Home power backup system",
      },
      {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
        alt: "Office UPS and inverter installation",
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

export default Inverter
