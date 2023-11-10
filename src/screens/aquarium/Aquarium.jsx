import Base from "../../components/Base"
import ListPictures from "../../components/ListPictures";

const Aquarium = () => {

    const itemData = [
        {
            img: "img/Aquarium/IMG_3615.webp",
            title: "Aquarium de Monaco",
        },
        {
            img: "img/Aquarium/IMG_3616.webp",
            title: "Aquarium de Monaco",
        },
        {
            img: "img/Aquarium/IMG_3617.webp",
            title: "Aquarium de Monaco",
        },
        {
            img: "img/Aquarium/IMG_3622.webp",
            title: "Aquarium de Monaco",
        },
        {
            img: "img/Aquarium/IMG_3623.webp",
            title: "Aquarium de Monaco",
        },
        {
            img: "img/Aquarium/IMG_3624.webp",
            title: "Aquarium de Monaco",
        },
        {
            img: "img/Aquarium/IMG_3628.webp",
            title: "Aquarium de Monaco",
        },
        {
            img: "img/Aquarium/IMG_3629.webp",
            title: "Aquarium de Monaco",
        },
        {
            img: "img/Aquarium/IMG_3637.webp",
            title: "Aquarium de Monaco",
        },
        {
            img: "img/Aquarium/IMG_3638.webp",
            title: "Aquarium de Monaco",
        },
        {
            img: "img/Aquarium/IMG_3640.webp",
            title: "Aquarium de Monaco",
        },
        {
            img: "img/Aquarium/IMG_3642.webp",
            title: "Aquarium de Monaco",
        },
    ]
    return (
        <Base>
            <ListPictures itemData={itemData} />
        </Base>
    )
}

export default Aquarium;