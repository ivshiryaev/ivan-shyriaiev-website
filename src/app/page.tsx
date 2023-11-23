import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import AboutMe from '@/components/AboutMe'
import ContactMe from '@/components/ContactMe'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <>
            <main>
                <Hero/>
                <AboutMe/>
                <Projects/>
                <Skills/>
                <ContactMe/>
                <Footer/>
            </main>
        </>
    )
}
