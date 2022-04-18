import {SignatureHelpProvider as SignatureHelpProvider, SignatureHelp, SignatureInformation, TextDocument, Position, ParameterInformation, CancellationToken, MarkdownString} from 'vscode';

export default class ConfigSignatureHelpProvider implements SignatureHelpProvider {

    constructor() {

    }


    provideSignatureHelp(document: TextDocument, position: Position, token: CancellationToken): SignatureHelp | Thenable<SignatureHelp> {
        return new Promise<SignatureHelp>((resolve, reject) => {
 
            


            const re = /^[\w]+[\s]+$/i;
            var line = document.lineAt(position.line).text;
            if(line.match(re) && position.character === line.length){


                let ret = new SignatureHelp();
                ret.activeParameter = 0;
                ret.activeSignature = 0;
                ret.signatures = new Array<SignatureInformation>();
    
                // TODO: Handle having 2 functions with different parameters
                //def.documentation.appendCodeblock(def.label + " ( " + idef.args.join(", ") + " )", "starboundlua");
                var signature = new SignatureInformation("Label hehe", new MarkdownString("description here"));
                signature.parameters.push(new ParameterInformation("Param", ""));
    
                ret.signatures.push(signature);
                resolve(ret);

            }


            reject();
            return;

        });
    }
}
/*
export default class SignatureHelpProvider implements ISignatureHelpProvider
{
    protected item = <SignatureHelp> 
    {
        id: "workspace_AutoRetreat_Add",
        name: "AutoRetreat_Add",
        filepath: "e:\\coh2_mods\\generic\\scar\\lib\\autoretreat.scar",
        activeParameter: 0,
        activeSignature: 0,
        signatures: <SignatureInformation[]>
        [
            {
                label: "AutoRetreat_Add(squad, retreatLocation, retreatCondition, retreatThreshold, autoDelete, autoDeleteDistance, encounter, callback, removeAfterRetreat)",
                documentation: "File: e:\\coh2_mods\\generic\\scar\\lib\\autoretreat.scar, line 82",
                parameters: [
                    {
                        label: "squad"
                    },
                    {
                        label: "retreatLocation"
                    },
                    {
                        label: "retreatCondition"
                    },
                    {
                        label: "retreatThreshold"
                    },
                    {
                        label: "autoDelete"
                    },
                    {
                        label: "autoDeleteDistance"
                    },
                    {
                        label: "encounter"
                    },
                    {
                        label: "callback"
                    },
                    {
                        label: "removeAfterRetreat"
                    }
                ]
            }
        ],
        parameterCount: 9,
        lastParameterIsList: false
    };

    constructor()
    {

    }

    public provideSignatureHelp(document: TextDocument, position: Position, token: CancellationToken): SignatureHelp
    {
        //
        const re = /^[\w]+[\s]+$/i;
        var line = document.lineAt(position.line).text;
        if(line.match(re) && position.character === line.length){
            return this.item;
        }


        return null;
    }
}*/