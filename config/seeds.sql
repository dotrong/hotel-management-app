

use hotel;


insert into users(username, password, user_role)
values("bob", "abc@yahoo.com", "customer");

insert into guests(first_name, last_name)
values("bob", "Robberts");

insert into guests(first_name, last_name)
values("Star", "Fox");

insert into rooms(room_number, room_type, room_price)
values(1, "Suite", 100.00);

insert into rooms(room_number, room_type, room_price)
values(2, "1 Bed", 75.00);



select * from users;
<<<<<<< HEAD
select * from rooms;
=======
select * from reservations;
>>>>>>> 6bf54a4437aed9c8f96301e5be2e8f9f154b43df
