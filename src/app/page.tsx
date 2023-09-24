import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import ThingsIUse from '@/components/ThingsIUse'
import AboutMe from '@/components/AboutMe'
import ContactMe from '@/components/ContactMe'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main 
            className={`
                flex flex-col justify-center
            `}
        >
            <Hero/>
            <Projects/>
            <ThingsIUse/>
            <AboutMe/>
            <ContactMe/>
            <Footer/>
        </main>
    )
}
