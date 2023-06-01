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
connection.connect(async (err) => {
  if (err) {
    console.error('Error connecting to MySQL server:', err);
    return;
  }

  // Prompt for user input
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    const choice = await askQuestion(rl, 'Choose a query (1-4):\n1. What is the capital of country X?\n2. List all the languages spoken in the region Y\n3. Find the number of cities in which language Z is spoken\n4. List all the continents with the number of languages spoken in each continent\n\nEnter your choice: ');

    switch (choice) {
      case '1':
        const countryName = await askQuestion(rl, 'Enter the country name: ');
        await getCapital(countryName);
        break;
      case '2':
        const region = await askQuestion(rl, 'Enter the region name: ');
        await listLanguagesInRegion(region);
        break;
      case '3':
        const language = await askQuestion(rl, 'Enter the language: ');
        await countCitiesWithLanguage(language);
        break;
      case '4':
        await listContinentsWithLanguageCount();
        break;
      default:
        console.log('Invalid choice. Exiting...');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    closeConnection();
    rl.close();
  }
});

// Utility function to ask a question and return the user's input
function askQuestion(rl, question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Get the capital of a country
function getCapital(countryName) {
  const query = 'SELECT city.name AS capital FROM country INNER JOIN city ON country.capital = city.id WHERE country.name = ?';

  return new Promise((resolve, reject) => {
    connection.query(query, [countryName], (err, results) => {
      if (err) {
        reject(err);
      } else {
        if (results.length === 0) {
          console.log('Country not found');
        } else {
          const capital = results[0].capital;
          console.log(`Capital of ${countryName}: ${capital}`);
        }
        resolve();
      }
    });
  });
}

// List all languages spoken in a region
function listLanguagesInRegion(regionName) {
  const query = 'SELECT DISTINCT cl.language FROM country c  INNER JOIN countrylanguage cl ON c.code = cl.countrycode WHERE c.region = ?';

  return new Promise((resolve, reject) => {
    connection.query(query, [regionName], (err, results) => {
      if (err) {
        reject(err);
      } else {
        if (results.length === 0) {
          console.log('No languages found');
        } else {
          const languages = results.map((row) => row.language);
          console.log(`Languages spoken in ${regionName}: ${languages.join(', ')}`);
        }
        resolve();
      }
    });
  });
}

// Get the number of cities where a language is spoken
function countCitiesWithLanguage(language) {
  const query = 'SELECT COUNT(DISTINCT city.id) AS cityCount FROM city INNER JOIN countrylanguage ON city.CountryCode = countrylanguage.CountryCode WHERE countrylanguage.Language = ?';

  return new Promise((resolve, reject) => {
    connection.query(query, [language], (err, results) => {
      if (err) {
        reject(err);
      } else {
        const cityCount = results[0].cityCount;
        console.log(`Number of cities where ${language} is spoken: ${cityCount}`);
        resolve();
      }
    });
  });
}

// List all continents with the number of languages spoken in each continent
function listContinentsWithLanguageCount() {
  const query = 'SELECT continent, COUNT(DISTINCT language) AS language_count FROM country INNER JOIN countrylanguage ON country.Code = countrylanguage.CountryCode GROUP BY continent';

  return new Promise((resolve, reject) => {
    connection.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        results.forEach((row) => {
          console.log(`${row.continent}: ${row.language_count} languages`);
        });
        resolve();
      }
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

