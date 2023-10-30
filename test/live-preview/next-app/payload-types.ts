/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User
    pages: Page
    posts: Post
    categories: Category
    media: Media
    'payload-preferences': PayloadPreference
    'payload-migrations': PayloadMigration
  }
  globals: {
    header: Header
    footer: Footer
  }
}
export interface User {
  id: string
  updatedAt: string
  createdAt: string
  email: string
  resetPasswordToken?: string
  resetPasswordExpiration?: string
  salt?: string
  hash?: string
  loginAttempts?: number
  lockUntil?: string
  password: string
}
export interface Page {
  id: string
  slug: string
  title: string
  hero: {
    type: 'none' | 'highImpact' | 'lowImpact'
    richText?: {
      [k: string]: unknown
    }[]
    media: string | Media
  }
  layout?: (
    | {
        invertBackground?: boolean
        richText?: {
          [k: string]: unknown
        }[]
        links?: {
          link: {
            type?: 'reference' | 'custom'
            newTab?: boolean
            reference: {
              relationTo: 'pages'
              value: string | Page
            }
            url: string
            label: string
            appearance?: 'primary' | 'secondary'
          }
          id?: string
        }[]
        id?: string
        blockName?: string
        blockType: 'cta'
      }
    | {
        invertBackground?: boolean
        columns?: {
          size?: 'oneThird' | 'half' | 'twoThirds' | 'full'
          richText?: {
            [k: string]: unknown
          }[]
          enableLink?: boolean
          link?: {
            type?: 'reference' | 'custom'
            newTab?: boolean
            reference: {
              relationTo: 'pages'
              value: string | Page
            }
            url: string
            label: string
            appearance?: 'default' | 'primary' | 'secondary'
          }
          id?: string
        }[]
        id?: string
        blockName?: string
        blockType: 'content'
      }
    | {
        invertBackground?: boolean
        position?: 'default' | 'fullscreen'
        media: string | Media
        id?: string
        blockName?: string
        blockType: 'mediaBlock'
      }
    | {
        introContent?: {
          [k: string]: unknown
        }[]
        populateBy?: 'collection' | 'selection'
        relationTo?: 'posts'
        categories?: string[] | Category[]
        limit?: number
        selectedDocs?:
          | {
              relationTo: 'posts'
              value: string
            }[]
          | {
              relationTo: 'posts'
              value: Post
            }[]
        populatedDocs?:
          | {
              relationTo: 'posts'
              value: string
            }[]
          | {
              relationTo: 'posts'
              value: Post
            }[]
        populatedDocsTotal?: number
        id?: string
        blockName?: string
        blockType: 'archive'
      }
  )[]
  meta?: {
    title?: string
    description?: string
    image?: string | Media
  }
  updatedAt: string
  createdAt: string
}
export interface Media {
  id: string
  alt: string
  caption?: {
    [k: string]: unknown
  }[]
  updatedAt: string
  createdAt: string
  url?: string
  filename?: string
  mimeType?: string
  filesize?: number
  width?: number
  height?: number
}
export interface Category {
  id: string
  title?: string
  updatedAt: string
  createdAt: string
}
export interface Post {
  id: string
  slug: string
  title: string
  hero: {
    type: 'none' | 'highImpact' | 'lowImpact'
    richText?: {
      [k: string]: unknown
    }[]
    media: string | Media
  }
  layout?: (
    | {
        invertBackground?: boolean
        richText?: {
          [k: string]: unknown
        }[]
        links?: {
          link: {
            type?: 'reference' | 'custom'
            newTab?: boolean
            reference: {
              relationTo: 'pages'
              value: string | Page
            }
            url: string
            label: string
            appearance?: 'primary' | 'secondary'
          }
          id?: string
        }[]
        id?: string
        blockName?: string
        blockType: 'cta'
      }
    | {
        invertBackground?: boolean
        columns?: {
          size?: 'oneThird' | 'half' | 'twoThirds' | 'full'
          richText?: {
            [k: string]: unknown
          }[]
          enableLink?: boolean
          link?: {
            type?: 'reference' | 'custom'
            newTab?: boolean
            reference: {
              relationTo: 'pages'
              value: string | Page
            }
            url: string
            label: string
            appearance?: 'default' | 'primary' | 'secondary'
          }
          id?: string
        }[]
        id?: string
        blockName?: string
        blockType: 'content'
      }
    | {
        invertBackground?: boolean
        position?: 'default' | 'fullscreen'
        media: string | Media
        id?: string
        blockName?: string
        blockType: 'mediaBlock'
      }
    | {
        introContent?: {
          [k: string]: unknown
        }[]
        populateBy?: 'collection' | 'selection'
        relationTo?: 'posts'
        categories?: string[] | Category[]
        limit?: number
        selectedDocs?:
          | {
              relationTo: 'posts'
              value: string
            }[]
          | {
              relationTo: 'posts'
              value: Post
            }[]
        populatedDocs?:
          | {
              relationTo: 'posts'
              value: string
            }[]
          | {
              relationTo: 'posts'
              value: Post
            }[]
        populatedDocsTotal?: number
        id?: string
        blockName?: string
        blockType: 'archive'
      }
  )[]
  relatedPosts?: string[] | Post[]
  meta?: {
    title?: string
    description?: string
    image?: string | Media
  }
  updatedAt: string
  createdAt: string
}
export interface PayloadPreference {
  id: string
  user: {
    relationTo: 'users'
    value: string | User
  }
  key?: string
  value?:
    | {
        [k: string]: unknown
      }
    | unknown[]
    | string
    | number
    | boolean
    | null
  updatedAt: string
  createdAt: string
}
export interface PayloadMigration {
  id: string
  name?: string
  batch?: number
  updatedAt: string
  createdAt: string
}
export interface Header {
  id: string
  navItems?: {
    link: {
      type?: 'reference' | 'custom'
      newTab?: boolean
      reference: {
        relationTo: 'pages'
        value: string | Page
      }
      url: string
      label: string
      appearance?: 'default' | 'primary' | 'secondary'
    }
    id?: string
  }[]
  updatedAt?: string
  createdAt?: string
}
export interface Footer {
  id: string
  navItems?: {
    link: {
      type?: 'reference' | 'custom'
      newTab?: boolean
      reference: {
        relationTo: 'pages'
        value: string | Page
      }
      url: string
      label: string
      appearance?: 'default' | 'primary' | 'secondary'
    }
    id?: string
  }[]
  updatedAt?: string
  createdAt?: string
}

declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}