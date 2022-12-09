import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function SimpleSlider({ options }) {
    return (
        <section>
            <Slider {...options}>
                <article>
                    <img src="https://cederdorff.com/img/houseofvincent.webp" />
                </article>
                <article>
                    <img src="https://cederdorff.com/img/cphcloud_web.webp" />
                </article>
                <article>
                    <img src="https://cederdorff.com/img/karolineshus_web.webp" />
                </article>
            </Slider>
        </section>
    );
}
