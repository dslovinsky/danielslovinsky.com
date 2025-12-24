export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BooleanType: { input: boolean; output: boolean; }
  CustomData: { input: Record<string, unknown>; output: Record<string, unknown>; }
  DateTime: { input: string; output: string; }
  FloatType: { input: number; output: number; }
  IntType: { input: number; output: number; }
  ItemId: { input: string; output: string; }
  JsonField: { input: unknown; output: unknown; }
  MetaTagAttributes: { input: Record<string, string>; output: Record<string, string>; }
  UploadId: { input: string; output: string; }
}

export interface BooleanFilter {
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
}

export interface ButtonGroupRecord extends RecordInterface {
  __typename?: 'ButtonGroupRecord';
  _createdAt: Scalars['DateTime']['output'];
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  buttons: Array<ButtonRecord>;
  id: Scalars['ItemId']['output'];
}


export interface ButtonGroupRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>;
}

export interface ButtonRecord extends RecordInterface {
  __typename?: 'ButtonRecord';
  _createdAt: Scalars['DateTime']['output'];
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  endIcon?: Maybe<Scalars['String']['output']>;
  iconLabel?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  label?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
}


export interface ButtonRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>;
}

export interface CollectionMetadata {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType']['output'];
}

export enum ColorBucketType {
  Black = 'black',
  Blue = 'blue',
  Brown = 'brown',
  Cyan = 'cyan',
  Green = 'green',
  Grey = 'grey',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  White = 'white',
  Yellow = 'yellow'
}

export interface ColorField {
  __typename?: 'ColorField';
  alpha: Scalars['IntType']['output'];
  blue: Scalars['IntType']['output'];
  cssRgb: Scalars['String']['output'];
  green: Scalars['IntType']['output'];
  hex: Scalars['String']['output'];
  red: Scalars['IntType']['output'];
}

export interface ComponentContactModelBodyField {
  __typename?: 'ComponentContactModelBodyField';
  blocks: Array<ButtonGroupRecord>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
}

export interface ComponentContactRecord extends RecordInterface {
  __typename?: 'ComponentContactRecord';
  _createdAt: Scalars['DateTime']['output'];
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  body?: Maybe<ComponentContactModelBodyField>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  internalName?: Maybe<Scalars['String']['output']>;
  sectionOptions: Array<SectionRecord>;
}


export interface ComponentContactRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>;
}

export interface ComponentHeaderRecord extends RecordInterface {
  __typename?: 'ComponentHeaderRecord';
  _createdAt: Scalars['DateTime']['output'];
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  internalName?: Maybe<Scalars['String']['output']>;
  links: Array<ButtonRecord>;
  mobileBottomLinks: Array<ButtonRecord>;
}


export interface ComponentHeaderRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>;
}

export interface ComponentHeroModelBodyField {
  __typename?: 'ComponentHeroModelBodyField';
  blocks: Array<ButtonGroupRecord>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
}

export interface ComponentHeroModelFilter {
  AND?: InputMaybe<Array<InputMaybe<ComponentHeroModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentHeroModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  body?: InputMaybe<StructuredTextFilter>;
  eyebrow?: InputMaybe<StringFilter>;
  heading?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  internalName?: InputMaybe<StringFilter>;
  mediaReference?: InputMaybe<FileFilter>;
}

export enum ComponentHeroModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC'
}

export interface ComponentHeroRecord extends RecordInterface {
  __typename?: 'ComponentHeroRecord';
  _createdAt: Scalars['DateTime']['output'];
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  body?: Maybe<ComponentHeroModelBodyField>;
  eyebrow?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  internalName?: Maybe<Scalars['String']['output']>;
  mediaReference?: Maybe<FileField>;
  sectionOptions: Array<SectionRecord>;
}


export interface ComponentHeroRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>;
}

export interface ComponentProjectSliderModelFilter {
  AND?: InputMaybe<Array<InputMaybe<ComponentProjectSliderModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentProjectSliderModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  heading?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  internalName?: InputMaybe<StringFilter>;
}

export enum ComponentProjectSliderModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC'
}

export interface ComponentProjectSliderRecord extends RecordInterface {
  __typename?: 'ComponentProjectSliderRecord';
  _createdAt: Scalars['DateTime']['output'];
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  internalName?: Maybe<Scalars['String']['output']>;
  projects: Array<ProjectRecord>;
  sectionOptions: Array<SectionRecord>;
}


export interface ComponentProjectSliderRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>;
}

export interface ComponentSkillBarModelFilter {
  AND?: InputMaybe<Array<InputMaybe<ComponentSkillBarModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentSkillBarModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  heading?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  internalName?: InputMaybe<StringFilter>;
}

export enum ComponentSkillBarModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC'
}

export interface ComponentSkillBarRecord extends RecordInterface {
  __typename?: 'ComponentSkillBarRecord';
  _createdAt: Scalars['DateTime']['output'];
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  internalName?: Maybe<Scalars['String']['output']>;
  sectionOptions: Array<SectionRecord>;
  skills: Array<SkillRecord>;
}


export interface ComponentSkillBarRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>;
}

export interface CreatedAtFilter {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
}

export enum FaviconType {
  AppleTouchIcon = 'appleTouchIcon',
  Icon = 'icon',
  MsApplication = 'msApplication'
}

export interface FileField extends FileFieldInterface {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime']['output'];
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
}


