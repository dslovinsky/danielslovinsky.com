export interface DatoRecord {
  id: string;
  type: 'item';
  attributes: Attributes;
  relationships: Relationships;
  meta: Meta;
}

export type Attributes = Record<string, unknown>;

export interface ImageCardProduct {
  alt: null;
  title: null;
  custom_data: CustomData;
  focal_point: null;
  upload_id: string;
}

export interface CustomData {
  [key: string]: unknown;
}

export interface SEOSettings {
  image: string;
  title: string;
  no_index: boolean;
  description: string;
  twitter_card: string;
}

export interface Meta {
  created_at: Date;
  updated_at: Date;
  published_at: Date;
  publication_scheduled_at: null;
  unpublishing_scheduled_at: null;
  first_published_at: Date;
  is_valid: boolean;
  is_current_version_valid: boolean;
  is_published_version_valid: boolean;
  status: string;
  current_version: string;
  stage: null;
}

export interface Relationships {
  item_type: Creator;
  creator: Creator;
}

export interface Creator {
  data: Data;
}

export interface Data {
  id: string;
  type: string;
}
