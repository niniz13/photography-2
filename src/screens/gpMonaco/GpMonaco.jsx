import Base from "../../components/Base"
import ListPictures from "../../components/ListPictures";

const GpMonaco = () => {

    const itemData = [
        {
            img: "img/MonacoGP/IMG_2863.webp",
            title: "Monaco GP",
        },
        {
            img: "img/MonacoGP/IMG_2884.webp",
            title: "Monaco GP",
        },
        {
            img: "img/MonacoGP/IMG_2907.webp",
            title: "Monaco GP",
        },
        {
            img: "img/MonacoGP/IMG_2936.webp",
            title: "Monaco GP",
        },
        {
            img: "img/MonacoGP/IMG_2962.webp",
            title: "Monaco GP",
        },
        {
            img: "img/MonacoGP/IMG_2972.webp",
            title: "Monaco GP",
        },
        {
            img: "img/MonacoGP/IMG_3013.webp",
            title: "Monaco GP",
        },
        {
            img: "img/MonacoGP/IMG_3042.webp",
            title: "Monaco GP",
        },
        {
            img: "img/MonacoGP/IMG_3092.webp",
            title: "Monaco GP",
        },
        {
            img: "img/MonacoGP/IMG_3208.webp",
            title: "Monaco GP",
        },
        {
            img: "img/MonacoGP/IMG_3259.webp",
            title: "Monaco GP",
        },
        {
            img: "img/MonacoGP/IMG_3264.webp",
            title: "Monaco GP",
        },
        {
            img: "img/MonacoGP/IMG_3270.webp",
            title: "Monaco GP",
        },
    ]
    return (
        <Base>
            <ListPictures itemData={itemData} />
        </Base>
    )
}

export default GpMonaco;