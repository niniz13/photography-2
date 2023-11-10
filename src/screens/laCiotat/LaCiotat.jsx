import Base from "../../components/Base"
import ListPictures from "../../components/ListPictures";

const LaCiotat = () => {

    const itemData = [
        {
            img: "img/LaCiotat/IMG_1308.webp",
            title: "Port de La Ciotat",
        },
        {
            img: "img/LaCiotat/IMG_1321.webp",
            title: "Port de La Ciotat",
        },
        {
            img: "img/LaCiotat/IMG_1328.webp",
            title: "Port de La Ciotat",
        },
        {
            img: "img/LaCiotat/IMG_1331.webp",
            title: "Port de La Ciotat",
        },
        {
            img: "img/LaCiotat/IMG_1332.webp",
            title: "Port de La Ciotat",
        },
        {
            img: "img/LaCiotat/IMG_1335.webp",
            title: "Port de La Ciotat",
        },
        {
            img: "img/LaCiotat/IMG_1348.webp",
            title: "Port de La Ciotat",
        },
        {
            img: "img/LaCiotat/IMG_1379.webp",
            title: "Port de La Ciotat",
        },
        {
            img: "img/LaCiotat/IMG_1380.webp",
            title: "Port de La Ciotat",
        },
        {
            img: "img/LaCiotat/IMG_1385.webp",
            title: "Port de La Ciotat",
        },
        {
            img: "img/LaCiotat/IMG_1395.webp",
            title: "Port de La Ciotat",
        },
        {
            img: "img/LaCiotat/IMG_1405.webp",
            title: "Port de La Ciotat",
        },
    ]
    return (
        <Base>
            <ListPictures itemData={itemData} />
        </Base>
    )
}

export default LaCiotat;