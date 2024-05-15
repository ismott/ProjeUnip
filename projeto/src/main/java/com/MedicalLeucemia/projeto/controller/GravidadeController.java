package com.MedicalLeucemia.projeto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MedicalLeucemia.projeto.DAO.IGravidade;
import com.MedicalLeucemia.projeto.model.Gravidade;

@RestController
@RequestMapping("/gravidades")
public class GravidadeController {
	
	@Autowired
	private IGravidade dao;
	
	@GetMapping
	public List<Gravidade> ListGravidades(){
		return (List<Gravidade>) dao.findAll();
	}
}
