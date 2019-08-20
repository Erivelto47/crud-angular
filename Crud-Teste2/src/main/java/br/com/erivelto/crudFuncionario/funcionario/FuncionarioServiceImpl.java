package br.com.erivelto.crudFuncionario.funcionario;

import br.com.erivelto.crudFuncionario.core.crud.CrudServiceImpl;
import br.com.erivelto.crudFuncionario.core.exception.ValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

/**
 * Created By ERIVELTO in 16/08/2019
 */
@Service
public class FuncionarioServiceImpl extends CrudServiceImpl<Funcionario, Integer> implements FuncionarioService {
    @Autowired
    FuncionarioRepository repository;

    @Override
    protected JpaRepository<Funcionario, Integer> getRepository() {
        return repository;
    }

    @Override
    protected void preSave(Funcionario entity) throws ValidationException {
        /*Validação, caso o email já tenha sido utilizado.*/
        if(repository.findByEmail(entity.getEmail()) != null){
            throw new ValidationException("Email já Cadastrado.");
        }
        super.preSave(entity);
    }

}
