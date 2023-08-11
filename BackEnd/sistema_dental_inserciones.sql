USE desaingx_sistema_dental;

-- DESABILITADO (ELIMINADO) DE FOREIGN KEYs ------------------------------------------------------
ALTER TABLE usuarios DROP FOREIGN KEY fk_roles_to_usuarios;

ALTER TABLE datos_usuarios DROP FOREIGN KEY fk_usuarios_to_datos_usuarios;

ALTER TABLE direcciones_usuarios DROP FOREIGN KEY fk_usuarios_to_direcciones_usuarios;
ALTER TABLE direcciones_usuarios DROP FOREIGN KEY fk_direcciones_to_direcciones_usuarios;

ALTER TABLE citas DROP FOREIGN KEY fk_estatus_citas_to_citas;
ALTER TABLE citas DROP FOREIGN KEY fk_usuarios_paciente_to_citas;
ALTER TABLE citas DROP FOREIGN KEY fk_usuarios_doctor_to_citas;

ALTER TABLE recetas DROP FOREIGN KEY fk_usuarios_paciente_to_recetas;
ALTER TABLE recetas DROP FOREIGN KEY fk_usuarios_doctor_to_recetas;
ALTER TABLE recetas DROP FOREIGN KEY fk_citas_to_recetas;

ALTER TABLE medicamentos_recetas DROP FOREIGN KEY fk_recetas_to_medicamentos_recetas;

ALTER TABLE telefonos_usuarios DROP FOREIGN KEY fk_telefonos_to_telefonos_usuarios;
ALTER TABLE telefonos_usuarios DROP FOREIGN KEY fk_usuarios_to_telefonos_usuarios;

-- TRUNCADO DE TABLAS ---------
TRUNCATE TABLE roles;
TRUNCATE TABLE direcciones;
TRUNCATE TABLE usuarios;
TRUNCATE TABLE direcciones_usuarios;
TRUNCATE TABLE datos_usuarios;
TRUNCATE TABLE telefonos;
TRUNCATE TABLE telefonos_usuarios;
TRUNCATE TABLE estatus_citas;
TRUNCATE TABLE citas;
TRUNCATE TABLE recetas;
TRUNCATE TABLE medicamentos_recetas;

-- HABILITAR (CREAR) FOREIGN KEYs DE NUEVO -------------------------------------------------------------------------------------------------------------------------------------------------------------
ALTER TABLE usuarios ADD CONSTRAINT fk_roles_to_usuarios FOREIGN KEY (id_rol) REFERENCES roles(id_rol) ON UPDATE CASCADE;

ALTER TABLE datos_usuarios ADD CONSTRAINT fk_usuarios_to_datos_usuarios FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE direcciones_usuarios ADD CONSTRAINT fk_usuarios_to_direcciones_usuarios FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE direcciones_usuarios ADD CONSTRAINT fk_direcciones_to_direcciones_usuarios FOREIGN KEY (id_direccion) REFERENCES direcciones(id_direccion) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE citas ADD CONSTRAINT fk_estatus_citas_to_citas FOREIGN KEY (id_estatus) REFERENCES estatus_citas(id_estatus) ON UPDATE CASCADE;
ALTER TABLE citas ADD CONSTRAINT fk_usuarios_paciente_to_citas FOREIGN KEY (id_paciente) REFERENCES usuarios(id_usuario) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE citas ADD CONSTRAINT fk_usuarios_doctor_to_citas FOREIGN KEY (id_doctor) REFERENCES usuarios(id_usuario) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE recetas ADD CONSTRAINT fk_usuarios_paciente_to_recetas FOREIGN KEY (id_paciente) REFERENCES usuarios(id_usuario) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE recetas ADD CONSTRAINT fk_usuarios_doctor_to_recetas FOREIGN KEY (id_doctor) REFERENCES usuarios(id_usuario) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE recetas ADD CONSTRAINT fk_citas_to_recetas FOREIGN KEY (id_cita) REFERENCES citas(id_cita) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE medicamentos_recetas ADD CONSTRAINT fk_recetas_to_medicamentos_recetas FOREIGN KEY (id_receta) REFERENCES recetas(id_receta) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE telefonos_usuarios ADD CONSTRAINT fk_telefonos_to_telefonos_usuarios FOREIGN KEY (id_telefono) REFERENCES telefonos(id_telefono) ON UPDATE CASCADE;
ALTER TABLE telefonos_usuarios ADD CONSTRAINT fk_usuarios_to_telefonos_usuarios FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON UPDATE CASCADE;

