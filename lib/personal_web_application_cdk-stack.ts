import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CustomerInfoTable } from './constructs/persistanceStack';

export class PersonalWebApplicationCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const customerInfo = new CustomerInfoTable(this, 'CustomerInfo');

    new cdk.CfnOutput(this, 'CustomerInfoTableName', {
      value: customerInfo.table.tableName,
    });
  }
}