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

export interface ComponentHeroModelBodyField {
  __typename?: 'ComponentHeroModelBodyField';
  blocks: Array<Scalars['String']['output']>;
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
  mediaReference?: InputMaybe<LinkFilter>;
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
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  body?: Maybe<ComponentHeroModelBodyField>;
  eyebrow?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  internalName?: Maybe<Scalars['String']['output']>;
  mediaReference?: Maybe<MoleculeImageRecord>;
}


export interface ComponentHeroRecord_SeoMetaTagsArgs {
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
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC'
}

export interface ComponentSkillBarRecord extends RecordInterface {
  __typename?: 'ComponentSkillBarRecord';
  _createdAt: Scalars['DateTime']['output'];
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  internalName?: Maybe<Scalars['String']['output']>;
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
  faceindex?: InputMaybe<Scalars['IntType']['input']>;
  facepad?: InputMaybe<Scalars['FloatType']['input']>;
  faces?: InputMaybe<Scalars['IntType']['input']>;
  fill?: InputMaybe<ImgixParamsFill>;
  fillColor?: InputMaybe<Scalars['String']['input']>;
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
  loop?: InputMaybe<Scalars['IntType']['input']>;
  lossless?: InputMaybe<Scalars['BooleanType']['input']>;
  mark?: InputMaybe<Scalars['String']['input']>;
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
  markAlpha?: InputMaybe<Scalars['IntType']['input']>;
  markBase?: InputMaybe<Scalars['String']['input']>;
  markFit?: InputMaybe<ImgixParamsMarkFit>;
  markH?: InputMaybe<Scalars['FloatType']['input']>;
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
  rect?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['BooleanType']['input']>;
  rot?: InputMaybe<Scalars['FloatType']['input']>;
  sat?: InputMaybe<Scalars['IntType']['input']>;
  sepia?: InputMaybe<Scalars['IntType']['input']>;
  shad?: InputMaybe<Scalars['FloatType']['input']>;
  sharp?: InputMaybe<Scalars['FloatType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  transparency?: InputMaybe<ImgixParamsTransparency>;
  trim?: InputMaybe<ImgixParamsTrim>;
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
  txtLig?: InputMaybe<Scalars['IntType']['input']>;
  txtLine?: InputMaybe<Scalars['IntType']['input']>;
  txtLineColor?: InputMaybe<Scalars['String']['input']>;
  txtPad?: InputMaybe<Scalars['IntType']['input']>;
  txtShad?: InputMaybe<Scalars['FloatType']['input']>;
  txtSize?: InputMaybe<Scalars['IntType']['input']>;
  txtTrack?: InputMaybe<Scalars['IntType']['input']>;
  txtWidth?: InputMaybe<Scalars['IntType']['input']>;
  txtX?: InputMaybe<Scalars['IntType']['input']>;
  txtY?: InputMaybe<Scalars['IntType']['input']>;
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
  Srgb = 'srgb',
  Strip = 'strip',
  Tinysrgb = 'tinysrgb'
}

export enum ImgixParamsFill {
  Blur = 'blur',
  Solid = 'solid'
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

export enum ImgixParamsTransparency {
  Grid = 'grid'
}

export enum ImgixParamsTrim {
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

export interface LinkFilter {
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
}

export interface LinksFilter {
  allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
}

export interface MoleculeImageModelFilter {
  AND?: InputMaybe<Array<InputMaybe<MoleculeImageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MoleculeImageModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  internalName?: InputMaybe<StringFilter>;
}

export enum MoleculeImageModelOrderBy {
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

export interface MoleculeImageRecord extends RecordInterface {
  __typename?: 'MoleculeImageRecord';
  _createdAt: Scalars['DateTime']['output'];
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  internalName?: Maybe<Scalars['String']['output']>;
}


export interface MoleculeImageRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>;
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
  _allComponentSkillBarsMeta: CollectionMetadata;
  _allMoleculeImagesMeta: CollectionMetadata;
  _allTemplatePagesMeta: CollectionMetadata;
  _allUploadsMeta: CollectionMetadata;
  _site: Site;
  allComponentHeros: Array<ComponentHeroRecord>;
  allComponentSkillBars: Array<ComponentSkillBarRecord>;
  allMoleculeImages: Array<MoleculeImageRecord>;
  allTemplatePages: Array<TemplatePageRecord>;
  allUploads: Array<FileField>;
  componentHero?: Maybe<ComponentHeroRecord>;
  componentSkillBar?: Maybe<ComponentSkillBarRecord>;
  moleculeImage?: Maybe<MoleculeImageRecord>;
  templatePage?: Maybe<TemplatePageRecord>;
  upload?: Maybe<FileField>;
}


export interface Query_AllComponentHerosMetaArgs {
  filter?: InputMaybe<ComponentHeroModelFilter>;
  locale?: InputMaybe<SiteLocale>;
}


export interface Query_AllComponentSkillBarsMetaArgs {
  filter?: InputMaybe<ComponentSkillBarModelFilter>;
  locale?: InputMaybe<SiteLocale>;
}


export interface Query_AllMoleculeImagesMetaArgs {
  filter?: InputMaybe<MoleculeImageModelFilter>;
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


export interface QueryAllComponentSkillBarsArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ComponentSkillBarModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ComponentSkillBarModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}


export interface QueryAllMoleculeImagesArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MoleculeImageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MoleculeImageModelOrderBy>>>;
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


export interface QueryComponentHeroArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ComponentHeroModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ComponentHeroModelOrderBy>>>;
}


export interface QueryComponentSkillBarArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ComponentSkillBarModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ComponentSkillBarModelOrderBy>>>;
}


export interface QueryMoleculeImageArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MoleculeImageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MoleculeImageModelOrderBy>>>;
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
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
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

export interface SeoField {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<FileField>;
  title?: Maybe<Scalars['String']['output']>;
  twitterCard?: Maybe<Scalars['String']['output']>;
}

export interface SeoRecord extends RecordInterface {
  __typename?: 'SeoRecord';
  _createdAt: Scalars['DateTime']['output'];
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
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
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  logo?: Maybe<Scalars['String']['output']>;
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

export type TemplatePageModelComponentsField = ComponentHeroRecord | ComponentSkillBarRecord;

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
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
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
  duration?: Maybe<Scalars['Int']['output']>;
  framerate?: Maybe<Scalars['Int']['output']>;
  mp4Url?: Maybe<Scalars['String']['output']>;
  muxAssetId: Scalars['String']['output'];
  muxPlaybackId: Scalars['String']['output'];
  streamingUrl: Scalars['String']['output'];
  thumbnailUrl: Scalars['String']['output'];
}


export interface UploadVideoFieldMp4UrlArgs {
  exactRes?: InputMaybe<VideoMp4Res>;
  res?: InputMaybe<VideoMp4Res>;
}


export interface UploadVideoFieldThumbnailUrlArgs {
  format?: InputMaybe<MuxThumbnailFormatType>;
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
      export type FileFragment = { __typename?: 'FileField', id: string, alt?: string | null, blurhash?: string | null, height?: number | null, width?: number | null, url: string };

export type SeoFragment = { __typename?: 'SeoRecord', id: string, indexable?: boolean | null, canonicalUrl?: string | null, metaTags?: { __typename?: 'SeoField', title?: string | null, description?: string | null, image?: (
      { __typename?: 'FileField' }
      & FileFragment
    ) | null } | null };

export type TemplatePageFragment = { __typename?: 'TemplatePageRecord', id: string, slug?: string | null, seo: Array<(
    { __typename?: 'SeoRecord' }
    & SeoFragment
  )> };

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