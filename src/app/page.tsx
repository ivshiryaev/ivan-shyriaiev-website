import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import AboutMe from '@/components/AboutMe'
import ContactMe from '@/components/ContactMe'
import Footer from '@/components/Footer'
import DarkModeToggle from '@/components/DarkModeToggle'

export default function Home() {
    return (
        <>
            <aside className='
                fixed
                z-30
                top-2 right-2
                lg:top-4 lg:right-4
            '>
                <DarkModeToggle/>
            </aside>
            <main 
                className={`
                    py-1 lg:py-2
                    flex flex-col justify-center
                `}
            >
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
