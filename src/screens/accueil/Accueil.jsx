import Base from "../../components/Base"
import SectionAccueil from "../../components/SectionAccueil";
import { descriptionAquarium, descriptionLaCiotat, descriptionMonaco, descriptionNice, descriptiongpMonaco } from "../../constants";

const Accueil = () => {

    const itemData = [
        {
            img: "img/Nice/IMG_3319.webp",
            title: 'Movida Nice',
        },
        {
            img: "img/LaCiotat/IMG_1321.webp",
            title: "Port de La Ciotat",
        },
        {
            img: "img/MonacoGP/IMG_2884.webp",
            title: "Grand Prix de Monaco",
        },
        {
            img: "img/Monaco/IMG_3611.webp",
            title: "Casino Monaco",
        },
        {
            img: "img/Aquarium/IMG_3628.webp",
            title: "Aquarium Monaco",
        },
    ]

    return (
        <Base>
            <SectionAccueil title={"Nice"} date={"May 2023"} path={'/nice'} item={itemData[0]} description={descriptionNice} />
            <SectionAccueil title={"La Ciotat"} date={"December 29, 2022"} path={'/laciotat'} item={itemData[1]} description={descriptionLaCiotat} />
            <SectionAccueil title={"GP Monaco"} date={"May 28, 2023"} path={'/gpmonaco'} item={itemData[2]} description={descriptiongpMonaco} />
            <SectionAccueil title={"Monaco"} date={"August 2022/2023"} path={'/monaco'} item={itemData[3]} description={descriptionMonaco} />
            <SectionAccueil title={"Monaco Aquarium"} date={"August 20, 2022"} path={'/aquarium'} item={itemData[4]} description={descriptionAquarium} />
        </Base>
    )
}

export default Accueil;