export interface FileFieldAltArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
}


export interface FileFieldBlurUpThumbArgs {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
}


export interface FileFieldCustomDataArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
}


export interface FileFieldFocalPointArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
}


export interface FileFieldResponsiveImageArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
}


export interface FileFieldTitleArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
}


export interface FileFieldUrlArgs {
  imgixParams?: InputMaybe<ImgixParams>;
}

export interface FileFieldInterface {
  _createdAt: Scalars['DateTime']['output'];
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
}


export interface FileFieldInterfaceAltArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
}


export interface FileFieldInterfaceBlurUpThumbArgs {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
}


export interface FileFieldInterfaceCustomDataArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
}


export interface FileFieldInterfaceFocalPointArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
}


export interface FileFieldInterfaceResponsiveImageArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
}


export interface FileFieldInterfaceTitleArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
}


export interface FileFieldInterfaceUrlArgs {
  imgixParams?: InputMaybe<ImgixParams>;
}

export interface FileFilter {
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
}

export interface GlobalSeoField {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']['output']>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars['String']['output']>;
  titleSuffix?: Maybe<Scalars['String']['output']>;
  twitterAccount?: Maybe<Scalars['String']['output']>;
}

export interface ImgixParams {
  ar?: InputMaybe<Scalars['String']['input']>;
  auto?: InputMaybe<Array<ImgixParamsAuto>>;
  bg?: InputMaybe<Scalars['String']['input']>;
  bgRemove?: InputMaybe<Scalars['BooleanType']['input']>;
  bgRemoveFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  bgRemoveFgType?: InputMaybe<Array<ImgixParamsBgRemoveFgType>>;
  bgRemoveSemiTransparency?: InputMaybe<Scalars['BooleanType']['input']>;
  bgReplace?: InputMaybe<Scalars['String']['input']>;
  bgReplaceFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  bgReplaceNegPrompt?: InputMaybe<Scalars['String']['input']>;
  blend?: InputMaybe<Scalars['String']['input']>;
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
  blendAlpha?: InputMaybe<Scalars['IntType']['input']>;
  blendColor?: InputMaybe<Scalars['String']['input']>;
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
  blendFit?: InputMaybe<ImgixParamsBlendFit>;
  blendH?: InputMaybe<Scalars['FloatType']['input']>;
  blendMode?: InputMaybe<ImgixParamsBlendMode>;
  blendPad?: InputMaybe<Scalars['IntType']['input']>;
  blendSize?: InputMaybe<ImgixParamsBlendSize>;
  blendW?: InputMaybe<Scalars['FloatType']['input']>;
  blendX?: InputMaybe<Scalars['IntType']['input']>;
  blendY?: InputMaybe<Scalars['IntType']['input']>;
  blur?: InputMaybe<Scalars['IntType']['input']>;
  border?: InputMaybe<Scalars['String']['input']>;
  borderBottom?: InputMaybe<Scalars['IntType']['input']>;
  borderLeft?: InputMaybe<Scalars['IntType']['input']>;
  borderRadius?: InputMaybe<Scalars['String']['input']>;
  borderRadiusInner?: InputMaybe<Scalars['String']['input']>;
  borderRight?: InputMaybe<Scalars['IntType']['input']>;
  borderTop?: InputMaybe<Scalars['IntType']['input']>;
  bri?: InputMaybe<Scalars['IntType']['input']>;
  ch?: InputMaybe<Array<ImgixParamsCh>>;
  chromasub?: InputMaybe<Scalars['IntType']['input']>;
  colorquant?: InputMaybe<Scalars['IntType']['input']>;
  colors?: InputMaybe<Scalars['IntType']['input']>;
  con?: InputMaybe<Scalars['IntType']['input']>;
  cornerRadius?: InputMaybe<Scalars['String']['input']>;
  crop?: InputMaybe<Array<ImgixParamsCrop>>;
  cs?: InputMaybe<ImgixParamsCs>;
  dl?: InputMaybe<Scalars['String']['input']>;
  dpi?: InputMaybe<Scalars['IntType']['input']>;
  dpr?: InputMaybe<Scalars['FloatType']['input']>;
  duotone?: InputMaybe<Scalars['String']['input']>;
  duotoneAlpha?: InputMaybe<Scalars['IntType']['input']>;
  exp?: InputMaybe<Scalars['IntType']['input']>;
  expires?: InputMaybe<Scalars['IntType']['input']>;
  faceBlur?: InputMaybe<Scalars['IntType']['input']>;
  facePixel?: InputMaybe<Scalars['IntType']['input']>;
  faceindex?: InputMaybe<Scalars['IntType']['input']>;
  facepad?: InputMaybe<Scalars['FloatType']['input']>;
  faces?: InputMaybe<Scalars['IntType']['input']>;
  fill?: InputMaybe<ImgixParamsFill>;
  fillColor?: InputMaybe<Scalars['String']['input']>;
  fillGenFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  fillGenNegPrompt?: InputMaybe<Scalars['String']['input']>;
  fillGenPos?: InputMaybe<Array<ImgixParamsFillGenPos>>;
  fillGenPrompt?: InputMaybe<Scalars['String']['input']>;
  fillGenSeed?: InputMaybe<Scalars['IntType']['input']>;
  fillGradientCs?: InputMaybe<ImgixParamsFillGradientCs>;
  fillGradientLinear?: InputMaybe<Scalars['String']['input']>;
  fillGradientLinearDirection?: InputMaybe<Array<ImgixParamsFillGradientLinearDirection>>;
  fillGradientRadial?: InputMaybe<Scalars['String']['input']>;
  fillGradientRadialRadius?: InputMaybe<Scalars['String']['input']>;
  fillGradientRadialX?: InputMaybe<Scalars['FloatType']['input']>;
  fillGradientRadialY?: InputMaybe<Scalars['FloatType']['input']>;
  fillGradientType?: InputMaybe<ImgixParamsFillGradientType>;
  fit?: InputMaybe<ImgixParamsFit>;
  flip?: InputMaybe<ImgixParamsFlip>;
  fm?: InputMaybe<ImgixParamsFm>;
  fpDebug?: InputMaybe<Scalars['BooleanType']['input']>;
  fpX?: InputMaybe<Scalars['FloatType']['input']>;
  fpY?: InputMaybe<Scalars['FloatType']['input']>;
  fpZ?: InputMaybe<Scalars['FloatType']['input']>;
  fps?: InputMaybe<Scalars['IntType']['input']>;
  frame?: InputMaybe<Scalars['String']['input']>;
  gam?: InputMaybe<Scalars['IntType']['input']>;
  gifQ?: InputMaybe<Scalars['IntType']['input']>;
  gridColors?: InputMaybe<Scalars['String']['input']>;
  gridSize?: InputMaybe<Scalars['IntType']['input']>;
  h?: InputMaybe<Scalars['FloatType']['input']>;
  high?: InputMaybe<Scalars['IntType']['input']>;
  htn?: InputMaybe<Scalars['IntType']['input']>;
  hue?: InputMaybe<Scalars['IntType']['input']>;
  interval?: InputMaybe<Scalars['IntType']['input']>;
  invert?: InputMaybe<Scalars['BooleanType']['input']>;
  iptc?: InputMaybe<ImgixParamsIptc>;
  jpgProgressive?: InputMaybe<Scalars['BooleanType']['input']>;
  loop?: InputMaybe<Scalars['IntType']['input']>;
  lossless?: InputMaybe<Scalars['BooleanType']['input']>;
  lpBlur?: InputMaybe<Scalars['IntType']['input']>;
  mark?: InputMaybe<Scalars['String']['input']>;
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
  markAlpha?: InputMaybe<Scalars['IntType']['input']>;
  markBase?: InputMaybe<Scalars['String']['input']>;
  markFit?: InputMaybe<ImgixParamsMarkFit>;
  markH?: InputMaybe<Scalars['FloatType']['input']>;
  markIfMinHeight?: InputMaybe<Scalars['IntType']['input']>;
  markIfMinWidth?: InputMaybe<Scalars['IntType']['input']>;
  markPad?: InputMaybe<Scalars['IntType']['input']>;
  markRot?: InputMaybe<Scalars['FloatType']['input']>;
  markScale?: InputMaybe<Scalars['IntType']['input']>;
  markTile?: InputMaybe<ImgixParamsMarkTile>;
  markW?: InputMaybe<Scalars['FloatType']['input']>;
  markX?: InputMaybe<Scalars['IntType']['input']>;
  markY?: InputMaybe<Scalars['IntType']['input']>;
  mask?: InputMaybe<Scalars['String']['input']>;
  maskBg?: InputMaybe<Scalars['String']['input']>;
  maxH?: InputMaybe<Scalars['IntType']['input']>;
  maxW?: InputMaybe<Scalars['IntType']['input']>;
  minH?: InputMaybe<Scalars['IntType']['input']>;
  minW?: InputMaybe<Scalars['IntType']['input']>;
  monochrome?: InputMaybe<Scalars['String']['input']>;
  nr?: InputMaybe<Scalars['IntType']['input']>;
  nrs?: InputMaybe<Scalars['IntType']['input']>;
  objectRemovalNegativePrompt?: InputMaybe<Scalars['String']['input']>;
  objectRemovalPrompt?: InputMaybe<Scalars['String']['input']>;
  objectRemovalRect?: InputMaybe<Scalars['String']['input']>;
  objectRemovalSeed?: InputMaybe<Scalars['IntType']['input']>;
  orient?: InputMaybe<Scalars['IntType']['input']>;
  pad?: InputMaybe<Scalars['IntType']['input']>;
  padBottom?: InputMaybe<Scalars['IntType']['input']>;
  padLeft?: InputMaybe<Scalars['IntType']['input']>;
  padRight?: InputMaybe<Scalars['IntType']['input']>;
  padTop?: InputMaybe<Scalars['IntType']['input']>;
  page?: InputMaybe<Scalars['IntType']['input']>;
  palette?: InputMaybe<ImgixParamsPalette>;
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  px?: InputMaybe<Scalars['IntType']['input']>;
  q?: InputMaybe<Scalars['IntType']['input']>;
  rasterizeBypass?: InputMaybe<Scalars['BooleanType']['input']>;
  rect?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['BooleanType']['input']>;
  rot?: InputMaybe<Scalars['FloatType']['input']>;
  rotType?: InputMaybe<ImgixParamsRotType>;
  sat?: InputMaybe<Scalars['IntType']['input']>;
  sepia?: InputMaybe<Scalars['IntType']['input']>;
  shad?: InputMaybe<Scalars['FloatType']['input']>;
  sharp?: InputMaybe<Scalars['FloatType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  skipDefaultOptimizations?: InputMaybe<Scalars['BooleanType']['input']>;
  svgSanitize?: InputMaybe<Scalars['BooleanType']['input']>;
  transparency?: InputMaybe<ImgixParamsTransparency>;
  trim?: InputMaybe<ImgixParamsTrim>;
  trimAlpha?: InputMaybe<Scalars['FloatType']['input']>;
  trimColor?: InputMaybe<Scalars['String']['input']>;
  trimMd?: InputMaybe<Scalars['FloatType']['input']>;
  trimPad?: InputMaybe<Scalars['IntType']['input']>;
  trimSd?: InputMaybe<Scalars['FloatType']['input']>;
  trimTol?: InputMaybe<Scalars['FloatType']['input']>;
  txt?: InputMaybe<Scalars['String']['input']>;
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
  txtColor?: InputMaybe<Scalars['String']['input']>;
  txtFit?: InputMaybe<ImgixParamsTxtFit>;
  txtFont?: InputMaybe<Scalars['String']['input']>;
  txtLead?: InputMaybe<Scalars['IntType']['input']>;
  txtLine?: InputMaybe<Scalars['IntType']['input']>;
  txtLineColor?: InputMaybe<Scalars['String']['input']>;
  txtPad?: InputMaybe<Scalars['IntType']['input']>;
  txtShad?: InputMaybe<Scalars['FloatType']['input']>;
  txtSize?: InputMaybe<Scalars['IntType']['input']>;
  txtTrack?: InputMaybe<Scalars['IntType']['input']>;
  txtWidth?: InputMaybe<Scalars['IntType']['input']>;
  txtX?: InputMaybe<Scalars['IntType']['input']>;
  txtY?: InputMaybe<Scalars['IntType']['input']>;
  upscale?: InputMaybe<Scalars['BooleanType']['input']>;
  upscaleFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  usm?: InputMaybe<Scalars['IntType']['input']>;
  usmrad?: InputMaybe<Scalars['FloatType']['input']>;
  vib?: InputMaybe<Scalars['IntType']['input']>;
  w?: InputMaybe<Scalars['FloatType']['input']>;
}

export enum ImgixParamsAuto {
  Compress = 'compress',
  Enhance = 'enhance',
  Format = 'format',
  Redeye = 'redeye'
}

export enum ImgixParamsBgRemoveFgType {
  Auto = 'auto',
  Car = 'car'
}

export enum ImgixParamsBlendAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsBlendCrop {
  Bottom = 'bottom',
  Faces = 'faces',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsBlendFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Max = 'max',
  Scale = 'scale'
}

export enum ImgixParamsBlendMode {
  Burn = 'burn',
  Color = 'color',
  Darken = 'darken',
  Difference = 'difference',
  Dodge = 'dodge',
  Exclusion = 'exclusion',
  Hardlight = 'hardlight',
  Hue = 'hue',
  Lighten = 'lighten',
  Luminosity = 'luminosity',
  Multiply = 'multiply',
  Normal = 'normal',
  Overlay = 'overlay',
  Saturation = 'saturation',
  Screen = 'screen',
  Softlight = 'softlight'
}

export enum ImgixParamsBlendSize {
  Inherit = 'inherit'
}

export enum ImgixParamsCh {
  Dpr = 'dpr',
  SaveData = 'saveData',
  Width = 'width'
}

export enum ImgixParamsCrop {
  Bottom = 'bottom',
  Edges = 'edges',
  Entropy = 'entropy',
  Faces = 'faces',
  Focalpoint = 'focalpoint',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsCs {
  Adobergb1998 = 'adobergb1998',
  Origin = 'origin',
  Srgb = 'srgb',
  Strip = 'strip',
  Tinysrgb = 'tinysrgb'
}

export enum ImgixParamsFill {
  Blur = 'blur',
  Gen = 'gen',
  Generative = 'generative',
  Gradient = 'gradient',
  Solid = 'solid'
}

export enum ImgixParamsFillGenPos {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsFillGradientCs {
  Hsl = 'hsl',
  Lch = 'lch',
  Linear = 'linear',
  Oklab = 'oklab',
  Srgb = 'srgb'
}

export enum ImgixParamsFillGradientLinearDirection {
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsFillGradientType {
  Linear = 'linear',
  Radial = 'radial'
}

export enum ImgixParamsFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Facearea = 'facearea',
  Fill = 'fill',
  Fillmax = 'fillmax',
  Max = 'max',
  Min = 'min',
  Scale = 'scale'
}

export enum ImgixParamsFlip {
  H = 'h',
  Hv = 'hv',
  V = 'v'
}

export enum ImgixParamsFm {
  Avif = 'avif',
  Blurhash = 'blurhash',
  Gif = 'gif',
  Jp2 = 'jp2',
  Jpg = 'jpg',
  Json = 'json',
  Jxr = 'jxr',
  Mp4 = 'mp4',
  Pjpg = 'pjpg',
  Png = 'png',
  Png8 = 'png8',
  Png32 = 'png32',
  Webm = 'webm',
  Webp = 'webp'
}

export enum ImgixParamsIptc {
  Allow = 'allow',
  Block = 'block'
}

export enum ImgixParamsMarkAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsMarkFit {
  Clip = 'clip',
  Crop = 'crop',
  Fill = 'fill',
  Max = 'max',
  Scale = 'scale'
}

export enum ImgixParamsMarkTile {
  Grid = 'grid'
}

export enum ImgixParamsPalette {
  Css = 'css',
  Json = 'json'
}

export enum ImgixParamsRotType {
  Pivot = 'pivot',
  Straighten = 'straighten'
}

export enum ImgixParamsTransparency {
  Grid = 'grid'
}

export enum ImgixParamsTrim {
  Alpha = 'alpha',
  Auto = 'auto',
  Color = 'color'
}

export enum ImgixParamsTxtAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsTxtClip {
  Ellipsis = 'ellipsis',
  End = 'end',
  Middle = 'middle',
  Start = 'start'
}

export enum ImgixParamsTxtFit {
  Max = 'max'
}

export interface InUseFilter {
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
}

export interface ItemIdFilter {
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
}

export enum ItemStatus {
  Draft = 'draft',
  Published = 'published',
  Updated = 'updated'
}

export interface LinksFilter {
  allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
}

export enum MuxThumbnailFormatType {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png'
}

export interface OrientationFilter {
  eq?: InputMaybe<UploadOrientation>;
  neq?: InputMaybe<UploadOrientation>;
}

export interface ProjectModelSummaryField {
  __typename?: 'ProjectModelSummaryField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
}

export interface ProjectRecord extends RecordInterface {
  __typename?: 'ProjectRecord';
  _createdAt: Scalars['DateTime']['output'];
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  featuredImage?: Maybe<FileField>;
  id: Scalars['ItemId']['output'];
  link?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  skills: Array<SkillRecord>;
  summary?: Maybe<ProjectModelSummaryField>;
}


export interface ProjectRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>;
}

export interface PublishedAtFilter {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface Query {
  __typename?: 'Query';
  _allComponentHerosMeta: CollectionMetadata;
  _allComponentProjectSlidersMeta: CollectionMetadata;
  _allComponentSkillBarsMeta: CollectionMetadata;
  _allTemplateCaseStudiesMeta: CollectionMetadata;
  _allTemplatePagesMeta: CollectionMetadata;
  _allUploadsMeta: CollectionMetadata;
  _site: Site;
  allComponentHeros: Array<ComponentHeroRecord>;
  allComponentProjectSliders: Array<ComponentProjectSliderRecord>;
  allComponentSkillBars: Array<ComponentSkillBarRecord>;
  allTemplateCaseStudies: Array<TemplateCaseStudyRecord>;
  allTemplatePages: Array<TemplatePageRecord>;
  allUploads: Array<FileField>;
  componentContact?: Maybe<ComponentContactRecord>;
  componentHeader?: Maybe<ComponentHeaderRecord>;
  componentHero?: Maybe<ComponentHeroRecord>;
  componentProjectSlider?: Maybe<ComponentProjectSliderRecord>;
  componentSkillBar?: Maybe<ComponentSkillBarRecord>;
  templateCaseStudy?: Maybe<TemplateCaseStudyRecord>;
  templatePage?: Maybe<TemplatePageRecord>;
  upload?: Maybe<FileField>;
}


export interface Query_AllComponentHerosMetaArgs {
  filter?: InputMaybe<ComponentHeroModelFilter>;
  locale?: InputMaybe<SiteLocale>;
}


export interface Query_AllComponentProjectSlidersMetaArgs {
  filter?: InputMaybe<ComponentProjectSliderModelFilter>;
  locale?: InputMaybe<SiteLocale>;
}


export interface Query_AllComponentSkillBarsMetaArgs {
  filter?: InputMaybe<ComponentSkillBarModelFilter>;
  locale?: InputMaybe<SiteLocale>;
}


export interface Query_AllTemplateCaseStudiesMetaArgs {
  filter?: InputMaybe<TemplateCaseStudyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
}


export interface Query_AllTemplatePagesMetaArgs {
  filter?: InputMaybe<TemplatePageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
}


export interface Query_AllUploadsMetaArgs {
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
}


export interface Query_SiteArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
}


export interface QueryAllComponentHerosArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ComponentHeroModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ComponentHeroModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}


export interface QueryAllComponentProjectSlidersArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ComponentProjectSliderModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ComponentProjectSliderModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}


export interface QueryAllComponentSkillBarsArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ComponentSkillBarModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ComponentSkillBarModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}


export interface QueryAllTemplateCaseStudiesArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TemplateCaseStudyModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TemplateCaseStudyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}


export interface QueryAllTemplatePagesArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TemplatePageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TemplatePageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}


export interface QueryAllUploadsArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}


export interface QueryComponentContactArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
}


export interface QueryComponentHeaderArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
}


export interface QueryComponentHeroArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ComponentHeroModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ComponentHeroModelOrderBy>>>;
}


export interface QueryComponentProjectSliderArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ComponentProjectSliderModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ComponentProjectSliderModelOrderBy>>>;
}


export interface QueryComponentSkillBarArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ComponentSkillBarModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ComponentSkillBarModelOrderBy>>>;
}


export interface QueryTemplateCaseStudyArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TemplateCaseStudyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TemplateCaseStudyModelOrderBy>>>;
}


export interface QueryTemplatePageArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TemplatePageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TemplatePageModelOrderBy>>>;
}


export interface QueryUploadArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
}

export interface RecordInterface {
  _createdAt: Scalars['DateTime']['output'];
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
}


export interface RecordInterface_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>;
}

export interface ResolutionFilter {
  eq?: InputMaybe<ResolutionType>;
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  neq?: InputMaybe<ResolutionType>;
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
}

