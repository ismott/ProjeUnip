package com.MedicalLeucemia.projeto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MedicalLeucemia.projeto.DAO.ICidade;
import com.MedicalLeucemia.projeto.model.Cidade;

@RestController
@RequestMapping("/cidades")
public class CidadeController {

	@Autowired
	private ICidade dao;
	
	@GetMapping
	public List<Cidade> ListCidades(){
		List<Cidade> cidades = (List<Cidade>) dao.findAll();
	    cidades.forEach(cidade -> cidade.getDoenca().getNome());
	    return cidades;
	}
}
