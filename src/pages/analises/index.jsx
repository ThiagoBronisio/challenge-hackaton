import { Separator } from "../../style";
import HighchartsFormaPg from "../home/HighchartsFormaPg";
import MyHighchartsComponent from "../home/HighchartsEvoCliente";
import HighchartsConta from "../home/HighchartsConta"

const Analises = () => {
    return (
        <>
                <MyHighchartsComponent />
                <Separator />
                <HighchartsFormaPg />   
                <Separator />
                <HighchartsConta />
           
        </>
    )
}

export default Analises;