CREATE Procedure [dbo].[PagaUpdate_sp] 
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
Update Paga
Set
 BonusId = @BonusId,
 KontrataId = @KontrataId,
 PagaBruto = @PagaBruto,
 PervojaEPunes = @PervojaEPunes,
 Shujta = @Shujta,
 Transporti = @Transporti,
 PagaNeto = @PagaNeto,
 KontributiPuntorit = @KontributiPuntorit,
 Tatimi = @Tatimi,
 Sigurimi = @Sigurimi,
 Sindikata = @Sindikata
where Id=@Id 
Select scope_identity() as id 
end

