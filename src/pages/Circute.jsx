
import OfficeWiringPage from '../componets/office/OfficeWiringPage'
import OfficeHero from '../componets/office/OfficeHero'
import Highlight from '../componets/office/Highlight'
import ContactSection from '../componets/ContactSection'
import ServiceGallery from '../componets/office/ServiceGallery'


 const Circute = () => {

// Section Content
const content = {
  heading: "Fan, Light & Appliance Installations / Circuit Breaker Replacement",
  paragraph:
    "Our skilled electricians provide professional fan, light, and appliance installations, along with circuit breaker replacement to ensure your home or office is safe, functional, and energy-efficient. We focus on precision, reliability, and modern electrical solutions for all your needs.",
  list: [
    "💡 Expert fan, light, and appliance installations for homes and offices",
    "⚡ Safe circuit breaker replacement to prevent electrical hazards",
    "🔌 Reliable connections for long-term performance",
    "🏢 Customized electrical solutions tailored to your space",
  ],
  button: "Schedule Your Free Consultation",
  image: "/images/circuit1.jpg",
  imageAlt: "Fan, light, and appliance inst allation with circuit breaker replacement",
};

// Hero Section Content
const heroContent = {
  title: "Professional Fan, Light & Appliance Installations",
  paragraph:
    "Keep your home or office safe and fully functional with our expert installations and circuit breaker replacement services. We deliver reliable and energy-efficient solutions with certified professionals.",
  buttonText: "Request a Free Quote",
  image: "/images/circuit.jpg",
  imageAlt: "Fan, light, and appliance installation",
  buttonColor: "bg-blue-500 hover:bg-blue-600 text-white",
};

// Gallery Content
const galleryContent = [
  {
    title: "Our Recent Projects",
    description:
      "Delivering excellence in fan, light, and appliance installations as well as circuit breaker replacements for homes and offices, ensuring safety, efficiency, and quality.",
    images: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkABBrzntmXSeuzdPJj5HnOMHMPItrTgOFtg&s",
        alt: "Ceiling fan installation",
      },
      {
        src: "https://www.shutterstock.com/image-photo/home-appliance-repair-oven-delivery-600nw-2454788205.jpg",
        alt: "LED light installation",
      },
      {
        src: "https://redimond.com/wp-content/uploads/2024/04/unique-interior-lighting.jpg",
        alt: "Appliance electrical installation",
      },
      {
        src: "https://www.baselinehk.com/storage/2023/10/12-Reasons-Why-You-Need-Professional-Lighting-Design-Service-for-Your-Business.jpg",
        alt: "Circuit breaker replacement",
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

export default Circute
