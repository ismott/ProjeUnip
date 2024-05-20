package com.MedicalLeucemia.projeto.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.MedicalLeucemia.projeto.DAO.ICidade;
import com.MedicalLeucemia.projeto.DAO.IDoenca;
import com.MedicalLeucemia.projeto.DAO.IGravidade;
import com.MedicalLeucemia.projeto.DAO.IPessoa;
import com.MedicalLeucemia.projeto.DTO.PessoaDTO;
import com.MedicalLeucemia.projeto.model.Cidade;
import com.MedicalLeucemia.projeto.model.Doenca;
import com.MedicalLeucemia.projeto.model.Gravidade;
import com.MedicalLeucemia.projeto.model.Pessoa;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/pessoas")
public class PessoaController {
	@Autowired
    private IPessoa pessoaDao;

    @Autowired
    private IDoenca doencaDao;

    @Autowired
    private ICidade cidadeDao;

    @Autowired
    private IGravidade gravidadeDao;
	
    @CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/{id}")
	public Optional<Pessoa> ListPessoa(@PathVariable Integer id){
		Optional<Pessoa> pessoa = pessoaDao.findById(id);
		return pessoa;
	}
    
    @CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/nome")
	public List<Pessoa> ListPessoaNome(@RequestParam String nome){
    	List<Pessoa> pessoa = pessoaDao.buscarPorNome(nome);
		return pessoa;
	}
    
    @CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/comparar")
	public List<Object[]> Comparar(){
		List<Object[]> pessoa = pessoaDao.compararCidades();
		return pessoa;
	}
	
    @CrossOrigin(origins = "http://localhost:3000")
	@GetMapping
	public List<Pessoa> ListPessoas(){
		return (List<Pessoa>) pessoaDao.findAll();
	}
	
    @CrossOrigin(origins = "http://localhost:3000")
	@PostMapping
	public Pessoa cadastrarPessoa(@RequestBody PessoaDTO pessoaDTO) {
        Pessoa pessoa = new Pessoa();
        pessoa.setNome(pessoaDTO.getNome());
        pessoa.setIdade(pessoaDTO.getIdade());

        Doenca doenca = doencaDao.findById(pessoaDTO.getIdDoenca()).orElseThrow(() -> new RuntimeException("Doença não encontrada"));
        Cidade cidade = cidadeDao.findById(pessoaDTO.getIdCidade()).orElseThrow(() -> new RuntimeException("Cidade não encontrada"));
        Gravidade gravidade = gravidadeDao.findById(pessoaDTO.getIdGravidade()).orElseThrow(() -> new RuntimeException("Gravidade não encontrada"));

        pessoa.setIdDoenca(doenca);
        pessoa.setIdCidade(cidade);
        pessoa.setIdGravidade(gravidade);

        return pessoaDao.save(pessoa);
    }
	
    @CrossOrigin(origins = "http://localhost:3000")
	@PutMapping("/{id}")
	public Pessoa AtualizarPessoa(@PathVariable Integer id, @RequestBody PessoaDTO pessoaDTO) {
		Optional<Pessoa> optionalPessoa = pessoaDao.findById(id);
		  if (optionalPessoa.isEmpty()) {
			  throw new EntityNotFoundException("Pessoa com o ID " + id + " não encontrada");
	      }
		Pessoa pessoa = optionalPessoa.get();
        pessoa.setNome(pessoaDTO.getNome());
        pessoa.setIdade(pessoaDTO.getIdade());

        Doenca doenca = doencaDao.findById(pessoaDTO.getIdDoenca()).orElseThrow(() -> new RuntimeException("Doença não encontrada"));
        Cidade cidade = cidadeDao.findById(pessoaDTO.getIdCidade()).orElseThrow(() -> new RuntimeException("Cidade não encontrada"));
        Gravidade gravidade = gravidadeDao.findById(pessoaDTO.getIdGravidade()).orElseThrow(() -> new RuntimeException("Gravidade não encontrada"));

        pessoa.setIdDoenca(doenca);
        pessoa.setIdCidade(cidade);
        pessoa.setIdGravidade(gravidade);

        return pessoaDao.save(pessoa);
	}
	
    @CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/{id}")
	public Optional<Pessoa> DeletarPessoa(@PathVariable Integer id) {
		Optional<Pessoa> pessoa = pessoaDao.findById(id);
		  if (pessoa.isEmpty()) {
			  throw new EntityNotFoundException("Pessoa com o ID " + id + " não encontrada");
	      }
		pessoaDao.deleteById(id);
		return pessoa;
	}
}
