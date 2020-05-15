Create Procedure [dbo].[KontrataSelect_sp] 
(
	@Id int = NULL,
	@UserId int = NULL,
	@NrLlogarise varchar (50) = NULL,
	@Departamenti varchar (50) = NULL,
	@Pozita varchar (50) = NULL,
	@FillonKontraten DATETIME = NULL,
	@PerfundonKontraten DATETIME = NULL,
	@DitePuneNeJave DECIMAL (18, 2) = NULL,
	@PushimNeMuaj DECIMAL (18, 3) = NULL, 
	@PagaBaze   DECIMAL (18, 4) = NULL
) 
as begin 
Select 
	K.Id,
	K.UserId,
	K.NrLlogarise,
	K.Departamenti,
	K.Pozita,
	K.FillonKontraten,
	K.PerfundonKontraten,
	K.DitePuneNeJave,
	K.PushimNeMuaj,
	K.PagaBaze

From	   dbo.Kontrata K
where  (K.Id=@Id or @Id is null ) 
and  (K.UserId = @UserId or @UserId is null ) 
and  (K.NrLlogarise = @NrLlogarise or @NrLlogarise is null ) 
and  (K.Departamenti = @Departamenti or @Departamenti is null ) 
and  (K.Pozita = @Pozita or @Pozita is null ) 
and  (K.FillonKontraten = @FillonKontraten or @FillonKontraten is null ) 
and  (K.PerfundonKontraten = @PerfundonKontraten or @PerfundonKontraten is null ) 
and  (K.DitePuneNeJave = @DitePuneNeJave or @DitePuneNeJave is null ) 
and  (K.PushimNeMuaj = @PushimNeMuaj or @PushimNeMuaj is null ) 
and  (K.PagaBaze = @PagaBaze or @PagaBaze is null ) 

end
