E-commerce BackEnd - by Jordi Otero

Este repositorio contiene el código para la gestión de una base de datos orientada a un e-commerce.
Proporciona funcionalidades sencillas para manejar usuarios y productos, incluyendo validaciones para asegurar la integridad de la información.

| FUNCIONALIDADES |

1-Gestión de productos
-------------------------------

1.a. Puedes agregar productos al sistema con la condición de que el título del producto no coincida con el de otro ya existente.
Si se intenta crear un producto con un título ya creado, el sistema arrojará un error.

Requisitos obligatorios:

-Título (title): obligatorio y debe ser único. Si ya existe otro producto con el mismo título, no se permitirá crear el nuevo producto.

Requisitos opcionales:

-Precio (price): opcional, pero si no se proporciona, se asigna un valor por defecto(1).

-Stock (stock): opcional, con un valor por defecto si no se especifica(1).

-Foto (photo): opcional, si no se proporciona, se asignará una imagen predeterminada.

-Categoría (category): opcional, si no se elige una categoría, se asignará "unknown" por defecto.

-Descripción (description): opcional, se asignará "unknown" por defecto.

-Estado (status): opcional, se crea con el estado true por defecto.

1.b. Puedes buscar productos registrados y obtener un array completo de los productos existentes.

Puedes buscar productos filtrando por su categoría(category) y/o por su ID(pid).

1.c. Puedes actualizar información de los productos y también eliminarlos filtrando por su ID(pid).


2- Gestión de usuarios
--------------------------------

2.a. Los usuarios pueden registrarse en el sistema cumpliendo con los requisitos obligatorios.

Requisitos obligatorios:

-Email (email): obligatorio, de tipo texto, y debe ser único. Si se intenta registrar con un correo que ya existe, se producirá un error.

-Contraseña (password): obligatorio.


Requisitos opcionales:

-Foto (photo): opcional, si no se proporciona, se asigna una imagen por defecto.

-Rol (role): opcional, puede ser "admin" o "user", siendo "user" el valor predeterminado si no se elige un rol.

2.b. Puedes buscar todos los usuarios registrados y obtener un array completo de los usuarios existentes.

Puedes buscar usuarios filtrando por su ID(uid).

2.c. Puedes actualizar información de los usuarios y también eliminarlos filtrando por su ID(uid).

___________________________________________________________________________________________________________
| INSTALACION DEL REPOSITORIO |

-Clona el repositorio:

git clone https://github.com/jordiotero15/ecommerce-backend.git


-Instala las dependencias:

npm install

-Inicia el servidor:

npm start
