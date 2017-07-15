

use hotel;


insert into users(username, password, user_role)
values("bob", "abc@yahoo.com", "customer");

insert into guests(first_name, last_name)
values("bob", "Robberts");

insert into guests(first_name, last_name)
values("Star", "Fox");

#--item 1--
insert into rooms(room_number, room_type, room_price)
values(1, "Suite", 200.00);

#--item 2--
insert into rooms(room_number, room_type, room_price)
values(2, "1 Bed", 100.00);

#--item 3--
insert into rooms(room_number, room_type, room_price)
values(3, "2 Bed", 150.00);

#--item 4--
insert into rooms(room_number, room_type, room_price)
values(4, "Suite", 200.00);

#--item 5--
insert into rooms(room_number, room_type, room_price)
values(5, "1 Bed", 100.00);

#--item 6--
insert into rooms(room_number, room_type, room_price)
values(6, "2 Bed", 150.00);

#--item 7--
insert into rooms(room_number, room_type, room_price)
values(7, "Suite", 200.00);

#--item 8--
insert into rooms(room_number, room_type, room_price)
values(8, "1 Bed", 100.00);

#--item 9--
insert into rooms(room_number, room_type, room_price)
values(9, "2 Bed", 150.00);

#--item 10--
insert into rooms(room_number, room_type, room_price)
values(10, "Suite", 200.00);

#--item 11--
insert into rooms(room_number, room_type, room_price)
values(11, "1 Bed", 100.00);

#--item 12--
insert into rooms(room_number, room_type, room_price)
values(12, "2 Bed", 150.00);


select * from users;
<<<<<<< HEAD
select * from rooms;
=======
select * from reservations;
>>>>>>> 6bf54a4437aed9c8f96301e5be2e8f9f154b43df
