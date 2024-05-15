package com.MedicalLeucemia.projeto.DTO;

public class PessoaDTO {
    private String nome;
    private Integer idade;
    private Integer idDoenca;
    private Integer idCidade;
    private Integer idGravidade;

    // Getters e Setters

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getIdade() {
        return idade;
    }

    public void setIdade(Integer idade) {
        this.idade = idade;
    }

    public Integer getIdDoenca() {
        return idDoenca;
    }

    public void setIdDoenca(Integer idDoenca) {
        this.idDoenca = idDoenca;
    }

    public Integer getIdCidade() {
        return idCidade;
    }

    public void setIdCidade(Integer idCidade) {
        this.idCidade = idCidade;
    }

    public Integer getIdGravidade() {
        return idGravidade;
    }

    public void setIdGravidade(Integer idGravidade) {
        this.idGravidade = idGravidade;
    }
}
