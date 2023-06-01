// this is new code
const mysql = require('mysql2');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Adeeba@777',
  database: 'new_world'
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL server:', err);
    return;
  }

  // Prompt for user input
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Prompt the user for query choice and input
  readline.question('Choose a query (1-4):\n1. What is the capital of country X?\n2. List all the languages spoken in the region Y\n3. Find the number of cities in which language Z is spoken\n4. List all the continents with the number of languages spoken in each continent\n\nEnter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        readline.question('Enter the country name: ', (countryName) => {
          getCapitalOfCountry(countryName);
          closeConnection();
        });
        break;
      case '2':
        readline.question('Enter the region name: ', (region) => {
          getLanguagesInRegion(region);
          closeConnection();
        });
        break;
      case '3':
        readline.question('Enter the language: ', (language) => {
          countCitiesWithLanguage(language);
          closeConnection();
        });
        break;
      case '4':
        countLanguagesPerContinent();
        closeConnection();
        break;
      default:
        console.log('Invalid choice. Exiting...');
        closeConnection();
    }
  });

});

// Get the capital of a country
function getCapital(countryName) {
  const query = 'SELECT city.name AS capital FROM country INNER JOIN city ON country.capital = city.id WHERE country.name = ?';

  connection.prepare(query, (err, statement) => {
    if (err) {
      console.error('Error preparing statement:', err);
      return;
    }

    statement.execute([countryName], (err, rows, columns) => {
      if (err) {
        console.error('Error executing query:', err);
        return;
      }

      if (rows.length === 0) {
        console.log('Country not found');
      } else {
        const capital = rows[0].capital;
        console.log(`Capital of ${countryName}: ${capital}`);
      }

      statement.close();
    });
  });
}

// List all languages spoken in a region
function listLanguagesInRegion(regionName) {
  const query = 'SELECT DISTINCT cl.language FROM country c  INNER JOIN countrylanguage cl ON c.code = cl.countrycode WHERE c.region = ?';

  connection.prepare(query, (err, statement) => {
    if (err) {
      console.error('Error preparing statement:', err);
      return;
    }

    statement.execute([regionName], (err, rows, columns) => {
      if (err) {
        console.error('Error executing query:', err);
        return;
      }

      if (rows.length === 0) {
        console.log('No languages found');
      } else {
        const languages = rows.map((row) => row.language);
        console.log(`Languages spoken in ${regionName}: ${languages.join(', ')}`);
      }

      statement.close();
    });
  });
}

// Get the number of cities where a language is spoken
function countCitiesWithLanguage(language) {
  const query = 'SELECT COUNT(DISTINCT city.id) AS cityCount FROM city INNER JOIN countrylanguage ON city.CountryCode = countrylanguage.CountryCode WHERE countrylanguage.Language = ?';

  connection.prepare(query, (err, statement) => {
    if (err) {
      console.error('Error preparing statement:', err);
      return;
    }

    statement.execute([language], (err, rows, columns) => {
      if (err) {
        console.error('Error executing query:', err);
        return;
      }

      const cityCount = rows[0].cityCount;
      console.log(`Number of cities where ${language} is spoken: ${cityCount}`);

      statement.close();
    });
  });
}

// List all continents with the number of languages spoken in each continent
function listContinentsWithLanguageCount() {
  const query = 'SELECT continent, COUNT(DISTINCT language) AS language_count FROM country INNER JOIN countrylanguage ON country.Code = countrylanguage.CountryCode GROUP BY continent';

  connection.prepare(query, (err, statement) => {
    if (err) {
      console.error('Error preparing statement:', err);
      return;
    }

    statement.execute((err, rows, columns) => {
      if (err) {
        console.error('Error executing query:', err);
        return;
      }

      rows.forEach((row) => {
        console.log(`${row.continent}: ${row.language_count} languages`);
      });

      statement.close();
    });
  });
}

// Close the database connection
function closeConnection() {
  connection.end((err) => {
    if (err) {
      console.error('Error closing connection:', err);
    }
  });
}




// hre end
 
//code for node js program to run prepared statements
 const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Adeeba@777',
  database: 'new_world'
});

// Prompt the user for input
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to execute a prepared statement with a single parameter
function executePreparedStatement(statement, parameter, callback) {
  connection.query(statement, [parameter], (error, results) => {
    if (error) throw error;
    callback(results);
  });
}

