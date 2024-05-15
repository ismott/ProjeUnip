package com.MedicalLeucemia.projeto.DAO;

import org.springframework.data.repository.CrudRepository;

import com.MedicalLeucemia.projeto.model.Pessoa;

public interface IPessoa extends CrudRepository<Pessoa, Integer> {

}
