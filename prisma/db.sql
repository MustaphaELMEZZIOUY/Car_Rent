-- Contact
CREATE TABLE Contact (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname TEXT,
    lastname TEXT,
    email TEXT
);

INSERT INTO Contact (firstname, lastname, email) values('First Name 1', 'Last Name 1', 'first.last1@gmail.com');
INSERT INTO Contact (firstname, lastname, email) values('First Name 2', 'Last Name 2', 'first.last2@gmail.com');
INSERT INTO Contact (firstname, lastname, email) values('First Name 3', 'Last Name 3', 'first.last3@gmail.com');

DROP TABLE Contact;