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
  timestamptz: any;
  uuid: any;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc = 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast = 'DESC_NULLS_LAST'
}

/** Organization user management */
export type OrgUsers = {
  __typename?: 'OrgUsers';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  org: Orgs;
  orgId: Scalars['String'];
  role: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "org_users" */
export type OrgUsersAggregate = {
  __typename?: 'OrgUsersAggregate';
  aggregate?: Maybe<OrgUsersAggregateFields>;
  nodes: Array<OrgUsers>;
};

/** aggregate fields of "org_users" */
export type OrgUsersAggregateFields = {
  __typename?: 'OrgUsersAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<OrgUsersMaxFields>;
  min?: Maybe<OrgUsersMinFields>;
};


/** aggregate fields of "org_users" */
export type OrgUsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OrgUsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "org_users" */
export type OrgUsersAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Org_Users_Max_Order_By>;
  min?: InputMaybe<Org_Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "org_users" */
export type OrgUsersArrRelInsertInput = {
  data: Array<OrgUsersInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<OrgUsersOnConflict>;
};

/** Boolean expression to filter rows from the table "org_users". All fields are combined with a logical 'AND'. */
export type OrgUsersBoolExp = {
  _and?: InputMaybe<Array<OrgUsersBoolExp>>;
  _not?: InputMaybe<OrgUsersBoolExp>;
  _or?: InputMaybe<Array<OrgUsersBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  org?: InputMaybe<OrgsBoolExp>;
  orgId?: InputMaybe<StringComparisonExp>;
  role?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "org_users" */
export enum OrgUsersConstraint {
  /** unique or primary key constraint on columns "org_id", "user_id" */
  OrgUsersPkey = 'org_users_pkey'
}

/** input type for inserting data into table "org_users" */
export type OrgUsersInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  org?: InputMaybe<OrgsObjRelInsertInput>;
  orgId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type OrgUsersMaxFields = {
  __typename?: 'OrgUsersMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  orgId?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type OrgUsersMinFields = {
  __typename?: 'OrgUsersMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  orgId?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "org_users" */
export type OrgUsersMutationResponse = {
  __typename?: 'OrgUsersMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<OrgUsers>;
};

/** on_conflict condition type for table "org_users" */
export type OrgUsersOnConflict = {
  constraint: OrgUsersConstraint;
  update_columns?: Array<OrgUsersUpdateColumn>;
  where?: InputMaybe<OrgUsersBoolExp>;
};

/** Ordering options when selecting data from "org_users". */
export type OrgUsersOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  org?: InputMaybe<OrgsOrderBy>;
  orgId?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: org_users */
export type OrgUsersPkColumnsInput = {
  orgId: Scalars['String'];
  userId: Scalars['uuid'];
};

/** select columns of table "org_users" */
export enum OrgUsersSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "org_users" */
export type OrgUsersSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  orgId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "org_users" */
export enum OrgUsersUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type OrgUsersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OrgUsersSetInput>;
  where: OrgUsersBoolExp;
};

/** Organizations */
export type Orgs = {
  __typename?: 'Orgs';
  createdAt: Scalars['timestamptz'];
  id: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  teams: Array<Teams>;
  /** An aggregate relationship */
  teamsAggregate: TeamsAggregate;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  users: Array<OrgUsers>;
  /** An aggregate relationship */
  usersAggregate: OrgUsersAggregate;
};


/** Organizations */
export type OrgsTeamsArgs = {
  distinctOn?: InputMaybe<Array<TeamsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamsOrderBy>>;
  where?: InputMaybe<TeamsBoolExp>;
};


/** Organizations */
export type OrgsTeamsAggregateArgs = {
  distinctOn?: InputMaybe<Array<TeamsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamsOrderBy>>;
  where?: InputMaybe<TeamsBoolExp>;
};


/** Organizations */
export type OrgsUsersArgs = {
  distinctOn?: InputMaybe<Array<OrgUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrgUsersOrderBy>>;
  where?: InputMaybe<OrgUsersBoolExp>;
};


/** Organizations */
export type OrgsUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrgUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrgUsersOrderBy>>;
  where?: InputMaybe<OrgUsersBoolExp>;
};

/** aggregated selection of "orgs" */
export type OrgsAggregate = {
  __typename?: 'OrgsAggregate';
  aggregate?: Maybe<OrgsAggregateFields>;
  nodes: Array<Orgs>;
};

/** aggregate fields of "orgs" */
export type OrgsAggregateFields = {
  __typename?: 'OrgsAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<OrgsMaxFields>;
  min?: Maybe<OrgsMinFields>;
};


/** aggregate fields of "orgs" */
export type OrgsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OrgsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "orgs". All fields are combined with a logical 'AND'. */
export type OrgsBoolExp = {
  _and?: InputMaybe<Array<OrgsBoolExp>>;
  _not?: InputMaybe<OrgsBoolExp>;
  _or?: InputMaybe<Array<OrgsBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  teams?: InputMaybe<TeamsBoolExp>;
  teams_aggregate?: InputMaybe<Teams_Aggregate_Bool_Exp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  users?: InputMaybe<OrgUsersBoolExp>;
  users_aggregate?: InputMaybe<Org_Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "orgs" */
export enum OrgsConstraint {
  /** unique or primary key constraint on columns "id" */
  OrgsPkey = 'orgs_pkey'
}

/** input type for inserting data into table "orgs" */
export type OrgsInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  teams?: InputMaybe<TeamsArrRelInsertInput>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  users?: InputMaybe<OrgUsersArrRelInsertInput>;
};

/** aggregate max on columns */
export type OrgsMaxFields = {
  __typename?: 'OrgsMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type OrgsMinFields = {
  __typename?: 'OrgsMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "orgs" */
export type OrgsMutationResponse = {
  __typename?: 'OrgsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Orgs>;
};

/** input type for inserting object relation for remote table "orgs" */
export type OrgsObjRelInsertInput = {
  data: OrgsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<OrgsOnConflict>;
};

/** on_conflict condition type for table "orgs" */
export type OrgsOnConflict = {
  constraint: OrgsConstraint;
  update_columns?: Array<OrgsUpdateColumn>;
  where?: InputMaybe<OrgsBoolExp>;
};

/** Ordering options when selecting data from "orgs". */
export type OrgsOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  teamsAggregate?: InputMaybe<TeamsAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  usersAggregate?: InputMaybe<OrgUsersAggregateOrderBy>;
};

/** primary key columns input for table: orgs */
export type OrgsPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "orgs" */
export enum OrgsSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "orgs" */
export type OrgsSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "orgs" */
export enum OrgsUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type OrgsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OrgsSetInput>;
  where: OrgsBoolExp;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** The members of a team */
export type TeamUsers = {
  __typename?: 'TeamUsers';
  createdAt: Scalars['timestamptz'];
  role: Scalars['String'];
  /** An object relationship */
  team: Teams;
  teamId: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "team_users" */
export type TeamUsersAggregate = {
  __typename?: 'TeamUsersAggregate';
  aggregate?: Maybe<TeamUsersAggregateFields>;
  nodes: Array<TeamUsers>;
};

/** aggregate fields of "team_users" */
export type TeamUsersAggregateFields = {
  __typename?: 'TeamUsersAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<TeamUsersMaxFields>;
  min?: Maybe<TeamUsersMinFields>;
};


/** aggregate fields of "team_users" */
export type TeamUsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TeamUsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "team_users" */
export type TeamUsersAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Team_Users_Max_Order_By>;
  min?: InputMaybe<Team_Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "team_users" */
export type TeamUsersArrRelInsertInput = {
  data: Array<TeamUsersInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<TeamUsersOnConflict>;
};

/** Boolean expression to filter rows from the table "team_users". All fields are combined with a logical 'AND'. */
export type TeamUsersBoolExp = {
  _and?: InputMaybe<Array<TeamUsersBoolExp>>;
  _not?: InputMaybe<TeamUsersBoolExp>;
  _or?: InputMaybe<Array<TeamUsersBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  role?: InputMaybe<StringComparisonExp>;
  team?: InputMaybe<TeamsBoolExp>;
  teamId?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "team_users" */
export enum TeamUsersConstraint {
  /** unique or primary key constraint on columns "user_id", "team_id" */
  TeamMembersPkey = 'team_members_pkey'
}

/** input type for inserting data into table "team_users" */
export type TeamUsersInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  role?: InputMaybe<Scalars['String']>;
  team?: InputMaybe<TeamsObjRelInsertInput>;
  teamId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type TeamUsersMaxFields = {
  __typename?: 'TeamUsersMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  role?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type TeamUsersMinFields = {
  __typename?: 'TeamUsersMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  role?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "team_users" */
export type TeamUsersMutationResponse = {
  __typename?: 'TeamUsersMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TeamUsers>;
};

/** on_conflict condition type for table "team_users" */
export type TeamUsersOnConflict = {
  constraint: TeamUsersConstraint;
  update_columns?: Array<TeamUsersUpdateColumn>;
  where?: InputMaybe<TeamUsersBoolExp>;
};

/** Ordering options when selecting data from "team_users". */
export type TeamUsersOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  team?: InputMaybe<TeamsOrderBy>;
  teamId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: team_users */
export type TeamUsersPkColumnsInput = {
  teamId: Scalars['String'];
  userId: Scalars['uuid'];
};

/** select columns of table "team_users" */
export enum TeamUsersSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Role = 'role',
  /** column name */
  TeamId = 'teamId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "team_users" */
export type TeamUsersSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  role?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "team_users" */
export enum TeamUsersUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Role = 'role',
  /** column name */
  TeamId = 'teamId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type TeamUsersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TeamUsersSetInput>;
  where: TeamUsersBoolExp;
};

/** A Team underneath an Organization */
export type Teams = {
  __typename?: 'Teams';
  createdAt: Scalars['timestamptz'];
  id: Scalars['String'];
  /** An array relationship */
  members: Array<TeamUsers>;
  /** An aggregate relationship */
  membersAggregate: TeamUsersAggregate;
  name: Scalars['String'];
  /** An object relationship */
  org: Orgs;
  orgId: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** A Team underneath an Organization */
export type TeamsMembersArgs = {
  distinctOn?: InputMaybe<Array<TeamUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamUsersOrderBy>>;
  where?: InputMaybe<TeamUsersBoolExp>;
};


/** A Team underneath an Organization */
export type TeamsMembersAggregateArgs = {
  distinctOn?: InputMaybe<Array<TeamUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamUsersOrderBy>>;
  where?: InputMaybe<TeamUsersBoolExp>;
};

/** aggregated selection of "teams" */
export type TeamsAggregate = {
  __typename?: 'TeamsAggregate';
  aggregate?: Maybe<TeamsAggregateFields>;
  nodes: Array<Teams>;
};

/** aggregate fields of "teams" */
export type TeamsAggregateFields = {
  __typename?: 'TeamsAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<TeamsMaxFields>;
  min?: Maybe<TeamsMinFields>;
};


/** aggregate fields of "teams" */
export type TeamsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TeamsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "teams" */
export type TeamsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Teams_Max_Order_By>;
  min?: InputMaybe<Teams_Min_Order_By>;
};

/** input type for inserting array relation for remote table "teams" */
export type TeamsArrRelInsertInput = {
  data: Array<TeamsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<TeamsOnConflict>;
};

/** Boolean expression to filter rows from the table "teams". All fields are combined with a logical 'AND'. */
export type TeamsBoolExp = {
  _and?: InputMaybe<Array<TeamsBoolExp>>;
  _not?: InputMaybe<TeamsBoolExp>;
  _or?: InputMaybe<Array<TeamsBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  members?: InputMaybe<TeamUsersBoolExp>;
  members_aggregate?: InputMaybe<Team_Users_Aggregate_Bool_Exp>;
  name?: InputMaybe<StringComparisonExp>;
  org?: InputMaybe<OrgsBoolExp>;
  orgId?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "teams" */
export enum TeamsConstraint {
  /** unique or primary key constraint on columns "id" */
  TeamsPkey = 'teams_pkey'
}

/** input type for inserting data into table "teams" */
export type TeamsInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<TeamUsersArrRelInsertInput>;
  name?: InputMaybe<Scalars['String']>;
  org?: InputMaybe<OrgsObjRelInsertInput>;
  orgId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TeamsMaxFields = {
  __typename?: 'TeamsMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type TeamsMinFields = {
  __typename?: 'TeamsMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "teams" */
export type TeamsMutationResponse = {
  __typename?: 'TeamsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Teams>;
};

/** input type for inserting object relation for remote table "teams" */
export type TeamsObjRelInsertInput = {
  data: TeamsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<TeamsOnConflict>;
};

/** on_conflict condition type for table "teams" */
export type TeamsOnConflict = {
  constraint: TeamsConstraint;
  update_columns?: Array<TeamsUpdateColumn>;
  where?: InputMaybe<TeamsBoolExp>;
};

/** Ordering options when selecting data from "teams". */
export type TeamsOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  membersAggregate?: InputMaybe<TeamUsersAggregateOrderBy>;
  name?: InputMaybe<OrderBy>;
  org?: InputMaybe<OrgsOrderBy>;
  orgId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: teams */
export type TeamsPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "teams" */
export enum TeamsSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "teams" */
export type TeamsSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  orgId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "teams" */
export enum TeamsUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type TeamsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TeamsSetInput>;
  where: TeamsBoolExp;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'Users';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  orgMemberships: Array<OrgUsers>;
  /** An aggregate relationship */
  orgMembershipsAggregate: OrgUsersAggregate;
  photo?: Maybe<Scalars['String']>;
  /** An array relationship */
  teamMemberships: Array<TeamUsers>;
  /** An aggregate relationship */
  teamMembershipsAggregate: TeamUsersAggregate;
  updatedAt: Scalars['timestamptz'];
  username: Scalars['String'];
};


/** columns and relationships of "users" */
export type UsersOrgMembershipsArgs = {
  distinctOn?: InputMaybe<Array<OrgUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrgUsersOrderBy>>;
  where?: InputMaybe<OrgUsersBoolExp>;
};


/** columns and relationships of "users" */
export type UsersOrgMembershipsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrgUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrgUsersOrderBy>>;
  where?: InputMaybe<OrgUsersBoolExp>;
};


/** columns and relationships of "users" */
export type UsersTeamMembershipsArgs = {
  distinctOn?: InputMaybe<Array<TeamUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamUsersOrderBy>>;
  where?: InputMaybe<TeamUsersBoolExp>;
};


/** columns and relationships of "users" */
export type UsersTeamMembershipsAggregateArgs = {
  distinctOn?: InputMaybe<Array<TeamUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamUsersOrderBy>>;
  where?: InputMaybe<TeamUsersBoolExp>;
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: 'UsersAggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: 'UsersAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
};


/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  orgMemberships?: InputMaybe<OrgUsersBoolExp>;
  orgMemberships_aggregate?: InputMaybe<Org_Users_Aggregate_Bool_Exp>;
  photo?: InputMaybe<StringComparisonExp>;
  teamMemberships?: InputMaybe<TeamUsersBoolExp>;
  teamMemberships_aggregate?: InputMaybe<Team_Users_Aggregate_Bool_Exp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  username?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint on columns "username" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  orgMemberships?: InputMaybe<OrgUsersArrRelInsertInput>;
  photo?: InputMaybe<Scalars['String']>;
  teamMemberships?: InputMaybe<TeamUsersArrRelInsertInput>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'UsersMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'UsersMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: 'UsersMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<UsersOnConflict>;
};

/** on_conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  orgMembershipsAggregate?: InputMaybe<OrgUsersAggregateOrderBy>;
  photo?: InputMaybe<OrderBy>;
  teamMembershipsAggregate?: InputMaybe<TeamUsersAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Photo = 'photo',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  username?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Photo = 'photo',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username'
}

export type UsersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "org_users" */
  deleteOrgUsers?: Maybe<OrgUsersMutationResponse>;
  /** delete single row from the table: "org_users" */
  deleteOrgUsersByPk?: Maybe<OrgUsers>;
  /** delete data from the table: "orgs" */
  deleteOrgs?: Maybe<OrgsMutationResponse>;
  /** delete single row from the table: "orgs" */
  deleteOrgsByPk?: Maybe<Orgs>;
  /** delete data from the table: "team_users" */
  deleteTeamUsers?: Maybe<TeamUsersMutationResponse>;
  /** delete single row from the table: "team_users" */
  deleteTeamUsersByPk?: Maybe<TeamUsers>;
  /** delete data from the table: "teams" */
  deleteTeams?: Maybe<TeamsMutationResponse>;
  /** delete single row from the table: "teams" */
  deleteTeamsByPk?: Maybe<Teams>;
  /** delete data from the table: "users" */
  deleteUsers?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  deleteUsersByPk?: Maybe<Users>;
  /** insert data into the table: "org_users" */
  insertOrgUsers?: Maybe<OrgUsersMutationResponse>;
  /** insert a single row into the table: "org_users" */
  insertOrgUsersOne?: Maybe<OrgUsers>;
  /** insert data into the table: "orgs" */
  insertOrgs?: Maybe<OrgsMutationResponse>;
  /** insert a single row into the table: "orgs" */
  insertOrgsOne?: Maybe<Orgs>;
  /** insert data into the table: "team_users" */
  insertTeamUsers?: Maybe<TeamUsersMutationResponse>;
  /** insert a single row into the table: "team_users" */
  insertTeamUsersOne?: Maybe<TeamUsers>;
  /** insert data into the table: "teams" */
  insertTeams?: Maybe<TeamsMutationResponse>;
  /** insert a single row into the table: "teams" */
  insertTeamsOne?: Maybe<Teams>;
  /** insert data into the table: "users" */
  insertUsers?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insertUsersOne?: Maybe<Users>;
  /** update data of the table: "org_users" */
  updateOrgUsers?: Maybe<OrgUsersMutationResponse>;
  /** update single row of the table: "org_users" */
  updateOrgUsersByPk?: Maybe<OrgUsers>;
  /** update multiples rows of table: "org_users" */
  updateOrgUsersMany?: Maybe<Array<Maybe<OrgUsersMutationResponse>>>;
  /** update data of the table: "orgs" */
  updateOrgs?: Maybe<OrgsMutationResponse>;
  /** update single row of the table: "orgs" */
  updateOrgsByPk?: Maybe<Orgs>;
  /** update multiples rows of table: "orgs" */
  updateOrgsMany?: Maybe<Array<Maybe<OrgsMutationResponse>>>;
  /** update data of the table: "team_users" */
  updateTeamUsers?: Maybe<TeamUsersMutationResponse>;
  /** update single row of the table: "team_users" */
  updateTeamUsersByPk?: Maybe<TeamUsers>;
  /** update multiples rows of table: "team_users" */
  updateTeamUsersMany?: Maybe<Array<Maybe<TeamUsersMutationResponse>>>;
  /** update data of the table: "teams" */
  updateTeams?: Maybe<TeamsMutationResponse>;
  /** update single row of the table: "teams" */
  updateTeamsByPk?: Maybe<Teams>;
  /** update multiples rows of table: "teams" */
  updateTeamsMany?: Maybe<Array<Maybe<TeamsMutationResponse>>>;
  /** update data of the table: "users" */
  updateUsers?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  updateUsersByPk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  updateUsersMany?: Maybe<Array<Maybe<UsersMutationResponse>>>;
};


/** mutation root */
export type Mutation_RootDeleteOrgUsersArgs = {
  where: OrgUsersBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOrgUsersByPkArgs = {
  orgId: Scalars['String'];
  userId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOrgsArgs = {
  where: OrgsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOrgsByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteTeamUsersArgs = {
  where: TeamUsersBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteTeamUsersByPkArgs = {
  teamId: Scalars['String'];
  userId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteTeamsArgs = {
  where: TeamsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteTeamsByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: UsersBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUsersByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsertOrgUsersArgs = {
  objects: Array<OrgUsersInsertInput>;
  onConflict?: InputMaybe<OrgUsersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOrgUsersOneArgs = {
  object: OrgUsersInsertInput;
  onConflict?: InputMaybe<OrgUsersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOrgsArgs = {
  objects: Array<OrgsInsertInput>;
  onConflict?: InputMaybe<OrgsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOrgsOneArgs = {
  object: OrgsInsertInput;
  onConflict?: InputMaybe<OrgsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertTeamUsersArgs = {
  objects: Array<TeamUsersInsertInput>;
  onConflict?: InputMaybe<TeamUsersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertTeamUsersOneArgs = {
  object: TeamUsersInsertInput;
  onConflict?: InputMaybe<TeamUsersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertTeamsArgs = {
  objects: Array<TeamsInsertInput>;
  onConflict?: InputMaybe<TeamsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertTeamsOneArgs = {
  object: TeamsInsertInput;
  onConflict?: InputMaybe<TeamsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  onConflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersOneArgs = {
  object: UsersInsertInput;
  onConflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type Mutation_RootUpdateOrgUsersArgs = {
  _set?: InputMaybe<OrgUsersSetInput>;
  where: OrgUsersBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateOrgUsersByPkArgs = {
  _set?: InputMaybe<OrgUsersSetInput>;
  pk_columns: OrgUsersPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateOrgUsersManyArgs = {
  updates: Array<OrgUsersUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateOrgsArgs = {
  _set?: InputMaybe<OrgsSetInput>;
  where: OrgsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateOrgsByPkArgs = {
  _set?: InputMaybe<OrgsSetInput>;
  pk_columns: OrgsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateOrgsManyArgs = {
  updates: Array<OrgsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateTeamUsersArgs = {
  _set?: InputMaybe<TeamUsersSetInput>;
  where: TeamUsersBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateTeamUsersByPkArgs = {
  _set?: InputMaybe<TeamUsersSetInput>;
  pk_columns: TeamUsersPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateTeamUsersManyArgs = {
  updates: Array<TeamUsersUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateTeamsArgs = {
  _set?: InputMaybe<TeamsSetInput>;
  where: TeamsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateTeamsByPkArgs = {
  _set?: InputMaybe<TeamsSetInput>;
  pk_columns: TeamsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateTeamsManyArgs = {
  updates: Array<TeamsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUsersByPkArgs = {
  _set?: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUsersManyArgs = {
  updates: Array<UsersUpdates>;
};

export type Org_Users_Aggregate_Bool_Exp = {
  count?: InputMaybe<Org_Users_Aggregate_Bool_Exp_Count>;
};

export type Org_Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<OrgUsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OrgUsersBoolExp>;
  predicate: IntComparisonExp;
};

/** order by max() on columns of table "org_users" */
export type Org_Users_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  orgId?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "org_users" */
export type Org_Users_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  orgId?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "org_users" */
export type Org_Users_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Org_Users_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Org_Users_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  orgId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "orgs" */
export type Orgs_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Orgs_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Orgs_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "org_users" */
  orgUsers: Array<OrgUsers>;
  /** fetch aggregated fields from the table: "org_users" */
  orgUsersAggregate: OrgUsersAggregate;
  /** fetch data from the table: "org_users" using primary key columns */
  orgUsersByPk?: Maybe<OrgUsers>;
  /** fetch data from the table: "orgs" */
  orgs: Array<Orgs>;
  /** fetch aggregated fields from the table: "orgs" */
  orgsAggregate: OrgsAggregate;
  /** fetch data from the table: "orgs" using primary key columns */
  orgsByPk?: Maybe<Orgs>;
  /** fetch data from the table: "team_users" */
  teamUsers: Array<TeamUsers>;
  /** fetch aggregated fields from the table: "team_users" */
  teamUsersAggregate: TeamUsersAggregate;
  /** fetch data from the table: "team_users" using primary key columns */
  teamUsersByPk?: Maybe<TeamUsers>;
  /** An array relationship */
  teams: Array<Teams>;
  /** An aggregate relationship */
  teamsAggregate: TeamsAggregate;
  /** fetch data from the table: "teams" using primary key columns */
  teamsByPk?: Maybe<Teams>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  usersByPk?: Maybe<Users>;
};


export type Query_RootOrgUsersArgs = {
  distinctOn?: InputMaybe<Array<OrgUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrgUsersOrderBy>>;
  where?: InputMaybe<OrgUsersBoolExp>;
};


export type Query_RootOrgUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrgUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrgUsersOrderBy>>;
  where?: InputMaybe<OrgUsersBoolExp>;
};


export type Query_RootOrgUsersByPkArgs = {
  orgId: Scalars['String'];
  userId: Scalars['uuid'];
};


export type Query_RootOrgsArgs = {
  distinctOn?: InputMaybe<Array<OrgsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrgsOrderBy>>;
  where?: InputMaybe<OrgsBoolExp>;
};


export type Query_RootOrgsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrgsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrgsOrderBy>>;
  where?: InputMaybe<OrgsBoolExp>;
};


export type Query_RootOrgsByPkArgs = {
  id: Scalars['String'];
};


export type Query_RootTeamUsersArgs = {
  distinctOn?: InputMaybe<Array<TeamUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamUsersOrderBy>>;
  where?: InputMaybe<TeamUsersBoolExp>;
};


export type Query_RootTeamUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<TeamUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamUsersOrderBy>>;
  where?: InputMaybe<TeamUsersBoolExp>;
};


export type Query_RootTeamUsersByPkArgs = {
  teamId: Scalars['String'];
  userId: Scalars['uuid'];
};


export type Query_RootTeamsArgs = {
  distinctOn?: InputMaybe<Array<TeamsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamsOrderBy>>;
  where?: InputMaybe<TeamsBoolExp>;
};


export type Query_RootTeamsAggregateArgs = {
  distinctOn?: InputMaybe<Array<TeamsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamsOrderBy>>;
  where?: InputMaybe<TeamsBoolExp>;
};


export type Query_RootTeamsByPkArgs = {
  id: Scalars['String'];
};


export type Query_RootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Query_RootUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Query_RootUsersByPkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "org_users" */
  orgUsers: Array<OrgUsers>;
  /** fetch aggregated fields from the table: "org_users" */
  orgUsersAggregate: OrgUsersAggregate;
  /** fetch data from the table: "org_users" using primary key columns */
  orgUsersByPk?: Maybe<OrgUsers>;
  /** fetch data from the table in a streaming manner: "org_users" */
  orgUsersStream: Array<OrgUsers>;
  /** fetch data from the table: "orgs" */
  orgs: Array<Orgs>;
  /** fetch aggregated fields from the table: "orgs" */
  orgsAggregate: OrgsAggregate;
  /** fetch data from the table: "orgs" using primary key columns */
  orgsByPk?: Maybe<Orgs>;
  /** fetch data from the table in a streaming manner: "orgs" */
  orgsStream: Array<Orgs>;
  /** fetch data from the table: "team_users" */
  teamUsers: Array<TeamUsers>;
  /** fetch aggregated fields from the table: "team_users" */
  teamUsersAggregate: TeamUsersAggregate;
  /** fetch data from the table: "team_users" using primary key columns */
  teamUsersByPk?: Maybe<TeamUsers>;
  /** fetch data from the table in a streaming manner: "team_users" */
  teamUsersStream: Array<TeamUsers>;
  /** An array relationship */
  teams: Array<Teams>;
  /** An aggregate relationship */
  teamsAggregate: TeamsAggregate;
  /** fetch data from the table: "teams" using primary key columns */
  teamsByPk?: Maybe<Teams>;
  /** fetch data from the table in a streaming manner: "teams" */
  teamsStream: Array<Teams>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  usersByPk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  usersStream: Array<Users>;
};


export type Subscription_RootOrgUsersArgs = {
  distinctOn?: InputMaybe<Array<OrgUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrgUsersOrderBy>>;
  where?: InputMaybe<OrgUsersBoolExp>;
};


export type Subscription_RootOrgUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrgUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrgUsersOrderBy>>;
  where?: InputMaybe<OrgUsersBoolExp>;
};


export type Subscription_RootOrgUsersByPkArgs = {
  orgId: Scalars['String'];
  userId: Scalars['uuid'];
};


export type Subscription_RootOrgUsersStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Org_Users_StreamCursorInput>>;
  where?: InputMaybe<OrgUsersBoolExp>;
};


export type Subscription_RootOrgsArgs = {
  distinctOn?: InputMaybe<Array<OrgsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrgsOrderBy>>;
  where?: InputMaybe<OrgsBoolExp>;
};


export type Subscription_RootOrgsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrgsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrgsOrderBy>>;
  where?: InputMaybe<OrgsBoolExp>;
};


export type Subscription_RootOrgsByPkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootOrgsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Orgs_StreamCursorInput>>;
  where?: InputMaybe<OrgsBoolExp>;
};


export type Subscription_RootTeamUsersArgs = {
  distinctOn?: InputMaybe<Array<TeamUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamUsersOrderBy>>;
  where?: InputMaybe<TeamUsersBoolExp>;
};


export type Subscription_RootTeamUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<TeamUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamUsersOrderBy>>;
  where?: InputMaybe<TeamUsersBoolExp>;
};


export type Subscription_RootTeamUsersByPkArgs = {
  teamId: Scalars['String'];
  userId: Scalars['uuid'];
};


export type Subscription_RootTeamUsersStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Team_Users_StreamCursorInput>>;
  where?: InputMaybe<TeamUsersBoolExp>;
};


export type Subscription_RootTeamsArgs = {
  distinctOn?: InputMaybe<Array<TeamsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamsOrderBy>>;
  where?: InputMaybe<TeamsBoolExp>;
};


export type Subscription_RootTeamsAggregateArgs = {
  distinctOn?: InputMaybe<Array<TeamsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamsOrderBy>>;
  where?: InputMaybe<TeamsBoolExp>;
};


export type Subscription_RootTeamsByPkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootTeamsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Teams_StreamCursorInput>>;
  where?: InputMaybe<TeamsBoolExp>;
};


export type Subscription_RootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Subscription_RootUsersByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Users_StreamCursorInput>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type Team_Users_Aggregate_Bool_Exp = {
  count?: InputMaybe<Team_Users_Aggregate_Bool_Exp_Count>;
};

export type Team_Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TeamUsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TeamUsersBoolExp>;
  predicate: IntComparisonExp;
};

/** order by max() on columns of table "team_users" */
export type Team_Users_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  teamId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "team_users" */
export type Team_Users_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  teamId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "team_users" */
export type Team_Users_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Team_Users_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Team_Users_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  role?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

export type Teams_Aggregate_Bool_Exp = {
  count?: InputMaybe<Teams_Aggregate_Bool_Exp_Count>;
};

export type Teams_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TeamsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TeamsBoolExp>;
  predicate: IntComparisonExp;
};

/** order by max() on columns of table "teams" */
export type Teams_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  orgId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "teams" */
export type Teams_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  orgId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "teams" */
export type Teams_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Teams_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Teams_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  orgId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "users" */
export type Users_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Users_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  username?: InputMaybe<Scalars['String']>;
};

export type CreateOrgAndTeamMutationVariables = Exact<{
  orgName: Scalars['String'];
  userId: Scalars['uuid'];
  teamName: Scalars['String'];
}>;


export type CreateOrgAndTeamMutation = { __typename?: 'mutation_root', insertOrgsOne?: { __typename?: 'Orgs', id: string, name: string } | null };

export type UserFieldsFragment = { __typename?: 'Users', id: any, name?: string | null, username: string, photo?: string | null };

export type GetUsersByUsernameQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
}>;


export type GetUsersByUsernameQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'Users', id: any, name?: string | null, username: string, photo?: string | null }> };

export type GetUserOrgAndTeamMembershipsQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type GetUserOrgAndTeamMembershipsQuery = { __typename?: 'query_root', user?: { __typename?: 'Users', teamMemberships: Array<{ __typename?: 'TeamUsers', teamId: string }>, orgMemberships: Array<{ __typename?: 'OrgUsers', orgId: string }> } | null };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetUserByIdQuery = { __typename?: 'query_root', user?: { __typename?: 'Users', id: any, name?: string | null, username: string, photo?: string | null } | null };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'Users', id: any, name?: string | null, username: string, photo?: string | null }> };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['uuid'];
  updates?: InputMaybe<UsersSetInput>;
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', user?: { __typename?: 'Users', id: any, name?: string | null, username: string, photo?: string | null } | null };

export type InsertUserMutationVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
}>;


export type InsertUserMutation = { __typename?: 'mutation_root', user?: { __typename?: 'Users', id: any, name?: string | null, username: string, photo?: string | null } | null };

export const UserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}}]}}]} as unknown as DocumentNode<UserFieldsFragment, unknown>;
export const CreateOrgAndTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOrgAndTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orgName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertOrgsOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orgName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"users"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"role"},"value":{"kind":"StringValue","value":"owner","block":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"onConflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"org_users_pkey"}},{"kind":"ObjectField","name":{"kind":"Name","value":"update_columns"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"role"}]}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"teams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"members"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"role"},"value":{"kind":"StringValue","value":"owner","block":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"onConflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"team_members_pkey"}},{"kind":"ObjectField","name":{"kind":"Name","value":"update_columns"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"role"}]}}]}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"onConflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"teams_pkey"}},{"kind":"ObjectField","name":{"kind":"Name","value":"update_columns"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"name"}]}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"onConflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"orgs_pkey"}},{"kind":"ObjectField","name":{"kind":"Name","value":"update_columns"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"name"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateOrgAndTeamMutation, CreateOrgAndTeamMutationVariables>;
export const GetUsersByUsernameDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsersByUsername"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}},...UserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<GetUsersByUsernameQuery, GetUsersByUsernameQueryVariables>;
export const GetUserOrgAndTeamMembershipsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserOrgAndTeamMemberships"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"usersByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamMemberships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"orgMemberships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orgId"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserOrgAndTeamMembershipsQuery, GetUserOrgAndTeamMembershipsQueryVariables>;
export const GetUserByIdDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"usersByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}},...UserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetAllUsersDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}},...UserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const UpdateUserDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updates"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UsersSetInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"updateUsersByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updates"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}},...UserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const InsertUserDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"photo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"insertUsersOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"photo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"photo"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}},...UserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<InsertUserMutation, InsertUserMutationVariables>;