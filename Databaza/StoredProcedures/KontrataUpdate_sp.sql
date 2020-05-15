CREATE Procedure [dbo].[KontrataUpdate_sp] 
(
	@Id int ,
	@UserId int,
	@NrLlogarise varchar (50),
	@Departamenti varchar (50),
	@Pozita varchar (50) ,
	@FillonKontraten DATETIME,
	@PerfundonKontraten DATETIME,
	@DitePuneNeJave DECIMAL (18, 2),
	@PushimNeMuaj DECIMAL (18, 3), 
	@PagaBaze   DECIMAL (18, 4)
) 
as begin 
Update Kontrata 
Set
	UserId = @UserId,
	NrLlogarise = @NrLlogarise,
	Departamenti = @Departamenti,
	Pozita = @Pozita,
	FillonKontraten = @FillonKontraten,
	PerfundonKontraten = @PerfundonKontraten,
	DitePuneNeJave = @DitePuneNeJave,
	PushimNeMuaj = @PushimNeMuaj,
	PagaBaze = @PagaBaze
where Id=@Id 
Select scope_identity() as id 
end

