CREATE TABLE [dbo].[Kontrata] (
    [Id]					INT				NOT NULL,
    [UserId]				INT				NOT NULL,
    [NrLlogarise]			VARCHAR (50)	NOT NULL,
    [Departamenti]			VARCHAR (50)	NOT NULL,
	[Pozita]				VARCHAR (50)	NOT NULL,
    [FillonKontraten]		DATETIME		NULL,
	[PerfundonKontraten]	DATETIME		NULL,
    [DitePuneNeJave]		DECIMAL (18, 2)	NULL,
    [PushimNeMuaj]			DECIMAL (18, 3) NULL,
    [PagaBaze]				DECIMAL (18, 4)	NOT NULL
    CONSTRAINT [PK_Kontrata_Id] PRIMARY KEY CLUSTERED ([Id] ASC) WITH (FILLFACTOR = 90),
	CONSTRAINT [FK_Kontrata_UserId] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([Id]),
    );