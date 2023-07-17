import '../stylesheets/ContactUsHeader.css'

const ContactUsHeader = () => {
    return(
        <div>
            <div className='header-img'></div>
        <div className='header-Wrapper'>
            <div className='header-TextCont'>
                <div className='header-Tag'>We welcome the opportunity to collaborate with you and transform your exhibition aspirations into reality. For all inquiries, collaborations, or further information about our services, please contact our dedicated team at Suprano Exhibits. </div>
                <div className='header-Email'>
                    Email: <span>info@supranoexhibits.com</span><br />
                    </div>
                <div className='header-Info'>
                    <div className='header-Section'>
                        <div className='header-Place'>Dubai</div>
                        <div className='info'>Office: <span>Office 2309,Prism Tower Business Bay Dubai</span> </div>
                        <div className='info'>Phone: <span>+971 528617600</span> </div>
                    </div>
                    <div className='header-Section'>
                        <div className='header-Place'>Poland</div>
                        <div className='info'>Office: <span>ŚREDZKA 49, ZALASEWO 62-020 Poland</span> </div>
                        <div className='info'>Warehouse:<span>TRZECKA 11 (STREET), GOWARZEWO 63-004</span> </div>
                    </div>
                    <div className='header-Section'>
                        <div className='header-Place'>India</div>
                        <div className='info'>Office: <span>Purvanchal Royal Park, Sector 137, Noida, 201305</span> </div>
                        <div className='info'>Phone: <span>+91 9953087077</span> </div>
                    </div>
                    <div className='header-Section'>
                        <div className='header-Place'>Netherlands</div>
                        <div className='info'>Phone: <span>+319 7010256003</span> </div>
                    </div>
                    <div className='header-Section'>
                        <div className='header-Place'>Spain</div>
                        <div className='info'>Office: <span>C/ DEL BRONZE 32 08915 BADALONA (BARCELONA)</span> </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ContactUsHeader