import { Injectable } from "@angular/core";
import { TablesService } from 'src/tables/services/tables.service';

@Injectable()
export class GeneralTableService {

    constructor(private tableService: TablesService){}

    get generalData() {
        return this.tableService.personCarData;
    }
}