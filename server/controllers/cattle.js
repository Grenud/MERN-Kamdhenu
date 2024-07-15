import { poolDb } from "../config/db.js";
export const getCattle = async (req, res) => {
  const {
    page = 1,
    limit = 10,
    gender__c,
    sick__c,
    adoption_status__c,
    old__c,
  } = req.query;
  const offset = (page - 1) * limit;
  console.log('sick...........')
  console.log(sick__c)
  console.log('old')
  console.log(old__c)

  // Create WHERE clauses for filters
  let filterClauses = [];
  let values = [limit, offset];
  let index = 3;

  if (gender__c) {
    filterClauses.push(`gender__c = $${index}`);
    values.push(gender__c);
    index++;
  }
  if (sick__c !== undefined && sick__c) {
    filterClauses.push(`sick__c = $${index}`);
    values.push(sick__c === "true");
    index++;
  }
  if (adoption_status__c) {
    filterClauses.push(`adoption_status__c = $${index}`);
    values.push(adoption_status__c);
    index++;
  }
  if (old__c !== undefined && old__c) {
    filterClauses.push(`old__c = $${index}`);
    values.push(old__c === "true");
    index++;
  }

  const whereClause = filterClauses.length
    ? `WHERE ${filterClauses.join(" AND ")}`
    : "";

    console.log('where clause')
    console.log(whereClause)
    console.log('filter clause')
    console.log(filterClauses)
    console.log('values')
    console.log(values)

  try {
    const result = await poolDb.query(
      `SELECT * FROM bayavasfdc.cattle__c ${whereClause} ORDER BY id LIMIT $1 OFFSET $2`,
      values
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Database error" });
  }
};
