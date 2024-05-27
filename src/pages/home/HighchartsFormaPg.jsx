import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ContainerChart, WrapperContainerChart, WrapperContainerText, ButtonEvolucao } from '../../style';
import { Typewriter } from "react-simple-typewriter";

const API_URL = "http://localhost:5062/api/Financa/DataGeral";




const HighchartsFormaPg = () => {

    const [boletoCount, setBoletoCount] = useState(0);
    const [transferenciaCount, setTransferenciaCount] = useState(0);
    const [pixCount, setPixCount] = useState(0);
    const [debitoCount, setDebitoCount] = useState(0);
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

    const options = {
        chart: {
            type: 'pie',
        },
        title: {
            text: 'Forma de pagamentos Drop Table',
        },
        credits: {
            enabled: true,
            text: 'Fonte: GIOM',
            href: 'https://www.giomtecnologia.com.br/',
        },
        series: [
            {
                name: 'Formas de pagamento',
                colorByPoint: true,
                data: [
                    {
                        name: 'Boleto bancario',
                        y: boletoCount,
                    },
                    {
                        name: 'Transferência bancaria',
                        y: transferenciaCount,
                    },
                    {
                        name: 'Pix',
                        y: pixCount,
                    },
                    {
                        name: 'Debito automatico',
                        y: debitoCount,
                    },
                ],
            },
        ],
    };

    return (
        <>
            <ContainerChart className='fade-in'>
                <WrapperContainerChart className=''>
                    <HighchartsReact highcharts={Highcharts} options={options} />
                </WrapperContainerChart>

                <WrapperContainerText className='fade-in'>
                    {!textTeste && (

                        <ButtonEvolucao onClick={handleText}>Começar Análise</ButtonEvolucao>
                    )}

                    {textTeste && (
                        <div>
                            <h1 style={{marginBottom: "20px"}}>Análise</h1>
                            <Typewriter
                                cursor
                                cursorStyle='|'
                                typeSpeed={20}
                                words={['De acordo com os dados fornecidos, o método de pagamento mais usado pelos clientes é a Transferência Bancária, representando aproximadamente 26.22% das compras. Este é seguido de perto pelo Pix e Débito Automático, com Boleto sendo o menos utilizado. Essa análise sugere que a Transferência Bancária é a preferência dominante entre os clientes, embora as diferenças entre os métodos não sejam muito grandes. Visto uma sincera diferença entre as principais escolhas: Pix e transferência bancária, é viável pensar em formas para adicionar aos ganhos gerais da empresa como: Descontos e Parcelas, para que o fluxo geral seja majoritariamente positivo.']}
                            />
                        </div>
                    )}

                </WrapperContainerText>
            </ContainerChart>
        </>
    )
};

export default HighchartsFormaPg;