export enum ResolutionType {
  Icon = 'icon',
  Large = 'large',
  Medium = 'medium',
  Small = 'small'
}

export interface ResponsiveImage {
  __typename?: 'ResponsiveImage';
  alt?: Maybe<Scalars['String']['output']>;
  aspectRatio: Scalars['FloatType']['output'];
  base64?: Maybe<Scalars['String']['output']>;
  bgColor?: Maybe<Scalars['String']['output']>;
  height: Scalars['IntType']['output'];
  sizes: Scalars['String']['output'];
  src: Scalars['String']['output'];
  srcSet: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  webpSrcSet: Scalars['String']['output'];
  width: Scalars['IntType']['output'];
}

export interface SectionRecord extends RecordInterface {
  __typename?: 'SectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  bottomPadding?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  idLink?: Maybe<Scalars['String']['output']>;
  topPadding?: Maybe<Scalars['String']['output']>;
}


export interface SectionRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>;
}

export interface SeoField {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<FileField>;
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  twitterCard?: Maybe<Scalars['String']['output']>;
}

export interface SeoRecord extends RecordInterface {
  __typename?: 'SeoRecord';
  _createdAt: Scalars['DateTime']['output'];
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  indexable?: Maybe<Scalars['BooleanType']['output']>;
  metaTags?: Maybe<SeoField>;
}


