import React, { useState, useEffect } from 'react';
import animationData from '../../assets/Animation.json';
import Lottie from 'lottie-react';
import { ContainerLottie, ContainerInto, ContainerMain, ButtonMain } from '../../style';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const API_URL = "http://localhost:5062/api/Financa/Despesas";

function Main() {
    const [despesas, setDespesas] = useState([]);

    useEffect(() => {
        const fetchDespesas = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setDespesas(data);
                console.log(data)
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchDespesas();
    }, []);

    return (
        <>
            <main>

                <ContainerMain>
                    <ContainerInto className=''>
                        <div>
                            <div style={{ display: "block" }}>
                                <span>
                                    Olá <span style={{ color: "#21b9de", fontWeight: "bold" }}>Drop Table</span>, que tal fazermos análise de dados sobre sua empresa ?
                                </span>
                                <Link to='/analises'>
                                    <ButtonMain>Começar agora</ButtonMain>
                                </Link>
                            </div>

                        </div>
                    </ContainerInto>
                    <ContainerLottie>
                        <Lottie animationData={animationData} />
                    </ContainerLottie>
                </ContainerMain>

            </main>
            <Footer />
        </>
    )
}

export default Main;