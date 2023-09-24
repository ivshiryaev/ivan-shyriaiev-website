import Text from './Text'
import Line from './Line'

function ScrollSvg() {
	return (
		<div className='
			w-20 h-20
			relative
			flex justify-center items-center
		'>
			<Text className='absolute object-fit'/>
			<Line className=''/>
		</div>
	)
}

export default ScrollSvg