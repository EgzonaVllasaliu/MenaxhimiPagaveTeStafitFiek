function bonEdit() {
    document.getElementById('bonSave').disabled = false;
    document.getElementById('bonEdit').disabled = true;
    bonChangeAbility(false);
}

function bonSave() {
    document.getElementById('bonEdit').disabled = false;
    document.getElementById('bonSave').disabled = true;
    bonChangeAbility(true);
}

function konEdit() {
    document.getElementById('konSave').disabled = false;
    document.getElementById('konEdit').disabled = true;
    konChangeAbility(false);
}

function konSave() {
    document.getElementById('konEdit').disabled = false;
    document.getElementById('konSave').disabled = true;
    konChangeAbility(true);
}

function pagEdit() {
    document.getElementById('pagSave').disabled = false;
    document.getElementById('pagEdit').disabled = true;
    pagChangeAbility(false);
}

function pagSave() {
    document.getElementById('pagEdit').disabled = false;
    document.getElementById('pagSave').disabled = true;
    pagChangeAbility(true);
}

function useEdit() {
    document.getElementById('useSave').disabled = false;
    document.getElementById('useEdit').disabled = true;
    useChangeAbility(false);
}

function useSave() {
    document.getElementById('useEdit').disabled = false;
    document.getElementById('useSave').disabled = true;
    useChangeAbility(true);
}

function bonChangeAbility(state) {
    document.getElementById('oretShtese').disabled = state;
    document.getElementById('pagesaPerOreShtese').disabled = state;
    document.getElementById('orePuneNeJave').disabled = state;
    document.getElementById('pagesaPerOrePune').disabled = state;
    document.getElementById('temeDiplome').disabled = state;
    document.getElementById('pagesaPerTemeDiplome').disabled = state;
    document.getElementById('provimeMaster').disabled = state;
    document.getElementById('pagesaPerProvimeMaster').disabled = state;
}

function konChangeAbility(state) {
    document.getElementById('userId').disabled = state;
    document.getElementById('nrIllogarise').disabled = state;
    document.getElementById('departamenti').disabled = state;
    document.getElementById('pozita').disabled = state;
    document.getElementById('dataEfillimit').disabled = state;
    document.getElementById('dataEperfundimit').disabled = state;
    document.getElementById('ditePune').disabled = state;
    document.getElementById('ditePushimi').disabled = state;
    document.getElementById('pagaBazek').disabled = state;
}

function pagChangeAbility(state) {
    document.getElementById('pagaBruto').disabled = state;
    document.getElementById('pagaBaze').disabled = state;
    document.getElementById('pervoja').disabled = state;
    document.getElementById('kontributi').disabled = state;
    document.getElementById('transporti').disabled = state;
    document.getElementById('shujta').disabled = state;
    document.getElementById('sigurimi').disabled = state;
    document.getElementById('sindikata').disabled = state;
    document.getElementById('tatimi').disabled = state;
    document.getElementById('pagaNeto').disabled = state;
}

function useChangeAbility(state) {
    document.getElementById('emri').disabled = state;
    document.getElementById('mbiemri').disabled = state;
    document.getElementById('emriIprindit').disabled = state;
    document.getElementById('nrPersonal').disabled = state;
    document.getElementById('dataElindjes').disabled = state;
    document.getElementById('vendiIlindjes').disabled = state;
    document.getElementById('adresa').disabled = state;
    document.getElementById('telefoni').disabled = state;
    document.getElementById('telZyre').disabled = state;
    document.getElementById('email').disabled = state;
    document.getElementById('gjinia').disabled = state;
    document.getElementById('shtetesia').disabled = state;
    document.getElementById('eksperienca').disabled = state;
    document.getElementById('edukimi').disabled = state;
}