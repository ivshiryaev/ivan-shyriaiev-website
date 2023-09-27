"use client"

import gsap from 'gsap'
import React, { useRef, useEffect } from 'react'

function GsapMagnetic({children}:{children: ReactNode}) {
	const ref = useRef(null)

	useEffect(()=>{
		const xTo = gsap.quickTo(ref.current, 'x', {duration: 2, ease: 'elastic.out(1, 0,3)'})
		const yTo = gsap.quickTo(ref.current, 'y', {duration: 2, ease: 'elastic.out(1, 0,3)'})

		function mouseMove(e){
			const { clientX, clientY } = e
			const { width, height, left, top } = ref.current.getBoundingClientRect()
			const x = clientX - (left + width / 2)	
			const y = clientY - (top + height / 2)
			xTo(x)
			yTo(y)
		}

		function mouseLeave(){
			xTo(0)
			yTo(0)
		}

		ref.current.addEventListener('mousemove', mouseMove)
		ref.current.addEventListener('mouseleave', mouseLeave)

		return ()=> {
			window.removeEventListener('mousemove', mouseMove)
			window.removeEventListener('mousemove', mouseLeave)
		}
	},[])

	return (
		React.cloneElement(children, {ref})
	)
}

export default GsapMagnetic