-- INSERCIONES DE ROLES -------
INSERT INTO roles (descripcion)
VALUES ("admin");
INSERT INTO roles (descripcion)
VALUES ("paciente");
INSERT INTO roles (descripcion)
VALUES ("dentista");

-- INSERCIONES DE DIRECCIONES -------------------------------------------------------------------------
INSERT INTO direcciones (calle, numero_exterior, numero_interior, colonia, ciudad, estado, pais, codigo_postal)
VALUES ("ADMIN", "ADMIN", "ADMIN", "ADMIN", "ADMIN", "ADMIN", "ADMIN", 10101);
INSERT INTO direcciones (calle, numero_exterior, numero_interior, colonia, ciudad, estado, pais, codigo_postal)
VALUES ("Santa rosa", "91", "5", "Robles del castillo", "Xalapa", "Veracruz", "México", 98765);
INSERT INTO direcciones (calle, numero_exterior, colonia, ciudad, estado, pais, codigo_postal)
VALUES ("Alvaro obregon", "82", "Magallanes", "Xalapa", "Veracruz", "México", 98764);
INSERT INTO direcciones (calle, numero_exterior, colonia, ciudad, estado, pais, codigo_postal)
VALUES ("Santa lucia", "73", "Apolinar castillo", "Xalapa", "Veracruz", "México", 98763);
INSERT INTO direcciones (calle, numero_exterior, numero_interior, colonia, ciudad, estado, pais, codigo_postal)
VALUES ("21 de marzo", "7", "2", "Magisterio", "Xalapa", "Veracruz", "México", 98765);
INSERT INTO direcciones (calle, numero_exterior, colonia, ciudad, estado, pais, codigo_postal)
VALUES ("22 de abril", "8", "Los lagos", "Xalapa", "Veracruz", "México", 98765);
INSERT INTO direcciones (calle, numero_exterior, numero_interior, colonia, ciudad, estado, pais, codigo_postal)
VALUES ("Revolución", "9", "14", "Benito Juarez", "Xalapa", "Veracruz", "México", 98765);
INSERT INTO direcciones (calle, numero_exterior, colonia, ciudad, estado, pais, codigo_postal)
VALUES ("Jalapeños ilustres", "42", "Agustin de Iturbide", "Xalapa", "Veracruz", "México", 98765);
INSERT INTO direcciones (calle, numero_exterior, numero_interior, colonia, ciudad, estado, pais, codigo_postal)
VALUES ("Guadalupe Victoria", "60", "1", "San rafael", "Xalapa", "Veracruz", "México", 98765);
INSERT INTO direcciones (calle, numero_exterior, colonia, ciudad, estado, pais, codigo_postal)
VALUES ("16 de septiembre", "27", "Jose Feliciano", "Xalapa", "Veracruz", "México", 98765);
INSERT INTO direcciones (calle, numero_exterior, numero_interior, colonia, ciudad, estado, pais, codigo_postal)
VALUES ("José maria arrieta", "78", "12", "Venustiano Carranza", "Xalapa", "Veracruz", "México", 98765);
INSERT INTO direcciones (calle, numero_exterior, colonia, ciudad, estado, pais, codigo_postal)
VALUES ("Miguel hidalgo", "13", "Lomas del pedregal", "Xalapa", "Veracruz", "México", 98765);

