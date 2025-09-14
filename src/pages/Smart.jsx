
import OfficeWiringPage from '../componets/office/OfficeWiringPage'
import OfficeHero from '../componets/office/OfficeHero'
import Highlight from '../componets/office/Highlight'
import ContactSection from '../componets/ContactSection'
import ServiceGallery from '../componets/office/ServiceGallery'


 const Smart = () => {


const content = {
  heading: "Smart Home Electrical Solutions",
  paragraph:
    "Transform your home into a modern smart living space with our expert smart home electrical setups. We provide seamless integration of automated lighting, appliances, and home devices for convenience, efficiency, and safety.",
  list: [
    "⚡ Automated lighting systems for energy efficiency",
    "💡 Smart appliance integration and control",
    "🔌 Secure wiring and connections for reliable performance",
    "🏠 Tailored smart solutions for your unique home setup",
  ],
  button: "Schedule Your Smart Home Consultation",
  image: "/images/smart1.jpg",
  imageAlt: "Smart home setup with modern devices",
};

// Hero Section Content
const heroContent = {
  title: "Comprehensive Smart Home Electrical Services",
  paragraph:
    "Upgrade your home with smart lighting, appliance automation, and integrated electrical systems. Our certified electricians ensure your smart home is safe, efficient, and future-ready.",
  buttonText: "Get Your Free Quote",
  image: "/images/smart.jpg",
  imageAlt: "Smart home electrical installation",
  buttonColor: "bg-blue-500 hover:bg-blue-600 text-white",
};

// Gallery Content
const galleryContent = [
  {
    title: "Our Recent Smart Home Projects",
    description:
      "Delivering excellence in smart home electrical installations, automated lighting, and appliance integrations with precision and safety.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        alt: "Smart home lighting system",
      },
      {
        src: "https://drsparky.ca/wp-content/uploads/2024/02/smart-home-1024x683.jpg",
        alt: "Home automation control panel",
      },
      {
        src: "https://totalpowerpa.com/wp-content/uploads/2025/08/man-installing-door-bell-camera-1024x959.jpg",
        alt: "Smart appliances integration",
      },
      {
        src: "https://images.jdmagicbox.com/comp/pathanamthitta/r4/9999px468.x468.181206100112.r9r4/catalogue/smart-home-electric-kalanjoor-pathanamthitta-electrical-goods-wholesalers-g8vvnrc8lv.jpg",
        alt: "Modern smart home setup",
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

export default Smart
