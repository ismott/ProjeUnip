import '../assets/css/Home.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../../Components/Header';

export const Home = () => {
    const [listComparar, setListComparar] = useState([]);

    function Comparar() {
        axios.get('http://localhost:8080/pessoas/comparar')
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log(resposta.data)
                    setListComparar(resposta.data);
                }
            })
    }
    useEffect(() => {
        Comparar();
    }, [])


    return (
        <>
        <Header cor='home'/>
        <div className='homeBoddy'>
            <table>
                <caption>
                    Quantidade de pessoa doentes em cada cidade.
                </caption>
                <thead>
                    <th scope="col">Cidades</th>
                    <th scope="col">Numero de pessoas por cidade</th>
                </thead>
                <tbody>


                    <tr>
                        <th scope="col">São Paulo</th>
                        <tr>{listComparar.map((item) => { return (item[0]) })}</tr>
                    </tr>
                    <tr>
                        <th scope="col">São Caetano</th>
                        <tr>{listComparar.map((item) => { return (item[1]) })}</tr>
                    </tr>
                    <tr>
                        <th scope="col">Santo André</th>
                        <tr>{listComparar.map((item) => { return (item[2]) })}</tr>
                    </tr>
                    <tr>
                        <th scope="col">São Bernado do Campo</th>
                        <tr>{listComparar.map((item) => { return (item[3]) })}</tr>
                    </tr>
                    <tr>
                        <th scope="col">Diadema</th>
                        <tr>{listComparar.map((item) => { return (item[4]) })}</tr>
                    </tr>
                </tbody>

            </table>
        </div>
        </>
    )

};