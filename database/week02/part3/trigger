/* Create trigger on terminal when language inserted >=10 */

DELIMITER //

CREATE TRIGGER language_alert
AFTER INSERT ON countrylanguage
FOR EACH ROW
BEGIN
  IF (
    SELECT COUNT(1)
    FROM countrylanguage
    WHERE CountryCode = NEW.CountryCode
  ) >= 10 THEN
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Total number of languages equals or exceeds 10';
  END IF;
END // 

DELIMITER ;
