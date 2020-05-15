Create Procedure [dbo].[UsersSelect_sp] 
(

	@Id int = NULL,
	@Emri VARCHAR (50) = NULL,
	@Mbiemri varchar (50) = NULL,
	@EmriIPrindit varchar (50) = NULL,
	@IdUser varchar (50) = NULL,
	@Password VARCHAR (50) = NULL,
	@Roli VARCHAR (50) = NULL,
	@NumriPersonal VARCHAR (20) = NULL,
	@DataELindjes DATETIME = NULL, 
	@VendiLindjes   VARCHAR (80) = NULL,
	@Adresa  VARCHAR (100) = NULL,
	@Tel VARCHAR(20) = NULL,
	@TelZyre VARCHAR(15) = NULL,
	@Email VARCHAR(30) = NULL,
	@Gjinia NCHAR(2) = NULL,
	@Edukimi Varchar(80) = NULL,
	@Eksperienca Varchar(90) = NULL,
	@Shtetesia varchar(50) = NULL
) 
as begin 
Select 
	 U.Id
	,U.Emri
	,U.Mbiemri
	,U.EmriIPrindit
	,U.IdUser
	,U.Password
	,U.Roli
	,U.NumriPersonal
	,U.DataELindjes
	,U.VendiLindjes
	,U.Adresa
	,U.Tel
	,U.TelZyre
	,U.Email
	,U.Gjinia
	,U.Edukimi
	,U.Eksperienca
	,U.Shtetesia

From	   dbo.Users U 
where  (U.Id=@Id or @Id is null ) 
and  (U.Emri = @Emri or @Emri is null ) 
and  (U.Mbiemri = @Mbiemri or @Mbiemri is null ) 
and  (U.EmriIPrindit = @EmriIPrindit or @EmriIPrindit is null ) 
and  (U.IdUser = @IdUser or @IdUser is null ) 
and  (U.Password = @Password or @Password is null ) 
and  (U.Roli = @Roli or @Roli is null ) 
and  (U.NumriPersonal = @NumriPersonal or @NumriPersonal is null ) 
and  (U.DataELindjes = @DataELindjes or @DataELindjes is null ) 
and  (U.VendiLindjes = @VendiLindjes or @VendiLindjes is null ) 
and  (U.Adresa = @Adresa or @Adresa is null ) 
and  (U.Tel = @Tel or @Tel is null ) 
and  (U.TelZyre = @TelZyre or @TelZyre is null ) 
and  (U.Email = @Email or @Email is null ) 
and  (U.Gjinia = @Gjinia or @Gjinia is null ) 
and  (U.Edukimi = @Edukimi or @Edukimi is null ) 
and  (U.Eksperienca = @Eksperienca or @Eksperienca is null ) 
and  (U.Shtetesia = @Shtetesia or @Shtetesia is null ) 
end
