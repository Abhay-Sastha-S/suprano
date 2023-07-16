import "../stylesheets/FeaturedBlog.css"

const FeaturedBlog = () => {
    return(
        <div className="feat-Wrapper">
            <div className="feat-Text wd-Selector">
                <div className="feat-Title">
                    Featured Blog<span>.</span>
                </div>
                <div className="feat-Desc">
                Arab Health, the largest medical exhibition in the Middle East, is just around the corner, and healthcare professionals are eagerly anticipating this transformative event. Set to take place at the World Trade Centre in Dubai from January 29, 2024 to February 1st, Arab Health will showcase the latest healthcare technology...
                </div>
                <a className="feat-Read" href="/Blogs">
                Read More
                </a>
            </div>
            <div className="feat-Image wd-Selector">

            </div>
        </div>
    )
}

export default FeaturedBlog