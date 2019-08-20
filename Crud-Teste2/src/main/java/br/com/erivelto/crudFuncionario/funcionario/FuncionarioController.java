package br.com.erivelto.crudFuncionario.funcionario;

import br.com.erivelto.crudFuncionario.core.crud.CrudController;
import br.com.erivelto.crudFuncionario.core.crud.CrudService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created By ERIVELTO in 16/08/2019
 */
@RestController
@RequestMapping("funcionario")
public class FuncionarioController extends CrudController<Funcionario, Integer> {

    @Autowired
    FuncionarioService service;

    @Override
    public CrudService<Funcionario, Integer> getService() {
        return service;
    }

}
