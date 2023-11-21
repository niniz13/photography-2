import Base from "../components/Base"
import ImagesMansory from "../components/ImagesMansory";

const Accueil = () => {

    const itemData = [
        {
            img: "img/IMG_3319.webp",
            title: "Image",
        },
        {
            img: "img/IMG_1328.webp",
            title: "Image",
        },
        {
            img: "img/IMG_1385.webp",
            title: "Image",
        },
        {
            img: "img/IMG_2651.webp",
            title: "Image",
        },
        {
            img: "img/IMG_2884.webp",
            title: "Image",
        },
        {
            img: "img/IMG_2789.webp",
            title: "Image",
        },
        {
            img: "img/IMG_3092.webp",
            title: "Image",
        },
        {
            img: "img/IMG_3499.webp",
            title: "Image",
        },
        {
            img: "img/IMG_3517.webp",
            title: "Image",
        },
        {
            img: "img/IMG_3628.webp",
            title: "Image",
        },
        {
            img: "img/IMG_3641.webp",
            title: "Image",
        },
        {
            img: "img/IMG_3644.webp",
            title: "Image",
        },
        {
            img: "img/IMG_3722.webp",
            title: "Image",
        },
        {
            img: "img/IMG_3725.webp",
            title: "Image",
        }
    ]

    return (
        <Base>
            <ImagesMansory itemData={itemData} />
        </Base>
    )
}

export default Accueil;