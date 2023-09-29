"use client"

import gsap from 'gsap'
import React, { useRef, useEffect } from 'react'

function GsapMagnetic({children}:{children: React.ReactNode}) {
	const ref = useRef<HTMLElement | null>(null)

	useEffect(()=>{
		if(!ref.current) return ()=>{}

		const element = ref.current

		const xTo = gsap.quickTo(element, 'x', {duration: 1, ease: 'elastic.out(1, 0,3)'})
		const yTo = gsap.quickTo(element, 'y', {duration: 1, ease: 'elastic.out(1, 0,3)'})

		function mouseMove(e: MouseEvent){
			if(element){
				const { clientX, clientY } = e
				const { width, height, left, top } = element?.getBoundingClientRect()
				const x = clientX - (left + width / 2)	
				const y = clientY - (top + height / 2)
				xTo(x)
				yTo(y)
			}
		}

		function mouseLeave(){
			xTo(0)
			yTo(0)
		}

			if(element){
				element.addEventListener('mousemove', mouseMove as EventListener)
				element.addEventListener('mouseleave', mouseLeave as EventListener)
			}

		return ()=> {
			if(element){
				element.removeEventListener('mousemove', mouseMove as EventListener)
				element.removeEventListener('mousemove', mouseLeave as EventListener)
			}
		}
	},[])

	return (
		React.cloneElement(children as React.ReactElement, {ref})
	)
}

export default GsapMagnetic