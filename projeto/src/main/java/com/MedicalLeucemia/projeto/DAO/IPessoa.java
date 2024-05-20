package com.MedicalLeucemia.projeto.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.MedicalLeucemia.projeto.model.Pessoa;

public interface IPessoa extends CrudRepository<Pessoa, Integer> {
	
	@Query("SELECT p FROM Pessoa p WHERE p.nome  LIKE %:nome% ")
    List<Pessoa> buscarPorNome(@Param("nome") String nome);
	
	@Query("SELECT " +
		       "    COUNT(CASE WHEN c.nome = 'São Paulo' THEN 1 END) AS SPCount, " +
		       "    COUNT(CASE WHEN c.nome = 'São Caetano' THEN 1 END) AS SCCount, " +
		       "    COUNT(CASE WHEN c.nome = 'Santo André' THEN 1 END) AS SACount, " +
		       "    COUNT(CASE WHEN c.nome = 'São Bernardo do Campo' THEN 1 END) AS SBCCount, " +
		       "    COUNT(CASE WHEN c.nome = 'Didema' THEN 1 END) AS DiademaCount " +
		       "FROM " +
		       "    Pessoa p " +
		       "INNER JOIN " +
		       "    p.idCidade c " +
		       "WHERE " +
		       "    c.nome IN ('São Paulo', 'São Caetano', 'Santo André', 'São Bernardo do Campo', 'Didema')")
		List<Object[]> compararCidades();


}
