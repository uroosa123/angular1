export class ProjectConfig
{
    perHourBilling:number;
    location:string;
    projectId:number;
    roleId:number;
    constructor(perHourBilling,location,projectId,roleId)
    {
        this.perHourBilling=perHourBilling;
        this.location=location;
        this.projectId=projectId;
        this.roleId=roleId;
    }
}