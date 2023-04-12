# MVCE: [@shiftcoders/dynamo-easy][dynamo-easy] Update With Empty Array

This is a "minimal, complete and verifiable example" of the error thrown ehn trying to
update an DynamoDB record's to an empty array.

## Demo

```bash
$ ./node_modules/.bin/ts-node mvce.ts
Error: Given value must be either Array or Set undefined
    at Object.collectionToDb [as toDb] (./mvce-dynamo-easy-update-empty-array/node_modules/@shiftcoders/dynamo-easy/src/mapper/for-type/collection.mapper.ts:67:11)
    at Object.toDbOne (./mvce-dynamo-easy-update-empty-array/node_modules/@shiftcoders/dynamo-easy/src/mapper/mapper.ts:140:14)
    at buildDefaultExpression (./mvce-dynamo-easy-update-empty-array/node_modules/@shiftcoders/dynamo-easy/src/dynamo/expression/update-expression-builder.ts:112:19)
    at buildUpdateExpression (./mvce-dynamo-easy-update-empty-array/node_modules/@shiftcoders/dynamo-easy/src/dynamo/expression/update-expression-builder.ts:62:10)
    at curried (./mvce-dynamo-easy-update-empty-array/node_modules/@shiftcoders/dynamo-easy/src/helper/curry.function.ts:149:17)
    at ./mvce-dynamo-easy-update-empty-array/node_modules/@shiftcoders/dynamo-easy/src/helper/curry.function.ts:153:24
    at ./mvce-dynamo-easy-update-empty-array/node_modules/@shiftcoders/dynamo-easy/src/dynamo/expression/prepare-and-add-update-expressions.function.ts:24:16
    at Array.map (<anonymous>)
    at Object.prepareAndAddUpdateExpressions (./mvce-dynamo-easy-update-empty-array/node_modules/@shiftcoders/dynamo-easy/src/dynamo/expression/prepare-and-add-update-expressions.function.ts:23:8)
    at Object.set (./mvce-dynamo-easy-update-empty-array/node_modules/@shiftcoders/dynamo-easy/src/dynamo/expression/request-expression-builder.ts:61:7)
```

[dynamo-easy]: https://github.com/shiftcode/dynamo-easy
