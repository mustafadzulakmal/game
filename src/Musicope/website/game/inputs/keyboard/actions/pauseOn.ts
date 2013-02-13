/// <reference path="../../../_references.ts" />

import key = module("../../../../common/keyCodes");

export class pauseOn implements IGame.IKeyboardAction {

  id = "pause on";
  description = "pause and unpause the game";
  keySequence = [key.space];

  constructor(private params: IGame.IParams, private parser: IGame.IParser) { }

  triggerAction() {
    var o = this;
    o.params.setParam("p_isPaused", !o.params.readOnly.p_isPaused);
  }

}