export interface SeoRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>;
}

export interface Site {
  __typename?: 'Site';
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
}


export interface SiteFaviconMetaTagsArgs {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
}


export interface SiteGlobalSeoArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
}

export enum SiteLocale {
  En = 'en'
}

export interface SkillRecord extends RecordInterface {
  __typename?: 'SkillRecord';
  _createdAt: Scalars['DateTime']['output'];
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  logo?: Maybe<FileField>;
  name?: Maybe<Scalars['String']['output']>;
}


export interface SkillRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>;
}

export interface SlugFilter {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface StatusFilter {
  eq?: InputMaybe<ItemStatus>;
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  neq?: InputMaybe<ItemStatus>;
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
}

export interface StringFilter {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  matches?: InputMaybe<StringMatchesFilter>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notMatches?: InputMaybe<StringMatchesFilter>;
}

export interface StringMatchesFilter {
  caseSensitive?: InputMaybe<Scalars['BooleanType']['input']>;
  pattern: Scalars['String']['input'];
  regexp?: InputMaybe<Scalars['BooleanType']['input']>;
}

export interface StructuredTextFilter {
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  matches?: InputMaybe<StringMatchesFilter>;
  notMatches?: InputMaybe<StringMatchesFilter>;
}

export interface Tag {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  tag: Scalars['String']['output'];
}

export interface TemplateCaseStudyModelBodyField {
  __typename?: 'TemplateCaseStudyModelBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
}

export interface TemplateCaseStudyModelFilter {
  AND?: InputMaybe<Array<InputMaybe<TemplateCaseStudyModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TemplateCaseStudyModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  body?: InputMaybe<StructuredTextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  summary?: InputMaybe<StructuredTextFilter>;
  title?: InputMaybe<StringFilter>;
}

export enum TemplateCaseStudyModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export interface TemplateCaseStudyModelSummaryField {
  __typename?: 'TemplateCaseStudyModelSummaryField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
}

export interface TemplateCaseStudyRecord extends RecordInterface {
  __typename?: 'TemplateCaseStudyRecord';
  _createdAt: Scalars['DateTime']['output'];
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  body?: Maybe<TemplateCaseStudyModelBodyField>;
  id: Scalars['ItemId']['output'];
  seo: Array<SeoRecord>;
  skills: Array<SkillRecord>;
  slug?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<TemplateCaseStudyModelSummaryField>;
  title?: Maybe<Scalars['String']['output']>;
}


export interface TemplateCaseStudyRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>;
}

