create table tb_sales (id bigint not null auto_increment, amount double precision, date date, deals integer, visited integer, seller_id bigint, primary key (id)) engine=InnoDB;
create table tb_sellers (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=InnoDB;
alter table tb_sales add constraint FKp0nn0oixeiw2fq3jivj6vnsu foreign key (seller_id) references tb_sellers (id);
create table tb_sales (id bigint not null auto_increment, amount double precision, date date, deals integer, visited integer, seller_id bigint, primary key (id)) engine=InnoDB;
create table tb_sellers (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=InnoDB;
alter table tb_sales add constraint FKp0nn0oixeiw2fq3jivj6vnsu foreign key (seller_id) references tb_sellers (id);
