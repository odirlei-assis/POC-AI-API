create database Teste_AI_API
go
--drop database Teste_AI_API

use Teste_AI_API
go

create table Usuario
(
	usuarioId int identity primary key,
	nome varchar(255) not null
)
go

--drop table Usuario

insert into Usuario (nome) 
values ('odirlei'),('samanta')
go

select * from Usuario
go

create table Comentario
(
	comentarioId int identity primary key not null,
	usuarioId int not null foreign key references Usuario(usuarioId),
	texto varchar(max) not null
)
go

insert into Comentario (usuarioId, texto)
values 
(1, 'A única área que eu acho, que vai exigir muita atenção nossa, e aí eu já aventei a hipótese de até criar um ministério. É na área de... Na área... Eu diria assim, como uma espécie de analogia com o que acontece na área agrícola.'),
(2, 'Todos as descrições das pessoas são sobre a humanidade do atendimento, a pessoa pega no pulso, examina, olha com carinho. Então eu acho que vai ter outra coisa, que os médicos cubanos trouxeram pro brasil, um alto grau de humanidade.')
go

select * from Comentario