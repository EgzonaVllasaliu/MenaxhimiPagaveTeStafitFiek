CREATE Procedure [dbo].[KontrataInsert_sp]  
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
Insert into Kontrata 
(UserId, NrLlogarise, Departamenti, Pozita, FillonKontraten, PerfundonKontraten, DitePuneNeJave, PushimNeMuaj, PagaBaze) 
Values 
(@UserId, @NrLlogarise, @Departamenti, @Pozita, @FillonKontraten, @PerfundonKontraten, @DitePuneNeJave, @PushimNeMuaj, @PagaBaze) 
Select scope_identity() as Id 
end
