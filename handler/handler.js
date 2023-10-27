import pool from "../config/database.js";

export async function getMangas(){
    const [rows] = await pool.query("SELECT * FROM manga");
    return rows;
};

export async function getManga(id){
    const [rows] = await pool.query(`
    SELECT *
    FROM manga
    WHERE id = ?
    `, [id]);
    return rows[0];
};

export async function createManga(title, cover, deskripsi){
    const [result] = await pool.query(`
    INSERT INTO actor (title, cover, deskripsi)
    VALUES ( ?, ?)
    `, [title, cover, deskripsi]);
    const id = result.insertId;
    return getManga(id);
};
