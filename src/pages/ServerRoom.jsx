
import OfficeWiringPage from '../componets/office/OfficeWiringPage'
import OfficeHero from '../componets/office/OfficeHero'
import Highlight from '../componets/office/Highlight'
import ContactSection from '../componets/ContactSection'
import ServiceGallery from '../componets/office/ServiceGallery'


 const ServerRoom = () => {


 const content = {
  heading: "Professional Server Room Wiring & Energy Management",
  paragraph:
    "Optimize your server room with our expert wiring solutions, energy audits, and load management services. We ensure safe, efficient, and reliable electrical infrastructure for your critical IT systems.",
  list: [
    "⚡ Structured wiring for server rooms and data centers",
    "💡 Comprehensive energy audits to reduce consumption",
    "🔌 Load management for stable and efficient operations",
    "🏢 Customized solutions to meet your IT and office requirements",
  ],
  button: "Schedule Your Consultation",
  image: "/images/server1.jpg",
  imageAlt: "Server room wiring and energy management",
};

// Hero Section Content
const heroContent = {
  title: "Comprehensive Server Room Wiring & Energy Solutions",
  paragraph:
    "Ensure optimal performance of your IT infrastructure with professional server room wiring, energy audits, and load management. Our certified electricians provide safe, reliable, and efficient solutions.",
  buttonText: "Get Your Free Quote",
  image: "/images/server.jpg",
  imageAlt: "Server room wiring and load management",
  buttonColor: "bg-gray-800 hover:bg-gray-900 text-white",
};

// Gallery Content
const galleryContent = [
  {
    title: "Our Recent Server Room Projects",
    description:
      "Delivering excellence in server room wiring, energy audits, and load management with precision and reliability for commercial and IT environments.",
    images: [
      {
        src: "https://thumbs.dreamstime.com/b/renewable-energy-systems-wind-turbine-control-panels-wiring-setup-background-highlighting-sustainable-technology-359663911.jpg",
        alt: "Server room structured wiring",
      },
      {
        src: "https://www.shutterstock.com/image-photo/electricity-electrical-maintenance-service-engineer-260nw-2159213089.jpg",
        alt: "Energy audit in server room",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        alt: "Load management setup",
      },
      {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
        alt: "Professional server room wiring",
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

export default ServerRoom
