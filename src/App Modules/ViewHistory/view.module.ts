/* eslint-disable */
import { Module } from "@nestjs/common";
import { ViewService } from "./view.service";
import { ViewsController } from "./view.controller";
import { RepositoryUtil } from "src/Shared Modules/Repository/repositoryutil";
import { APP_GUARD } from "@nestjs/core";
import { SubscribedGuard } from "src/App Modules/ViewHistory/subscribed.guard";
import { SubscriptionsModule } from "../Subscriptions/subscriptions.module";
import { SubscriptionService } from "../Subscriptions/Services/subscriptions.service";

@Module({
    imports: [SubscriptionsModule],
    providers: [{
        provide: APP_GUARD,
        useClass: SubscribedGuard
    },RepositoryUtil, ViewService, SubscriptionService],
    controllers: [ViewsController],
  })
  export class ViewModule {}
  