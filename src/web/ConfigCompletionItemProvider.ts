import * as vscode from 'vscode';

export class ConfigCompletionItemProvider implements vscode.CompletionItemProvider {
	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {
		const linePrefix = document.lineAt(position).text.substr(0, position.character);
		console.log(linePrefix);
		if (!linePrefix.endsWith('console.')) {
			console.log("nope");
			return undefined;
		}

		console.log(633);
		return new vscode.CompletionList([
			new vscode.CompletionItem('log', vscode.CompletionItemKind.Property),
			new vscode.CompletionItem('warn', vscode.CompletionItemKind.Method),
			new vscode.CompletionItem('error', vscode.CompletionItemKind.Method),
		]);
	}
}
