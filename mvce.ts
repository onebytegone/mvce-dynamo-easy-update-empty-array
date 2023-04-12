import 'reflect-metadata';
import { Model, PartitionKey, DynamoStore, Property } from '@shiftcoders/dynamo-easy';

let store: DynamoStore<SampleClass>;

@Model({ tableName: 'table-that-does-not-need-to-exist-for-this-test' })
export default class SampleClass {

   @PartitionKey()
   public readonly pk: string;

   @Property()
   public tags: string[] = [];

   public constructor(pk: string) {
      this.pk = pk;
   }

   public async updateTags(tags: string[]): Promise<void> {
      this.tags = tags;

      await store.update(this.pk)
         .updateAttribute('tags')
         .set(this.tags)
         .exec();
   }

}

store = new DynamoStore(SampleClass);

(async () => {
   const obj = new SampleClass('pk-val');

   await obj.updateTags([]);
})();
