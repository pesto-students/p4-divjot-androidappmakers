CREATE TABLE Cities (
    City varchar(255),
    State varchar(255)
);

Insert into Cities (City,State) VALUES('bangalore','karnataka');
Insert into Cities (City,State) VALUES('tumkur','karnataka');
Insert into Cities (City,State) VALUES('Mumbai','maharashtra');
Insert into Cities (City,State) VALUES('Panaji','Goa');
Insert into Cities (City,State) VALUES('Patna','Bihar');



CREATE TABLE WAREHOUSES (
    WID int,
    WNAME varchar(255),
  LOCATION varchar(255)
);

Insert into WAREHOUSES (WID,WNAME,LOCATION) VALUES(1,'ABC','bangalore');
Insert into WAREHOUSES (WID,WNAME,LOCATION) VALUES(2,'XYZ','patna');
Insert into WAREHOUSES (WID,WNAME,LOCATION) VALUES(3,'ABD','bangalore');
Insert into WAREHOUSES (WID,WNAME,LOCATION) VALUES(4,'VK','mumbai');
Insert into WAREHOUSES (WID,WNAME,LOCATION) VALUES(5,'GK','patna');

       
Create table Stores(
SID int,
Store_name varchar(20),
Loaction_city varchar(20)
);

Insert into Stores (SID,Store_name,Loaction_city) VALUES(1,'apnastore','patna');
Insert into Stores (SID,Store_name,Loaction_city) VALUES(2,'apnastore2','bangalore');
Insert into Stores (SID,Store_name,Loaction_city) VALUES(3,'apnastore3','mumbai');
Insert into Stores (SID,Store_name,Loaction_city) VALUES(4,'apnastore4','panaji');
Insert into Stores (SID,Store_name,Loaction_city) VALUES(5,'apnastore5','tumkur');

Create table Customer(
CNo int,
 Cname varchar(20),
  Addr varchar(20),
  Cu_City varchar(20)
);

Insert into Customer (CNo,Cname,Addr,Cu_City) VALUES(1,'ak','radiant','tumkur');

Insert into Customer (CNo,Cname,Addr,Cu_City) VALUES(2,'vt','radiant2','bangalore');

Insert into Customer (CNo,Cname,Addr,Cu_City) VALUES(3,'vk','radiant3','patna');

Insert into Customer (CNo,Cname,Addr,Cu_City) VALUES(4,'sk','radiant4','panaji');

Insert into Customer (CNo,Cname,Addr,Cu_City) VALUES(5,'gk','radiant5','mumbai');

create table Orders
   (
     OID int,
   ODate date
   );

Insert into Orders (OID,ODate) VALUES(1,'2018-11-11');
Insert into Orders (OID,ODate) VALUES(2,'2019-11-11');
Insert into Orders (OID,ODate) VALUES(3,'2020-11-11');
Insert into Orders (OID,ODate) VALUES(4,'2021-11-11');
Insert into Orders (OID,ODate) VALUES(5,'2022-11-11');

Create table Items(
ItemNo int,
Description varchar(255),
Weight Decimal(5,2),
Cost Decimal(5,2)
);

Insert Into Items (ItemNo,Description,Weight,Cost) VALUES (1,'good',5.5,1.1);
Insert Into Items (ItemNo,Description,Weight,Cost) VALUES (2,'good1',5.5,1.1);
Insert Into Items (ItemNo,Description,Weight,Cost) VALUES (3,'good3',5.5,1.1);
Insert Into Items (ItemNo,Description,Weight,Cost) VALUES (4,'good4',5.5,1.1);
Insert Into Items (ItemNo,Description,Weight,Cost) VALUES (5,'good5',5.5,1.1);

SELECT * FROM Cities;

select * from WAREHOUSES;

select * from Stores;

select * from Customer;

select * from Orders;

select * from Items;