export type TemplatePageModelComponentsField = ComponentContactRecord | ComponentHeroRecord | ComponentProjectSliderRecord | ComponentSkillBarRecord;

export interface TemplatePageModelFilter {
  AND?: InputMaybe<Array<InputMaybe<TemplatePageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TemplatePageModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  components?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  internalName?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
}

export enum TemplatePageModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC'
}

export interface TemplatePageRecord extends RecordInterface {
  __typename?: 'TemplatePageRecord';
  _createdAt: Scalars['DateTime']['output'];
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  components: Array<TemplatePageModelComponentsField>;
  id: Scalars['ItemId']['output'];
  internalName?: Maybe<Scalars['String']['output']>;
  seo: Array<SeoRecord>;
  slug?: Maybe<Scalars['String']['output']>;
}


export interface TemplatePageRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>;
}

export interface TypeFilter {
  eq?: InputMaybe<UploadType>;
  in?: InputMaybe<Array<InputMaybe<UploadType>>>;
  neq?: InputMaybe<UploadType>;
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>;
}

export interface UpdatedAtFilter {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface UploadAltFilter {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  matches?: InputMaybe<StringMatchesFilter>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notMatches?: InputMaybe<StringMatchesFilter>;
}

export interface UploadAuthorFilter {
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  matches?: InputMaybe<StringMatchesFilter>;
  notMatches?: InputMaybe<StringMatchesFilter>;
}

export interface UploadBasenameFilter {
  matches?: InputMaybe<StringMatchesFilter>;
  notMatches?: InputMaybe<StringMatchesFilter>;
}

export interface UploadColorsFilter {
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  contains?: InputMaybe<ColorBucketType>;
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
}

export interface UploadCopyrightFilter {
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  matches?: InputMaybe<StringMatchesFilter>;
  notMatches?: InputMaybe<StringMatchesFilter>;
}

export interface UploadCreatedAtFilter {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface UploadFilenameFilter {
  matches?: InputMaybe<StringMatchesFilter>;
  notMatches?: InputMaybe<StringMatchesFilter>;
}

export interface UploadFilter {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  _createdAt?: InputMaybe<UploadCreatedAtFilter>;
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>;
  alt?: InputMaybe<UploadAltFilter>;
  author?: InputMaybe<UploadAuthorFilter>;
  basename?: InputMaybe<UploadBasenameFilter>;
  colors?: InputMaybe<UploadColorsFilter>;
  copyright?: InputMaybe<UploadCopyrightFilter>;
  filename?: InputMaybe<UploadFilenameFilter>;
  format?: InputMaybe<UploadFormatFilter>;
  height?: InputMaybe<UploadHeightFilter>;
  id?: InputMaybe<UploadIdFilter>;
  inUse?: InputMaybe<InUseFilter>;
  md5?: InputMaybe<UploadMd5Filter>;
  mimeType?: InputMaybe<UploadMimeTypeFilter>;
  notes?: InputMaybe<UploadNotesFilter>;
  orientation?: InputMaybe<OrientationFilter>;
  path?: InputMaybe<UploadPathFilter>;
  resolution?: InputMaybe<ResolutionFilter>;
  size?: InputMaybe<UploadSizeFilter>;
  smartTags?: InputMaybe<UploadTagsFilter>;
  tags?: InputMaybe<UploadTagsFilter>;
  title?: InputMaybe<UploadTitleFilter>;
  type?: InputMaybe<TypeFilter>;
  width?: InputMaybe<UploadWidthFilter>;
}

export interface UploadFormatFilter {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface UploadHeightFilter {
  eq?: InputMaybe<Scalars['IntType']['input']>;
  gt?: InputMaybe<Scalars['IntType']['input']>;
  gte?: InputMaybe<Scalars['IntType']['input']>;
  lt?: InputMaybe<Scalars['IntType']['input']>;
  lte?: InputMaybe<Scalars['IntType']['input']>;
  neq?: InputMaybe<Scalars['IntType']['input']>;
}

export interface UploadIdFilter {
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
}

export interface UploadMd5Filter {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface UploadMimeTypeFilter {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  matches?: InputMaybe<StringMatchesFilter>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notMatches?: InputMaybe<StringMatchesFilter>;
}

export interface UploadNotesFilter {
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  matches?: InputMaybe<StringMatchesFilter>;
  notMatches?: InputMaybe<StringMatchesFilter>;
}

export enum UploadOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BasenameAsc = 'basename_ASC',
  BasenameDesc = 'basename_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  ResolutionAsc = 'resolution_ASC',
  ResolutionDesc = 'resolution_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC'
}

export enum UploadOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square'
}

export interface UploadPathFilter {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface UploadSizeFilter {
  eq?: InputMaybe<Scalars['IntType']['input']>;
  gt?: InputMaybe<Scalars['IntType']['input']>;
  gte?: InputMaybe<Scalars['IntType']['input']>;
  lt?: InputMaybe<Scalars['IntType']['input']>;
  lte?: InputMaybe<Scalars['IntType']['input']>;
  neq?: InputMaybe<Scalars['IntType']['input']>;
}

export interface UploadTagsFilter {
  allIn?: InputMaybe<Array<Scalars['String']['input']>>;
  anyIn?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
}

export interface UploadTitleFilter {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  matches?: InputMaybe<StringMatchesFilter>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notMatches?: InputMaybe<StringMatchesFilter>;
}

export enum UploadType {
  Archive = 'archive',
  Audio = 'audio',
  Image = 'image',
  Pdfdocument = 'pdfdocument',
  Presentation = 'presentation',
  Richtext = 'richtext',
  Spreadsheet = 'spreadsheet',
  Video = 'video'
}

export interface UploadUpdatedAtFilter {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface UploadVideoField {
  __typename?: 'UploadVideoField';
  alt?: Maybe<Scalars['String']['output']>;
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  framerate?: Maybe<Scalars['Int']['output']>;
  height: Scalars['IntType']['output'];
  mp4Url?: Maybe<Scalars['String']['output']>;
  muxAssetId: Scalars['String']['output'];
  muxPlaybackId: Scalars['String']['output'];
  streamingUrl: Scalars['String']['output'];
  thumbhash?: Maybe<Scalars['String']['output']>;
  thumbnailUrl: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  width: Scalars['IntType']['output'];
}


export interface UploadVideoFieldAltArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
}


export interface UploadVideoFieldBlurUpThumbArgs {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
}


export interface UploadVideoFieldMp4UrlArgs {
  exactRes?: InputMaybe<VideoMp4Res>;
  res?: InputMaybe<VideoMp4Res>;
}


export interface UploadVideoFieldThumbnailUrlArgs {
  format?: InputMaybe<MuxThumbnailFormatType>;
}


export interface UploadVideoFieldTitleArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
}

export interface UploadWidthFilter {
  eq?: InputMaybe<Scalars['IntType']['input']>;
  gt?: InputMaybe<Scalars['IntType']['input']>;
  gte?: InputMaybe<Scalars['IntType']['input']>;
  lt?: InputMaybe<Scalars['IntType']['input']>;
  lte?: InputMaybe<Scalars['IntType']['input']>;
  neq?: InputMaybe<Scalars['IntType']['input']>;
}

export enum VideoMp4Res {
  High = 'high',
  Low = 'low',
  Medium = 'medium'
}

export interface FocalPoint {
  __typename?: 'focalPoint';
  x: Scalars['FloatType']['output'];
  y: Scalars['FloatType']['output'];
}


