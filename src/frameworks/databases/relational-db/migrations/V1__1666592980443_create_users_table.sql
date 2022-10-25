create type gender_ as ENUM('male', 'female', 'custom');

create table users(
    first_name varchar not null,
    last_name varchar,
    email varchar,
    password varchar,
    birthday timestamp,
    gender gender_,
    created_at timestamp
)