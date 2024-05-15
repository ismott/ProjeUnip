package com.MedicalLeucemia.projeto.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Pessoa")
public class Pessoa {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idPessoa", nullable = false)
	private Integer id;
	
	@Column(name = "nome", length = 100, nullable = false)
	private String nome;
	
	@Column(name = "idade", nullable = false)
	private Integer idade;
	
	@ManyToOne
	@JoinColumn(name = "idDoenca", nullable = false)
	private Doenca idDoenca;
	
	@ManyToOne
	@JoinColumn(name = "idCIdade", nullable = false)
	private Cidade idCidade;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

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

	public Doenca getIdDoenca() {
		return idDoenca;
	}

	public void setIdDoenca(Doenca idDoenca) {
		this.idDoenca = idDoenca;
	}

	public Cidade getIdCidade() {
		return idCidade;
	}

	public void setIdCidade(Cidade idCidade) {
		this.idCidade = idCidade;
	}

	public Gravidade getIdGravidade() {
		return idGravidade;
	}

	public void setIdGravidade(Gravidade idGravidade) {
		this.idGravidade = idGravidade;
	}

	@ManyToOne
	@JoinColumn(name = "idGravidade", nullable = false)
	private Gravidade idGravidade;
}
