import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class NeedleApi implements ICredentialType {
	name = 'needleApi';
	displayName = 'Needle API';
	documentationUrl = 'https://docs.needle-ai.com';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'api_key',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
	];
}