    declare global {
      export type ComponentContactFragment = { __typename: 'ComponentContactRecord', id: string, heading?: string | null, sectionOptions: Array<(
    { __typename?: 'SectionRecord' }
    & SectionFragment
  )>, body?: { __typename?: 'ComponentContactModelBodyField', value: unknown, blocks: Array<(
      { __typename?: 'ButtonGroupRecord' }
      & ButtonGroupFragment
    )> } | null };

export type HeaderFragment = { __typename: 'ComponentHeaderRecord', id: string, links: Array<(
    { __typename?: 'ButtonRecord' }
    & ButtonFragment
  )>, mobileBottomLinks: Array<(
    { __typename?: 'ButtonRecord' }
    & ButtonFragment
  )> };

export type GlobalHeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type GlobalHeaderQuery = { __typename?: 'Query', componentHeader?: (
    { __typename?: 'ComponentHeaderRecord' }
    & HeaderFragment
  ) | null };

export type ComponentHeroFragment = { __typename: 'ComponentHeroRecord', id: string, eyebrow?: string | null, heading?: string | null, sectionOptions: Array<(
    { __typename?: 'SectionRecord' }
    & SectionFragment
  )>, body?: { __typename?: 'ComponentHeroModelBodyField', value: unknown, blocks: Array<(
      { __typename?: 'ButtonGroupRecord' }
      & ButtonGroupFragment
    )> } | null, mediaReference?: (
    { __typename?: 'FileField' }
    & FileFragment
  ) | null };

export type ProjectFragment = { __typename: 'ProjectRecord', id: string, name?: string | null, link?: string | null, featuredImage?: (
    { __typename?: 'FileField' }
    & FileFragment
  ) | null, skills: Array<(
    { __typename?: 'SkillRecord' }
    & SkillFragment
  )>, summary?: { __typename?: 'ProjectModelSummaryField', value: unknown } | null };

export type ComponentProjectSliderFragment = { __typename: 'ComponentProjectSliderRecord', id: string, heading?: string | null, sectionOptions: Array<(
    { __typename?: 'SectionRecord' }
    & SectionFragment
  )>, projects: Array<(
    { __typename?: 'ProjectRecord' }
    & ProjectFragment
  )> };

export type SkillFragment = { __typename: 'SkillRecord', id: string, name?: string | null, logo?: (
    { __typename?: 'FileField' }
    & FileFragment
  ) | null };

export type ComponentSkillBarFragment = { __typename: 'ComponentSkillBarRecord', id: string, heading?: string | null, skills: Array<(
    { __typename?: 'SkillRecord' }
    & SkillFragment
  )>, sectionOptions: Array<(
    { __typename?: 'SectionRecord' }
    & SectionFragment
  )> };

export type FileFragment = { __typename: 'FileField', id: string, alt?: string | null, height?: number | null, width?: number | null, url: string };

export type SeoFragment = { __typename: 'SeoRecord', id: string, indexable?: boolean | null, canonicalUrl?: string | null, metaTags?: { __typename?: 'SeoField', title?: string | null, description?: string | null, image?: (
      { __typename?: 'FileField' }
      & FileFragment
    ) | null } | null };

export type ButtonFragment = { __typename: 'ButtonRecord', id: string, url?: string | null, label?: string | null, iconLabel?: string | null, endIcon?: string | null };

export type ButtonGroupFragment = { __typename: 'ButtonGroupRecord', id: string, buttons: Array<(
    { __typename?: 'ButtonRecord' }
    & ButtonFragment
  )> };

export type SectionFragment = { __typename: 'SectionRecord', id: string, idLink?: string | null, topPadding?: string | null, bottomPadding?: string | null };

export type TemplatePageFragment = { __typename: 'TemplatePageRecord', id: string, slug?: string | null, seo: Array<(
    { __typename?: 'SeoRecord' }
    & SeoFragment
  )>, components: Array<
    | (
      { __typename?: 'ComponentContactRecord' }
      & ComponentContactFragment
    )
    | (
      { __typename?: 'ComponentHeroRecord' }
      & ComponentHeroFragment
    )
    | (
      { __typename?: 'ComponentProjectSliderRecord' }
      & ComponentProjectSliderFragment
    )
    | (
      { __typename?: 'ComponentSkillBarRecord' }
      & ComponentSkillBarFragment
    )
  > };

export type AllTemplatePageSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTemplatePageSlugsQuery = { __typename?: 'Query', allTemplatePages: Array<{ __typename?: 'TemplatePageRecord', slug?: string | null }> };

export type TemplatePageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type TemplatePageQuery = { __typename?: 'Query', templatePage?: (
    { __typename?: 'TemplatePageRecord' }
    & TemplatePageFragment
  ) | null };

    }