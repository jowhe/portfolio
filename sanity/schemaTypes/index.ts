import { type SchemaTypeDefinition } from 'sanity'
import { GitRepo } from './gitRepo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [GitRepo],
}
