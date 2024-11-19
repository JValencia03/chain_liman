import { z } from 'zod'
import type { Prisma } from '@prisma/client'

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted', 'ReadCommitted', 'RepeatableRead', 'Serializable'])

export const UrlScalarFieldEnumSchema = z.enum(['id', 'originalUrl', 'shortUrl', 'createdAt', 'updatedAt'])

export const SortOrderSchema = z.enum(['asc', 'desc'])

export const QueryModeSchema = z.enum(['default', 'insensitive'])

export const NullsOrderSchema = z.enum(['first', 'last'])
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// URL SCHEMA
/////////////////////////////////////////

export const UrlSchema = z.object({
  id: z.string(),
  originalUrl: z.string(),
  shortUrl: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Url = z.infer<typeof UrlSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// URL
//------------------------------------------------------

export const UrlSelectSchema: z.ZodType<Prisma.UrlSelect> = z.object({
  id: z.boolean().optional(),
  originalUrl: z.boolean().optional(),
  shortUrl: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UrlWhereInputSchema: z.ZodType<Prisma.UrlWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UrlWhereInputSchema), z.lazy(() => UrlWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UrlWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UrlWhereInputSchema), z.lazy(() => UrlWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  originalUrl: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  shortUrl: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
}).strict()

export const UrlOrderByWithRelationInputSchema: z.ZodType<Prisma.UrlOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  originalUrl: z.lazy(() => SortOrderSchema).optional(),
  shortUrl: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict()

export const UrlWhereUniqueInputSchema: z.ZodType<Prisma.UrlWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    originalUrl: z.string(),
    shortUrl: z.string()
  }),
  z.object({
    id: z.string(),
    originalUrl: z.string(),
  }),
  z.object({
    id: z.string(),
    shortUrl: z.string(),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    originalUrl: z.string(),
    shortUrl: z.string(),
  }),
  z.object({
    originalUrl: z.string(),
  }),
  z.object({
    shortUrl: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  originalUrl: z.string().optional(),
  shortUrl: z.string().optional(),
  AND: z.union([ z.lazy(() => UrlWhereInputSchema), z.lazy(() => UrlWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UrlWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UrlWhereInputSchema), z.lazy(() => UrlWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
}).strict())

export const UrlOrderByWithAggregationInputSchema: z.ZodType<Prisma.UrlOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  originalUrl: z.lazy(() => SortOrderSchema).optional(),
  shortUrl: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UrlCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UrlMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UrlMinOrderByAggregateInputSchema).optional()
}).strict()

export const UrlScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UrlScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UrlScalarWhereWithAggregatesInputSchema), z.lazy(() => UrlScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UrlScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UrlScalarWhereWithAggregatesInputSchema), z.lazy(() => UrlScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  originalUrl: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  shortUrl: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
}).strict()

