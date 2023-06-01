// Node Program for prepared statements

'use strict'

// mysql2 used

const mysql = require("mysql2");
const readline = require('readline');

// Connection to the database 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Adeeba@777',
  database: 'new_world'
});

// error handling of connection
connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    //console.log('Successful connection to the database!');
  }
});


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// prepared statements
rl.question('Select one of the following Query options ):\n1. Enter a country name to know the capital:.\n2. Retrieve a list of all the languages spoken in a selected region:.\n3. Find the number of cities in which a selected language is spoken.\n4. List all the continents with the number of languages spoken in each continent.\n5. For the country given as input, find out whether there are any countries that have the same official language and are located in the same continent.\n\nEnter your choice:',
  (option) => {

    switch (option) {
      
      case '1': // First query
        rl.question("Write a country's name and press enter.", (value) => {
          const queryOne = 'SELECT city.name FROM city INNER JOIN country ON city.id = country.capital WHERE country.name = ?';
          connection.prepare(queryOne, (err, statement) => {
            if (err) {
              console.error(err);
              rl.close();
              return;
            }
            let country = [value];
            statement.execute(country, (err, results) => {
              if (err) {
                console.error(err);
                statement.close();
                rl.close();
                return;
              } else {
                console.log(`The capital of ${country} is`, results[0].name);
                statement.close();
                rl.close();
              }
            });
          });
        });
        break;
   
      case '2': // Second query
        rl.question("Write a region in the world and press enter.", (value) => {
          const queryTwo = 'SELECT countrylanguage.language FROM countrylanguage INNER JOIN country ON countrylanguage.countrycode = country.code WHERE country.region = ?';
          connection.prepare(queryTwo, (err, statement) => {
            if (err) {
              console.error(err);
              rl.close();
              return;
            }
            let region = [value];
            statement.execute(region, (err, results) => {
              if (err) {
                console.error(err);
                statement.close();
                rl.close();
                return;
              } else {
                console.log(`List of the languages spoken in ${region}:`, results.map(obj => obj.language));
                statement.close();
                rl.close();
              }
            });
          });
        });
        break;

      case '3': // Third query
        rl.question("Select a language.", (value) => {
          const queryThree = 'SELECT COUNT(city.name) FROM city INNER JOIN countrylanguage ON city.countrycode = countrylanguage.countrycode WHERE countrylanguage.language = ?';
          connection.prepare(queryThree, (err, statement) => {
            if (err) {
              console.error(err);
              rl.close();
              return;
            }
            let language = [value];
            statement.execute(language, (err, results) => {
              if (err) {
                console.error(err);
                statement.close();
                rl.close();
                return;
              } else {
                console.log(`The number of cities ${language} is spoken in is`, results[0]['COUNT(city.name)']);
                statement.close();
                rl.close();
              }
            });
          });
        });
        break;
      
       case '4': // Fourth query
           const queryFour = 'SELECT country.continent, COUNT(countrylanguage.language) AS languages_number FROM country INNER JOIN countrylanguage ON country.code = countrylanguage.countrycode GROUP BY country.continent';
           connection.prepare(queryFour, (err, statement) => {
             if (err) {
               console.error(err);
               rl.close();
               return;
             }
             statement.execute((err, results) => {
               if (err) {
                 console.error(err);
                 statement.close();
                 rl.close();
                 return;
               } else {
                 console.log('List of all the continents with the number of languages spoken in each continent:', results);
                 statement.close();
                 rl.close();
               }
             });
           })
           break;
        
        case '5': // Fifth query
          rl.question("Select a country.", (value) => {
            const queryFive = "SELECT c2.name FROM country c1 INNER JOIN country c2 ON c1.code != c2.code AND c1.continent = c2.continent INNER JOIN countrylanguage cl1 ON cl1.countryCode = c1.code INNER JOIN countrylanguage cl2 ON cl2.countryCode = c2.code WHERE c1.name = ? AND cl1.language = cl2.language AND cl1.isofficial = cl2.isofficial AND cl1.isofficial = 'T'";
            connection.prepare(queryFive, (err, statement) => {
              if (err) {
                console.error(err);
                rl.close();
                return;
              } 
              let countryName = [value];
              statement.execute(countryName, (err, results) => {
                if (err) {
                  console.error(err);
                  statement.close(); 
                  rl.close();
                  return;
                } else {
                  console.log(`Matches to ${countryName}:`, results);
                  statement.close();
                  rl.close();
                }
              });
            });
          });
          break;
      }
    });
