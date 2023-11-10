import Base from "../../components/Base"
import ListPictures from "../../components/ListPictures";

const Nice = () => {

    const itemData = [
        {
            img: "img/Nice/IMG_2765.webp",
            title: 'Pizza Nice',
        },
        {
            img: "img/Nice/IMG_2778.webp",
            title: "Vue de la mer",
        },
        {
            img: "img/Nice/IMG_2786.webp",
            title: "Vue du port",
        },
        {
            img: "img/Nice/IMG_2789.webp",
            title: "Vue sur le port",
        },
        {
            img: "img/Nice/IMG_2790.webp",
            title: "Rue de Nice",
        },
        {
            img: "img/Nice/IMG_2802.webp",
            title: "Vue promenade des anglais",
        },
        {
            img: "img/Nice/IMG_2803.webp",
            title: "Hotel Suisse",
        },
        {
            img: "img/Nice/IMG_3292.webp",
            title: "Tramway Nice",
        },
        {
            img: "img/Nice/IMG_3294.webp",
            title: "Hotel Suisse",
        },
        {
            img: "img/Nice/IMG_3304.webp",
            title: "Movida Nice",
        },
        {
            img: "img/Nice/IMG_3315.webp",
            title: "Architecture Nice",
        },
        {
            img: "img/Nice/IMG_3319.webp",
            title: "Architecture Nice",
        },
        {
            img: "img/Nice/IMG_3321.webp",
            title: "Architecture Nice",
        },
    ];
    return (
        <Base>
            <ListPictures itemData={itemData} />
        </Base>
    )
}

export default Nice;