export const UrlCreateInputSchema: z.ZodType<Prisma.UrlCreateInput> = z.object({
  id: z.string().optional(),
  originalUrl: z.string(),
  shortUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict()

export const UrlUncheckedCreateInputSchema: z.ZodType<Prisma.UrlUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  originalUrl: z.string(),
  shortUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict()

export const UrlUpdateInputSchema: z.ZodType<Prisma.UrlUpdateInput> = z.object({
  id: z.union([ z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  originalUrl: z.union([ z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shortUrl: z.union([ z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict()

export const UrlUncheckedUpdateInputSchema: z.ZodType<Prisma.UrlUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  originalUrl: z.union([ z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shortUrl: z.union([ z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict()

export const UrlCreateManyInputSchema: z.ZodType<Prisma.UrlCreateManyInput> = z.object({
  id: z.string().optional(),
  originalUrl: z.string(),
  shortUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict()

export const UrlUpdateManyMutationInputSchema: z.ZodType<Prisma.UrlUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  originalUrl: z.union([ z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shortUrl: z.union([ z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict()

export const UrlUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UrlUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  originalUrl: z.union([ z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shortUrl: z.union([ z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict()

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(), z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict()

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(), z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict()

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict()

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict()

export const UrlCountOrderByAggregateInputSchema: z.ZodType<Prisma.UrlCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  originalUrl: z.lazy(() => SortOrderSchema).optional(),
  shortUrl: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict()

export const UrlMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UrlMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  originalUrl: z.lazy(() => SortOrderSchema).optional(),
  shortUrl: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict()

export const UrlMinOrderByAggregateInputSchema: z.ZodType<Prisma.UrlMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  originalUrl: z.lazy(() => SortOrderSchema).optional(),
  shortUrl: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict()

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict()

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict()

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict()

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict()

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict()

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict()

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(), z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict()

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(), z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict()

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict()

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict()

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(), z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict()

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict()

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(), z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict()

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict()

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UrlFindFirstArgsSchema: z.ZodType<Prisma.UrlFindFirstArgs> = z.object({
  select: UrlSelectSchema.optional(),
  where: UrlWhereInputSchema.optional(),
  orderBy: z.union([ UrlOrderByWithRelationInputSchema.array(), UrlOrderByWithRelationInputSchema ]).optional(),
  cursor: UrlWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UrlScalarFieldEnumSchema, UrlScalarFieldEnumSchema.array() ]).optional(),
}).strict() 

export const UrlFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UrlFindFirstOrThrowArgs> = z.object({
  select: UrlSelectSchema.optional(),
  where: UrlWhereInputSchema.optional(),
  orderBy: z.union([ UrlOrderByWithRelationInputSchema.array(), UrlOrderByWithRelationInputSchema ]).optional(),
  cursor: UrlWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UrlScalarFieldEnumSchema, UrlScalarFieldEnumSchema.array() ]).optional(),
}).strict() 

export const UrlFindManyArgsSchema: z.ZodType<Prisma.UrlFindManyArgs> = z.object({
  select: UrlSelectSchema.optional(),
  where: UrlWhereInputSchema.optional(),
  orderBy: z.union([ UrlOrderByWithRelationInputSchema.array(), UrlOrderByWithRelationInputSchema ]).optional(),
  cursor: UrlWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UrlScalarFieldEnumSchema, UrlScalarFieldEnumSchema.array() ]).optional(),
}).strict() 

export const UrlAggregateArgsSchema: z.ZodType<Prisma.UrlAggregateArgs> = z.object({
  where: UrlWhereInputSchema.optional(),
  orderBy: z.union([ UrlOrderByWithRelationInputSchema.array(), UrlOrderByWithRelationInputSchema ]).optional(),
  cursor: UrlWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const UrlGroupByArgsSchema: z.ZodType<Prisma.UrlGroupByArgs> = z.object({
  where: UrlWhereInputSchema.optional(),
  orderBy: z.union([ UrlOrderByWithAggregationInputSchema.array(), UrlOrderByWithAggregationInputSchema ]).optional(),
  by: UrlScalarFieldEnumSchema.array(),
  having: UrlScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const UrlFindUniqueArgsSchema: z.ZodType<Prisma.UrlFindUniqueArgs> = z.object({
  select: UrlSelectSchema.optional(),
  where: UrlWhereUniqueInputSchema,
}).strict() 

export const UrlFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UrlFindUniqueOrThrowArgs> = z.object({
  select: UrlSelectSchema.optional(),
  where: UrlWhereUniqueInputSchema,
}).strict() 

export const UrlCreateArgsSchema: z.ZodType<Prisma.UrlCreateArgs> = z.object({
  select: UrlSelectSchema.optional(),
  data: z.union([ UrlCreateInputSchema, UrlUncheckedCreateInputSchema ]),
}).strict() 

export const UrlUpsertArgsSchema: z.ZodType<Prisma.UrlUpsertArgs> = z.object({
  select: UrlSelectSchema.optional(),
  where: UrlWhereUniqueInputSchema,
  create: z.union([ UrlCreateInputSchema, UrlUncheckedCreateInputSchema ]),
  update: z.union([ UrlUpdateInputSchema, UrlUncheckedUpdateInputSchema ]),
}).strict() 

export const UrlCreateManyArgsSchema: z.ZodType<Prisma.UrlCreateManyArgs> = z.object({
  data: z.union([ UrlCreateManyInputSchema, UrlCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() 

export const UrlCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UrlCreateManyAndReturnArgs> = z.object({
  data: z.union([ UrlCreateManyInputSchema, UrlCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() 

export const UrlDeleteArgsSchema: z.ZodType<Prisma.UrlDeleteArgs> = z.object({
  select: UrlSelectSchema.optional(),
  where: UrlWhereUniqueInputSchema,
}).strict() 

export const UrlUpdateArgsSchema: z.ZodType<Prisma.UrlUpdateArgs> = z.object({
  select: UrlSelectSchema.optional(),
  data: z.union([ UrlUpdateInputSchema, UrlUncheckedUpdateInputSchema ]),
  where: UrlWhereUniqueInputSchema,
}).strict() 

export const UrlUpdateManyArgsSchema: z.ZodType<Prisma.UrlUpdateManyArgs> = z.object({
  data: z.union([ UrlUpdateManyMutationInputSchema, UrlUncheckedUpdateManyInputSchema ]),
  where: UrlWhereInputSchema.optional(),
}).strict() 

export const UrlDeleteManyArgsSchema: z.ZodType<Prisma.UrlDeleteManyArgs> = z.object({
  where: UrlWhereInputSchema.optional(),
}).strict() 
