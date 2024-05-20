import '../assets/css/Cadastrar.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../../Components/Header';

export const Cadastrar = () => {
    const [Nome, setNome] = useState('');
    const [NomeBuscado, setNomeBuscado] = useState('');
    const [Mensagen, setMensagen] = useState('');
    const [Idade, setIdade] = useState('');
    const [listCidade, setListCidade] = useState([]);
    const [listDoenca, setListDoenca] = useState([]);
    const [listGravidade, setListGravidade] = useState([]);
    const [listPessoa, setListPessoa] = useState([]);
    const [idCidade, setIdCidade] = useState(1);
    const [idDoenca, setIdDoenca] = useState(1);
    const [idGravidae, setIdGravidade] = useState(1);
    const [desabilitado, setDesabilitado] = useState(false);
    const [editando, setEditando] = useState(false);
    const [idPessoa, setIdPessoa] = useState(0);

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
                    setDesabilitado(false);
                    setEditando(false);
                }
            })
    }
    function BuscarPessoasNome(nome) {
        setDesabilitado(true);
        console.log(nome)
        if (nome) {
            axios.get(`http://localhost:8080/pessoas/nome?nome=${nome}`)
                .then(resposta => {
                    if (resposta.status === 200) {
                        console.log("nome buscado: ", resposta.data)
                        setListPessoa(resposta.data);
                        setDesabilitado(false);
                    }
                })
        } else {
            BuscarPessoas();
        }
    }
    function DeletarPessoas(id) {
        setDesabilitado(true);
        axios.delete(`http://localhost:8080/pessoas/${id}`)
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log(resposta.data)
                    BuscarPessoas();

                }
            })
    }

    function Cadastrar(event) {
        setDesabilitado(true);
        event.preventDefault();
        let pessoa = {
            nome: Nome,
            idade: parseInt(Idade),
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
                    setNome('');
                    setIdade('');
                    setDesabilitado(false);
                    setMensagen('Usuario cadastrado com sucesso!')
                }
            })
    }
    function Atualizar(id) {
        setDesabilitado(true);
        let pessoa = {
            nome: Nome,
            idade: Idade,
            idDoenca: idDoenca,
            idCidade: idCidade,
            idGravidade: idGravidae
        }
        console.log(pessoa);
        axios.put(`http://localhost:8080/pessoas/${id}`, pessoa)
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log('usuario atualizado')
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
        <>
            <Header cor='cadastro'/>
        <div className='contCadastro'>
            <h1>Cadastrar novo paciente</h1>
            <form onSubmit={Cadastrar} className='form'>
                <div className='contInput'>
                    <label htmlFor="nome">Nome</label>
                    <input className='input' type="text" name="" value={Nome} id="nome" onChange={event => setNome(event.target.value)} />
                </div>
                <div className='contInput'>
                    <label htmlFor="nome">Idade</label>
                    <input className='input' type="number" name="" value={Idade} id="idade" onChange={event => setIdade(event.target.value)} />
                </div>
                <div className='contInput'>
                    <label htmlFor="nome">Cidade</label>
                    <select className='input' name="idCidade" id="cidade" value={idCidade} onChange={event => setIdCidade(event.target.value)}>
                        {listCidade.map((cidade) => {
                            return <option key={cidade.id} value={cidade.id}>{cidade.nome}</option>
                        })
                        }
                    </select>
                </div>
                <div className='contInput'>
                    <label htmlFor="nome">Doença</label>
                    <select className='input' name="idCidade" id="doenca" value={idDoenca} onChange={event => setIdDoenca(event.target.value)}>
                        {listDoenca.map((doenca) => {
                            return <option key={doenca.id} value={doenca.id}>{doenca.nome}</option>
                        })
                        }
                    </select>
                </div>
                <div className='contInput'>
                    <label htmlFor="nome">Gravidade</label>
                    <select className='input' name="idCidade" id="gravidade" value={idGravidae} onChange={event => { setIdGravidade(event.target.value) }}>
                        {listGravidade.map((gravidade) => {
                            return <option key={gravidade.id} value={gravidade.id}>{gravidade.nome}</option>
                        })
                        }
                    </select>
                </div>
                <span className='mensagem'>{Mensagen}</span>
                {desabilitado ? <button className='botaoM' disabled type='submit'>Cdastrando</button> : <button className='botao' type='submit'>Cdastrar</button>}
            </form>

            <div className='contBusca'>
                <input type="text" className='input' name="buscar" id="busca" placeholder='Buscar' onChange={event => {setNomeBuscado(event.target.value)}} />
                {desabilitado ? <button className='botaoM' disabled>Buscando</button> : <button className='botao' onClick={() => BuscarPessoasNome(NomeBuscado)}>Buscar</button>}
            </div>
            
            {listPessoa.map((pessoa) => {
                return (
                    <div className='contPessoa'>
                        {editando && pessoa.id == idPessoa ?
                            <form className='contAtributo'>
                                <p>Nome: <input className='input' value={Nome} type="text" name="" id="nome" onChange={event => setNome(event.target.value)} /></p>
                                <p>Idade: <input className='input' value={Idade} type="number" name="" id="nome" onChange={event => setIdade(event.target.value)} /></p>
                                <p>Cidade:
                                    <select className='input' name="idCidade" id="cidade" value={idCidade} onChange={event => setIdCidade(event.target.value)}>
                                        {listCidade.map((cidade) => {
                                            return <option key={cidade.id} value={cidade.id}>{cidade.nome}</option>
                                        })
                                        }
                                    </select>
                                </p>
                                <p>Doença:
                                    <select className='input' name="idCidade" id="doenca" value={idDoenca} onChange={event => setIdDoenca(event.target.value)}>
                                        {listDoenca.map((doenca) => {
                                            return <option key={doenca.id} value={doenca.id}>{doenca.nome}</option>
                                        })
                                        }
                                    </select>
                                </p>
                                <p>Gravidade:
                                    <select className='input' name="idCidade" id="gravidade" value={idGravidae} onChange={event => { setIdGravidade(event.target.value) }}>
                                        {listGravidade.map((gravidade) => {
                                            return <option key={gravidade.id} value={gravidade.id}>{gravidade.nome}</option>
                                        })
                                        }
                                    </select>
                                </p>
                            </form>
                            :
                            <div className='contAtributo'>
                                <p>Nome: {pessoa.nome}</p>
                                <p>Idade: {pessoa.idade}</p>
                                <p>Cidade: {pessoa.idCidade.nome}</p>
                                <p>Doença: {pessoa.idDoenca.nome}</p>
                                <p>Gravidade: {pessoa.idGravidade.nome}</p>
                            </div>
                        }
                        <div className='contButtons'>
                            {editando && pessoa.id == idPessoa ? desabilitado && pessoa.id == idPessoa ? <button className='botaoEDM' disabled onClick={() => Atualizar(pessoa.id)}>Salvando</button> : <button className='botaoED' onClick={() => Atualizar(pessoa.id)}>Salvar</button> : <button className='botaoED' onClick={() => { setEditando(true); setIdPessoa(pessoa.id); setNome(pessoa.nome); setIdade(pessoa.idade); setIdCidade(pessoa.idCidade.id); setIdGravidade(pessoa.idGravidade.id) }}>Editar</button>}
                            {editando && pessoa.id == idPessoa ? <button className='botaoEX' onClick={() => setEditando(false)}>Cancelar</button> : desabilitado && pessoa.id == idPessoa ? <button className='botaoEXM' value={pessoa.id} disabled>Excluindo</button> : <button className='botaoEX' value={pessoa.id} onClick={() => { DeletarPessoas(pessoa.id); setIdPessoa(pessoa.id) }}>Excluir</button>}
                        </div>
                    </div>
                )
            })
            }
        </div>
        </>
    )
};