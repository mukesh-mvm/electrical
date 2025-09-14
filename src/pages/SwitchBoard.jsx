
import OfficeWiringPage from '../componets/office/OfficeWiringPage'
import OfficeHero from '../componets/office/OfficeHero'
import Highlight from '../componets/office/Highlight'
import ContactSection from '../componets/ContactSection'
import ServiceGallery from '../componets/office/ServiceGallery'


 const SwitchBoard = () => {

// Section Content
const content = {
  heading: "New Wiring, Rewiring & Switchboard Upgrades",
  paragraph:
    "Our certified electricians provide professional new wiring installations, rewiring of older systems, and switchboard upgrades to ensure your office or home is safe, reliable, and future-ready. We combine precision, safety, and modern technology for seamless electrical solutions.",
  list: [
    "⚡ Professional new wiring installations for offices and homes",
    "🔌 Safe rewiring of older electrical systems",
    "💡 Switchboard upgrades for enhanced safety and efficiency",
    "🏢 Customized electrical solutions tailored to your building’s needs",
  ],
  button: "Schedule Your Free Consultation",
  image: "/images/switch1.jpg",
  imageAlt: "New wiring and switchboard upgrade",
};

// Hero Section Content
const heroContent = {
  title: "Reliable Wiring & Switchboard Upgrade Solutions",
  paragraph:
    "Ensure your workplace or home is safe and efficient with our expert new wiring, rewiring, and switchboard upgrade services. Modernize your electrical systems with certified professionals.",
  buttonText: "Request a Free Quote",
  image: "/images/switchbg.jpg",
  imageAlt: "New wiring and switchboard installation",
  buttonColor: "bg-green-500 hover:bg-green-600 text-white",
};

// Gallery Content
const galleryContent = [
  {
    title: "Our Recent Projects",
    description:
      "Delivering excellence in new wiring installations, rewiring projects, and switchboard upgrades for offices and homes with precision and safety.",
    images: [
      {
        src: "/images/switch2.png",
        alt: "New office wiring setup",
      },
      {
        src: "/images/switch3.png",
        alt: "LED and switchboard installation",
      },
      {
        src: "/images/switch4.png",
        alt: "Professional rewiring work",
      },
      {
        src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
        alt: "Modern office electrical upgrade",
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

export default SwitchBoard
