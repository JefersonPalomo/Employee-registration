package com.one.empleados.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.one.empleados.models.Empleado;
import com.one.empleados.services.EmpleadoService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class EmpleadoController {
	
	@Autowired
	private EmpleadoService eService;
	
	@GetMapping("/empleados/page/{id}")
	public Page<Empleado> all(@PathVariable Integer id) {
		Integer size = null;
		return eService.empleadoPerPage(id, size);
	}
	
	@PostMapping("/empleados/new")
	public Empleado constructor(@RequestBody Empleado empleado) {
		return eService.save(empleado);
	}
	
	@GetMapping("/empleados/{id}")
	public Empleado details(@PathVariable Long id) {
		return eService.findById(id);
	}
	
	@PutMapping("/empleados/{id}")
	public Empleado update(@PathVariable Long id, @RequestBody Empleado empleado) {
		return eService.updateById(id, empleado);
	}
	
	@GetMapping("/gerente/{id}")
	public List<Empleado> search(@PathVariable Long id){
		Empleado manager = eService.findById(id);
		return eService.obtenerEmpleadosDeGerente(manager);
	}
	
	@DeleteMapping("/empleados/{id}/delete")
	public void delete(@PathVariable Long id) {
		eService.deleteById(id);
	}
}
