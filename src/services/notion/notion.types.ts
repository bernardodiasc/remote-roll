import type { QueryDatabaseResponse, ListBlockChildrenResponse } from '@notionhq/client/build/src/api-endpoints'

type NotionResponse = {
  object?: 'list'
  next_cursor?: string
  has_more?: boolean
  page_or_database?: unknown
  request_id?: string
}

/* NotionDataBase */

type TagsType = {
  id?: string
  type?: string
  multi_select?: {
    id?: string
    name?: string
    color?: string
  }[]
}

type NameType = {
  id?: string
  type?: string
  title?: {
    type?: string
    text?: {
      content?: string
      link?: string | null
    }
    annotations?: {
      bold?: boolean
      italic?: boolean
      strikethrough?: boolean
      underline?: boolean
      code?: boolean
      color?: string
    }
    plain_text?: string
    href?: string | null
  }[]
}

type NotionDataBase = {
  object?: 'page'
  id?: string
  created_time?: string
  last_edited_time?: string
  created_by?: {
    object?: string
    id?: string
  }
  last_edited_by?: {
    object?: string
    id?: string
  }
  cover?: string | null
  icon?: string | null
  parent?: {
    type?: string
    id?: string
  }
  archived?: boolean
  properties?: {
    Tags: TagsType
    Name: NameType
  }
  url?: string
  public_url?: string | null
}

export interface IGetNotionDataBaseReturn extends NotionResponse {
  type?: 'page_or_database'
  results?: NotionDataBase[]
}

export interface IGetNotionDataBase {
  (database_id: string): Promise<'' | QueryDatabaseResponse>
}

/* NotionPage */

export type NotionPage = {
  object?: string
  id?: string
  parent?: {
    type?: string
    page_id?: string
  },
  created_time?: string
  last_edited_time?: string
  created_by?: {
    object?: string
    id?: string
  },
  last_edited_by?: {
    object?: string
    id?: string
  },
  has_children?: false,
  archived?: false,
  type: string
}

export interface IGetNotionPageReturn extends NotionResponse {
  type?: 'block'
  results: NotionPage[]
}

export interface IGetNotionPage {
  (page_id: string): Promise<'' | ListBlockChildrenResponse>
}
