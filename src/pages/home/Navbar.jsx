import logo from "../../assets/logoGiom.png"
import iconCompany from "../../assets/empresa.svg"
import iconGrafico from "../../assets/imgGrafico.svg"
import { ContainerHeader, WrapperImgCompany, WrapperLogoGiom, WrapperImgCompanyContent } from "../../style"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>

            <ContainerHeader>
                <WrapperLogoGiom className="text-white text-lg font-bold w-24 h-24">
                    <Link to='/'><img src={logo} to="/" alt="" /></Link>
                    
                </WrapperLogoGiom>

                <WrapperImgCompany>
                    <WrapperImgCompanyContent>
                        <div>
                            <img src={iconCompany} alt="" />
                        </div>
                    </WrapperImgCompanyContent>


                    <h1>Olá, Drop Table</h1>

                </WrapperImgCompany>
            </ContainerHeader>
        </>
    )
}

export default Navbar;

