/*eslint-disable*/
import { Inject, Injectable } from "@nestjs/common";
import { RepositoryUtil } from "src/Shared Modules/Repository/repositoryutil";
import { DataSource } from "typeorm";

@Injectable() 
export class SubscriptionsBillingService {
    constructor(
        @Inject('DATA_SOURCE') private readonly datasource: DataSource,
        private readonly repositoryUtil: RepositoryUtil
    ) {}

    async getBillingHistory() {
        
    }

    async makePayment(discount: number) {

    }
}


