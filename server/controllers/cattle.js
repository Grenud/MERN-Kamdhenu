// import poolDb from "../config/db.js"
import { poolDb } from "../config/db.js"
export const getCattle = async (req,res) => {
    const { page = 1, limit = 10 , categoryName,categoryValue} = req.query;

  const offset = (page - 1) * limit;
  try {
      const result = await poolDb.query('SELECT * FROM bayavasfdc.cattle__c');

    res.json({
      data:result
    });
  } catch (error) {
    console.error('Error executing query', error.stack);
    res.status(500).send('Server error');
  }
}


// export const getAllCattleData = async (req,res) => {

// }

