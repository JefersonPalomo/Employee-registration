package com.one.empleados.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import com.one.empleados.models.Empleado;
import com.one.empleados.repositories.EmpleadoRepository;
import org.springframework.data.domain.Sort;

@Service
public class EmpleadoService {
	
	@Autowired
	private EmpleadoRepository eRepository;
	
	public Page<Empleado> empleadoPerPage(Integer pageNumber, Integer size) {
		if (pageNumber == null) {
			pageNumber = 0;
			size = ((List<Empleado>) eRepository.findAll()).size();
		} else if (size == null) {
			size = 5;
		}
		
		PageRequest pageRequest = PageRequest.of(pageNumber, size, Sort.by("id").descending());
		return eRepository.findAll(pageRequest);
	}

	public List<Empleado> obtenerEmpleadosDeGerente(Empleado gerente) {
		return eRepository.findByManager(gerente);
	}

	public Empleado save(Empleado empleado) {
		return eRepository.save(empleado);
	}
	
	public Empleado findById(Long id) {
		Optional<Empleado> optional = eRepository.findById(id);
		if(optional.isPresent()) {
			return optional.get();
		} else {
			return null;
		}
	}
	
	public Empleado updateById(Long id, Empleado empleado) {
		Empleado empleados = eRepository.findById(id).orElse(null);
		if(empleados == null) {
			throw new IllegalArgumentException("El empleado con el ID proporcionado no existe");
		}
		
		empleados.setFirstName(empleado.getFirstName());
		empleados.setLastName(empleado.getLastName()); 
		empleados.setManager(empleado.getManager());
		empleados.setCountry(empleado.getCountry());

		return eRepository.save(empleados);
	}
	
	public void deleteById(Long id) {
		Empleado empleados = eRepository.findById(id).orElse(null);
		if(empleados == null) {
			throw new IllegalArgumentException("El empleado con el ID proporcionado no existe");
		}
		eRepository.deleteById(id);
	}
}

