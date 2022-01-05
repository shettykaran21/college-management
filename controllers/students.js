exports.getAllStudents = async (req, res) => {
  const connection = req.app.get('connection');

  try {
    const result = await connection.query('SELECT * FROM student');
    res.status(200).json(result[0]);
  } catch (err) {
    console.log(err);
  }
};
