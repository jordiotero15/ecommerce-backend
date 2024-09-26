E-commerce BackEnd - by Jordi Otero

Este repositorio contiene el código para la gestión de una base de datos orientada a un e-commerce.
Proporciona funcionalidades sencillas para manejar usuarios y productos, incluyendo validaciones para asegurar la integridad de la información.

| FUNCIONALIDADES |
___________________________________________________________________________________________________________
1-Gestión de productos

Puedes agregar productos al sistema con la condición de que el título del producto no coincida con el de otro ya existente.
Si se intenta crear un producto con un título ya creado, el sistema arrojará un error.

Requisitos obligatorios:

-Título (title): es obligatorio y debe ser único. Si ya existe otro producto con el mismo título, no se permitirá crear el nuevo producto.

Requisitos opcionales:

-Precio (price): es opcional, pero si no se proporciona, se asigna un valor por defecto(1).

-Stock (stock): es opcional, con un valor por defecto si no se especifica(1).

-Foto (photo): es opcional, si no se proporciona, se asignará una imagen predeterminada.

-Categoría (category): es opcional, si no se elige una categoría, se asignará "unknow" por defecto.

-Descripción (description): es opcional, se asignará "unknow" por defecto.

-Estado (status): es opcional, se crea con el estado true por defecto.

----------------------------------------------------------------------------------------------------------
2- Gestión de usuarios

Los usuarios pueden registrarse en el sistema cumpliendo con los requisitos obligatorios.

Requisitos obligatorios:

-Email (email): Es obligatorio, de tipo texto, y debe ser único. Si se intenta registrar con un correo que ya existe, se producirá un error.

-Contraseña (password): Es obligatoria.


Requisitos opcionales:

-Foto (photo): es opcional, si no se proporciona, se asigna una imagen por defecto.

-Rol (role): es opcional, puede ser "admin" o "user", siendo "user" el valor predeterminado si no se elige un rol.

___________________________________________________________________________________________________________
| INSTALACION DEL REPOSITORIO |

-Clona el repositorio:

git clone https://github.com/jordiotero15/ecommerce-backend.git


-Instala las dependencias:

npm install

-Inicia el servidor:

npm start
