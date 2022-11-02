import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  numeric: any;
  timestamptz: any;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  _nlike?: InputMaybe<Scalars['String']>;
  _nsimilar?: InputMaybe<Scalars['String']>;
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['numeric']>;
  /** An array relationship */
  technologies: Array<Technologies>;
  /** An aggregated array relationship */
  technologies_aggregate: Technologies_Aggregate;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "categories" */
export type CategoriesTechnologiesArgs = {
  distinct_on?: InputMaybe<Array<Technologies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Technologies_Order_By>>;
  where?: InputMaybe<Technologies_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesTechnologies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Technologies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Technologies_Order_By>>;
  where?: InputMaybe<Technologies_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  avg?: Maybe<Categories_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
  stddev?: Maybe<Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Categories_Sum_Fields>;
  var_pop?: Maybe<Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Categories_Var_Samp_Fields>;
  variance?: Maybe<Categories_Variance_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "categories" */
export type Categories_Aggregate_Order_By = {
  avg?: InputMaybe<Categories_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Categories_Max_Order_By>;
  min?: InputMaybe<Categories_Min_Order_By>;
  stddev?: InputMaybe<Categories_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Categories_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Categories_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Categories_Sum_Order_By>;
  var_pop?: InputMaybe<Categories_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Categories_Var_Samp_Order_By>;
  variance?: InputMaybe<Categories_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
  __typename?: 'categories_avg_fields';
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "categories" */
export type Categories_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Categories_Bool_Exp>>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Categories_Bool_Exp>>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  position?: InputMaybe<Numeric_Comparison_Exp>;
  technologies?: InputMaybe<Technologies_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "categories" */
export type Categories_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "categories" */
export type Categories_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "categories" */
export type Categories_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  technologies_aggregate?: InputMaybe<Technologies_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "categories" */
export type Categories_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Position = 'position',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
  __typename?: 'categories_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "categories" */
export type Categories_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
  __typename?: 'categories_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "categories" */
export type Categories_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
  __typename?: 'categories_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "categories" */
export type Categories_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
  __typename?: 'categories_sum_fields';
  id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "categories" */
export type Categories_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
  __typename?: 'categories_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "categories" */
export type Categories_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
  __typename?: 'categories_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "categories" */
export type Categories_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
  __typename?: 'categories_variance_fields';
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "categories" */
export type Categories_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "layers" */
export type Layers = {
  __typename?: 'layers';
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['numeric']>;
  /** An array relationship */
  technologies: Array<Technologies>;
  /** An aggregated array relationship */
  technologies_aggregate: Technologies_Aggregate;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "layers" */
export type LayersTechnologiesArgs = {
  distinct_on?: InputMaybe<Array<Technologies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Technologies_Order_By>>;
  where?: InputMaybe<Technologies_Bool_Exp>;
};


/** columns and relationships of "layers" */
export type LayersTechnologies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Technologies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Technologies_Order_By>>;
  where?: InputMaybe<Technologies_Bool_Exp>;
};

/** aggregated selection of "layers" */
export type Layers_Aggregate = {
  __typename?: 'layers_aggregate';
  aggregate?: Maybe<Layers_Aggregate_Fields>;
  nodes: Array<Layers>;
};

/** aggregate fields of "layers" */
export type Layers_Aggregate_Fields = {
  __typename?: 'layers_aggregate_fields';
  avg?: Maybe<Layers_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Layers_Max_Fields>;
  min?: Maybe<Layers_Min_Fields>;
  stddev?: Maybe<Layers_Stddev_Fields>;
  stddev_pop?: Maybe<Layers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Layers_Stddev_Samp_Fields>;
  sum?: Maybe<Layers_Sum_Fields>;
  var_pop?: Maybe<Layers_Var_Pop_Fields>;
  var_samp?: Maybe<Layers_Var_Samp_Fields>;
  variance?: Maybe<Layers_Variance_Fields>;
};


/** aggregate fields of "layers" */
export type Layers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Layers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "layers" */
export type Layers_Aggregate_Order_By = {
  avg?: InputMaybe<Layers_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Layers_Max_Order_By>;
  min?: InputMaybe<Layers_Min_Order_By>;
  stddev?: InputMaybe<Layers_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Layers_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Layers_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Layers_Sum_Order_By>;
  var_pop?: InputMaybe<Layers_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Layers_Var_Samp_Order_By>;
  variance?: InputMaybe<Layers_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Layers_Avg_Fields = {
  __typename?: 'layers_avg_fields';
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "layers" */
export type Layers_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "layers". All fields are combined with a logical 'AND'. */
export type Layers_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Layers_Bool_Exp>>>;
  _not?: InputMaybe<Layers_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Layers_Bool_Exp>>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  position?: InputMaybe<Numeric_Comparison_Exp>;
  technologies?: InputMaybe<Technologies_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Layers_Max_Fields = {
  __typename?: 'layers_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "layers" */
export type Layers_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Layers_Min_Fields = {
  __typename?: 'layers_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "layers" */
export type Layers_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "layers" */
export type Layers_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  technologies_aggregate?: InputMaybe<Technologies_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "layers" */
export type Layers_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "layers" */
export enum Layers_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Position = 'position',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Layers_Stddev_Fields = {
  __typename?: 'layers_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "layers" */
export type Layers_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Layers_Stddev_Pop_Fields = {
  __typename?: 'layers_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "layers" */
export type Layers_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Layers_Stddev_Samp_Fields = {
  __typename?: 'layers_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "layers" */
export type Layers_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Layers_Sum_Fields = {
  __typename?: 'layers_sum_fields';
  id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "layers" */
export type Layers_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Layers_Var_Pop_Fields = {
  __typename?: 'layers_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "layers" */
export type Layers_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Layers_Var_Samp_Fields = {
  __typename?: 'layers_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "layers" */
export type Layers_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Layers_Variance_Fields = {
  __typename?: 'layers_variance_fields';
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "layers" */
export type Layers_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  category?: Maybe<Categories>;
  /** fetch data from the table: "layers" */
  layers: Array<Layers>;
  /** fetch aggregated fields from the table: "layers" */
  layers_aggregate: Layers_Aggregate;
  /** fetch data from the table: "layers" using primary key columns */
  layers_by_pk?: Maybe<Layers>;
  /** fetch data from the table: "stacks" using primary key columns */
  stack?: Maybe<Stacks>;
  /** fetch data from the table: "stack_tech" */
  stack_tech: Array<Stack_Tech>;
  /** fetch aggregated fields from the table: "stack_tech" */
  stack_tech_aggregate: Stack_Tech_Aggregate;
  /** fetch data from the table: "stack_tech" using primary key columns */
  stack_tech_by_pk?: Maybe<Stack_Tech>;
  /** fetch data from the table: "stacks" */
  stacks: Array<Stacks>;
  /** fetch aggregated fields from the table: "stacks" */
  stacks_aggregate: Stacks_Aggregate;
  /** fetch data from the table: "technologies" */
  technologies: Array<Technologies>;
  /** fetch aggregated fields from the table: "technologies" */
  technologies_aggregate: Technologies_Aggregate;
  /** fetch data from the table: "technologies" using primary key columns */
  technology?: Maybe<Technologies>;
  /** fetch data from the table: "users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
};


/** query root */
export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


/** query root */
export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


/** query root */
export type Query_RootCategoryArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootLayersArgs = {
  distinct_on?: InputMaybe<Array<Layers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Layers_Order_By>>;
  where?: InputMaybe<Layers_Bool_Exp>;
};


/** query root */
export type Query_RootLayers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Layers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Layers_Order_By>>;
  where?: InputMaybe<Layers_Bool_Exp>;
};


/** query root */
export type Query_RootLayers_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootStackArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootStack_TechArgs = {
  distinct_on?: InputMaybe<Array<Stack_Tech_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stack_Tech_Order_By>>;
  where?: InputMaybe<Stack_Tech_Bool_Exp>;
};


/** query root */
export type Query_RootStack_Tech_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stack_Tech_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stack_Tech_Order_By>>;
  where?: InputMaybe<Stack_Tech_Bool_Exp>;
};


/** query root */
export type Query_RootStack_Tech_By_PkArgs = {
  stack_id: Scalars['Int'];
  tech_id: Scalars['Int'];
};


/** query root */
export type Query_RootStacksArgs = {
  distinct_on?: InputMaybe<Array<Stacks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stacks_Order_By>>;
  where?: InputMaybe<Stacks_Bool_Exp>;
};


/** query root */
export type Query_RootStacks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stacks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stacks_Order_By>>;
  where?: InputMaybe<Stacks_Bool_Exp>;
};


/** query root */
export type Query_RootTechnologiesArgs = {
  distinct_on?: InputMaybe<Array<Technologies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Technologies_Order_By>>;
  where?: InputMaybe<Technologies_Bool_Exp>;
};


/** query root */
export type Query_RootTechnologies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Technologies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Technologies_Order_By>>;
  where?: InputMaybe<Technologies_Bool_Exp>;
};


/** query root */
export type Query_RootTechnologyArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUserArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "stack_tech" */
export type Stack_Tech = {
  __typename?: 'stack_tech';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  stack: Stacks;
  stack_id: Scalars['Int'];
  tech_id: Scalars['Int'];
  /** An object relationship */
  technology: Technologies;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "stack_tech" */
export type Stack_Tech_Aggregate = {
  __typename?: 'stack_tech_aggregate';
  aggregate?: Maybe<Stack_Tech_Aggregate_Fields>;
  nodes: Array<Stack_Tech>;
};

/** aggregate fields of "stack_tech" */
export type Stack_Tech_Aggregate_Fields = {
  __typename?: 'stack_tech_aggregate_fields';
  avg?: Maybe<Stack_Tech_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Stack_Tech_Max_Fields>;
  min?: Maybe<Stack_Tech_Min_Fields>;
  stddev?: Maybe<Stack_Tech_Stddev_Fields>;
  stddev_pop?: Maybe<Stack_Tech_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stack_Tech_Stddev_Samp_Fields>;
  sum?: Maybe<Stack_Tech_Sum_Fields>;
  var_pop?: Maybe<Stack_Tech_Var_Pop_Fields>;
  var_samp?: Maybe<Stack_Tech_Var_Samp_Fields>;
  variance?: Maybe<Stack_Tech_Variance_Fields>;
};


/** aggregate fields of "stack_tech" */
export type Stack_Tech_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stack_Tech_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stack_tech" */
export type Stack_Tech_Aggregate_Order_By = {
  avg?: InputMaybe<Stack_Tech_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Stack_Tech_Max_Order_By>;
  min?: InputMaybe<Stack_Tech_Min_Order_By>;
  stddev?: InputMaybe<Stack_Tech_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Stack_Tech_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Stack_Tech_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Stack_Tech_Sum_Order_By>;
  var_pop?: InputMaybe<Stack_Tech_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Stack_Tech_Var_Samp_Order_By>;
  variance?: InputMaybe<Stack_Tech_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Stack_Tech_Avg_Fields = {
  __typename?: 'stack_tech_avg_fields';
  stack_id?: Maybe<Scalars['Float']>;
  tech_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "stack_tech" */
export type Stack_Tech_Avg_Order_By = {
  stack_id?: InputMaybe<Order_By>;
  tech_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "stack_tech". All fields are combined with a logical 'AND'. */
export type Stack_Tech_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Stack_Tech_Bool_Exp>>>;
  _not?: InputMaybe<Stack_Tech_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Stack_Tech_Bool_Exp>>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  stack?: InputMaybe<Stacks_Bool_Exp>;
  stack_id?: InputMaybe<Int_Comparison_Exp>;
  tech_id?: InputMaybe<Int_Comparison_Exp>;
  technology?: InputMaybe<Technologies_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Stack_Tech_Max_Fields = {
  __typename?: 'stack_tech_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  stack_id?: Maybe<Scalars['Int']>;
  tech_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "stack_tech" */
export type Stack_Tech_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  stack_id?: InputMaybe<Order_By>;
  tech_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Stack_Tech_Min_Fields = {
  __typename?: 'stack_tech_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  stack_id?: Maybe<Scalars['Int']>;
  tech_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "stack_tech" */
export type Stack_Tech_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  stack_id?: InputMaybe<Order_By>;
  tech_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "stack_tech" */
export type Stack_Tech_Order_By = {
  created_at?: InputMaybe<Order_By>;
  stack?: InputMaybe<Stacks_Order_By>;
  stack_id?: InputMaybe<Order_By>;
  tech_id?: InputMaybe<Order_By>;
  technology?: InputMaybe<Technologies_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "stack_tech" */
export type Stack_Tech_Pk_Columns_Input = {
  stack_id: Scalars['Int'];
  tech_id: Scalars['Int'];
};

/** select columns of table "stack_tech" */
export enum Stack_Tech_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  StackId = 'stack_id',
  /** column name */
  TechId = 'tech_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Stack_Tech_Stddev_Fields = {
  __typename?: 'stack_tech_stddev_fields';
  stack_id?: Maybe<Scalars['Float']>;
  tech_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "stack_tech" */
export type Stack_Tech_Stddev_Order_By = {
  stack_id?: InputMaybe<Order_By>;
  tech_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Stack_Tech_Stddev_Pop_Fields = {
  __typename?: 'stack_tech_stddev_pop_fields';
  stack_id?: Maybe<Scalars['Float']>;
  tech_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "stack_tech" */
export type Stack_Tech_Stddev_Pop_Order_By = {
  stack_id?: InputMaybe<Order_By>;
  tech_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Stack_Tech_Stddev_Samp_Fields = {
  __typename?: 'stack_tech_stddev_samp_fields';
  stack_id?: Maybe<Scalars['Float']>;
  tech_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "stack_tech" */
export type Stack_Tech_Stddev_Samp_Order_By = {
  stack_id?: InputMaybe<Order_By>;
  tech_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Stack_Tech_Sum_Fields = {
  __typename?: 'stack_tech_sum_fields';
  stack_id?: Maybe<Scalars['Int']>;
  tech_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "stack_tech" */
export type Stack_Tech_Sum_Order_By = {
  stack_id?: InputMaybe<Order_By>;
  tech_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Stack_Tech_Var_Pop_Fields = {
  __typename?: 'stack_tech_var_pop_fields';
  stack_id?: Maybe<Scalars['Float']>;
  tech_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "stack_tech" */
export type Stack_Tech_Var_Pop_Order_By = {
  stack_id?: InputMaybe<Order_By>;
  tech_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Stack_Tech_Var_Samp_Fields = {
  __typename?: 'stack_tech_var_samp_fields';
  stack_id?: Maybe<Scalars['Float']>;
  tech_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "stack_tech" */
export type Stack_Tech_Var_Samp_Order_By = {
  stack_id?: InputMaybe<Order_By>;
  tech_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Stack_Tech_Variance_Fields = {
  __typename?: 'stack_tech_variance_fields';
  stack_id?: Maybe<Scalars['Float']>;
  tech_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "stack_tech" */
export type Stack_Tech_Variance_Order_By = {
  stack_id?: InputMaybe<Order_By>;
  tech_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "stacks" */
export type Stacks = {
  __typename?: 'stacks';
  /** An object relationship */
  author?: Maybe<Users>;
  author_id?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  org_id?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  /** An array relationship */
  technologies: Array<Stack_Tech>;
  /** An aggregated array relationship */
  technologies_aggregate: Stack_Tech_Aggregate;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "stacks" */
export type StacksTechnologiesArgs = {
  distinct_on?: InputMaybe<Array<Stack_Tech_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stack_Tech_Order_By>>;
  where?: InputMaybe<Stack_Tech_Bool_Exp>;
};


/** columns and relationships of "stacks" */
export type StacksTechnologies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stack_Tech_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stack_Tech_Order_By>>;
  where?: InputMaybe<Stack_Tech_Bool_Exp>;
};

/** aggregated selection of "stacks" */
export type Stacks_Aggregate = {
  __typename?: 'stacks_aggregate';
  aggregate?: Maybe<Stacks_Aggregate_Fields>;
  nodes: Array<Stacks>;
};

/** aggregate fields of "stacks" */
export type Stacks_Aggregate_Fields = {
  __typename?: 'stacks_aggregate_fields';
  avg?: Maybe<Stacks_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Stacks_Max_Fields>;
  min?: Maybe<Stacks_Min_Fields>;
  stddev?: Maybe<Stacks_Stddev_Fields>;
  stddev_pop?: Maybe<Stacks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stacks_Stddev_Samp_Fields>;
  sum?: Maybe<Stacks_Sum_Fields>;
  var_pop?: Maybe<Stacks_Var_Pop_Fields>;
  var_samp?: Maybe<Stacks_Var_Samp_Fields>;
  variance?: Maybe<Stacks_Variance_Fields>;
};


/** aggregate fields of "stacks" */
export type Stacks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stacks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stacks" */
export type Stacks_Aggregate_Order_By = {
  avg?: InputMaybe<Stacks_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Stacks_Max_Order_By>;
  min?: InputMaybe<Stacks_Min_Order_By>;
  stddev?: InputMaybe<Stacks_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Stacks_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Stacks_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Stacks_Sum_Order_By>;
  var_pop?: InputMaybe<Stacks_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Stacks_Var_Samp_Order_By>;
  variance?: InputMaybe<Stacks_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Stacks_Avg_Fields = {
  __typename?: 'stacks_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "stacks" */
export type Stacks_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "stacks". All fields are combined with a logical 'AND'. */
export type Stacks_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Stacks_Bool_Exp>>>;
  _not?: InputMaybe<Stacks_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Stacks_Bool_Exp>>>;
  author?: InputMaybe<Users_Bool_Exp>;
  author_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  org_id?: InputMaybe<String_Comparison_Exp>;
  tagline?: InputMaybe<String_Comparison_Exp>;
  technologies?: InputMaybe<Stack_Tech_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Stacks_Max_Fields = {
  __typename?: 'stacks_max_fields';
  author_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  org_id?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "stacks" */
export type Stacks_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
  tagline?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Stacks_Min_Fields = {
  __typename?: 'stacks_min_fields';
  author_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  org_id?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "stacks" */
export type Stacks_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
  tagline?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "stacks" */
export type Stacks_Order_By = {
  author?: InputMaybe<Users_Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
  tagline?: InputMaybe<Order_By>;
  technologies_aggregate?: InputMaybe<Stack_Tech_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "stacks" */
export type Stacks_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "stacks" */
export enum Stacks_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  OrgId = 'org_id',
  /** column name */
  Tagline = 'tagline',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Stacks_Stddev_Fields = {
  __typename?: 'stacks_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "stacks" */
export type Stacks_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Stacks_Stddev_Pop_Fields = {
  __typename?: 'stacks_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "stacks" */
export type Stacks_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Stacks_Stddev_Samp_Fields = {
  __typename?: 'stacks_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "stacks" */
export type Stacks_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Stacks_Sum_Fields = {
  __typename?: 'stacks_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "stacks" */
export type Stacks_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Stacks_Var_Pop_Fields = {
  __typename?: 'stacks_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "stacks" */
export type Stacks_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Stacks_Var_Samp_Fields = {
  __typename?: 'stacks_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "stacks" */
export type Stacks_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Stacks_Variance_Fields = {
  __typename?: 'stacks_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "stacks" */
export type Stacks_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  category?: Maybe<Categories>;
  /** fetch data from the table: "layers" */
  layers: Array<Layers>;
  /** fetch aggregated fields from the table: "layers" */
  layers_aggregate: Layers_Aggregate;
  /** fetch data from the table: "layers" using primary key columns */
  layers_by_pk?: Maybe<Layers>;
  /** fetch data from the table: "stacks" using primary key columns */
  stack?: Maybe<Stacks>;
  /** fetch data from the table: "stack_tech" */
  stack_tech: Array<Stack_Tech>;
  /** fetch aggregated fields from the table: "stack_tech" */
  stack_tech_aggregate: Stack_Tech_Aggregate;
  /** fetch data from the table: "stack_tech" using primary key columns */
  stack_tech_by_pk?: Maybe<Stack_Tech>;
  /** fetch data from the table: "stacks" */
  stacks: Array<Stacks>;
  /** fetch aggregated fields from the table: "stacks" */
  stacks_aggregate: Stacks_Aggregate;
  /** fetch data from the table: "technologies" */
  technologies: Array<Technologies>;
  /** fetch aggregated fields from the table: "technologies" */
  technologies_aggregate: Technologies_Aggregate;
  /** fetch data from the table: "technologies" using primary key columns */
  technology?: Maybe<Technologies>;
  /** fetch data from the table: "users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
};


/** subscription root */
export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCategoryArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootLayersArgs = {
  distinct_on?: InputMaybe<Array<Layers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Layers_Order_By>>;
  where?: InputMaybe<Layers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLayers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Layers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Layers_Order_By>>;
  where?: InputMaybe<Layers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLayers_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootStackArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootStack_TechArgs = {
  distinct_on?: InputMaybe<Array<Stack_Tech_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stack_Tech_Order_By>>;
  where?: InputMaybe<Stack_Tech_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStack_Tech_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stack_Tech_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stack_Tech_Order_By>>;
  where?: InputMaybe<Stack_Tech_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStack_Tech_By_PkArgs = {
  stack_id: Scalars['Int'];
  tech_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootStacksArgs = {
  distinct_on?: InputMaybe<Array<Stacks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stacks_Order_By>>;
  where?: InputMaybe<Stacks_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStacks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stacks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stacks_Order_By>>;
  where?: InputMaybe<Stacks_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTechnologiesArgs = {
  distinct_on?: InputMaybe<Array<Technologies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Technologies_Order_By>>;
  where?: InputMaybe<Technologies_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTechnologies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Technologies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Technologies_Order_By>>;
  where?: InputMaybe<Technologies_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTechnologyArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUserArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "technologies" */
export type Technologies = {
  __typename?: 'technologies';
  /** An object relationship */
  author?: Maybe<Users>;
  author_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  category?: Maybe<Categories>;
  category_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['Int'];
  /** An object relationship */
  layer?: Maybe<Layers>;
  layer_id?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  /** An array relationship */
  stacks: Array<Stack_Tech>;
  /** An aggregated array relationship */
  stacks_aggregate: Stack_Tech_Aggregate;
  tagline?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['jsonb']>;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "technologies" */
export type TechnologiesStacksArgs = {
  distinct_on?: InputMaybe<Array<Stack_Tech_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stack_Tech_Order_By>>;
  where?: InputMaybe<Stack_Tech_Bool_Exp>;
};


/** columns and relationships of "technologies" */
export type TechnologiesStacks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stack_Tech_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stack_Tech_Order_By>>;
  where?: InputMaybe<Stack_Tech_Bool_Exp>;
};


/** columns and relationships of "technologies" */
export type TechnologiesTagsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "technologies" */
export type Technologies_Aggregate = {
  __typename?: 'technologies_aggregate';
  aggregate?: Maybe<Technologies_Aggregate_Fields>;
  nodes: Array<Technologies>;
};

/** aggregate fields of "technologies" */
export type Technologies_Aggregate_Fields = {
  __typename?: 'technologies_aggregate_fields';
  avg?: Maybe<Technologies_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Technologies_Max_Fields>;
  min?: Maybe<Technologies_Min_Fields>;
  stddev?: Maybe<Technologies_Stddev_Fields>;
  stddev_pop?: Maybe<Technologies_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Technologies_Stddev_Samp_Fields>;
  sum?: Maybe<Technologies_Sum_Fields>;
  var_pop?: Maybe<Technologies_Var_Pop_Fields>;
  var_samp?: Maybe<Technologies_Var_Samp_Fields>;
  variance?: Maybe<Technologies_Variance_Fields>;
};


/** aggregate fields of "technologies" */
export type Technologies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Technologies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "technologies" */
export type Technologies_Aggregate_Order_By = {
  avg?: InputMaybe<Technologies_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Technologies_Max_Order_By>;
  min?: InputMaybe<Technologies_Min_Order_By>;
  stddev?: InputMaybe<Technologies_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Technologies_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Technologies_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Technologies_Sum_Order_By>;
  var_pop?: InputMaybe<Technologies_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Technologies_Var_Samp_Order_By>;
  variance?: InputMaybe<Technologies_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Technologies_Avg_Fields = {
  __typename?: 'technologies_avg_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  layer_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "technologies" */
export type Technologies_Avg_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  layer_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "technologies". All fields are combined with a logical 'AND'. */
export type Technologies_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Technologies_Bool_Exp>>>;
  _not?: InputMaybe<Technologies_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Technologies_Bool_Exp>>>;
  author?: InputMaybe<Users_Bool_Exp>;
  author_id?: InputMaybe<String_Comparison_Exp>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  layer?: InputMaybe<Layers_Bool_Exp>;
  layer_id?: InputMaybe<Int_Comparison_Exp>;
  link?: InputMaybe<String_Comparison_Exp>;
  logo?: InputMaybe<String_Comparison_Exp>;
  stacks?: InputMaybe<Stack_Tech_Bool_Exp>;
  tagline?: InputMaybe<String_Comparison_Exp>;
  tags?: InputMaybe<Jsonb_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Technologies_Max_Fields = {
  __typename?: 'technologies_max_fields';
  author_id?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  layer_id?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "technologies" */
export type Technologies_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  layer_id?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  logo?: InputMaybe<Order_By>;
  tagline?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Technologies_Min_Fields = {
  __typename?: 'technologies_min_fields';
  author_id?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  layer_id?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "technologies" */
export type Technologies_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  layer_id?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  logo?: InputMaybe<Order_By>;
  tagline?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "technologies" */
export type Technologies_Order_By = {
  author?: InputMaybe<Users_Order_By>;
  author_id?: InputMaybe<Order_By>;
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  layer?: InputMaybe<Layers_Order_By>;
  layer_id?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  logo?: InputMaybe<Order_By>;
  stacks_aggregate?: InputMaybe<Stack_Tech_Aggregate_Order_By>;
  tagline?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "technologies" */
export type Technologies_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "technologies" */
export enum Technologies_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  LayerId = 'layer_id',
  /** column name */
  Link = 'link',
  /** column name */
  Logo = 'logo',
  /** column name */
  Tagline = 'tagline',
  /** column name */
  Tags = 'tags',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Technologies_Stddev_Fields = {
  __typename?: 'technologies_stddev_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  layer_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "technologies" */
export type Technologies_Stddev_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  layer_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Technologies_Stddev_Pop_Fields = {
  __typename?: 'technologies_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  layer_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "technologies" */
export type Technologies_Stddev_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  layer_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Technologies_Stddev_Samp_Fields = {
  __typename?: 'technologies_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  layer_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "technologies" */
export type Technologies_Stddev_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  layer_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Technologies_Sum_Fields = {
  __typename?: 'technologies_sum_fields';
  category_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  layer_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "technologies" */
export type Technologies_Sum_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  layer_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Technologies_Var_Pop_Fields = {
  __typename?: 'technologies_var_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  layer_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "technologies" */
export type Technologies_Var_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  layer_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Technologies_Var_Samp_Fields = {
  __typename?: 'technologies_var_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  layer_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "technologies" */
export type Technologies_Var_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  layer_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Technologies_Variance_Fields = {
  __typename?: 'technologies_variance_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  layer_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "technologies" */
export type Technologies_Variance_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  layer_id?: InputMaybe<Order_By>;
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  id: Scalars['String'];
  name: Scalars['String'];
  org_id: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  /** An array relationship */
  stacks: Array<Stacks>;
  /** An aggregated array relationship */
  stacks_aggregate: Stacks_Aggregate;
};


/** columns and relationships of "users" */
export type UsersStacksArgs = {
  distinct_on?: InputMaybe<Array<Stacks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stacks_Order_By>>;
  where?: InputMaybe<Stacks_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersStacks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stacks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stacks_Order_By>>;
  where?: InputMaybe<Stacks_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Users_Bool_Exp>>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Users_Bool_Exp>>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  org_id?: InputMaybe<String_Comparison_Exp>;
  picture?: InputMaybe<String_Comparison_Exp>;
  stacks?: InputMaybe<Stacks_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
  picture?: InputMaybe<Order_By>;
  stacks_aggregate?: InputMaybe<Stacks_Aggregate_Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrgId = 'org_id',
  /** column name */
  Picture = 'picture'
}

export type GetTechByLayerQueryVariables = Exact<{
  layer: Scalars['String'];
}>;


export type GetTechByLayerQuery = { __typename?: 'query_root', technologies: Array<{ __typename?: 'technologies', id: number, title: string, description: string, link?: string | null, author?: { __typename?: 'users', name: string, id: string } | null }> };


export const GetTechByLayerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTechByLayer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"layer"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"technologies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"layer"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"layer"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetTechByLayerQuery, GetTechByLayerQueryVariables>;