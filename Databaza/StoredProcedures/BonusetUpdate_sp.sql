CREATE Procedure [dbo].[BonusetUpdate_sp] 
(
	@Id int ,
	@UserId int,
    @OretShtese					DECIMAL (18, 4),
    @QmimiPerOreShtese			 DECIMAL (18, 4),
	@OrePuneNeJave				 DECIMAL (18, 4),
    @QmimiPerOrePune			 DECIMAL (18, 4),
	@TemeDiplomeBachelor		 INT			,
    @QmimiPerTemeDiplomeBachelor DECIMAL (18, 4),
	@TemeDiplomeMaster			 INT			,
    @QmimiPerTemeDiplomeMaster	 DECIMAL (18, 4),
    @ProvimeMaster				 INT			,
    @QmimiPerProvimeMaster		 DECIMAL (18, 4),
	@Totali						 DECIMAL (18,4)
) 
as begin 
Update Bonuset 
Set
	UserId = @UserId,
	OretShtese = @OretShtese,
	QmimiPerOreShtese = @QmimiPerOreShtese,
	OrePuneNeJave = @OrePuneNeJave,
	QmimiPerOrePune = @QmimiPerOrePune,
	TemeDiplomeBachelor = @TemeDiplomeBachelor,
	QmimiPerTemeDiplomeBachelor = @QmimiPerTemeDiplomeBachelor,
	TemeDiplomeMaster = @TemeDiplomeMaster,
	QmimiPerTemeDiplomeMaster = @QmimiPerTemeDiplomeMaster,
	ProvimeMaster = @ProvimeMaster,
	QmimiPerProvimeMaster = @QmimiPerProvimeMaster,
	Totali = @Totali
where Id=@Id 
Select scope_identity() as id 
end

