CREATE Procedure [dbo].[BonusetInsert_sp]  
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
Insert into Bonuset 
(UserId, OretShtese, QmimiPerOreShtese, OrePuneNeJave, QmimiPerOrePune, TemeDiplomeBachelor, QmimiPerTemeDiplomeBachelor, TemeDiplomeMaster, QmimiPerTemeDiplomeMaster, ProvimeMaster, QmimiPerProvimeMaster, Totali) 
Values 
(@UserId, @OretShtese, @QmimiPerOreShtese, @OrePuneNeJave, @QmimiPerOrePune, @TemeDiplomeBachelor, @QmimiPerTemeDiplomeBachelor, @TemeDiplomeMaster, @QmimiPerTemeDiplomeMaster, @ProvimeMaster, @QmimiPerProvimeMaster, @Totali) 
Select scope_identity() as Id 
end

