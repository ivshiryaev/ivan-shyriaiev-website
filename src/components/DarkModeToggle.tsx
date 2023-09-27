"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MdLightMode, MdModeNight } from 'react-icons/md'
import GsapMagnetic from '@/components/animation/GsapMagnetic'

function DarkModeToggle() {
	const [isMounted, setIsMounted] = useState(false)
	const {resolvedTheme, setTheme} = useTheme()
	const isDarkMode = resolvedTheme === 'dark' ? true : false

	useEffect(()=>{
		setIsMounted(true)
	},[])

	if(!isMounted) return null

	function toggleDarkMode(){
		setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
	}

	return (
		<GsapMagnetic>
			<div className={`
				transition
				flex flex-col gap-1
				justify-center items-center
				${isDarkMode ? 'text-whiteText' : 'text-darkText'}
			`}>
				<div 
					className={`
						relative
						transition
						cursor-pointer
						text-[24px]
						border border-2
						w-[48px] h-[48px]
						rounded-full
						flex justify-center items-center
					`}
					onClick={toggleDarkMode}
				>
					<span className={`
						absolute
						transition
						ease-[cubic-bezier(.48,-0.72,.55,1.69)]
						${isDarkMode ? `
							opacity-100
							translate-x-0
						` : `
							opacity-0
							translate-x-[100%]
						`}
					`}>
						<MdLightMode/>
					</span>
					<span className={`
						absolute
						transition
						ease-[cubic-bezier(.48,-0.72,.55,1.69)]
						${isDarkMode ? `
							opacity-0
							translate-x-[-100%]
						` : `
							opacity-100
							translate-x-0
						`}
					`}>
						<MdModeNight/>
					</span>
				</div>
			</div>
		</GsapMagnetic>
	)
}

export default DarkModeToggle