// What is the capital of country X? (Accept X from user)
function getCapitalOfCountry(countryName) {
  const statement1 = 'SELECT city.name AS capital FROM country INNER JOIN city ON country.capital = city.id WHERE country.name = ?';
  executePreparedStatement(statement1, countryName, (results) => {
    const capital = results[0].capital;
    console.log(`The capital of ${countryName} is ${capital}`);
  });
}

// List all the languages spoken in the region Y (Accept Y from user)
function getLanguagesInRegion(region) {
  const statement2 = 'SELECT DISTINCT cl.language FROM country c  JOIN countrylanguage cl ON c.code = cl.countrycode WHERE c.region = ?';
  executePreparedStatement(statement2, region, (results) => {
    const languages = results.map((row) => row.language);
    console.log(`Languages spoken in ${region}: ${languages.join(', ')}`);
  });
}

// Find the number of cities in which language Z is spoken (Accept Z from user)
function countCitiesWithLanguage(language) {
  const statement3 = 'SELECT COUNT(DISTINCT city.id) AS city_count FROM city INNER JOIN country ON city.CountryCode = country.Code INNER JOIN countrylanguage ON country.Code = countrylanguage.CountryCode WHERE countrylanguage.Language = ?';
  executePreparedStatement(statement3, language, (results) => {
    const cityCount = results[0].city_count;
    console.log(`Number of cities where ${language} is spoken: ${cityCount}`);
  });
}

// List all the continents with the number of languages spoken in each continent
function countLanguagesPerContinent() {
  const statement4 = 'SELECT continent, COUNT(DISTINCT language) AS language_count FROM country INNER JOIN countrylanguage ON country.Code = countrylanguage.CountryCode GROUP BY continent';
  executePreparedStatement(statement4, null, (results) => {
    console.log('Continent\t\tLanguages');
    console.log('----------------------------------');
    results.forEach((row) => {
      console.log(`${row.continent}\t\t${row.language_count}`);
    });
  });
}

// Prompt the user for query choice and input
rl.question('Choose a query (1-4):\n1. What is the capital of country X?\n2. List all the languages spoken in the region Y\n3. Find the number of cities in which language Z is spoken\n4. List all the continents with the number of languages spoken in each continent\n\nEnter your choice: ', (choice) => {
  switch (choice) {
    case '1':
      rl.question('Enter the country name: ', (countryName) => {
        getCapitalOfCountry(countryName);
        closeConnection();
      });
      break;
    case '2':
      rl.question('Enter the region name: ', (region) => {
        getLanguagesInRegion(region);
        closeConnection();
      });
      break;
    case '3':
      rl.question('Enter the language: ', (language) => {
        countCitiesWithLanguage(language);
        closeConnection();
      });
      break;
    case '4':
      countLanguagesPerContinent();
      closeConnection();
      break;
    default:
      console.log('Invalid choice. Exiting...');
      closeConnection();
  }
});

// Function to close the database connection and exit the program
function closeConnection() {
  connection.end();
  rl.close();
}


// extra practice codes 
/* const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Adeeba@777',
  database: 'new_world',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Function to get user input from the console
function prompt(question) {
  return new Promise((resolve, reject) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
    readline.question(question, (input) => {
      readline.close();
      resolve(input);
    });
  });
}

// Function to execute a prepared statement
function executeStatement(sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }
      connection.execute(sql, values, (err, results) => {
        connection.release();
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  });
}

async function main() {
  try {
    // Query1. Get user input for country name for capital
    const countryName = await prompt('Enter the country name: ');

    // Prepare and execute the query using a prepared statement
    const sql = 'SELECT city.name AS capital FROM country INNER JOIN city ON country.capital = city.id WHERE country.name = ?';
    const values = [countryName];
    const results = await executeStatement(sql, values); 

    // Get user input for 2nd query,List all the languages spoken in the region Y (Accept Y from user)
    //const regionName = await prompt('Enter the region:  ')

    //const sql = ' SELECT DISTINCT cl.language FROM country c  JOIN countrylanguage cl ON c.code = cl.countrycode WHERE c.region = ?' ;
    //const values = [regionName];
    //const results = await executeStatement(sql, values);

    // Display the query results
    console.log(results);

    // Close the database connection
    pool.end();
  } catch (err) {
    console.error('Error:', err);
  }
}

// Run the main function
main(); 
*/

