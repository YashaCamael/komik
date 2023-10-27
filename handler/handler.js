import pool from "../config/database.js";

export async function getMangas(){
    const [rows] = await pool.query("SELECT * FROM ACTOR");
    return rows;
};

export async function getManga(actor_id){
    const [rows] = await pool.query(`
    SELECT *
    FROM ACTOR
    WHERE actor_id = ?
    `, [actor_id]);
    return rows[0];
};

export async function createManga(first_name, last_name){
    const [result] = await pool.query(`
    INSERT INTO actor (first_name, last_name)
    VALUES ( ?, ?)
    `, [first_name, last_name]);
    const id = result.insertId;
    return getManga(id);
};
