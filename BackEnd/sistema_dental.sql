-- DROP DATABASE IF EXISTS desaingx_sistema_dental;
-- CREATE DATABASE desaingx_sistema_dental;
USE desaingx_sistema_dental;


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


DROP TABLE IF EXISTS usuarios;
CREATE TABLE usuarios(
	id_usuario INTEGER NOT NULL AUTO_INCREMENT,
    usuario TEXT NOT NULL,
    correo TEXT NOT NULL,
    pass TEXT NOT NULL,
    estatus_registro TINYINT(1) DEFAULT 1,
    estado_actividad TINYINT(1) DEFAULT 1,
    
    PRIMARY KEY(id_usuario),
    
    id_rol INTEGER NOT NULL
);

DROP TABLE IF EXISTS datos_usuarios;
CREATE TABLE datos_usuarios(
	id_datos_usuario INTEGER NOT NULL AUTO_INCREMENT,
    nombre TEXT NOT NULL,
    apellido_paterno TEXT NOT NULL,
    apellido_materno TEXT NOT NULL,
    sexo VARCHAR(10),
    edad INTEGER,
    fecha_nacimiento DATE,
    curp VARCHAR(18),
    cedula VARCHAR(10),
    
    PRIMARY KEY (id_datos_usuario),
    id_usuario INTEGER NOT NULL
);

DROP TABLE IF EXISTS roles;
CREATE TABLE roles(
	id_rol INTEGER NOT NULL AUTO_INCREMENT,
    descripcion TEXT NOT NULL,
    
    PRIMARY KEY (id_rol)
);

DROP TABLE IF EXISTS direcciones;
CREATE TABLE direcciones(
	id_direccion INTEGER NOT NULL AUTO_INCREMENT,
    calle TEXT NOT NULL,
    numero_exterior VARCHAR(10) DEFAULT "S/N",
    numero_interior VARCHAR(10) DEFAULT "S/N",
    colonia TEXT NOT NULL,
    ciudad TEXT NOT NULL,
    estado TEXT NOT NULL,
    pais TEXT NOT NULL,
    codigo_postal INTEGER NOT NULL,
    
    PRIMARY KEY(id_direccion)
);

DROP TABLE IF EXISTS telefonos;
CREATE TABLE telefonos(
	id_telefono INTEGER NOT NULL AUTO_INCREMENT,
    telefono VARCHAR(20) NOT NULL,
    referencia VARCHAR(20) NOT NULL,
    
    PRIMARY KEY(id_telefono)
);

DROP TABLE IF EXISTS consultorios;
/* CREATE TABLE consultorios(
	id_consultorio INTEGER NOT NULL AUTO_INCREMENT,
    nombre_consultorio TEXT NOT NULL,
    
    PRIMARY KEY (id_consultorio)
); */

DROP TABLE IF EXISTS direcciones_usuarios;
CREATE TABLE direcciones_usuarios(

    address_of VARCHAR(15) NOT NULL,

	id_usuario INTEGER NOT NULL,
    id_direccion INTEGER NOT NULL
);

DROP TABLE IF EXISTS direcciones_consultorios;
/* CREATE TABLE direcciones_consultorios(
	id_consultorio INTEGER NOT NULL,
    id_direccion INTEGER NOT NULL
); */

DROP TABLE IF EXISTS citas;
CREATE TABLE citas(
	id_cita INTEGER NOT NULL AUTO_INCREMENT,
    titulo TEXT NOT NULL,
    fecha DATE DEFAULT "0000-00-00",
    hora TIME, 
    comentarios TEXT,
    aceptada TINYINT(1) DEFAULT 0,
    dia_preferencia VARCHAR(10) DEFAULT "Cualquiera",
    horario_preferente VARCHAR(10) DEFAULT "Cualquiera",
    
    PRIMARY KEY (id_cita),
    
    id_estatus INTEGER DEFAULT 1,
    /* id_consultorio INTEGER DEFAULT 1, */
    id_paciente INTEGER NOT NULL,
    id_doctor INTEGER DEFAULT 1
);

DROP TABLE IF EXISTS recetas;
CREATE TABLE recetas(
	id_receta INTEGER NOT NULL AUTO_INCREMENT,
    fecha DATE NOT NULL,
    
    PRIMARY KEY (id_receta), 
    
    id_paciente INTEGER NOT NULL,
    id_doctor INTEGER NOT NULL,
    id_cita INTEGER NOT NULL
);

DROP TABLE IF EXISTS medicamentos_recetas;
CREATE TABLE medicamentos_recetas (
    id_medicamento INTEGER NOT NULL AUTO_INCREMENT,
    medicamento VARCHAR(50) NOT NULL,
    dosis VARCHAR(100) NOT NULL,
    recomendaciones TEXT,

    PRIMARY KEY(id_medicamento),

    id_receta INTEGER NOT NULL
);

DROP TABLE IF EXISTS quejas_sugerencias;
/* CREATE TABLE quejas_sugerencias(
	id_queja_sugerencia INTEGER NOT NULL AUTO_INCREMENT,
    fecha DATE NOT NULL,
    descripcion TEXT NOT NULL,
    respuesta TEXT,
    atendida TINYINT(1) DEFAULT 0, 
    
	PRIMARY KEY (id_queja_sugerencia),
    
    id_usuario INTEGER NOT NULL
); */

DROP TABLE IF EXISTS expedientes;
/* CREATE TABLE expedientes(
    id_expediente INTEGER NOT NULL AUTO_INCREMENT,
    descripcion TEXT, 

    PRIMARY KEY (id_expediente),

    id_cita INTEGER,
    id_receta INTEGER,
    id_paciente INTEGER NOT NULL,
    id_medico INTEGER NOT NULL
); */

DROP TABLE IF EXISTS estatus_citas;
CREATE TABLE estatus_citas(
	id_estatus INTEGER NOT NULL AUTO_INCREMENT,
    nombre_estatus VARCHAR(15) NOT NULL,
    
    PRIMARY KEY(id_estatus)
);

DROP TABLE IF EXISTS telefonos_usuarios;
CREATE TABLE telefonos_usuarios (
	id_telefono INTEGER NOT NULL,
    id_usuario INTEGER NOT NULL
);

DROP TABLE IF EXISTS telefonos_consultorios;
/* CREATE TABLE telefonos_consultorios (
	id_telefono INTEGER NOT NULL,
    id_consultorio INTEGER NOT NULL
); */

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