// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import ConfigSignatureHelpProvider from './signatureHelpProvider';
import { parse } from 'csv-parse';
import * as fs from 'fs';
export const MODE: vscode.DocumentFilter = { language: 'creo-config', scheme: 'file' };
import { options } from './configOptions';
import { ConfigCompletionItemProvider } from './ConfigCompletionItemProvider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    vscode.languages.setLanguageConfiguration('creo-config', {wordPattern: /[\S]+/});
    context.subscriptions.push(vscode.languages.registerHoverProvider(MODE, {
		provideHover(document, position, token) {
			var wordRange = document.getWordRangeAtPosition(position);
			for (let i = 0; i < options.length; i++) {
				const element = options[i];
				if(element.name === document.getText(wordRange)){
					var hover = new vscode.Hover(element.description);
					return hover;		
				}
			}
			return undefined;
		  }
	}));
	context.subscriptions.push(vscode.languages.registerCompletionItemProvider('creo-config', new ConfigCompletionItemProvider(), "."));

	const provider1 = vscode.languages.registerCompletionItemProvider('creo-config', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			var items : vscode.CompletionItem[] = [];

			options.forEach(element => {
				const completion = new vscode.CompletionItem(element.name);
				completion.documentation = new vscode.MarkdownString(element.description);
				completion.commitCharacters = [' '];
				completion.kind = vscode.CompletionItemKind.Function;
				items.push(completion);			
			});




			return items;
			/*
 		commandCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };

			*/
		}
	});

	const provider2 = vscode.languages.registerCompletionItemProvider('creo-config',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				if(linePrefix.endsWith(' ')){
					for (let i = 0; i < options.length; i++) {
						const element = options[i];
						if(linePrefix.startsWith(element.name+' ')){
							
							var items : vscode.CompletionItem[] = [];

							if(element.values !== ""){
								element.values.split(", ").forEach(e => {
									var l = new vscode.CompletionItem(e.toUpperCase());
									l.kind = vscode.CompletionItemKind.Value;
									l.range = new vscode.Range(position, position);
									l.insertText = e.toUpperCase();
									l.label = e.toUpperCase() === element.default.toUpperCase() ? e.toUpperCase()+ " *" : e.toUpperCase();
     								l.commitCharacters = [' '];
									items.push(l);									
								});

							}else{
								var l = new vscode.CompletionItem(element.default);
								l.range = new vscode.Range(position, position);
								items.push(l);
							}

							return  items;
						}
					}
				}

				return undefined;
			}
		},
		' '
	);
	context.subscriptions.push(provider1);
	//context.subscriptions.push(vscode.languages.registerSignatureHelpProvider(MODE, new ConfigSignatureHelpProvider(), ' '));
}



// this method is called when your extension is deactivated
export function deactivate() {}



