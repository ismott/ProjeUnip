package com.MedicalLeucemia.projeto.DAO;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.MedicalLeucemia.projeto.model.Gravidade;

@Repository
public interface IGravidade extends CrudRepository<Gravidade, Integer>{

}
