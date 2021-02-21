import { adaptResolver } from '@main/adapters'
import { makeGetItemController } from '@main/factories/items/getItem'
import { makegetItemsController } from '@main/factories/items/getItems'

export default {
	Query: {
		getItem: async (parent: any, args: any) => adaptResolver(makeGetItemController(), args),
		getItems: async (parent: any, args: any) => adaptResolver(makegetItemsController(), args)
	}
}
