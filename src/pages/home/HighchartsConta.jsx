import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ContainerChart, WrapperContainerChart, WrapperContainerText, ButtonEvolucao } from '../../style';
import { Typewriter } from "react-simple-typewriter";

const options = {
    chart: {
        type: 'column',
    },
    title: {
        text: 'Movimentação de conta Drop Table',
    },
    xAxis: {
        categories: ["Movimentação Geral", "Receita", "Despesas"], // Exemplo de meses
        title: {
            text: 'Movimentações',
        },
    },
    yAxis: {
        title: {
            text: 'Fluxo de caixa',
        },
    },
    tooltip: {
        shared: true,
        valuePrefix: 'R$ ',
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 1,
    },
    series: [
        {
            name: '',
            data: [
                { y: 6615618.50, color: '#808080' }, // Cinza para "Movimentação Geral"
                { y: 4408212.38, color: '#008000' }, // Verde para "Receita"
                { y: 2207406.12, color: '#dc3545' }, // Vermelho para "Despesas"
            ]
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
                                    typeSpeed={20}
                                    words={[`| Movimentação geral de caixa: R$ 6.615.618,50
                                    
                                    Este valor representa a movimentação total de entrada e saída de dinheiro da empresa nos últimos 5 meses. É um indicador importante da saúde financeira geral da empresa. Um valor positivo indica que a empresa está gerando mais receita do que gastando, o que é positivo. No entanto, seria útil comparar esse valor com os períodos anteriores para identificar tendências a longo prazo.
                                    
                                    | Receita: R$ 4.408.212,38
                                    
                                    A receita representa o total de dinheiro que a empresa recebeu nos últimos 5 meses. Este é um indicador-chave do desempenho financeiro da empresa. Um aumento na receita em relação aos meses anteriores pode indicar um crescimento saudável do negócio. No entanto, é importante considerar se esse aumento na receita foi acompanhado por um aumento proporcional nos custos ou se foi resultado de medidas de redução de custos.
                                    
                                    | Despesas: R$ 2.207.406,12
                                    
                                    As despesas representam o total de dinheiro que a empresa gastou nos últimos 5 meses. É importante monitorar as despesas para garantir que estejam alinhadas com a receita e que a empresa esteja operando de forma eficiente. Uma análise detalhada das despesas pode revelar áreas onde a empresa pode economizar dinheiro ou otimizar seus processos.`]}
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