Create Procedure [dbo].[BonusetSelect_sp] 
(
	@Id int = NULL,
	@UserId int = NULL,
    @OretShtese					DECIMAL (18, 4) = NULL,
    @QmimiPerOreShtese			 DECIMAL (18, 4) = NULL,
	@OrePuneNeJave				 DECIMAL (18, 4) = NULL,
    @QmimiPerOrePune			 DECIMAL (18, 4) = NULL,
	@TemeDiplomeBachelor		 INT			 = NULL,
    @QmimiPerTemeDiplomeBachelor DECIMAL (18, 4) = NULL,
	@TemeDiplomeMaster			 INT			 = NULL,
    @QmimiPerTemeDiplomeMaster	 DECIMAL (18, 4) = NULL,
    @ProvimeMaster				 INT			 = NULL,
    @QmimiPerProvimeMaster		 DECIMAL (18, 4) = NULL,
	@Totali						 DECIMAL (18,4) = NULL
) 
as begin 
Select 
	B.Id,
	B.UserId,
	B.OretShtese,
	B.QmimiPerOreShtese,
	B.OrePuneNeJave,
	B.QmimiPerOrePune,
	B.TemeDiplomeBachelor,
	B.QmimiPerTemeDiplomeBachelor,
	B.TemeDiplomeMaster,
	B.QmimiPerTemeDiplomeMaster,
	B.ProvimeMaster,
	B.QmimiPerProvimeMaster,
	B.Totali

From	   dbo.Bonuset B
where  (B.Id=@Id or @Id is null ) 
and  (B.UserId = @UserId or @UserId is null ) 
and  (B.OretShtese = @OretShtese or @OretShtese is null ) 
and  (B.QmimiPerOreShtese = @QmimiPerOreShtese or @QmimiPerOreShtese is null ) 
and  (B.OrePuneNeJave = @OrePuneNeJave or @OrePuneNeJave is null ) 
and  (B.QmimiPerOrePune = @QmimiPerOrePune or @QmimiPerOrePune is null ) 
and  (B.TemeDiplomeBachelor = @TemeDiplomeBachelor or @TemeDiplomeBachelor is null ) 
and  (B.QmimiPerTemeDiplomeBachelor = @QmimiPerTemeDiplomeBachelor or @QmimiPerTemeDiplomeBachelor is null ) 
and  (B.TemeDiplomeMaster = @TemeDiplomeMaster or @TemeDiplomeMaster is null ) 
and  (B.QmimiPerTemeDiplomeMaster = @QmimiPerTemeDiplomeMaster or @QmimiPerTemeDiplomeMaster is null ) 
and  (B.ProvimeMaster = @ProvimeMaster or @ProvimeMaster is null ) 
and  (B.QmimiPerProvimeMaster = @QmimiPerProvimeMaster or @QmimiPerProvimeMaster is null ) 
and  (B.Totali = @Totali or @Totali is null ) 

end
