export class DettaglioProfilo {
  private _IDNotaAggiunta: number
  private _IDFNota: number
  private _IDFTipoProfilo: number
  private _NomeProfilo: string


  constructor(IDNotaAggiunta: number, IDFNota: number, IDFTipoProfilo: number, NomeProilo: string) {
    this._IDNotaAggiunta = IDNotaAggiunta;
    this._IDFNota = IDFNota;
    this._IDFTipoProfilo = IDFTipoProfilo;
    this._NomeProfilo = NomeProilo;
  }

  set IDNotaAggiunta(value: number) {
    this._IDNotaAggiunta = value;
  }

  get IDNotaAggiunta(): number {
    return this._IDNotaAggiunta;
  }

  get NomeProfilo(): string {
    return this._NomeProfilo;
  }

  set NomeProfilo(value: string) {
    this._NomeProfilo = value;
  }

  get IDFTipoProfilo(): number {
    return this._IDFTipoProfilo;
  }

  set IDFTipoProfilo(value: number) {
    this._IDFTipoProfilo = value;
  }

  set IDFNota(value: number) {
    this._IDFNota = value;
  }

  get IDFNota(): number {
    return this._IDFNota;
  }


}
