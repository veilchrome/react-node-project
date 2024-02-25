import mongoose, { Schema, Document } from "mongoose";


interface BroadcastInfo {
  day?: string;
  time?: string;
  timezone?: string;
  string?: string;
}

interface ProducerInfo {
  mal_id?: string;
  type?: string;
  name?: string;
  url?: string;
}

interface ImageSchema {
  image_url?: string;
  small_image_url?: string;
  large_image_url?: string;
}

interface ImageInfoSchema {
  jpg?: ImageSchema;
  webp?: ImageSchema;
}

interface TrailerImageInfoSchema {
  image_url?: string;
  small_image_url?: string;
  medium_image_url?: string;
  maximum_image_url?: string;
}

interface TrailerInfoSchema {
  youtube_id?: string;
  url?: string; // Fixed typo here
  embed_url?: string;
  images?: TrailerImageInfoSchema;
}

export interface AnimeDocument extends Document {
  remove: any;
  mal_id: string;
  url: string;
  title: string;
  source: string;
  status: string;
  rating?: string;
  rank?: number;
  popularity?: number;
  broadcast?: BroadcastInfo;
  producers?: ProducerInfo[];
  images?: ImageInfoSchema;
  trailer?: TrailerInfoSchema;
}

const broadcastInfoSchema = new Schema<BroadcastInfo>({
  day: { type: String, required: false },
  time: { type: String, required: false },
  timezone: { type: String, required: false },
  string: { type: String, required: false },
});

const producerInfoSchema = new Schema<ProducerInfo>({
  mal_id: { type: String, required: false },
  type: { type: String, required: false },
  name: { type: String, required: false },
  url: { type: String, required: false },
});

const imageSchema = new Schema<ImageSchema>({
  image_url: { type: String, required: false },
  small_image_url: { type: String, required: false },
  large_image_url: { type: String, required: false },
});

const imageInfoSchema = new Schema<ImageInfoSchema>({
  jpg: { type: imageSchema, required: false },
  webp: { type: imageSchema, required: false },
});

const trailerImageInfoSchema = new Schema<TrailerImageInfoSchema>({
  image_url: { type: String, required: false },
  small_image_url: { type: String, required: false },
  medium_image_url: { type: String, required: false },
  // large_image_url: { type: String, required: false },
  maximum_image_url: { type: String, required: false },
});

const trailerInfoSchema = new Schema<TrailerInfoSchema>({
  youtube_id: { type: String, required: false },
  url: { type: String, required: false },
  embed_url: { type: String, required: false },
  images: trailerImageInfoSchema,
});

const animeSchema = new Schema<AnimeDocument>({
  mal_id: { type: String, required: true },
  url: { type: String, required: true },
  title: { type: String, required: true },
  source: { type: String, required: true },
  status: { type: String, required: true },
  rating: { type: String, required: false },
  rank: { type: Number, required: false },
  popularity: { type: Number, required: false },
  broadcast: broadcastInfoSchema,
  producers: [producerInfoSchema],
  images: imageInfoSchema,
  trailer: trailerInfoSchema,
});

const AnimeModel = mongoose.model<AnimeDocument>("Anime", animeSchema);

export default AnimeModel;
