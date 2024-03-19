import '../stylesheets/PortfolioGrid.css'
import { grid_items } from '../Items'
import { useEffect, useRef } from 'react'

const PortfolioGrid = () => {
    const selectorRefs = useRef([]);

    useEffect(() => {
        const selector = document.querySelectorAll(".back-prop")
        const player = document.querySelector(".video-Player")
        const close = document.querySelector(".close-icon")

        selectorRefs.current = Array.from(selector);

        close.addEventListener("click", () => {
            player.style.visibility = 'hidden'
            let child_el = document.querySelectorAll(".div-conf")
            child_el.forEach(el => {
                player.removeChild(el)
            })
        })

        const handleGridItemClick = (el) => {
            player.style.visibility = 'visible'
            let img = el.dataset.arr.split(",")
            img.forEach((image, index) => {
                let cont_div = document.createElement("div")
                player.appendChild(cont_div)
                cont_div.classList.add("div-conf")
                cont_div.style.backgroundImage = `url(${image})`
                cont_div.style.setProperty("--ind", index)
                cont_div.classList.add("anim-conf")
                if (document.documentElement.clientWidth > 480) {
                    if (index === (img.length - 1)) {
                        cont_div.classList.add("hov-clc")
                        cont_div.addEventListener("click", () => {
                            let els = document.querySelectorAll(".div-conf")
                            els.forEach((el, index) => {
                                let trs = index * 28 + 14
                                el.style.left = `${trs}%`
                                el.style.setProperty("--lft", index === 0 ? 20 : 0)
                                if (el.classList.contains("hov-clc")) {
                                    el.classList.remove("hov-clc")
                                }
                                el.classList.add("hov-eff")
                            })
                        })
                    }
                }
            })
        }

        selectorRefs.current.forEach(el => {
            el.addEventListener("click", () => handleGridItemClick(el))
        })

        return () => {
            close.removeEventListener("click", () => {
                player.style.visibility = 'hidden'
                let child_el = document.querySelectorAll(".div-conf")
                child_el.forEach(el => {
                    player.removeChild(el)
                })
            })

            selectorRefs.current.forEach(el => {
                el.removeEventListener("click", () => handleGridItemClick(el))
            })
        }
    }, [])

    return (
        <div className="grid-Wrapper">
            <div className='video-Player'>
                <span className='close-icon'>&#10005;</span>
            </div>
            <div className='portGrid-Cont'>
                {
                    grid_items.map((el, index) => (
                        <div key={index} className={`grid-${el.class} back-prop`} style={{ backgroundImage: `url(${el.image})` }} data-link={el.video} data-arr={el.img_lis}>
                            <div className="gridEl-Text">
                                <div className="gridEl-Title">{el.title}</div>
                                <div className="gridEl-Desc">{el.desc === "" ? el.desc : el.desc.includes("-") ? el.desc.split("-")[0] : el.desc}<br></br>{el.desc === "" ? "" : el.desc.includes("-") ? el.desc.split("-")[1] : ""}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PortfolioGrid