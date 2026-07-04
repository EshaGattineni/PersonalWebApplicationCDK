import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ITable } from 'aws-cdk-lib/aws-dynamodb';
import { CustomerInfoTable } from '../constructs/customer-info-table';

interface PersistenceStackProps extends cdk.StackProps {
    stageName: string;
}

export class PersistenceStack extends cdk.Stack {
    // expose the table so OTHER stacks (e.g. a future compute stack) can reference it
    public readonly customerInfoTable: ITable;

    constructor(scope: Construct, id: string, props: PersistenceStackProps) {
        super(scope, id, props);

        const customerInfo = new CustomerInfoTable(this, 'CustomerInfo', {
            stageName: props.stageName,
        });
        this.customerInfoTable = customerInfo.table;

        new cdk.CfnOutput(this, 'CustomerInfoTableName', {
            value: customerInfo.table.tableName,
        });
    }
}