import {pool} from './database.js';

class LibroController{
    async getAll(req, res){
        const [result] = await pool.query('SELECT * FROM Libros'); 
        res.json(result);
    }
    async add(req, res){
        const libro = req.body;
        const [result]= await pool.query(`INSERT INTO Libros(nombre, autor, categoria, anio_publicacion, isbn) VALUES (?, ?, ?, ?, ?)`, [libro.nombre, libro.autor, libro.categoria, libro.anio_publicacion, libro.isbn]);
        res.json({"Id insertado": result.insertId});
    }

    async delete(req, res){
        const libro = req.body;
        const[result] = await pool.query(`DELETE FROM Libros WHERE isbn=(?)`, [libro.isbn]);
        res.json({"Registro eliminado": result.affectedRows});
    }

    async update(req, res){
        const libro = req.body;
        const [result] = await pool.query(`UPDATE Libros SET nombre=(?), autor=(?), categoria=(?), anio_publicacion=(?), isbn=(?) WHERE id=(?)`, [libro.nombre, libro.autor, libro.categoria, libro.anio_publicacion, libro.isbn, libro.id]);
        res.json({"Registros actualizados": result.changedRows});
    }

    async getOne(req, res){
        const libro = req.body;
        const id_libro = parseInt(libro.id);
        const [result] = await pool.query(`SELECT * FROM Libros WHERE id=(?)`, [id_libro]);
        if (result[0]!=undefined){
            res.json(result);
        }else{
            res.json({"Error": "No se ha encontrado un Libro con el id especificado"})
        }
        
    }
}

export const libro = new LibroController();