/* eslint-disable */
import { Module } from "@nestjs/common";
import { RepositoryUtil } from "src/Shared Modules/Repository/repositoryutil";
import { MoviesController } from "./movie.controller";
import { MovieSearchService } from "./Services/moviesearch.service";

@Module({
    providers: [RepositoryUtil, MovieSearchService],
    controllers: [MoviesController],
  })
  export class MoviesModule {}
  