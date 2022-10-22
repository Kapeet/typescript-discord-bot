import { User } from 'discord.js';
import { videoInfo } from 'ytdl-core';

export interface Command {
  data: any // since some commands will complain about type incompatibility if you add .addStringOption, i'll leave it as 'any' for now
  // TODO: fix this
}

export interface Song {
  url: string
  info: videoInfo
  requestingUser: User
}
