CREATE Procedure [dbo].[PagaInsert_sp]  
(
	@Id int ,
    @BonusId	INT,
	@KontrataId	INT,
    @PagaBruto	DECIMAL (18, 4),
    @PervojaEPunes INT,
	@Shujta	DECIMAL (18, 4),
    @Transporti DECIMAL (18, 4),
    @PagaNeto	DECIMAL (18, 4),
    @KontributiPuntorit DECIMAL (18, 4),
    @Tatimi	 DECIMAL (18, 4),
    @Sigurimi	 DECIMAL (18, 4),
	@Sindikata    DECIMAL (18, 4)
)
as begin 
Insert into Paga 
(BonusId, KontrataId, PagaBruto, PervojaEPunes, Shujta, Transporti, PagaNeto, KontributiPuntorit, Tatimi, Sigurimi, Sindikata) 
Values 
(@BonusId, @KontrataId, @PagaBruto, @PervojaEPunes, @Shujta, @Transporti, @PagaNeto, @KontributiPuntorit, @Tatimi, @Sigurimi, @Sindikata) 
Select scope_identity() as Id 
end
