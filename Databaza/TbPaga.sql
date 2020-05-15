CREATE TABLE [dbo].[Paga] (
    [Id]							INT				NOT NULL,
    [BonusId]						INT				NULL,
	[KontrataId]					INT				NOT NULL,
    [PagaBruto]						DECIMAL (18, 4)	NULL,
    [PervojaEPunes]				    INT				NULL,
	[Shujta]						DECIMAL (18, 4)	NULL,
    [Transporti]					DECIMAL (18, 4)	NULL,
    [PagaNeto]						DECIMAL (18, 4)	NULL,
    [KontributiPuntorit]			DECIMAL (18, 4)	NULL,
    [Tatimi]						DECIMAL (18, 4) NULL,
    [Sigurimi]						DECIMAL (18, 4)	NULL,
	[Sindikata]                     DECIMAL (18, 4)	NULL,
    CONSTRAINT [PK_Paga_Id] PRIMARY KEY CLUSTERED ([Id] ASC) WITH (FILLFACTOR = 90),
	CONSTRAINT [FK_Paga_BonusId] FOREIGN KEY ([BonusId]) REFERENCES [dbo].[Bonuset] ([Id]),
    CONSTRAINT [FK_Paga_KontrataId] FOREIGN KEY ([KontrataId]) REFERENCES [dbo].[Kontrata] ([Id])
	);