-- INSERCIONES DE USUARIOS ----------------------------------------
INSERT INTO usuarios (usuario, correo, pass, estatus_registro, id_rol)
VALUES ("@admin", "admin@email.com", "$2y$10$QDYITzXpr7GH8IJ/LXftJulYRyblOUuW3xGghTLs0wrkx41RAn4Ru", 1, 1);
INSERT INTO usuarios (usuario, correo, pass, estatus_registro, id_rol)
VALUES ("@gerardo_ramirez", "gerardo_ramirez@email.com", "$2y$10$ongkpXPgGB9XBOax3nvfY.8tYhXQaudChbOuAgUn7K1du/vgJGTFy", 1, 2);
INSERT INTO usuarios (usuario, correo, pass, estatus_registro, id_rol)
VALUES ("@pepe_perez", "pepe_perez@email.com", "$2y$10$ongkpXPgGB9XBOax3nvfY.8tYhXQaudChbOuAgUn7K1du/vgJGTFy", 1, 2);
INSERT INTO usuarios (usuario, correo, pass, estatus_registro, id_rol)
VALUES ("@jorge_facundo", "jorge_facundo@email.com", "$2y$10$ongkpXPgGB9XBOax3nvfY.8tYhXQaudChbOuAgUn7K1du/vgJGTFy", 1, 2);
INSERT INTO usuarios (usuario, correo, pass, estatus_registro, id_rol)
VALUES ("@alex_martinez", "alex_martinez@email.com", "$2y$10$ongkpXPgGB9XBOax3nvfY.8tYhXQaudChbOuAgUn7K1du/vgJGTFy", 1, 2);
INSERT INTO usuarios (usuario, correo, pass, estatus_registro, id_rol)
VALUES ("@dra_marquez", "dra_marquez@email.com", "$2y$10$ongkpXPgGB9XBOax3nvfY.8tYhXQaudChbOuAgUn7K1du/vgJGTFy", 1, 3);
INSERT INTO usuarios (usuario, correo, pass, estatus_registro, id_rol)
VALUES ("@dr_campos", "dr_campos@email.com", "$2y$10$ongkpXPgGB9XBOax3nvfY.8tYhXQaudChbOuAgUn7K1du/vgJGTFy", 1, 3);
INSERT INTO usuarios (usuario, correo, pass, estatus_registro, id_rol)
VALUES ("@dra_martinez", "dra_martinez@email.com", "$2y$10$ongkpXPgGB9XBOax3nvfY.8tYhXQaudChbOuAgUn7K1du/vgJGTFy", 1, 3);

-- INSERCIONES DE DIRECCIONES_USUARIOS -------------------
INSERT INTO direcciones_usuarios(id_usuario, id_direccion, address_of)
VALUES (1,1, "Casa");
INSERT INTO direcciones_usuarios(id_usuario, id_direccion, address_of)
VALUES (2,2, "Departamento");
INSERT INTO direcciones_usuarios(id_usuario, id_direccion, address_of)
VALUES (3,3, "Casa");
INSERT INTO direcciones_usuarios(id_usuario, id_direccion, address_of)
VALUES (4,4, "Departamento");
INSERT INTO direcciones_usuarios(id_usuario, id_direccion, address_of)
VALUES (5,5, "Casa");
INSERT INTO direcciones_usuarios(id_usuario, id_direccion, address_of)
VALUES (5,6, "Oficina");
INSERT INTO direcciones_usuarios(id_usuario, id_direccion, address_of)
VALUES (6,7, "Casa");
INSERT INTO direcciones_usuarios(id_usuario, id_direccion, address_of)
VALUES (7,8, "Oficina");
INSERT INTO direcciones_usuarios(id_usuario, id_direccion, address_of)
VALUES (8,9, "Otra");

