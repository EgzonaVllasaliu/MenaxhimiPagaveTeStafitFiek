CREATE Procedure [dbo].[UsersInsert_sp]  
(	
	@Id int ,
	@Emri VARCHAR (50),
	@Mbiemri varchar (50),
	@EmriIPrindit varchar (50),
	@IdUser varchar (50) ,
	@Password VARCHAR (50) ,
	@Roli VARCHAR (50) ,
	@NumriPersonal VARCHAR (20)  ,
	@DataELindjes DATETIME, 
	@VendiLindjes   VARCHAR (80),
	@Adresa  VARCHAR (100),
	@Tel VARCHAR(20),
	@TelZyre VARCHAR(15),
	@Email VARCHAR(30),
	@Gjinia NCHAR(2),
	@Edukimi Varchar(80),
	@Eksperienca Varchar(90),
	@Shtetesia varchar(50)
)
as begin 
Insert into Users 
(Emri, Mbiemri, EmriIPrindit, IdUser, Password, Roli, NumriPersonal, DataELindjes, VendiLindjes, Adresa, Tel, TelZyre, Email, Gjinia, Edukimi, Eksperienca, Shtetesia) 
Values 
(@Emri, @Mbiemri, @EmriIPrindit, @IdUser, @Password, @Roli, @NumriPersonal, @DataELindjes, @VendiLindjes, @Adresa, @Tel, @TelZyre, @Email, @Gjinia, @Edukimi, @Eksperienca, @Shtetesia) 
Select scope_identity() as Id 
end