// 2nd code
/*
const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Adeeba@777',
  database: 'new_world',
});

// Function to get user input
const getUserInput = (prompt) => {
  return new Promise((resolve, reject) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(prompt, (input) => {
      readline.close();
      resolve(input);
    });
  });
};

// Function to execute the query and display the result
const executeQuery = (query, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }

      connection.query(query, values, (err, results) => {
        connection.release();

        if (err) {
          reject(err);
          return;
        }

        resolve(results);
      });
    });
  });
};

// Function to get the capital of a country
const getCapitalOfCountry = async () => {
  const countryName = await getUserInput('Enter the country name: ');

  const query = 'SELECT capital FROM country WHERE name = ?';
  const values = [countryName];

  try {
    const results = await executeQuery(query, values);
    if (results.length > 0) {
      console.log(`The capital of ${countryName} is ${results[0].capital}`);
    } else {
      console.log(`No country found with the name ${countryName}`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

// Function to list languages spoken in a region
const getLanguagesInRegion = async () => {
  const regionName = await getUserInput('Enter the region name: ');

  const query = `
    SELECT cl.language
    FROM country c
    JOIN countrylanguage cl ON c.code = cl.countrycode
    WHERE c.region = ?
  `;
  const values = [regionName];

  try {
    const results = await executeQuery(query, values);
    if (results.length > 0) {
      console.log(`Languages spoken in ${regionName}:`);
      results.forEach((row) => {
        console.log(row.language);
      });
    } else {
      console.log(`No languages found in the region ${regionName}`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

// Function to get the number of cities where a language is spoken
const getCitiesWithLanguage = async () => {
  const languageName = await getUserInput('Enter the language name: ');

  const query = `
    SELECT COUNT(DISTINCT ci.id) AS city_count
    FROM city ci
    JOIN country co ON ci.countrycode = co.code
    JOIN countrylanguage cl ON co.code = cl.countrycode
    WHERE cl.language = ?
  `;
  const values = [languageName];

  try {
    const results = await executeQuery(query, values);
    const cityCount = results[0].city_count;
    console.log(`The language ${languageName} is spoken in ${cityCount} cities`);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Function to list continents with the number of languages spoken in each continent
const listContinentsWithLanguages = async () => {
  const query = `
    SELECT c.continent, COUNT(DISTINCT cl.language) AS language_count
    FROM country c
    JOIN countrylanguage cl ON c.code = cl.countrycode
    GROUP BY c.continent
  `;

  try {
    const results = await executeQuery(query);
    console.log('Continents and the number of languages spoken:');
    results.forEach((row) => {
      console.log(`${row.continent}: ${row.language_count}`);
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

// Function to check if there are countries with the same official language and in the same continent
const checkCountriesWithSameLanguageAndContinent = async () => {
  const countryName = await getUserInput('Enter the country name: ');

  const query = `
  SELECT c2.Name AS Country
  FROM country c1
  INNER JOIN country c2 ON c1.Language = c2.Language
  WHERE c1.Name = ? 
    
  `;
  const values = [countryName];

  try {
    const results = await executeQuery(query, values);
    if (results.length > 0) {
      console.log(`Countries with the same official language and in the same continent as ${countryName}:`);
      results.forEach((row) => {
        console.log(row.name);
      });
    } else {
      console.log(`No countries found with the same official language and in the same continent as ${countryName}`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

// Main program
const main = async () => {
  console.log('1. What is the capital of country X?');
  console.log('2. List all the languages spoken in the region Y.');
  console.log('3. Find the number of cities in which language Z is spoken.');
  console.log('4. List all the continents with the number of languages spoken in each continent.');
  console.log('5. For the country given as input, check if there are countries with the same official language and in the same continent.');

  const choice = await getUserInput('Enter your choice (1-5): ');

  switch (choice) {
    case '1':
      await getCapitalOfCountry();
      break;
    case '2':
      await getLanguagesInRegion();
      break;
    case '3':
      await getCitiesWithLanguage();
      break;
    case '4':
      await listContinentsWithLanguages();
      break;
    case '5':
      await checkCountriesWithSameLanguageAndContinent();
      break;
    default:
      console.log('Invalid choice');
  }

  process.exit(0);
};

main();

*/


