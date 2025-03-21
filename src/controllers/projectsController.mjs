import { getConnection } from '../db/db.mjs';

export async function getAllProjects(req, res) {
    let connection;
    try {
        connection = await getConnection();
        const [rows] = await connection.execute('SELECT * FROM projects');

        const projects = rows.map(project => ({
            ...project,
            isProjectEnded: !!project.isProjectEnded,
            floors: []
        }));

        res.json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'Database error' });
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}
