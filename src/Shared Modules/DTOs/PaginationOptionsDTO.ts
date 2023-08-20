/*eslint-disable*/
import { IsNumber, IsOptional, Max, Min } from "class-validator";

export class PaginationOptionsDTO {
    items?: number;
    page?: number;
}