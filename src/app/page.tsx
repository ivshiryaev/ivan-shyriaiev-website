import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import AboutMe from '@/components/AboutMe'
import ContactMe from '@/components/ContactMe'
import Footer from '@/components/Footer'
import TestAnimation from '@/components/TestAnimation'

export default function Home() {
    return (
        <>
            <main>
                <Hero/>
                <TestAnimation sceneUrl='https://prod.spline.design/7s5h1qpqDj9-a91C/scene.splinecode'/>
                <Projects/>
                <ContactMe/>
                <Footer/>
            </main>
        </>
    )
}
