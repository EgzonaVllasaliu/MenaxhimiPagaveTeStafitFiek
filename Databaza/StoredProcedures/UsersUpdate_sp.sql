CREATE Procedure [dbo].[UsersUpdate_sp] 
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
Update Users 
Set
	Emri = @Emri,
	Mbiemri = @Mbiemri,
	EmriIPrindit = @EmriIPrindit,
	IdUser = @IdUser,
	Password = @Password,
	Roli = @Roli,
	NumriPersonal = @NumriPersonal,
	DataELindjes = @DataELindjes,
	VendiLindjes = @VendiLindjes,
	Adresa = @Adresa,
	Tel = @Tel,
	TelZyre = @TelZyre,
	Email = @Email,
	DataERegjistrimit=GETDATE(),
	Gjinia = @Gjinia,
	Edukimi = @Edukimi, 
	Eksperienca = @Eksperienca,
	Shtetsia = @Shtetesia
where Id=@Id 
Select scope_identity() as id 
end