-- INSERCIONES DE DATOS_USUARIOS ---------------------------------------------------------------------------------------------------
INSERT INTO datos_usuarios (nombre, apellido_paterno, apellido_materno, sexo, edad, fecha_nacimiento, curp, id_usuario)
VALUES ("ADMIN", "ADMINISTRADOR", "ADMINISTRADOR", "MASCULINO", 10, "1000-01-01", "admin", 1 );
INSERT INTO datos_usuarios (nombre, apellido_paterno, apellido_materno, sexo, edad, fecha_nacimiento, curp, id_usuario)
VALUES ("Luis Gerardo", "Ramirez", "Bustamante", "Masculino", 23, "1997-06-13", "RABL970613HVZQWE01", 2 );
INSERT INTO datos_usuarios (nombre, apellido_paterno, apellido_materno, sexo, edad, fecha_nacimiento, curp, id_usuario)
VALUES ("Juan José", "Pérez", "Oceguera", "Masculino", 17, "2003-02-14", "PEOJ030214HVZRTY01", 3 );
INSERT INTO datos_usuarios (nombre, apellido_paterno, apellido_materno, sexo, edad, fecha_nacimiento, curp, id_usuario)
VALUES ("Jorge", "Facundo", "Vicente", "Masculino", 34, "1986-11-27", "FAVJ861127HVZQET02", 4 );
INSERT INTO datos_usuarios (nombre, apellido_paterno, apellido_materno, sexo, edad, fecha_nacimiento, curp, id_usuario)
VALUES ("Alex", "Martínez", "Arteaga", "Masculino", 26, "1994-09-15", "MAAA940915HVZRRL01", 5 );
INSERT INTO datos_usuarios (nombre, apellido_paterno, apellido_materno, sexo, edad, fecha_nacimiento, curp, cedula, id_usuario)
VALUES ("Rubicela", "Marquez", "Isidoro", "Femenino", 28, "1992-03-13", "MAIR920313MVZTYU01", "15792534", 6 );
INSERT INTO datos_usuarios (nombre, apellido_paterno, apellido_materno, sexo, edad, fecha_nacimiento, curp, cedula, id_usuario)
VALUES ("Ramiro", "Campos", "Jacome", "Masculino", 47, "1973-08-28", "CAJR730828HVZBVG15", "26879426", 7 );
INSERT INTO datos_usuarios (nombre, apellido_paterno, apellido_materno, sexo, edad, fecha_nacimiento, curp, cedula, id_usuario)
VALUES ("Valentina", "Martínez", "Campos", "Femenino", 30, "1990-03-21", "MACV900321MVZWER01", "15798268", 8 );

-- INSERCIONES DE TELEFONOS ----
INSERT INTO telefonos (telefono, referencia)
VALUES ("2903985700", "casa");
INSERT INTO telefonos (telefono, referencia)
VALUES ("2824563591", "celular");
INSERT INTO telefonos (telefono, referencia)
VALUES ("6716198952", "casa");
INSERT INTO telefonos (telefono, referencia)
VALUES ("9981652147", "celular");
INSERT INTO telefonos (telefono, referencia)
VALUES ("6661062084", "casa");
INSERT INTO telefonos (telefono, referencia)
VALUES ("7747089248", "celular");
INSERT INTO telefonos (telefono, referencia)
VALUES ("0820389586", "casa");
INSERT INTO telefonos (telefono, referencia)
VALUES ("4721020437", "celular");
INSERT INTO telefonos (telefono, referencia)
VALUES ("8426441241", "consultorio");
INSERT INTO telefonos (telefono, referencia)
VALUES ("4469594711", "consultorio");
INSERT INTO telefonos (telefono, referencia)
VALUES ("4066019727", "consultorio");

-- INSERCIONES DE TELEFONOS_USUARIOS -------------------
INSERT INTO telefonos_usuarios (id_telefono, id_usuario)
VALUES (1,1);
INSERT INTO telefonos_usuarios (id_telefono, id_usuario)
VALUES (2,2);
INSERT INTO telefonos_usuarios (id_telefono, id_usuario)
VALUES (3,3);
INSERT INTO telefonos_usuarios (id_telefono, id_usuario)
VALUES (4,4);
INSERT INTO telefonos_usuarios (id_telefono, id_usuario)
VALUES (5,5);
INSERT INTO telefonos_usuarios (id_telefono, id_usuario)
VALUES (6,6);
INSERT INTO telefonos_usuarios (id_telefono, id_usuario)
VALUES (7,7);
INSERT INTO telefonos_usuarios (id_telefono, id_usuario)
VALUES (8,8);

