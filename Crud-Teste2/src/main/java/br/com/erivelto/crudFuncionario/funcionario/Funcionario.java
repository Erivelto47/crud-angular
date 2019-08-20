package br.com.erivelto.crudFuncionario.funcionario;

import lombok.Data;
import lombok.Generated;
import org.springframework.validation.annotation.Validated;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * Created By ERIVELTO in 16/08/2019
 */
@Entity
@Data
public class Funcionario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nome")
    @Size(min=2,max=30,message="O Nome deve conter no minimo 2 e no maximo 30 caracteres.")
    private String nome;

    @Size(min=2,max=50,message="O Sobrenome deve conter no minimo 2 e no maximo 50 caracteres.")
    private String sobrenome;

    @Column(name = "email")
    @NotEmpty(message = "O campo Email não pode ser vazio.")
    @Email
    private String email;

    @NotNull(message = "O campo nis não pode ser vazio.")
    private Integer nis;
}
