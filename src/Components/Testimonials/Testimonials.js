import React from "react";
import './Testimonials.css'

const Testimonials = () => {

    return (
        <div className="container">
            <div className="row">
                <iframe data-aos="fade-up"
                    data-aos-duration="3000"
                    className="col" title="1" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmaria.v.fernandez.16%2Fposts%2Fpfbid0vWNAjbhUWXq3cq61B4p2NJZ3o1C7przdSEVdQ3F1mRAdeazPL4NcYfBoNrZWF6vl&show_text=true&width=500" width="350" height="310" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

                <iframe
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className="col" title="2" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fvilmaanalia.peralta%2Fposts%2Fpfbid02KatwyJUSK18dtFv7XWDyTquwypxEZtLebaGMhmnLQXutXpMHycJvrjzXbCSeKBLnl&show_text=true&width=500" width="350" height="300" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                <iframe data-aos="fade-up"
                    data-aos-duration="3000"
                    className="col" title="3" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCheluli%2Fposts%2Fpfbid02nYMAChFzrLTW7JTxPbCsxoJcDq3Ao6w8g2L4JtEMwDj12kFAaJLtsT6PcwUnsfxVl&show_text=true&width=500" width="350" height="310" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

                <iframe data-aos="fade-up"
                    data-aos-duration="3000"
                    className="col" title="4" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fwadah.lobo%2Fposts%2Fpfbid0be8ccfzqx2Lq5tsjj8bWg2dEDXaEkjWMC4ozMPaCsjesxxwsQnEHoAQGr6PyV5CBl&show_text=true&width=500" width="350" height="300" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>


            </div>

            <div className="row">

                <div className="text-center">
                    <iframe className="video_f col m-2" data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="1000"
                        data-aos-offset="0"
                        title="video1"
                        src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100063819091106%2Fvideos%2F1973418342832907%2F&show_text=false&width=476&t=0" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

                    <iframe className="video_f col m-2"
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="1000"
                        data-aos-offset="0"
                        title="video2"
                        src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100063819091106%2Fvideos%2F1250603182025385%2F&show_text=false&width=374&t=0" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;