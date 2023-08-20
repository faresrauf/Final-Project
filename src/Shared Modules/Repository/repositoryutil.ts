/*eslint-disable*/
import { Inject, Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

export class RepositoryUtil {
    constructor(
        @Inject('DATA_SOURCE') private readonly datasource: DataSource
    ) {}

    getRepository(entity) {
        return this.datasource.getRepository(entity);
    }
    
}