-- INSERCIONES DE ESTATUS_CITAS ----------
INSERT INTO estatus_citas (nombre_estatus)
VALUES ("Activa");
INSERT INTO estatus_citas (nombre_estatus)
VALUES ("Cancelada");
INSERT INTO estatus_citas (nombre_estatus)
VALUES ("Finalizada");

-- INSERCIONES DE CITAS -----------------------------------------------------------------------------------------------
INSERT INTO citas (titulo, fecha, hora, comentarios, aceptada, id_estatus, id_paciente, id_doctor)
VALUE ("Limpieza bucal", "", "", "El paciente necesita limpieza bucal completa", 0, 1, 2, 1);
INSERT INTO citas (titulo, fecha, hora, comentarios, aceptada, id_estatus, id_paciente, id_doctor)
VALUE ("Dolor de muela", "", "", "Dolor de muela intenzo del lado derecho de la boca", 0, 1, 2, 1);
INSERT INTO citas (titulo, fecha, hora, comentarios, aceptada, id_estatus, id_paciente, id_doctor)
VALUE ("Retirar muela del juicio", "2020-01-02", "11:00", "Ya no se soporta el dolor, quiero sacarme la muela del juicio", 1, 1, 2, 7);
INSERT INTO citas (titulo, fecha, hora, comentarios, aceptada, id_estatus, id_paciente, id_doctor)
VALUE ("Dolor del lado derecho", "2020-02-02", "10:30", "Tengo mucho dolor en una muela del lado derecho", 1, 2, 3, 7);
INSERT INTO citas (titulo, fecha, hora, comentarios, aceptada, id_estatus, id_paciente, id_doctor)
VALUE ("Brackets", "2020-09-15", "10:20", "Quiero iniciar mi tratamiento para Brackets", 1, 1, 4, 8);

-- INSERCIONES DE RECETAS -------------------------
INSERT INTO recetas (fecha, id_paciente, id_doctor, id_cita)
VALUES ("2020-01-01", 2, 6, 1);
INSERT INTO recetas (fecha, id_paciente, id_doctor, id_cita)
VALUES ("2020-02-02", 2, 8, 2);

-- INSERCIONES DE MEDICAMENTOS_RECETAS --------------------------------------------------------------------------------
INSERT INTO medicamentos_recetas (medicamento, dosis, recomendaciones, id_receta)
VALUES ("Sulbactam", "1 pastilla cada 8 horas durante 3 dias", "Si siente que le entume la boca dejar de consumir", 1);
INSERT INTO medicamentos_recetas (medicamento, dosis, recomendaciones, id_receta)
VALUES ("Ampicilina", "1 pastilla cada 2 horas durante 1 semana", "Sin recomendaciones", 1);
INSERT INTO medicamentos_recetas (medicamento, dosis, recomendaciones, id_receta)
VALUES ("Penicilina G sódica", "2 gotas en ayunas", "Tomar hasta que se termine el frasco", 2);

-- INSERCIONES DE QUEJAS_SUGERENCIAS ---------------------------------------------------------------------------------------------------
/* INSERT INTO quejas_sugerencias (fecha, descripcion, respuesta, atendida, id_usuario)
VALUES ("2020-03-17", "No la aplicación no me deja ver mi receta", "Trabajamos para solucionar su problema, disculpe las molestias", 1, 2);
INSERT INTO quejas_sugerencias (fecha, descripcion, respuesta, atendida, id_usuario)
VALUES ("2020-04-05", "Estaría bien si la clinica tubiera una farmacia para comprar el medicamento porque luego no lo encuentro", "", 0, 3); */

-- INSERCIONES DE EXPEDIENTES ---------------------------------------------------
/* INSERT INTO expedientes (descripcion, id_cita, id_receta, id_paciente, id_medico)
VALUES ("", 1, 1, 2, 6);
INSERT INTO expedientes (descripcion, id_cita, id_receta, id_paciente, id_medico)
VALUES ("Una descripción para el expediente", 2, 2, 3, 7); */
