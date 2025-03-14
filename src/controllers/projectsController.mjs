function serializeBigInt(obj) {
    return JSON.parse(JSON.stringify(obj, (key, value) =>
        typeof value === 'bigint' ? value.toString() : value
    ));
}

export const getAllProjects = async (req, res) => {
    try {

        res.json([]);

    } catch (err) {
        res.status(500).json({ error: 'Unexpected error', details: err.message });
    }
};
