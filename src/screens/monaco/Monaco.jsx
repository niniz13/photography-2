import Base from "../../components/Base"
import ListPictures from "../../components/ListPictures";

const Monaco = () => {

    const itemData = [
        {
            img: "img/Monaco/IMG_0895.webp",
            title: "Casino Monaco",
        },
        {
            img: "img/Monaco/IMG_3497.webp",
            title: "Bentley",
        },
        {
            img: "img/Monaco/IMG_3498.webp",
            title: "Lamborghini",
        },
        {
            img: "img/Monaco/IMG_3499.webp",
            title: "Balcons",
        },
        {
            img: "img/Monaco/IMG_3501.webp",
            title: "Casino Monaco",
        },
        {
            img: "img/Monaco/IMG_3502.webp",
            title: "Ferrari",
        },
        {
            img: "img/Monaco/IMG_3557.webp",
            title: "Ferrari",
        },
        {
            img: "img/Monaco/IMG_3620.webp",
            title: "Ferrari",
        },
        {
            img: "img/Monaco/IMG_3625.webp",
            title: "Ferrari",
        },
        {
            img: "img/Monaco/IMG_3641.webp",
            title: "Drapeau Monaco",
        },
        {
            img: "img/Monaco/IMG_3643.webp",
            title: "Balcons",
        },
        {
            img: "img/Monaco/IMG_3658.webp",
            title: "Ferrari",
        },
    ]
    return (
        <Base>
            <ListPictures itemData={itemData} />
        </Base>
    )
}

export default Monaco;