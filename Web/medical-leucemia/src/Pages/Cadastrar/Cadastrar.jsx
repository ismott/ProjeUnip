import '../assets/css/Cadastrar.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Cadastrar = () => {
    const [Nome, setNome] = useState('');
    const [Idade, setIdade] = useState(0);
    const [listCidade, setListCidade] = useState([]);
    const [listDoenca, setListDoenca] = useState([]);
    const [listGravidade, setListGravidade] = useState([]);
    const [listPessoa, setListPessoa] = useState([]);
    const [idCidade, setIdCidade] = useState(1);
    const [idDoenca, setIdDoenca] = useState(1);
    const [idGravidae, setIdGravidade] = useState(1);

    function BuscarCidade() {
        axios.get('http://localhost:8080/cidades')
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log(resposta.data)
                    setListCidade(resposta.data);
                }
            })
    }
    function BuscarDoenca() {
        axios.get('http://localhost:8080/doencas')
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log(resposta.data)
                    setListDoenca(resposta.data);
                }
            })
    }
    function BuscarGravidade() {
        axios.get('http://localhost:8080/gravidades')
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log(resposta.data)
                    setListGravidade(resposta.data);
                }
            })
    }
    function BuscarPessoas() {
        axios.get('http://localhost:8080/pessoas')
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log(resposta.data)
                    setListPessoa(resposta.data);
                }
            })
    }

    function Cadastrar(event) {
        event.preventDefault();
        let pessoa = {
            nome: Nome,
            idade: Idade,
            idDoenca: idDoenca,
            idCidade: idCidade,
            idGravidade: idGravidae
        }
        console.log(pessoa);
        axios.post('http://localhost:8080/pessoas', pessoa)
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log('usuario cadastrado')
                    BuscarPessoas();
                }
            })
    }

    useEffect(() => {
        BuscarCidade();
        BuscarDoenca();
        BuscarGravidade();
        BuscarPessoas();
        console.log(listPessoa);
    }, [])


    return (
        <div className='contCadastro'>
            <h1>Cadastrar novo paciente</h1>
            <form onSubmit={Cadastrar} className='form'>
                <div className='contInput'>
                    <label htmlFor="nome">Nome</label>
                    <input className='input' type="text" name="" id="nome" onChange={event => setNome(event.target.value)} />
                </div>
                <div className='contInput'>
                    <label htmlFor="nome">Idade</label>
                    <input className='input' type="number" name="" id="nome" onChange={event => setIdade(event.target.value)} />
                </div>
                <div className='contInput'>
                    <label htmlFor="nome">Cidade</label>
                    <select className='input' name="idCidade" id="nome" value={idCidade} onChange={event => setIdCidade(event.target.value)}>
                        {listCidade.map((cidade) => {
                            return <option key={cidade.id} value={cidade.id}>{cidade.nome}</option>
                        })
                        }
                    </select>
                </div>
                <div className='contInput'>
                    <label htmlFor="nome">Doença</label>
                    <select className='input' name="idCidade" id="nome" value={idDoenca} onChange={event => setIdDoenca(event.target.value)}>
                        {listDoenca.map((doenca) => {
                            return <option key={doenca.id} value={doenca.id}>{doenca.nome}</option>
                        })
                        }
                    </select>
                </div>
                <div className='contInput'>
                    <label htmlFor="nome">Gravidade</label>
                    <select className='input' name="idCidade" id="nome" value={idGravidae} onChange={event => { setIdGravidade(event.target.value) }}>
                        {listGravidade.map((gravidade) => {
                            return <option key={gravidade.id} value={gravidade.id}>{gravidade.nome}</option>
                        })
                        }
                    </select>
                </div>

                <button className='botao' type='submit'>Cdastrar</button>
            </form>

            {listPessoa.map((pessoa) => {
                return(
                <div className='contPessoa'>
                    <div className='contAtributo'>
                        <p>Nome: {pessoa.nome}</p>
                        <p>Idade: {pessoa.idade}</p>
                        <p>Cidade: {pessoa.idCidade.nome}</p>
                    </div>
                    <div className='contAtributo'>
                        <p>Doença: {pessoa.idDoenca.nome}</p>
                        <p>Gravidade: {pessoa.idGravidade.nome}</p>
                    </div>
                </div>
                )})
            }
        </div>
    )
};