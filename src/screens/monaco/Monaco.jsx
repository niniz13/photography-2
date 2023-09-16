import Base from "../../components/Base"
import ListPictures from "../../components/ListPictures";

const Monaco = () => {

    const itemData = [
        {
            img: "img/Monaco/IMG_0639.webp",
            title: "Pirelli",
        },
        {
            img: "img/Monaco/IMG_0701.webp",
            title: "Hotel de Paris",
        },
        {
            img: "img/Monaco/IMG_0895.webp",
            title: "Casino Monaco",
        },
        {
            img: "img/Monaco/IMG_3496.webp",
            title: "Ferrari",
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
            img: "img/Monaco/IMG_3504.webp",
            title: "Place du Casino",
        },
        {
            img: "img/Monaco/IMG_3506.webp",
            title: "Casino Monaco",
        },
        {
            img: "img/Monaco/IMG_3555.webp",
            title: "Ferrari",
        },
        {
            img: "img/Monaco/IMG_3557.webp",
            title: "Ferrari",
        },
        {
            img: "img/Monaco/IMG_3561.webp",
            title: "Super Cars",
        },
        {
            img: "img/Monaco/IMG_3611.webp",
            title: "Casino Monaco",
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
            img: "img/Monaco/IMG_3630.webp",
            title: "Lamborghini",
        },
        {
            img: "img/Monaco/IMG_3631.webp",
            title: "Lamborghini",
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
            img: "img/Monaco/IMG_3657.webp",
            title: "Lamborghini",
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