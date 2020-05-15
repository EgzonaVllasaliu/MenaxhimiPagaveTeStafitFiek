Create Procedure [dbo].[PagaSelect_sp] 
(
	@Id int = NULL,
    @BonusId	INT = NULL,
	@KontrataId	INT = NULL,
    @PagaBruto	DECIMAL (18, 4) = NULL,
    @PervojaEPunes INT = NULL,
	@Shujta	DECIMAL (18, 4) = NULL,
    @Transporti DECIMAL (18, 4) = NULL,
    @PagaNeto	DECIMAL (18, 4) = NULL,
    @KontributiPuntorit DECIMAL (18, 4) = NULL,
    @Tatimi	 DECIMAL (18, 4) = NULL,
    @Sigurimi	 DECIMAL (18, 4) = NULL, 
	@Sindikata    DECIMAL (18, 4) = NULL
) 
as begin 
Select 
	P.Id,
	P.BonusId,
	P.KontrataId,
	P.PagaBruto,
	P.PervojaEPunes,
	P.Shujta,
	P.Transporti,
	P.PagaNeto,
	P.KontributiPuntorit,
	P.Tatimi,
	P.Sigurimi,
	P.Sindikata
From dbo.Paga P
where  (P.Id=@Id or @Id is null ) 
and  (P.BonusId = @BonusId or @BonusId is null ) 
and  (P.KontrataId = @KontrataId or @KontrataId is null ) 
and  (P.PagaBruto = @PagaBruto or @PagaBruto is null ) 
and  (P.PervojaEPunes = @PervojaEPunes or @PervojaEPunes is null ) 
and  (P.Shujta = @Shujta or @Shujta is null ) 
and  (P.Transporti = @Transporti or @Transporti is null ) 
and  (P.PagaNeto = @PagaNeto or @PagaNeto is null ) 
and  (P.KontributiPuntorit = @KontributiPuntorit or @KontributiPuntorit is null ) 
and  (P.Tatimi = @Tatimi or @Tatimi is null ) 
and  (P.Sigurimi = @Sigurimi or @Sigurimi is null ) 
and  (P.Sindikata = @Sindikata or @Sindikata is null ) 

end
