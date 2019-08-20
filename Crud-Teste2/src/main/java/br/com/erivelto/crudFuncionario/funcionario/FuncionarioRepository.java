package br.com.erivelto.crudFuncionario.funcionario;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created By ERIVELTO in 16/08/2019
 */

public interface FuncionarioRepository extends JpaRepository<Funcionario, Integer> {
    Funcionario findByEmail(String email);
}
