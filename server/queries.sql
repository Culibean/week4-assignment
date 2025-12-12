CREATE TABLE skylog (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username varchar(255),
  flight_date DATE,
  departure VARCHAR(3),
  arrival VARCHAR(3),
  airline VARCHAR(100),
  aircraft VARCHAR(30)
);

INSERT INTO skylog (username, departure, arrival, airline, aircraft, flight_date) VALUES
('Tom', 'DUB', 'MAN', 'Ryanair', 'Boeing 737-800', '2025-12-11' );

INSERT INTO skylog (username, departure, arrival, airline, aircraft, flight_date) VALUES
  ('Anna',   'LHR', 'JFK', 'British Airways',  'Airbus A350',    '2024-07-22'),
  ('Max',    'CDG', 'FRA', 'Lufthansa',        'Airbus A320',    '2023-03-15'),
  ('Sophie', 'AMS', 'BCN', 'KLM',              'Boeing 787-9',   '2022-09-05'),
  ('David',  'MAD', 'ORD', 'Iberia',           'Airbus A330',    '2021-11-30'),
  ('Laura',  'FCO', 'ATH', 'Aegean Airlines',  'Airbus A321',    '2020-01-18');


--   date format change query

SELECT 
username, 
departure, 
arrival, 
airline, 
aircraft, 
TO_CHAR(flight_date, 'DD Month YYYY') AS flight_date 
FROM skylog;