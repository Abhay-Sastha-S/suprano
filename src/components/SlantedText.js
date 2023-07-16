import { Business } from '@mui/icons-material'
import '../stylesheets/SlantedText.css'
import '@mui/icons-material'

const desc = "Suprano Exhibits offers state-of-the-art workforce experience when it comes to exhibition booth design & construction. Our clientele places their unwavering trust in us to provide outstanding exhibition services, thus presenting their idea in a captivating manner. This is only possible with our skilled professionals and resources of the latest fabrication equipment catered to bring your company's visions to reality. Along with well-equipped warehouses around the globe, we can ensure high-quality work whenever and wherever required. At Suprano Exhibits, we understand the importance of a unique brand identity. Our custom exhibits are designed to reflect your brand's values and objectives, leaving a lasting impression on your target audience. With attention to detail and quality craftsmanship, we bring your brand to life."

const SlantedText = () => {
    return(
        <div className='slantedText-Wrapper'>
            <div className='slanted-Title'>
                <div className='rotated-Text slant-Selector'>
                    <Business sx={{fontSize:30}} className='icon'/> <p>Who are We</p><span>?</span>
                </div>
                <div className='slanted-TitleText slant-Selector'>
                We expertise in creating captivating exhibition designs
                </div>
            </div>
            <div className='left-Desc'>
                <div className='desc-Cont slant-Selector'>
                {
                    desc
                }
                </div>
            </div>
        </div>
    )
}

export default SlantedText