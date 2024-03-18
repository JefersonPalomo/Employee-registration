package com.one.empleados.models;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Empleados")
@Getter
@Setter
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Empleado {
	
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	 
	 @NotNull
	 @NotBlank
	 @Size(min = 2, max = 20)
	 private String firstName;
		
	 @NotNull
	 @NotBlank
	 @Size(min = 2, max = 20)
	 private String lastName;
	 
	 @NotNull
	 @NotBlank
	 @Size(min = 2, max = 20)
	 private String country;
	 
	 @Min(1)
	 @Max(10)
	 @NotNull
	 private int manager;

	 @Column(updatable=false, name = "created_at")
	 @DateTimeFormat(pattern="yyyy-MM-dd")
	 private Date createdAt;
	    
	 @Column(name = "updated_at")
	 @DateTimeFormat(pattern="yyyy-MM-dd")
	 private Date updatedAt;
	    
	 @PrePersist
	 protected void onCreate(){
		 this.createdAt = new Date();
	 }
	    
	 @PreUpdate
	 protected void onUpdate(){
		 this.updatedAt = new Date();
	 }
}
