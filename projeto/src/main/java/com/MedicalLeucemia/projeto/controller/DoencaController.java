package com.MedicalLeucemia.projeto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MedicalLeucemia.projeto.DAO.IDoenca;
import com.MedicalLeucemia.projeto.model.Doenca;

@RestController
@RequestMapping("/doencas")
public class DoencaController {
	@Autowired
	private IDoenca dao;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping
	public List<Doenca> ListDoencas(){
		return (List<Doenca>) dao.findAll();
	}
}
