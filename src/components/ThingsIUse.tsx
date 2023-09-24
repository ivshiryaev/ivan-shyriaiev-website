import Section from '@/components/Section'
import Card from '@/components/Card'
import Noise from '@/components/Noise'

function ThingsIUse() {
	return (
		<Section>
			<Card className='
				h-[500px]
				relative
				bg-raspberry
				flex flex-col gap-[36px]
				justify-center
				p-12
			'>
				<Noise className='opacity-20'/>
				<h2 className='text-[36px] leading-[36px] uppercase'>//Skills</h2>
				<p className='text-[20px]'>Front end development<br/>
				Back end development<br/>
				Pixel Perfect Design<br/>
				Clean Code<br/>
				</p>
			</Card>
		</Section>
	)
}

export default ThingsIUse