import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ContainerChart, WrapperContainerChart, WrapperContainerText, ButtonEvolucao } from '../../style';
import { Typewriter } from "react-simple-typewriter";

const options = {
    chart: {
        type: 'line',
    },
    title: {
        text: 'Evolução de cadastros clientes Drop Table',
    },
    xAxis: {
        categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], // Exemplo de meses
        title: {
            text: 'Meses',
        },
    },
    yAxis: {
        title: {
            text: 'Número de Clientes',
        },
    },
    tooltip: {
        shared: true,
        valueSuffix: ' clientes',
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 1,
    },
    series: [
        {
            name: 'teste',
            data: [120, 106, 100, 93, 116],
        },
    ],
    credits: {
        enabled: true,
        text: 'Fonte: GIOM',
        href: 'https://www.giomtecnologia.com.br/',
    },
    plotOptions: {
        series: {
            marker: {
                enabled: true,
                radius: 5,
            },
        },
    },
};

const MyHighchartsComponent = () => {

    const [textTeste, setTextest] = useState(false)


    const handleText = () => {
        setTextest(prevState => !prevState);
        console.log(textTeste)
    }

    useEffect(() => {
        const fetchDespesas = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error('Error.');
                }
                const data = await response.json();
                const paymentCounts = data.reduce((acc, item) => {
                    if (item.formaPagamento === 1) {
                        acc.boleto++;
                    } else if (item.formaPagamento === 2) {
                        acc.transferencia++;
                    } else if (item.formaPagamento === 3) {
                        acc.pix++;
                    } else if (item.formaPagamento === 4) {
                        acc.debito++;
                    }
                    return acc;
                }, { boleto: 0, transferencia: 0, pix: 0, debito: 0 });
                setBoletoCount(paymentCounts.boleto);
                setTransferenciaCount(paymentCounts.transferencia);
                setPixCount(paymentCounts.pix);
                setDebitoCount(paymentCounts.debito);
                console.log(data)
            } catch (error) {
                console.log('Fetch error:', error);
            }
        };

        fetchDespesas();
    }, []);


    return (
        <>
            <ContainerChart className='fade-in'>
                <WrapperContainerChart style={{borderRadius: "10px"}}>
                    <HighchartsReact  highcharts={Highcharts} options={options} />
                </WrapperContainerChart>

                <WrapperContainerText>
                    {!textTeste && (
                        <ButtonEvolucao onClick={handleText}>Começar Análise</ButtonEvolucao>
                    )
                    }
                    {textTeste && (
                        <>
                        
                            <div className='fade-in'>
                            <h1 style={{marginBottom: "20px"}}>Análise</h1>
                                <Typewriter
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={10}
                                    words={[`Janeiro: Com 120 clientes cadastrados, este mês apresentou um bom início de ano, indicando um interesse inicial forte em relação ao produto ou serviço oferecido pela empresa. Isso pode ser resultado de campanhas de marketing bem-sucedidas no final do ano anterior ou de uma demanda natural no início do ano. 

                                    | Fevereiro: Com 106 clientes cadastrados, houve uma queda em relação a janeiro. Isso pode ser atribuído a uma diminuição da demanda após as festas de fim de ano, o que é comum nesse período.
                                    
                                    | Março: Com 100 clientes cadastrados, a queda em relação a fevereiro sugere uma continuação da tendência de redução da demanda. Isso pode indicar a necessidade de revisão das estratégias de marketing e vendas da empresa.
                                    
                                    | Abril: Com 93 clientes cadastrados, a queda continua, sugerindo que a empresa pode enfrentar desafios mais significativos em atrair novos clientes. É importante investigar as causas dessa queda e tomar medidas corretivas.
                                    
                                    | Maio: Com 116 clientes cadastrados, houve uma recuperação em relação a abril. Isso pode ser resultado de novas estratégias implementadas pela empresa ou de fatores sazonais que beneficiaram o mercado neste mês.
                                    
                                    Em geral, a análise mensal dos cadastros de clientes permite à empresa identificar padrões e tendências ao longo do ano. Isso pode ajudar a empresa a ajustar suas estratégias de marketing e vendas para maximizar as oportunidades e minimizar os impactos negativos das tendências de mercado.`]}
                                
                                />
                            </div>
                        </>
                    )}
                </WrapperContainerText>
            </ContainerChart>
        </>
    )
};

export default MyHighchartsComponent;