export interface RecordType {
  data: DataClass;
  included: Included[];
}

export interface DataClass {
  id: string;
  type: Type;
  attributes: DataAttributes;
  relationships: DataRelationships;
  meta: Meta;
}

export interface DataAttributes {
  name: string;
  singleton: boolean;
  sortable: boolean;
  api_key: string;
  ordering_direction: null;
  ordering_meta: null;
  tree: boolean;
  modular_block: boolean;
  draft_mode_active: boolean;
  all_locales_required: boolean;
  collection_appearance: string;
  has_singleton_item: boolean;
  hint: null;
  inverse_relationships_enabled: boolean;
}

export interface Meta {
  has_singleton_item: boolean;
}

export interface DataRelationships {
  fields: ExcerptField;
  fieldsets: ExcerptField;
  singleton_item: ExcerptField;
  ordering_field: ExcerptField;
  title_field: ExcerptField;
  image_preview_field: ExcerptField;
  excerpt_field: ExcerptField;
  workflow: ExcerptField;
}

export interface ExcerptField {
  data: DAT[] | DAT | null;
}

export interface DAT {
  id: string;
  type: Type;
}

export enum Type {
  Field = 'field',
  Fieldset = 'fieldset',
  ItemType = 'item_type',
}

export interface Included {
  id: string;
  type: Type;
  attributes: IncludedAttributes;
  relationships: IncludedRelationships;
}

export interface IncludedAttributes {
  label: string;
  field_type: string;
  api_key: string;
  hint: null | string;
  localized: boolean;
  validators: Validators;
  position: number;
  appearance: Appearance;
  default_value: boolean | null | string;
  deep_filtering_enabled: boolean;
}

export interface Appearance {
  addons: unknown[];
  editor: string;
  parameters: Parameters;
  type?: string;
}

export interface Parameters {
  start_collapsed?: boolean;
  url_prefix?: string;
  options?: Option[];
  fields?: string[];
  previews?: string[];
  heading?: boolean;
}

export interface Option {
  hint: string;
  label: string;
  value: string;
}

export interface Validators {
  rich_text_blocks?: RichTextBlocks;
  size?: DescriptionLength;
  items_item_type?: ItemItemType;
  slug_title_field?: SlugTitleField;
  slug_format?: SlugFormat;
  required?: Required;
  unique?: Required;
  required_seo_fields?: RequiredSEOFields;
  title_length?: DescriptionLength;
  description_length?: DescriptionLength;
  extension?: Extension;
  item_item_type?: ItemItemType;
}

export interface DescriptionLength {
  max: number;
}

export interface Extension {
  extensions: unknown[];
  predefined_list: string;
}

export interface ItemItemType {
  on_publish_with_unpublished_references_strategy: string;
  on_reference_unpublish_strategy: string;
  on_reference_delete_strategy: string;
  item_types: string[];
}

// Validators with no additional settings (required, unique)
export type Required = Record<string, never>;

export interface RequiredSEOFields {
  title: boolean;
  description: boolean;
  image: boolean;
  twitter_card: boolean;
}

export interface RichTextBlocks {
  item_types: string[];
}

export interface SlugFormat {
  predefined_pattern: string;
}

export interface SlugTitleField {
  title_field_id: string;
}

export interface IncludedRelationships {
  item_type: ExcerptField;
  fieldset: ExcerptField;
}
