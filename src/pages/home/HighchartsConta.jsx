import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ContainerChart, WrapperContainerChart, WrapperContainerText, ButtonEvolucao } from '../../style';
import { Typewriter } from "react-simple-typewriter";
import Tabela from './Tabela';

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
            name: '',
            data: [120, 106, 100], // Exemplo de dados mensais
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
                                <Typewriter
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={20}
                                    words={['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident voluptatibus magni excepturi vel voluptatum culpa libero nemo, exercitationem, dicta obcaecati atque laudantium debitis. Tenetur aut odit natus, sint voluptate enim? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident voluptatibus magni excepturi vel voluptatum culpa libero nemo, exercitationem, dicta obcaecati atque laudantium debitis. Tenetur aut odit natus, sint voluptate enim? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident voluptatibus magni excepturi vel voluptatum culpa libero nemo, exercitationem, dicta obcaecati atque laudantium debitis. Tenetur aut odit natus, sint voluptate enim?']}
                                />
                            </div>
                        </>
                    )}
                </WrapperContainerText>
            </ContainerChart>

            <Tabela />
        </>
    )
};

export default MyHighchartsComponent;