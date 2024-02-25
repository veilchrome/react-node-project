-- Active: 1707971399466@@127.0.0.1@3306@belajardb1
CREATE TABLE members (
    member_id INT AUTO_INCREMENT, name VARCHAR(50), address VARCHAR(100), class INT(15), PRIMARY KEY (member_ID)
);
-- Create Table
CREATE TABLE komite (
    komite_id INT AUTO_INCREMENT, name VARCHAR(50), address VARCHAR(100), class INT(15), PRIMARY KEY (komite_id)
);
-- Insert Data
insert into
    members (name, address, class)
VALUES ('Selamet', 'Kp Tipar', 12),
    ('Jono', 'Kp Tidur', 11),
    ('Joko', 'Kp Uhuy', 12),
    ('Komeng', 'Kp Uhuy', 12),
    ('Adul', 'Kp Uhuy', 11);

-- Insert Data
insert into
    komite (name, address, class)
VALUES ('Selamet', 'Kp Tipar', 12),
    ('Jono', 'Kp Tidur', 11),
    ('Joko', 'Kp Uhuy', 12),
    ('Komeng', 'Kp Uhuy', 12),
    ('Adul', 'Kp Uhuy', 11);

-- Select Data
SELECT * FROM members;

SELECT * FROM komite;

-- Update Data
UPDATE members
set
    name = 'Ariel',
    address = 'Jl kemang',
    class = 10
where
    member_id = 1;
-- Delete Data
DELETE FROM members WHERE name = 'Ariel';

insert into
    members (name, address, class)
VALUES ('Selamet1', 'Kp Tipar', 11);

-- Join Operation
select members.member_id, komite.name
FROM members
    INNER JOIN komite ON members.member_id = komite.komite_id;

-- Example 2

CREATE TABLE Orders (
    OrderID INT AUTO_INCREMENT, CustomerID INT, OrderDate DATE, ItemName VARCHAR(200), PRIMARY KEY (OrderID)
);

CREATE TABLE Customer (
    CustomerID INT AUTO_INCREMENT, CustomerName VARCHAR(100), CustomerAddress VARCHAR(100), PRIMARY KEY (CustomerID)
);

INSERT INTO
    Orders (
        OrderDate, ItemName, CustomerID
    )
VALUES ('2024-02-15', 'Product A', 1),
    ('2024-02-16', 'Product B', 2),
    ('2024-02-17', 'Product C', 3),
    ('2024-02-18', 'Product D', 1),
    ('2024-02-19', 'Product E', 2);

SELECT * FROM Orders;

insert into
    Customer (CustomerName, CustomerAddress)
VALUES (
        'Selamet Saputra', 'Depok Tengah'
    ),
    ('Hj Marko', 'Depok Tengah'),
    ('Bibi', 'Depok Tengah'),
    ('Sharko', 'Depok Tengah');

SELECT * from orders;

-- JOIN

SELECT Orders.OrderID, Customer.CustomerName, Orders.OrderDate
FROM Orders
    INNER JOIN Customer ON Orders.CustomerID = Customer.CustomerID;