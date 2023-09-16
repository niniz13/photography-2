import Base from "../../components/Base"
import SectionAccueil from "../../components/SectionAccueil";
import { descriptionAquarium, descriptionLaCiotat, descriptionMonaco, descriptionNice, descriptiongpMonaco } from "../../constants";

const Accueil = () => {

    const itemData = [
        {
            img: "https://lh3.googleusercontent.com/pw/AIL4fc8Bx4hMrhjIDQP148si2Q6U8mNclR6pjpA8ThMQ812rmjBNIMVSa84iAXQ1ZUlx3J5REAH9aiqNWiqmV4q3n3IlckZ66TvCAaKwm-_NjYnxJuCo6eRtq9kDobr99ssXE-aQnznF8WzABWfVr3gzhHNs4n8Z1HFizTSXPR3CngQHK7W7ys68H4pfkR9n2kNaql3iLyJtGPKU-EtuVxh0l-whjgGYpJYeBuiEh1_OKuudjezAd79nSrjZEsASsu-HdjjgwtI5W9y6u0SU1t7sBPMiSfEwelY8KfnyoAEjR_wilxRnDzjHxbEKQs0XTDKbixValNtFzzzvaYIcsRPjANclzEuwEzfi4yAzF4kspeKWgmG34dAnYyrsMk4VJfjLhYTXydN99MGtSsfvbr2xiC-DlJmyZExwGLQuHhqz06ZeP6uEX--dRWX-vf_HjhLY7KjTwN_vL0KIk3SbjvxoRzmlN5Yid7vvA-wzrtWRInCrGr00JEEP5K4JRabD6FqE35SkG-fMWHrNpKeQsvncoTwclrozwHGScPEux5XJAPAjCSuSMVDOAPgqWEgK29G4Paaw86hRlL6sZvUPLWtUGVNMBRV6yVXuXIUyQQwrsMssfjNkSt41tmsD-tlq9YMfhNvAcvQSXakyW9HQi3Sf3zIxiljP3UGHnkRfD20wDW7FuKEaLuFpa-0KyxpeHjDpCS7PO2uxyTEGab_kWDyu-zpM7tMyQ5PN0I77YCGY49HGm9hj3saJF-Kcyd0T9vtxWwC8OkAqJf2l2XUigEJM9fbavlTZkafWZQjDcbNEDxRZm_QKL09dq5SeakhGH0TRV_ZlhlrESbFACrC8-cW1H6UD8lI8SveDH0uJCq1Gg_POaQC2QLVRPrekGb8v1_KYyGQIrN4NwmYonFQo-JpfoU8=w1319-h879-s-no?authuser=0",
            title: 'Movida Nice',
        },
        {
            img: "https://lh3.googleusercontent.com/pw/AIL4fc93eam-ooC7QDcB6BuyV1AJ5Wu12AKezx5S_I477IBQPg9SbC47D3MHHItQkmkFZxqkNbmXayDrEi5P5bv5kREHfppndG02yfUIyApcuDUXn7sDeJkvp3k8j6J2Z3GwxDOiYhudaNyZGhst87hBwDKi_RCEjWhNvXn2QUbC-gYByq0-NbV4BKcd_2Gpo9P68GkrMWgUU6N3YjOUM8_RInoF-TmmnlmJaKwISZAL4RyDLPSCKyUWAEBRckSTrft3NtM-mFZMRaTM6Tg9HvbYHCtuzckq4bEwfoYDkYj1QErEy6Azan8VCZgh3E2xfKApVWEN7VYL2N09m4wK5dryDttDmku3vpkbXh0MHXXW57NqtR_Qs_IhtP99J2RXIkV4GKETkd8OuaNyYqKVxQswyQc6_uclkz5DNkDPodD35GrynF6KFC48V_wweIqrCRQdiXKANweKXQ2DUnwHkWTregZ05r27vV_BxqLtc1DR7N65UhM_HIcWaaKObO0C9y4Z6PxdTxD4NsqKWfSvC3Sg7pVQU4plQfoFXDCGhg6kCx7pDhNfG9w1bmoNGde1Lu184rCPCSwPn79vr6DIWX-bW3aWZ78EOPhfKP-qsc2U7j_WYiDgH_kZ1GeyLXSTlOn1q4v8WvrvPhWCVHIRLrlXKVyPHslOWPUALDubJCL6ohfuaUtel1AOiftDN0IfVn-mhfJzkOxo3LnuHRNm6_txGi5Pmv828Ku3T2xt66e3fz5BUbXHcSwdh9d5kh230pk2O8_AGig3haYHONBMZyijvIYhZ5XwnUKc9yFrCXcsV_U-4rhxH6T9GecDn5X6fzrBfaMT0tta1SgnGC13r1Cb-H45w0CnSJIHGBpa86SxKiq5ILhkAl632bOFpc2lgBSD6FDlA9skHQR2tD-yPGZlLfQ=w1319-h879-s-no?authuser=0",
            title: "Port de La Ciotat",
        },
        {
            img: "https://lh3.googleusercontent.com/pw/AIL4fc9Kc9xPN6U-qTA72t9p9Tr1eoPaz0K-oznZ2Vnz9nAlQ7XywK7TMA7czg7EfgPL10ChQfYdUY-ZsjqoVK4QipZRqAtRp_VYjzbZJIVw84Wy4CWG_g9Bv9lAHbCb6UQOdyZqa9_gXtQnyfOPxiJ1y38KkT5zWZBKhK1QT4ZrgYzpTyYCT-I-PMSx0g7E9VTk2NXFrOpY6Klcvclvkp0XhxpWd4StOKMzzLyHW8vct1RjdgVgITkXsKj2B2QAB45jnbB4pcKrXsZFAkmIGkbvVJCl9Z2dcmA52iGL5SEkiKud7UwIdmcDzmYqNA0F4S9ybfc6ANtUtHhwQp7dvqPp5W1Rafs3vC7Wrh7-_hgufnapAI0NdhlwMu6jc1a8CJcPtFUmgtJkTN_saFRtoR-sc4dF09fUSpxA9_gWxeOA-hHsZMNKyp81bemGFMP62RJG3LtrceEkv5k-Lqf2nHbRgqdj10RwWYIzM6kEZOotX51xUztvj3tLG707KVKyRXK9ByLAUMzHJ363oN_HT7WsEv4sI5vyEWrPUIcmOCqcfN4j3-d2oscurSdCpK14UWEtHRq9OAcxlwFpDzYE5niR9oXKfHgSA0ud8BO522RkydT6YkIAx6hx9iwmHCnQS8yKgixVVqskAQj5244tYoUwsw8v8mm409_4T1IcJ8VH-TGNZu-HvHAXsCk3b00fT6ydnKMDO388HFZCoesvSCu_HfH0z5dREAJOCyrM_F8LaypBbgfeZL34OIDF2IybtW2cjwYaUqkJrlkzPmWPcvtJ4Mk6-cXG1PCo7Gh0pGKbcfwpCguokADQJxa2Fi3liR2GSdiACd491S1HYaXooyiMH5stRL0jpxdioyKYJPhHgNs8kfagxVYse35V8YDT8hokyZwBnElu060wlcCOLhZCn0w=w1319-h879-s-no?authuser=0",
            title: "Grand Prix de Monaco",
        },
        {
            img: "https://lh3.googleusercontent.com/pw/AIL4fc-p7HeyvouoqvJlLNeg_UKaC0kOdhbMjhQa6Cnb0MUEtTC6ghFQw1qPL247GyEGXxKhRJ9Y-RLTaS6P6od3Qo_Bpzsxf82WdOCdvqtCbdKUOdRaYHSHHhaSytNyJA6x5DxX4wyEuJ1ym88NTXpu6F_-El_gHB6CKLHSWUixO0tskZBerHjtJohoGI4dFOumWbcypSPz1DmlQjz0dY-zshx9wybjs9KuOZoH7bCJuSlI_dMHJ3Rw5-S_Bhsq7_iQlb_SQbase4T4jugtUI1Z9ufmSqp8-pfY-cMR5a8ES0KQuKE38PHYONsbdp1_cM_JGgI7jT4GLfITfflDHDdDxHYpfqyzigDsteBsM72NEaGY4t0kis6FFRoh5Ur54D-VPQW4L9_t3GEYTg0cNnbNUn74eVQMiEgBRBb2kzAdy9RHF2LHQXywD3bneS5K_I5rYDY5FLo0tykI0-pwmSuRWMf7vL4zrc16H0tmOYWk_uYycRXuAK0yVqbqKRejN6D0cEPZaYl0UITIQad9AyXk3uYiNTkJTF0TQg5y4yjNJvaB_eNeFiaa9Dt0xTO_07mTRnw_czJWOXnBQlC7d1ARlK8e0iFKVRFkKxX4ThJyndVXNxloTFGeWYgcOxyiyzDPgYbAOsU4Gqt2FEJOLA2ctkHEDezhuSOy6VnrvTRarxGlvwy5lkW3fKqosSVb7CdWA2cgTXwEH73PgyZyt7kQ0R-ttpkXvUKAS4_N2xfELXu36-nPFogvqhDERUlrEZJSXmcze7zPqoF_LZFEhBKAxbHtQx92z4ryLzRq5hVVM_9TZHzn2F4C7TWeJqnCmHU-xh4F1j9GZk_-ygb4_dN9CH4QezvdqRFadH7HZOOv58nCyTGgbjVBWFLEjk_pu2vj_eR177RZE1vVDhNVAFBNZq0=w1319-h879-s-no?authuser=0",
            title: "Casino Monaco",
        },
        {
            img: "https://lh3.googleusercontent.com/pw/AIL4fc_Q7YhuFNBzLfLj8ksdAP_d0r8PRhPwqCm2UAAuKaN6NPaGSM4tQqpOI_4NWMsAqzVCwCokQJq1C5NMvjrda1eul50BJU6hcZZbLX-PEeNC1B50gjh2ljFuxig5hZkXwPYhtrSSn1DLQFN4glLFBJuEiJZyUjDbFJSvSjfpNw1Xh3N6vm5pQNgcedSaQpCAHBBq6XJMq_vazBGN6slpBdaLiTNxBfnit_3B8Tl8N-f9FQzmz500VhestCkJrI1PRISc10bR7mp4jlxgKZ7PVnKvNAQGX2uLZtgDTgC3RVon_YxQeQleiJ4RJwlshJivDeQOfFTYgPURRkNhqcezTpsuDonrZZIDIfhwtOzqQORs2pf_ACkvnSZB-JU4oqlNTsG1nxijjMkkr9pAv77qAvOE0n-3hmgKWg6gIcZvuqk-6gnKkzsVj-voNTgG5MUL1sVifSRWUwyax3fP8-JMJ0QvNw7fN4hTUJRLKVXq6L36wvPWfucWbW_T4Nh7AaGn_VoHRiCxUhdJwzXnl7pKyFHn_oWZJxXR0Z3DX75Xr8pgql5EuNrl_bO0bG46IVnWoFa7AktPJDNnws56Mei8ah05W06C1bOWB9keT71r4VBYAWyidsnYMKxbfSeW16IDcOW8Gxz9teO42u8_e3xPVQOKbXpPYiUKSz3Tu-CIaEKKsdMKt4B04-TWSwFhBQLtEs2ypFY6RK3B0wSTiWpmSjQdUzGgASDuFQVWZf7izm7L4YSmHPab6DFCRgg16UQJO1LAyEbEUngwY6QjwLc4FkRZ7jB4_zVmRWnvTbOh3yjFBOq8ZFL3-_qmaUMDs8ar6zlt-dnNwCgp0nCpO43h7P50SCSuTBo2oVBC7S-OdkaQ02IRF-Hv3GfsQHARqfKzdyYKxvCf1zs6g2oaR4vNEms=w586-h879-s-no?authuser=0",
            title: "Aquarium Monaco",
        },
    ]

    return (
        <Base>
            <SectionAccueil title={"Nice"} date={"May 2023"} path={'/nice'} item={itemData[0]} description={descriptionNice} />
            <SectionAccueil title={"La Ciotat"} date={"December 29, 2022"} path={'/laCiotat'} item={itemData[1]} description={descriptionLaCiotat} />
            <SectionAccueil title={"GP Monaco"} date={"May 28, 2023"} path={'/gpMonaco'} item={itemData[2]} description={descriptiongpMonaco} />
            <SectionAccueil title={"Monaco"} date={"August 2022/2023"} path={'/monaco'} item={itemData[3]} description={descriptionMonaco} />
            <SectionAccueil title={"Monaco Aquarium"} date={"August 20, 2022"} path={'/aquarium'} item={itemData[4]} description={descriptionAquarium} />
        </Base>
    )
}

export default Accueil;