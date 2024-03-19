import '../stylesheets/PortfolioGrid.css'
import { grid_items } from '../Items'
import { useEffect } from 'react'

const PortfolioGrid = () => {
    useEffect(() => {
        const selector = document.querySelectorAll(".back-prop")
        const player = document.querySelector(".video-Player")
        const close = document.querySelector(".close-icon")
        const wrapper = document.querySelector(".grid-Wrapper")

        close.addEventListener("click", () => {
            player.style.opacity = "0"
            player.style.zIndex = "-999"
            let child_el = document.querySelectorAll(".div-conf")
            child_el.forEach(el => {
                player.removeChild(el)
            })
        })

        selector.forEach(el => {
            el.addEventListener("click", () => {
                player.style.zIndex = "999"
                player.style.opacity = "1"
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
            })
        })

        return () => {
            close.removeEventListener("click", () => {
                player.style.opacity = "0"
                player.style.zIndex = "-999"
                let child_el = document.querySelectorAll(".div-conf")
                child_el.forEach(el => {
                    player.removeChild(el)
                })
            })

            selector.forEach(el => {
                el.removeEventListener("click", () => {
                    player.style.zIndex = "999"
                    player.style.opacity = "1"
                    let img = el.dataset.arr.split(",")
                    img.forEach((image, index) => {
                        let cont_div = document.createElement("div")
                        player.appendChild(cont_div)
                        cont_div.classList.add("div-conf")
                        cont_div.style.backgroundImage = `url(${image})`
                        cont_div.style.setProperty("--ind", index)
                        cont_div.classList.add("anim-conf")
                    })
                })
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
