import Spline from "@splinetool/react-spline"

import Section from "@/components/Section"
import Card from "@/components/Card"
import Button from "./Button"

export default function TestAnimation({ sceneUrl }: { sceneUrl: string }) {
    return (
        <Section>
            <Card className="flex justify-center items-center relative">
                {/* Main text */}
                <div
                    className="
                        flex flex-col gap-2
                        absolute
                        top-1/2 left-4 -translate-y-1/2 

                        md:left-16
                        md:max-w-[550px]
                    "
                >
                    <h1
                        className="w-fit
                            uppercase 
                            text-[24px] sm:text-[36px] 
                            leading-[24px] sm:leading-[36px]
                            text-whiteText
                            dark:text-transparent dark:bg-clip-text
                            dark:bg-gradient-to-r from-purple to-cyan-500"
                    >
                        Full stack dev
                    </h1>
                    <p className="leading-6">
                        Custom website design and development. 3D Animations.
                        SEO optimization. Fast and responsive websites.
                    </p>
                </div>
                {/* Small text */}
                <p className="hidden md:flex absolute right-4 bottom-4 leading-6 text-sm text-gray">
                    *psst you can click and rotate the rocket
                </p>
                <Spline
                    className="min-h-screen flex items-center"
                    scene={sceneUrl}
                ></Spline>
            </Card>
        </Section>
    )
}
