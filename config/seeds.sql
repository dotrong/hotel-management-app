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
select * from reservations;