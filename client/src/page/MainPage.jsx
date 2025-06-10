import React, { useEffect, useState } from 'react'
import Home from '../shared/home/Home'
import OurProduucts from '../shared/ourProducts/OurProduucts'
import AboutUs from '../shared/aboutUs/AboutUs'
import Testimonial from '../shared/testimonials/Testimonial'
import ContactUs from '../shared/contactUs/ContactUs'
import Footer from '../shared/footer/Footer'
import { fetchData, postContactData } from '../services/services'
import { toast } from 'react-toastify'


function MainPage() {
    // const [about,setAbout]=useState()
    // const [about,setAbout]=useState()
    // const [about,setAbout]=useState()
    // const [about,setAbout]=useState()
 
    const [partnerImages, setPartnerImages] = useState([]);
    const [sections, setSections] = useState([]);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        help: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        const { name, phone, email, help } = formData;
        if (!name || !phone || !email || !help) {
            toast.warning("Please fill all fields")
            return;
        } if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        } if (!phoneRegex.test(phone)) {
            toast.warning("Enter a valid 10-digit Indian phone number");
            return;
        }
        try {
            await postContactData({ endpoint: '/api/content/contact', data: formData });
            toast.success("Message sent successfully!");
            setFormData({ name: '', phone: '', email: '', help: '' });
        } catch (error) {
            console.error("Error:", error);
            toast.error("Something went wrong!");
        }
    };


    const getPartnerImage = async () => {
        try {
            const res = await fetchData({ endpoint: '/api/content/partner' });
            setPartnerImages(res.data);
            console.log(res.data);

        } catch (error) {
            console.error("Error fetching partner logos sections:", error);
        }
    };


    const getSections = async () => {
        try {
            const res = await fetchData({ endpoint: '/api/content' });
            setSections(res.data);
            console.log("section", res.data);

        } catch (err) {
            console.error("Error fetching sections:", err);
        }
    };
    useEffect(() => {
        getPartnerImage();
        getSections();
    }, []);


    const homeSection = sections.find(sec => sec.section === "home");

    const headerSection = sections.find(sec => sec.section === "home");
    const aboutSection = sections.find(sec => sec.section === "about");
    const contactSection = sections.find(sec => sec.section === "contact");

    return (
        <>
            <Home data={homeSection} headerLogo={headerSection} />
            <OurProduucts />
            <AboutUs data={aboutSection} />
            <Testimonial partnerImages={partnerImages} />
            <ContactUs data={contactSection} handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} />
            <Footer />
        </>
    )
}

export default MainPage
