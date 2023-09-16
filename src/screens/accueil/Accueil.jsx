import { Box } from "@mui/material";
import Base from "../../components/Base"
import SectionAccueil from "../../components/SectionAccueil";
import { descriptionNice } from "../../constants";

const Accueil = () => {

    const itemData = [
        {
            img: "https://lh3.googleusercontent.com/pw/AIL4fc8Bx4hMrhjIDQP148si2Q6U8mNclR6pjpA8ThMQ812rmjBNIMVSa84iAXQ1ZUlx3J5REAH9aiqNWiqmV4q3n3IlckZ66TvCAaKwm-_NjYnxJuCo6eRtq9kDobr99ssXE-aQnznF8WzABWfVr3gzhHNs4n8Z1HFizTSXPR3CngQHK7W7ys68H4pfkR9n2kNaql3iLyJtGPKU-EtuVxh0l-whjgGYpJYeBuiEh1_OKuudjezAd79nSrjZEsASsu-HdjjgwtI5W9y6u0SU1t7sBPMiSfEwelY8KfnyoAEjR_wilxRnDzjHxbEKQs0XTDKbixValNtFzzzvaYIcsRPjANclzEuwEzfi4yAzF4kspeKWgmG34dAnYyrsMk4VJfjLhYTXydN99MGtSsfvbr2xiC-DlJmyZExwGLQuHhqz06ZeP6uEX--dRWX-vf_HjhLY7KjTwN_vL0KIk3SbjvxoRzmlN5Yid7vvA-wzrtWRInCrGr00JEEP5K4JRabD6FqE35SkG-fMWHrNpKeQsvncoTwclrozwHGScPEux5XJAPAjCSuSMVDOAPgqWEgK29G4Paaw86hRlL6sZvUPLWtUGVNMBRV6yVXuXIUyQQwrsMssfjNkSt41tmsD-tlq9YMfhNvAcvQSXakyW9HQi3Sf3zIxiljP3UGHnkRfD20wDW7FuKEaLuFpa-0KyxpeHjDpCS7PO2uxyTEGab_kWDyu-zpM7tMyQ5PN0I77YCGY49HGm9hj3saJF-Kcyd0T9vtxWwC8OkAqJf2l2XUigEJM9fbavlTZkafWZQjDcbNEDxRZm_QKL09dq5SeakhGH0TRV_ZlhlrESbFACrC8-cW1H6UD8lI8SveDH0uJCq1Gg_POaQC2QLVRPrekGb8v1_KYyGQIrN4NwmYonFQo-JpfoU8=w1319-h879-s-no?authuser=0",
            title: 'Movida Nice',
        },
    ]

    return (
        <Base>
            <SectionAccueil title={"Nice"} date={"May 2023"} path={'/nice'} item={itemData[0]} description={descriptionNice} />
        </Base>
    )
}

export default Accueil;