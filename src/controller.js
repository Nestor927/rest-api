import {pool} from './database.js';

class LibroController{
    //getAll <--- trae todo lo que tenemos en la base de datos
    async getAll(req, res){
        
        const [result] = await pool.query('SELECT * FROM Libros'); 
        res.json(result);
    }

    //add <--- agrega un elemneto a la base de datos
    async add(req, res){
        const libro = req.body;
        
	    try{
            const [result] = await pool.query(`INSERT INTO Libros(nombre, autor, categoria, anio_publicacion, isbn) VALUES (?, ?, ?, ?, ?)`, [libro.nombre, libro.autor, libro.categoria, libro.anio_publicacion, libro.isbn]);
		
		    res.json({"ID insertado":result.insertId});

		 
	    }catch (e){

	        console.log( e);
		    const Error = e.message;
		    res.status(400).json({Error });	
	    }
    }

    //delete <--- elimina un elemneto de la base de datos en base a su isbn
    async delete(req, res){
        const libro = req.body;
        
	    try{
            const[result] = await pool.query(`DELETE FROM Libros WHERE isbn=(?)`, [libro.isbn]);
		    res.json({"Registros Eliminados ":result.affectedRows});

	    }catch (e){
	        console.log( e);
		    const Error = e.message;
		    res.status(400).json({Error });	

	    }
    }

    // update <--- actualiza los datos de un elemento de la base de datos
    async update(req, res){
        const libro = req.body;
        
       
        
	    try{
            const [result] = await pool.query(`UPDATE Libros SET nombre=(?), autor=(?), categoria=(?), anio_publicacion=(?), isbn=(?) WHERE id=(?)`, [libro.nombre, libro.autor, libro.categoria, libro.anio_publicacion, libro.isbn, libro.id]);
		    res.json({"Registros actualizados ":result.changedRows});
		
		
	    }catch (e){
		
	        console.log( e);
		    const Error = e.message;
		    res.status(400).json({Error });	
	
	    }
    }
    // getOne <--- trae un solo elemento de la base de datos en base a su id
    async getOne(req, res){
        
        try {
            const libro = req.body;
            const id_libro = parseInt(libro.id);
            const [result] = await pool.query(`SELECT * FROM Libros WHERE id=(?)`, [id_libro]);
            
            if (result[0]!=undefined){
                res.json(result);
            }else{
                res.json({"Error": "No se ha encontrado un Libro con el id especificado"});
            }
        } catch(error){
            
            console.log('There was an error', error);
        }
        
        
    }
}

export const libro = new LibroController();