import { GetItem, ItemModel, GetItemRepository } from './dbGetItemProtocols'

export class DbGetItem implements GetItem {
	constructor(private readonly getItemRepository: GetItemRepository) {}

	async get(id: string): Promise<ItemModel> {
		const item = await this.getItemRepository.get(id)

		return item
	}
}
