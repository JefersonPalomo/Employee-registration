package com.one.empleados.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.one.empleados.models.Empleado;

public interface EmpleadoRepository extends CrudRepository<Empleado, Long>, PagingAndSortingRepository<Empleado, Long> {
	void deleteById(Long id);
	List<Empleado> findByManager(Empleado gerente);
}
