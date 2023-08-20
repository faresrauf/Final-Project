/*eslint-disable*/

import { Body, Controller, Get, Param, Query, Res } from "@nestjs/common";
import { MovieSearchService } from "./Services/moviesearch.service";
import { SearchOptionsDTO } from "./DTOs/SearchOptionsDTO";
import { Response } from "express";
import { PaginationOptionsDTO } from "../../Shared Modules/DTOs/PaginationOptionsDTO";

@Controller('movies')
export class MoviesController {
    constructor(
        private readonly searchEngine: MovieSearchService
    ) {}

    @Get()
    async searchMoviesBy(
        @Body() searchFilter: SearchOptionsDTO,
        @Query() paginationParameter: PaginationOptionsDTO,
        @Query('sort') sortField: string,
        @Query('order') sortOrder: string,
        @Res() res: Response
    ) {
        const result = await this.searchEngine
        .searchMovies(searchFilter, paginationParameter, sortField, sortOrder);
        res.status(200).json(result);
    }

    @Get(':id')
    async MovieViewDetails(
        @Param('id') id: number,
        @Res() res: Response
     ) {
        const result = await this.searchEngine
        .getMovieViewDetails(id);
        
        res.status(200).json(result);
    }
    
}