CREATE TABLE "tasks" (
	"id" serial primary key,
	"task" varchar(80) not null,
	"status" varchar(40) not null
);