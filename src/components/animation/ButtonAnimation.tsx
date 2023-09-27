"use client"

import { ReactNode, useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import Noise from '@/components/Noise'
import GsapMagnetic from '@/components/animation/GsapMagnetic'

function ButtonAnimation({children} : {children: ReactNode}) {
	const circleRef = useRef(null)
	const timelineRef = useRef(null)

	useEffect(() => {
		timelineRef.current = gsap.timeline({paused: true})
		timelineRef.current
			.to(circleRef.current, {
				width: '150%',
				top: '-25%',
				duraion: 0.3,
				ease: 'power3.in',
			}, 'enter')
			.to(circleRef.current, {
				width: '125%',
				top: '-150%',
				duration: 0.3,
			}, 'exit')
	}, [])

	function manageMouseEnter(){
		timelineRef.current.tweenFromTo('enter', 'exit')
	}

	function manageMouseLeave(){
		timelineRef.current.play()
	}

	return (
		<GsapMagnetic>
			<div 
				onMouseEnter={manageMouseEnter}
				onMouseLeave={manageMouseLeave}
				className='
					overflow-hidden
					relative
					flex items-center justify-center
					rounded-[48px]
				'
			>
				<div 
					ref={circleRef} 
					className='
						overflow-hidden
						absolute 
						top-[100%]
						w-full h-[150%] 
						rounded-[50%]
						bg-yellow
						dark:bg-purple
					'
				>
					<Noise className='opacity-1 dark:opacity-25'/>
				</div>
				{children}
			</div>
		</GsapMagnetic>
	)
}

export default ButtonAnimation